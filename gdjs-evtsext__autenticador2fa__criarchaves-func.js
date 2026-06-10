
if (typeof gdjs.evtsExt__Autenticador2FA__CriarChaves !== "undefined") {
  gdjs.evtsExt__Autenticador2FA__CriarChaves.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Autenticador2FA__CriarChaves = {};
gdjs.evtsExt__Autenticador2FA__CriarChaves.idToCallbackMap = new Map();


gdjs.evtsExt__Autenticador2FA__CriarChaves.userFunc0x9d0318 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!window.jsOTP_Oficial) {
    // Injeta a biblioteca criptográfica padrão de mercado direto na memória do jogo
    let s=document.createElement("script");s.src="https://cloudflare.com";
    s.onload=function(){window.jsOTP_Oficial=new jsOTP.totp();};document.head.appendChild(s);
}

// Gera o segredo Base32 estável
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
let secret = '';
for (let i = 0; i < 16; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
}

const gameName = eventsFunctionContext.getArgument("NomeDoJogo") || "MeuJogo";
const idJogador = eventsFunctionContext.getArgument("IdJogador");
const senhaCriptografada = eventsFunctionContext.getArgument("SenhaHash");

const objetoDados = { id: idJogador, passwordHash: senhaCriptografada };
const jsonString = JSON.stringify(objetoDados);
const base64Data = btoa(unescape(encodeURIComponent(jsonString)));

const otpauth = `otpauth://totp/${encodeURIComponent(gameName)}?secret=${secret}`;

const urlMontada = ["https://", "quickchart.io", "/qr", "?text=", encodeURIComponent(otpauth), "&size=250"];
const qrCodeUrl = urlMontada.join('');

const varSegredo = eventsFunctionContext.getArgument("VariavelSegredo");
const varQR = eventsFunctionContext.getArgument("VariavelQRCode");

if (varSegredo) varSegredo.setString(String(secret));
if (varQR) varQR.setString(String(qrCodeUrl));

};
gdjs.evtsExt__Autenticador2FA__CriarChaves.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Autenticador2FA__CriarChaves.userFunc0x9d0318(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Autenticador2FA__CriarChaves.func = function(runtimeScene, NomeDoJogo, IdJogador, SenhaHash, VariavelSegredo, VariavelQRCode, parentEventsFunctionContext) {
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
if (argName === "NomeDoJogo") return NomeDoJogo;
if (argName === "IdJogador") return IdJogador;
if (argName === "SenhaHash") return SenhaHash;
if (argName === "VariavelSegredo") return VariavelSegredo;
if (argName === "VariavelQRCode") return VariavelQRCode;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Autenticador2FA__CriarChaves.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Autenticador2FA__CriarChaves.registeredGdjsCallbacks = [];