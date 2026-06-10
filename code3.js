gdjs.APICode = {};
gdjs.APICode.localVariables = [];
gdjs.APICode.idToCallbackMap = new Map();
gdjs.APICode.GDContent_9595buttonObjects1= [];
gdjs.APICode.GDContent_9595buttonObjects2= [];
gdjs.APICode.GDContent_9595buttonObjects3= [];
gdjs.APICode.GDContent_9595buttonObjects4= [];
gdjs.APICode.GDContent_9595buttonObjects5= [];
gdjs.APICode.GDContent_9595buttonObjects6= [];
gdjs.APICode.GDNameObjects1= [];
gdjs.APICode.GDNameObjects2= [];
gdjs.APICode.GDNameObjects3= [];
gdjs.APICode.GDNameObjects4= [];
gdjs.APICode.GDNameObjects5= [];
gdjs.APICode.GDNameObjects6= [];
gdjs.APICode.GDSenhaObjects1= [];
gdjs.APICode.GDSenhaObjects2= [];
gdjs.APICode.GDSenhaObjects3= [];
gdjs.APICode.GDSenhaObjects4= [];
gdjs.APICode.GDSenhaObjects5= [];
gdjs.APICode.GDSenhaObjects6= [];
gdjs.APICode.GDPeerIDObjects1= [];
gdjs.APICode.GDPeerIDObjects2= [];
gdjs.APICode.GDPeerIDObjects3= [];
gdjs.APICode.GDPeerIDObjects4= [];
gdjs.APICode.GDPeerIDObjects5= [];
gdjs.APICode.GDPeerIDObjects6= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5= [];
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects6= [];
gdjs.APICode.GDBackground_9595whiteObjects1= [];
gdjs.APICode.GDBackground_9595whiteObjects2= [];
gdjs.APICode.GDBackground_9595whiteObjects3= [];
gdjs.APICode.GDBackground_9595whiteObjects4= [];
gdjs.APICode.GDBackground_9595whiteObjects5= [];
gdjs.APICode.GDBackground_9595whiteObjects6= [];
gdjs.APICode.GDBackground2Objects1= [];
gdjs.APICode.GDBackground2Objects2= [];
gdjs.APICode.GDBackground2Objects3= [];
gdjs.APICode.GDBackground2Objects4= [];
gdjs.APICode.GDBackground2Objects5= [];
gdjs.APICode.GDBackground2Objects6= [];


gdjs.APICode.asyncCallback16655556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5);
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5[i].getBehavior("Text").getText() + ("Your Server ID: " + gdjs.evtTools.p2p.getCurrentId() + "\n"));
}
}
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16655556, gdjs.APICode.asyncCallback16655556);
gdjs.APICode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.APICode.asyncCallback16655556(runtimeScene, asyncObjectsList)), 16655556, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16657276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16657276, gdjs.APICode.asyncCallback16657276);
gdjs.APICode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.saveStringToFileAsyncTask(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(10)), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.APICode.asyncCallback16657276(runtimeScene, asyncObjectsList)), 16657276, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16656876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").setString(gdjs.evtTools.p2p.getCurrentId());
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5[i].getBehavior("Text").getText() + ("Your Server ID: " + gdjs.evtTools.p2p.getCurrentId() + "\n"));
}
}

{ //Subevents
gdjs.APICode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16656876, gdjs.APICode.asyncCallback16656876);
gdjs.APICode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.APICode.asyncCallback16656876(runtimeScene, asyncObjectsList)), 16656876, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16658852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16658852, gdjs.APICode.asyncCallback16658852);
gdjs.APICode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.saveStringToFileAsyncTask(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(10)), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.APICode.asyncCallback16658852(runtimeScene, asyncObjectsList)), 16658852, asyncObjectsList);
}
}

}


};gdjs.APICode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString() != "0");
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.overrideId(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString());
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}

{ //Subevents
gdjs.APICode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString() == "0");
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(10));
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}

{ //Subevents
gdjs.APICode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16658148);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("session").getChild("simple-database").add(1);
}

{ //Subevents
gdjs.APICode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.APICode.asyncCallback16654204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);

{ //Subevents
gdjs.APICode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16654204, gdjs.APICode.asyncCallback16654204);
gdjs.APICode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.APICode.asyncCallback16654204(runtimeScene, asyncObjectsList)), 16654204, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16654132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(10));
}

