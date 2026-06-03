
if (typeof gdjs.evtsExt__Autenticador2FA__ValidarChave !== "undefined") {
  gdjs.evtsExt__Autenticador2FA__ValidarChave.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Autenticador2FA__ValidarChave = {};
gdjs.evtsExt__Autenticador2FA__ValidarChave.idToCallbackMap = new Map();


gdjs.evtsExt__Autenticador2FA__ValidarChave.userFunc0xd46110 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// === MOTOR CRIPTOGRÁFICO LOCAL COMPLETO HMAC-SHA1 (RFC 2104 / RFC 6238) ===
const TOTP_Offline_Engine = {
    // Converte a chave Base32 alfanumérica em um array de inteiros de 8 bits (Bytes)
    base32ToBytes: function(base32) {
        const b32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        let bits = "";
        for (let i = 0; i < base32.length; i++) {
            let val = b32chars.indexOf(base32.charAt(i).toUpperCase());
            if (val === -1) continue;
            bits += val.toString(2).padStart(5, '0');
        }
        let bytes = [];
        for (let i = 0; i + 8 <= bits.length; i += 8) {
            bytes.push(parseInt(bits.substr(i, 8), 2));
        }
        return bytes;
    },

    // Operações bitwise seguras de 32 bits para JavaScript
    safe_add: function(x, y) {
        let lsw = (x & 0xFFFF) + (y & 0xFFFF);
        let msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    },
    rol: function(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); },

    // Implementação matemática nativa do algoritmo de Hash SHA-1
    sha1_raw: function(bin) {
        let W = new Array(80);
        let a =  1732584193, b = -271733879, c = -1732584194, d =  271733878, e = -1009589776;

        for (let i = 0; i < bin.length; i += 16) {
            let olda = a, oldb = b, oldc = c, oldd = d, olde = e;

            for (let j = 0; j < 80; j++) {
                if (j < 16) W[j] = bin[i + j] || 0;
                else W[j] = this.rol(W[j - 3] ^ W[j - 8] ^ W[j - 14] ^ W[j - 16], 1);

                let f = (j < 20) ? (b & c) | ((~b) & d) : (j < 40) ? b ^ c ^ d : (j < 60) ? (b & c) | (b & d) | (c & d) : b ^ c ^ d;
                let k = (j < 20) ? 1518500249 : (j < 40) ? 1859775393 : (j < 60) ? -1894007588 : -899497514;

                let t = this.safe_add(this.safe_add(this.rol(a, 5), f), this.safe_add(this.safe_add(e, W[j]), k));
                e = d; d = c; c = this.rol(b, 30); b = a; a = t;
            }
            a = this.safe_add(a, olda); b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc); d = this.safe_add(d, oldd);
            e = this.safe_add(e, olde);
        }
        return [a, b, c, d, e];
    },

    // Algoritmo oficial HMAC (Hash-based Message Authentication Code)
    hmac_sha1: function(keyBytes, msgBytes) {
        let keyWords = [];
        for (let i = 0; i < 64; i++) {
            keyWords[i >> 2] |= ((i < keyBytes.length ? keyBytes[i] : 0) & 0xFF) << (24 - (i % 4) * 8);
        }

        let ipad = [], opad = [];
        for (let i = 0; i < 16; i++) {
            ipad[i] = keyWords[i] ^ 0x36363636;
            opad[i] = keyWords[i] ^ 0x5C5C5C5C;
        }

        let msgWords = [];
        for (let i = 0; i < msgBytes.length; i++) {
            msgWords[i >> 2] |= (msgBytes[i] & 0xFF) << (24 - (i % 4) * 8);
        }

        let innerWords = ipad.concat(msgWords);
        // Adiciona o padding de tamanho da mensagem interna
        innerWords[innerWords.length] = 0x80000000;
        let innerLenWords = ((innerWords.length + 2) >> 4) + 1;
        let innerBlock = new Array(innerLenWords * 16).fill(0);
        for(let i=0; i<innerWords.length; i++) innerBlock[i] = innerWords[i];
        innerBlock[(innerLenWords * 16) - 1] = (64 + msgBytes.length) * 8;

        let innerHash = this.sha1_raw(innerBlock);

        let outerWords = opad.concat(innerHash);
        outerWords[outerWords.length] = 0x80000000;
        let outerBlock = new Array(32).fill(0);
        for(let i=0; i<outerWords.length; i++) outerBlock[i] = outerWords[i];
        outerBlock[31] = (64 + 20) * 8;

        let outerHash = this.sha1_raw(outerBlock);

        let resultBytes = [];
        for (let i = 0; i < 20; i++) {
            resultBytes.push((outerHash[i >> 2] >> (24 - (i % 4) * 8)) & 0xFF);
        }
        return resultBytes;
    },

    // Retorna os 6 dígitos perfeitamente alinhados com o Google Authenticator
    getOTP: function(secretStr, timeStep) {
        try {
            const keyBytes = this.base32ToBytes(secretStr);
            let msgBytes = new Array(8).fill(0);
            let tempTime = timeStep;
            for (let i = 7; i >= 0; i--) {
                msgBytes[i] = tempTime & 0xFF;
                tempTime = Math.floor(tempTime / 256);
            }
            const hmacResult = this.hmac_sha1(keyBytes, msgBytes);
            let offset = hmacResult[hmacResult.length - 1] & 0x0F;
            let binary = ((hmacResult[offset] & 0x7F) << 24) |
                         ((hmacResult[offset + 1] & 0xFF) << 16) |
                         ((hmacResult[offset + 2] & 0xFF) << 8) |
                         (hmacResult[offset + 3] & 0xFF);
            return String(binary % 1000000).padStart(6, '0');
        } catch (e) { return "000000"; }
    }
};

