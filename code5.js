gdjs.Admin_32MenuCode = {};
gdjs.Admin_32MenuCode.localVariables = [];
gdjs.Admin_32MenuCode.idToCallbackMap = new Map();
gdjs.Admin_32MenuCode.GDBackgroundObjects1= [];
gdjs.Admin_32MenuCode.GDBackgroundObjects2= [];
gdjs.Admin_32MenuCode.GDBackgroundObjects3= [];
gdjs.Admin_32MenuCode.GDBackground2Objects1= [];
gdjs.Admin_32MenuCode.GDBackground2Objects2= [];
gdjs.Admin_32MenuCode.GDBackground2Objects3= [];
gdjs.Admin_32MenuCode.GDTitleObjects1= [];
gdjs.Admin_32MenuCode.GDTitleObjects2= [];
gdjs.Admin_32MenuCode.GDTitleObjects3= [];
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1= [];
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2= [];
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects3= [];
gdjs.Admin_32MenuCode.GDNameObjects1= [];
gdjs.Admin_32MenuCode.GDNameObjects2= [];
gdjs.Admin_32MenuCode.GDNameObjects3= [];
gdjs.Admin_32MenuCode.GDPasswordObjects1= [];
gdjs.Admin_32MenuCode.GDPasswordObjects2= [];
gdjs.Admin_32MenuCode.GDPasswordObjects3= [];
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1= [];
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects2= [];
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects3= [];
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects1= [];
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects2= [];
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects3= [];
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects1= [];
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects2= [];
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects3= [];
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects3= [];
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects3= [];
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects3= [];
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects3= [];
gdjs.Admin_32MenuCode.GDCriarObjects1= [];
gdjs.Admin_32MenuCode.GDCriarObjects2= [];
gdjs.Admin_32MenuCode.GDCriarObjects3= [];
gdjs.Admin_32MenuCode.GDNomeObjects1= [];
gdjs.Admin_32MenuCode.GDNomeObjects2= [];
gdjs.Admin_32MenuCode.GDNomeObjects3= [];
gdjs.Admin_32MenuCode.GDSenha2Objects1= [];
gdjs.Admin_32MenuCode.GDSenha2Objects2= [];
gdjs.Admin_32MenuCode.GDSenha2Objects3= [];
gdjs.Admin_32MenuCode.GDEmail2Objects1= [];
gdjs.Admin_32MenuCode.GDEmail2Objects2= [];
gdjs.Admin_32MenuCode.GDEmail2Objects3= [];
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects3= [];
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1= [];
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects2= [];
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects3= [];