{ //Subevents
gdjs.APICode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16654132, gdjs.APICode.asyncCallback16654132);
gdjs.APICode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.loadStringFromFileAsyncTask(runtimeScene.getScene().getVariables().getFromIndex(11), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable, true), (runtimeScene) => (gdjs.APICode.asyncCallback16654132(runtimeScene, asyncObjectsList)), 16654132, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16661060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("Your Server ID: " + gdjs.evtTools.p2p.getCurrentId() + "\n"));
}
}
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16661060, gdjs.APICode.asyncCallback16661060);
gdjs.APICode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.APICode.asyncCallback16661060(runtimeScene, asyncObjectsList)), 16661060, asyncObjectsList);
}
}

}


};gdjs.APICode.asyncCallback16661908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").setString(gdjs.evtTools.p2p.getCurrentId());
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("Your Server ID: " + gdjs.evtTools.p2p.getCurrentId() + "\n"));
}
}
{gdjs.evtTools.storage.writeStringInJSONFile("Impo", "Conf", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(10)));
}
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16661908, gdjs.APICode.asyncCallback16661908);
gdjs.APICode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.APICode.asyncCallback16661908(runtimeScene, asyncObjectsList)), 16661908, asyncObjectsList);
}
}

}


};gdjs.APICode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString() != "0");
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.overrideId(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString());
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}

{ //Subevents
gdjs.APICode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("app-uuid").getChild("simple-database").getAsString() == "0");
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(10));
}
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}

{ //Subevents
gdjs.APICode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16662660);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("session").getChild("simple-database").add(1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Impo", "Conf", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(10)));
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.APICode.userFunc0xb535e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Obtém o User Agent
const userAgent = navigator.userAgent.toLowerCase();

let sistema = "Desconhecido";

// Detecta o sistema
if (userAgent.includes("cros") || userAgent.includes("chromebook")) {
    sistema = "Chromebook";
}
else if (
    userAgent.includes("windows") ||
    userAgent.includes("win64") ||
    userAgent.includes("win32")
) {
    sistema = "Windows";
}
else if (
    userAgent.includes("macintosh") ||
    userAgent.includes("mac os")
) {
    sistema = "Mac";
}
else if (userAgent.includes("android")) {
    sistema = "Android";
}
else if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ios")
) {
    sistema = "iOS";
}
else if (userAgent.includes("linux")) {
    sistema = "Linux";
}

// Pega a variável
const soVar = runtimeScene
    .getGame()
    .getVariables()
    .get("SO_Dispositivo");

// Força ela virar string
soVar.setString(String(sistema));

// Debug
console.log("SO Detectado:", sistema);
};
gdjs.APICode.eventsList10 = function(runtimeScene) {

{


gdjs.APICode.userFunc0xb535e8(runtimeScene);

}


};gdjs.APICode.asyncCallback16669756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.APICode.localVariables);
gdjs.APICode.localVariables.length = 0;
}
gdjs.APICode.idToCallbackMap.set(16669756, gdjs.APICode.asyncCallback16669756);
gdjs.APICode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.APICode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.saveStringToFileAsyncTask(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(10)), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.APICode.asyncCallback16669756(runtimeScene, asyncObjectsList)), 16669756, asyncObjectsList);
}
}

}


};gdjs.APICode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("data-session").getChild("simple-database").getAsString() != gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "yday")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("session").getChild("simple-database").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("data-session").getChild("simple-database").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "yday"));
}
{gdjs.fileSystem.saveStringToFileAsync((( gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length === 0 ) ? "" :gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[0].getBehavior("Text").getText()), "C:\\AJShub\\simpleDatabaseLog" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + "-" + runtimeScene.getScene().getVariables().getFromIndex(10).getChild("session").getChild("simple-database").getAsString() + ".txt", gdjs.VariablesContainer.badVariable);
}