// 1. Resgata e padroniza as variáveis de texto vindas do GDevelop
const secretGlobal = String(eventsFunctionContext.getArgument("SegredoSalvo")).trim().replace(/\s/g, "").toUpperCase();
const codigoDigitado = String(eventsFunctionContext.getArgument("CodigoDigitado")).trim().replace(/\s/g, "");

let resultado = false;

if (secretGlobal && codigoDigitado.length === 6) {
    const epoch = Math.floor(new Date().getTime() / 1000.0);
    const passoTempoAtual = Math.floor(epoch / 30);

    // Gera o token matemático oficial sincronizado por tempo (Janelas: Anterior, Atual, Próxima)
    const tokenAtual = TOTP_Offline_Engine.getOTP(secretGlobal, passoTempoAtual);
    const tokenAnterior = TOTP_Offline_Engine.getOTP(secretGlobal, passoTempoAtual - 1);
    const tokenProximo = TOTP_Offline_Engine.getOTP(secretGlobal, passoTempoAtual + 1);

    console.log("Tokens calculados localmente:", [tokenAnterior, tokenAtual, tokenProximo]);

    if (codigoDigitado === tokenAtual || codigoDigitado === tokenAnterior || codigoDigitado === tokenProximo) {
        console.log("✅ CÓDIGO PERFEITO! AUTENTICADO.");
        resultado = true;
    } else {
        console.warn("❌ CÓDIGO INCORRETO.");
        resultado = false;
    }
} else {
    console.error("Erro: Dados ausentes ou formato incorreto.");
}

// 2. Envia a resposta Booleana síncrona diretamente para o GDevelop
eventsFunctionContext.returnValue = resultado;

};
gdjs.evtsExt__Autenticador2FA__ValidarChave.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Autenticador2FA__ValidarChave.userFunc0xd46110(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Autenticador2FA__ValidarChave.func = function(runtimeScene, SegredoSalvo, CodigoDigitado, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Autenticador2FA"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Autenticador2FA"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SegredoSalvo") return SegredoSalvo;
if (argName === "CodigoDigitado") return CodigoDigitado;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Autenticador2FA__ValidarChave.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Autenticador2FA__ValidarChave.registeredGdjsCallbacks = [];