gdjs.Admin_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15068340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Login_Main");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Buttons");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Buttons", 0, 0, 1);
}
}

}


};gdjs.Admin_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Admin_32MenuCode.GDPasswordObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.Admin_32MenuCode.GDPasswordObjects2.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDPasswordObjects2[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Admin_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Admin_32MenuCode.GDPasswordObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.Admin_32MenuCode.GDPasswordObjects2.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDPasswordObjects2[0].getBehavior("Text").getText()), null) != runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Senha errada");
}
}
}

}


};gdjs.Admin_32MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() != "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15075060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Não e administrador");
}
}
}

}


};gdjs.Admin_32MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Admin_32MenuCode.GDPasswordObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.Admin_32MenuCode.GDPasswordObjects2.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDPasswordObjects2[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Admin_32MenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Admin_32MenuCode.GDNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDNameObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDNameObjects2[k] = gdjs.Admin_32MenuCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Admin_32MenuCode.GDNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDNameObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDNameObjects2[k] = gdjs.Admin_32MenuCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-B");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Bloqueado");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Admin_32MenuCode.GDNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDNameObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDNameObjects2[k] = gdjs.Admin_32MenuCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Admin_32MenuCode.GDNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDNameObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDNameObjects2[k] = gdjs.Admin_32MenuCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Admin_32MenuCode.GDNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDNameObjects1[i].getBehavior("Text").getText() != runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDNameObjects1[k] = gdjs.Admin_32MenuCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDNameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1);
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1[i].getBehavior("Text").setText("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Não corresponde");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


};gdjs.Admin_32MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Login_Main");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Buttons");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Buttons", 0, 0, 1);
}
}

}


};gdjs.Admin_32MenuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Connect_button"), gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1[k] = gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-B");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Criar_Usuario"), gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i].getVariableNumber(gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i].getVariables().getFromIndex(0)) == 875342 ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Admin_32MenuCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bloquear_Desbloquear_Usuario"), gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1);
/* Reuse gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Deletar_Usuario"), gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Editar_Usuario"), gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Importar_Usuario"), gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ver_Usuario"), gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Create");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Buttons");
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Admin_32MenuCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.Admin_32MenuCode.GDBackgroundObjects1[0].getCenterXInScene()), "Create", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Admin_32MenuCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.Admin_32MenuCode.GDBackgroundObjects1[0].getCenterYInScene()), "Create", 0);
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1.length ;i < len;++i) {
    gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Editar_Usuario"), gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i].getVariableNumber(gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i].getVariables().getFromIndex(0)) == 875342 ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "User");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Deletar_Usuario"), gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i].getVariableNumber(gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i].getVariables().getFromIndex(0)) == 875342 ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "User");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ver_Usuario"), gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i].getVariableNumber(gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i].getVariables().getFromIndex(0)) == 875342 ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[k] = gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "User");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.Admin_32MenuCode.GDCriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_32MenuCode.GDCriarObjects1.length;i<l;++i) {
    if ( gdjs.Admin_32MenuCode.GDCriarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_32MenuCode.GDCriarObjects1[k] = gdjs.Admin_32MenuCode.GDCriarObjects1[i];
        ++k;
    }
}
gdjs.Admin_32MenuCode.GDCriarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Create");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email2"), gdjs.Admin_32MenuCode.GDEmail2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.Admin_32MenuCode.GDNomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha2"), gdjs.Admin_32MenuCode.GDSenha2Objects1);
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-E", (( gdjs.Admin_32MenuCode.GDEmail2Objects1.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDEmail2Objects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-N", (( gdjs.Admin_32MenuCode.GDNomeObjects1.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDNomeObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", "User");
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.Admin_32MenuCode.GDSenha2Objects1.length === 0 ) ? "" :gdjs.Admin_32MenuCode.GDSenha2Objects1[0].getBehavior("Text").getText()), null));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("User", "Quantity", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Buttons");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Create");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Buttons", 0, 0, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.Admin_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Admin_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Admin_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Admin_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Admin_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects3.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects1.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects2.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects3.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects1.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects2.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects3.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects1.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects2.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects3.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects1.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects2.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects3.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects3.length = 0;

gdjs.Admin_32MenuCode.eventsList7(runtimeScene);
gdjs.Admin_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Admin_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Admin_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDBackground2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Admin_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects1.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects2.length = 0;
gdjs.Admin_32MenuCode.GDTitle_9595Login_9595ScreenObjects3.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects1.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects2.length = 0;
gdjs.Admin_32MenuCode.GDNameObjects3.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects1.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects2.length = 0;
gdjs.Admin_32MenuCode.GDPasswordObjects3.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDConnect_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDOutro_9595Metodo_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects1.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects2.length = 0;
gdjs.Admin_32MenuCode.GDEsqueceu_9595a_9595Senha_9595buttonObjects3.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDCriar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDEditar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDDeletar_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDBloquear_9595Desbloquear_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects1.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects2.length = 0;
gdjs.Admin_32MenuCode.GDCriarObjects3.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects1.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects2.length = 0;
gdjs.Admin_32MenuCode.GDNomeObjects3.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDSenha2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects1.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects2.length = 0;
gdjs.Admin_32MenuCode.GDEmail2Objects3.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDVer_9595UsuarioObjects3.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects1.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects2.length = 0;
gdjs.Admin_32MenuCode.GDImportar_9595UsuarioObjects3.length = 0;


return;

}

gdjs['Admin_32MenuCode'] = gdjs.Admin_32MenuCode;