{ //Subevents
gdjs.APICode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("data-session").getChild("simple-database").getAsString() == gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "yday")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1);
{gdjs.fileSystem.saveStringToFileAsync((( gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1.length === 0 ) ? "" :gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1[0].getBehavior("Text").getText()), "C:\\AJShub\\simpleDatabaseLog" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + "-" + runtimeScene.getScene().getVariables().getFromIndex(10).getChild("session").getChild("simple-database").getAsString() + ".txt", gdjs.VariablesContainer.badVariable);
}
}

}


};gdjs.APICode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16675596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-code").setNumber(200);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-message").setString("Credenciais estão corretas");
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Acesso liberado\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Status", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(13), runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.APICode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects3.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects3[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.APICode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects3.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects3[0].getBehavior("Text").getText()), null) != runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-code").setNumber(401);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-message").setString("Alguma coisa no login ta errado");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Senha errada\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Status", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


};gdjs.APICode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() != "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16684860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-code").setNumber(403);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-message").setString("Alguma coisa na classificação do usuario está errado");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").getText() + ("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() + " Não e administrador\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Status", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


};gdjs.APICode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects2.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects2[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.APICode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects3.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects3[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects3[k] = gdjs.APICode.GDNameObjects3[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects3.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects3[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects3[k] = gdjs.APICode.GDNameObjects3[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-code").setNumber(403);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-message").setString("O usuario tentando se logar esta desabilitado");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Bloqueado\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Status", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects3.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects3[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects3[k] = gdjs.APICode.GDNameObjects3[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects2[k] = gdjs.APICode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs.APICode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Create-accont"));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.p2p.getEventData("Create-accont"), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-E", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("email").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-R", "Admin");
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S", gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("password").getAsString(), null));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("User", "Quantity", 1);
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Create-sucess", "200");
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3[i].getBehavior("Text").getText() + ("\nSua conta Owner for criada com sucesso " + runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Create-accont"));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.p2p.getEventData("Create-accont"), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-E", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("email").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-R", "User");
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S", gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("password").getAsString(), null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("User", "Quantity", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Create-sucess", "200");
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").getText() + ("\nSua conta Owner for criada com sucesso " + runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString()));
}
}
}

}


};gdjs.APICode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Create-accont", false);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}

{ //Subevents
gdjs.APICode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList22 = function(runtimeScene) {

};gdjs.APICode.eventsList23 = function(runtimeScene) {

{


const repeatCount4 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(13));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(14).add(1);
}
{gdjs.evtTools.p2p.sendDataToAll("check-status", "");
}
}
}

}


};gdjs.APICode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Check_status", 10, null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(15));
}

{ //Subevents
gdjs.APICode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("check-status-sucess", false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(15), gdjs.evtTools.p2p.getEventSender("Check-status-sucess"));
}
}

}


};gdjs.APICode.eventsList25 = function(runtimeScene) {

};gdjs.APICode.eventsList26 = function(runtimeScene) {

{


const repeatCount4 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber();
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2, gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).getChild("name").setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(19).getChild("role").setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().getFromIndex(18), runtimeScene.getScene().getVariables().getFromIndex(19));
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("Listed Sucess!\n"));
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16703532);
}
if (isConditionTrue_0) {
/* Reuse gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2 */
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").getText() + ("All Users Connected: " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(18)) + "\nPeer Requested: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Get-Users-Sucess", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(18)));
}
}

}


};gdjs.APICode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild("bloqued").getAsString() == "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild("bloqued").getAsString() == "");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild("bloqued").getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild("bloqued").getAsString() != "");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B", "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16712716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "edit-sucess", "not ok");
}
}

}


};gdjs.APICode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16709908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-N", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("role").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-E", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("email").getAsString());
}

{ //Subevents
gdjs.APICode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16708948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4);
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Acesso liberado\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(13), runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}

{ //Subevents
gdjs.APICode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects4.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects4[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.APICode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects4.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects4[0].getBehavior("Text").getText()), null) != runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Senha errada\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "edit-sucess", "not ok");
}
}

}


};gdjs.APICode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() != "Admin");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16719956);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4 */
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-code").setNumber(403);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Error-message").setString("Alguma coisa na classificação do usuario está errado");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("Usuario " + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() + " Não e administrador\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "edit-sucess", "not ok");
}
}

}


};gdjs.APICode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__Hash__GenerateHashSHA256.func(runtimeScene, (( gdjs.APICode.GDSenhaObjects4.length === 0 ) ? "" :gdjs.APICode.GDSenhaObjects4[0].getBehavior("Text").getText()), null) == runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4);
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("\nIniciando as buscas"));
}
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-R", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}

{ //Subevents
gdjs.APICode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects4.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects4[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects4[k] = gdjs.APICode.GDNameObjects4[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects4.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects4[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects4[k] = gdjs.APICode.GDNameObjects4[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4[i].getBehavior("Text").getText() + ("\nUsuario " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + " Bloqueado\nPeerID: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "edit-sucess", "not ok");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects4.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects4[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects4[k] = gdjs.APICode.GDNameObjects4[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDNameObjects4.length;i<l;++i) {
    if ( gdjs.APICode.GDNameObjects4[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDNameObjects4[k] = gdjs.APICode.GDNameObjects4[i];
        ++k;
    }
}
gdjs.APICode.GDNameObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-B"));
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}

{ //Subevents
gdjs.APICode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.APICode.eventsList35 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.storage.readStringFromJSONFile("User", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}

{ //Subevents: 
gdjs.APICode.eventsList34(runtimeScene);} //Subevents end.
}
}

}


};gdjs.APICode.eventsList36 = function(runtimeScene) {

{


gdjs.APICode.eventsList19(runtimeScene);
}


{


gdjs.APICode.eventsList21(runtimeScene);
}


{


gdjs.APICode.eventsList24(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Connect", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString(gdjs.evtTools.p2p.getEventData("Connect"));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(12).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Connect"));
}
{for(var i = 0, len = gdjs.APICode.GDNameObjects2.length ;i < len;++i) {
    gdjs.APICode.GDNameObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.APICode.GDSenhaObjects2.length ;i < len;++i) {
    gdjs.APICode.GDSenhaObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild("password").getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").getText() + ("\nUma chamada de autenticação foi chamada por: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() + "\nConteudo: " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(7))));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Check-users", false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Check-users"));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Check-users-sucess", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("Get-Users", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Get-Users"));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(18));
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2[i].getBehavior("Text").getText() + ("Getting Users\n"));
}
}

{ //Subevents
gdjs.APICode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("edit-sucess", false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("Check-users"));
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(gdjs.evtTools.p2p.getEventData("edit-sucess"));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(17).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(10));
}

{ //Subevents
gdjs.APICode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("log-server", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.APICode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.APICode.GDSenhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString(gdjs.evtTools.p2p.getEventData("log-server"));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(12).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getEventSender("log-server"));
}
{for(var i = 0, len = gdjs.APICode.GDNameObjects1.length ;i < len;++i) {
    gdjs.APICode.GDNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.APICode.GDSenhaObjects1.length ;i < len;++i) {
    gdjs.APICode.GDSenhaObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild("password").getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("User", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1[i].getBehavior("Text").getText() + ("\nUma chamada de autenticação foi chamada por: " + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() + "\nConteudo: " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(7))));
}
}
}

}


};gdjs.APICode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16723492);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
}

}


};gdjs.APICode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Content_button"), gdjs.APICode.GDContent_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.APICode.GDContent_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.APICode.GDContent_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.APICode.GDContent_9595buttonObjects1[k] = gdjs.APICode.GDContent_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.APICode.GDContent_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "Windows");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16653252);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.APICode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "Chromebook");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16659316);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Impo", "Conf", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(11));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(10));
}

{ //Subevents
gdjs.APICode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16664860);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.APICode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Login_Screen"), gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setString(gdjs.evtTools.p2p.getConnectedPeer());
}
{for(var i = 0, len = gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1.length ;i < len;++i) {
    gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1[i].getBehavior("Text").setText(gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1[i].getBehavior("Text").getText() + ("\nSomeone connected to the api: " + gdjs.evtTools.p2p.getConnectedPeer()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), "Connect-sucess", "200");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Save_logs", 2, null);
if (isConditionTrue_0) {

{ //Subevents
gdjs.APICode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.APICode.eventsList36(runtimeScene);
}


{


gdjs.APICode.eventsList37(runtimeScene);
}


};

gdjs.APICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.APICode.GDContent_9595buttonObjects1.length = 0;
gdjs.APICode.GDContent_9595buttonObjects2.length = 0;
gdjs.APICode.GDContent_9595buttonObjects3.length = 0;
gdjs.APICode.GDContent_9595buttonObjects4.length = 0;
gdjs.APICode.GDContent_9595buttonObjects5.length = 0;
gdjs.APICode.GDContent_9595buttonObjects6.length = 0;
gdjs.APICode.GDNameObjects1.length = 0;
gdjs.APICode.GDNameObjects2.length = 0;
gdjs.APICode.GDNameObjects3.length = 0;
gdjs.APICode.GDNameObjects4.length = 0;
gdjs.APICode.GDNameObjects5.length = 0;
gdjs.APICode.GDNameObjects6.length = 0;
gdjs.APICode.GDSenhaObjects1.length = 0;
gdjs.APICode.GDSenhaObjects2.length = 0;
gdjs.APICode.GDSenhaObjects3.length = 0;
gdjs.APICode.GDSenhaObjects4.length = 0;
gdjs.APICode.GDSenhaObjects5.length = 0;
gdjs.APICode.GDSenhaObjects6.length = 0;
gdjs.APICode.GDPeerIDObjects1.length = 0;
gdjs.APICode.GDPeerIDObjects2.length = 0;
gdjs.APICode.GDPeerIDObjects3.length = 0;
gdjs.APICode.GDPeerIDObjects4.length = 0;
gdjs.APICode.GDPeerIDObjects5.length = 0;
gdjs.APICode.GDPeerIDObjects6.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects6.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects1.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects2.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects3.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects4.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects5.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects6.length = 0;
gdjs.APICode.GDBackground2Objects1.length = 0;
gdjs.APICode.GDBackground2Objects2.length = 0;
gdjs.APICode.GDBackground2Objects3.length = 0;
gdjs.APICode.GDBackground2Objects4.length = 0;
gdjs.APICode.GDBackground2Objects5.length = 0;
gdjs.APICode.GDBackground2Objects6.length = 0;

gdjs.APICode.eventsList38(runtimeScene);
gdjs.APICode.GDContent_9595buttonObjects1.length = 0;
gdjs.APICode.GDContent_9595buttonObjects2.length = 0;
gdjs.APICode.GDContent_9595buttonObjects3.length = 0;
gdjs.APICode.GDContent_9595buttonObjects4.length = 0;
gdjs.APICode.GDContent_9595buttonObjects5.length = 0;
gdjs.APICode.GDContent_9595buttonObjects6.length = 0;
gdjs.APICode.GDNameObjects1.length = 0;
gdjs.APICode.GDNameObjects2.length = 0;
gdjs.APICode.GDNameObjects3.length = 0;
gdjs.APICode.GDNameObjects4.length = 0;
gdjs.APICode.GDNameObjects5.length = 0;
gdjs.APICode.GDNameObjects6.length = 0;
gdjs.APICode.GDSenhaObjects1.length = 0;
gdjs.APICode.GDSenhaObjects2.length = 0;
gdjs.APICode.GDSenhaObjects3.length = 0;
gdjs.APICode.GDSenhaObjects4.length = 0;
gdjs.APICode.GDSenhaObjects5.length = 0;
gdjs.APICode.GDSenhaObjects6.length = 0;
gdjs.APICode.GDPeerIDObjects1.length = 0;
gdjs.APICode.GDPeerIDObjects2.length = 0;
gdjs.APICode.GDPeerIDObjects3.length = 0;
gdjs.APICode.GDPeerIDObjects4.length = 0;
gdjs.APICode.GDPeerIDObjects5.length = 0;
gdjs.APICode.GDPeerIDObjects6.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects1.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects2.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects3.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects4.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects5.length = 0;
gdjs.APICode.GDTitle_9595Login_9595ScreenObjects6.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects1.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects2.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects3.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects4.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects5.length = 0;
gdjs.APICode.GDBackground_9595whiteObjects6.length = 0;
gdjs.APICode.GDBackground2Objects1.length = 0;
gdjs.APICode.GDBackground2Objects2.length = 0;
gdjs.APICode.GDBackground2Objects3.length = 0;
gdjs.APICode.GDBackground2Objects4.length = 0;
gdjs.APICode.GDBackground2Objects5.length = 0;
gdjs.APICode.GDBackground2Objects6.length = 0;


return;

}

gdjs['APICode'] = gdjs.APICode;
