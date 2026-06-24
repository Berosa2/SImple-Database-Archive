gdjs._50FACode = {};
gdjs._50FACode.localVariables = [];
gdjs._50FACode.idToCallbackMap = new Map();
gdjs._50FACode.GDIDObjects1= [];
gdjs._50FACode.GDIDObjects2= [];
gdjs._50FACode.GDIDObjects3= [];
gdjs._50FACode.GDStatusObjects1= [];
gdjs._50FACode.GDStatusObjects2= [];
gdjs._50FACode.GDStatusObjects3= [];
gdjs._50FACode.GDQRCODE2Objects1= [];
gdjs._50FACode.GDQRCODE2Objects2= [];
gdjs._50FACode.GDQRCODE2Objects3= [];
gdjs._50FACode.GDCodigoObjects1= [];
gdjs._50FACode.GDCodigoObjects2= [];
gdjs._50FACode.GDCodigoObjects3= [];
gdjs._50FACode.GDIdcreateObjects1= [];
gdjs._50FACode.GDIdcreateObjects2= [];
gdjs._50FACode.GDIdcreateObjects3= [];
gdjs._50FACode.GDVerify_9595the_9595codeObjects1= [];
gdjs._50FACode.GDVerify_9595the_9595codeObjects2= [];
gdjs._50FACode.GDVerify_9595the_9595codeObjects3= [];
gdjs._50FACode.GDBackground_9595whiteObjects1= [];
gdjs._50FACode.GDBackground_9595whiteObjects2= [];
gdjs._50FACode.GDBackground_9595whiteObjects3= [];
gdjs._50FACode.GDBackground2Objects1= [];
gdjs._50FACode.GDBackground2Objects2= [];
gdjs._50FACode.GDBackground2Objects3= [];
gdjs._50FACode.GDBackground_9595black_9595darkObjects1= [];
gdjs._50FACode.GDBackground_9595black_9595darkObjects2= [];
gdjs._50FACode.GDBackground_9595black_9595darkObjects3= [];


gdjs._50FACode.asyncCallback18823484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50FACode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}
gdjs._50FACode.localVariables.length = 0;
}
gdjs._50FACode.idToCallbackMap.set(18823484, gdjs._50FACode.asyncCallback18823484);
gdjs._50FACode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50FACode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.fileSystem.loadStringFromFileAsyncTask(runtimeScene.getScene().getVariables().getFromIndex(0), "C:\\AJShub\\configuration.json", gdjs.VariablesContainer.badVariable, true), (runtimeScene) => (gdjs._50FACode.asyncCallback18823484(runtimeScene, asyncObjectsList)), 18823484, asyncObjectsList);
}
}

}


};gdjs._50FACode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._50FACode.GDCodigoObjects1, gdjs._50FACode.GDCodigoObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Autenticador2FA__ValidarChave.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), (( gdjs._50FACode.GDCodigoObjects2.length === 0 ) ? "" :gdjs._50FACode.GDCodigoObjects2[0].getBehavior("Text").getText()), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects2);
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects2.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects2[i].getBehavior("Text").setText("Your code is correct!");
}
}
}

}


{

/* Reuse gdjs._50FACode.GDCodigoObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Autenticador2FA__ValidarChave.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), (( gdjs._50FACode.GDCodigoObjects1.length === 0 ) ? "" :gdjs._50FACode.GDCodigoObjects1[0].getBehavior("Text").getText()), null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects1);
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects1.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects1[i].getBehavior("Text").setText("Sorry, not the correct code.");
}
}
}

}


};gdjs._50FACode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs._50FACode.GDCodigoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Autenticador2FA__ValidarChave.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), (( gdjs._50FACode.GDCodigoObjects2.length === 0 ) ? "" :gdjs._50FACode.GDCodigoObjects2[0].getBehavior("Text").getText()), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects2);
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects2.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects2[i].getBehavior("Text").setText("Your code is correct!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs._50FACode.GDCodigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Autenticador2FA__ValidarChave.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), (( gdjs._50FACode.GDCodigoObjects1.length === 0 ) ? "" :gdjs._50FACode.GDCodigoObjects1[0].getBehavior("Text").getText()), null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects1);
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects1.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects1[i].getBehavior("Text").setText("Sorry, not the correct code.");
}
}
}

}


};gdjs._50FACode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "Windows");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._50FACode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "Chromebook");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Impo", "Conf", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs._50FACode.GDIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50FACode.GDIDObjects1.length;i<l;++i) {
    if ( gdjs._50FACode.GDIDObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs._50FACode.GDIDObjects1[k] = gdjs._50FACode.GDIDObjects1[i];
        ++k;
    }
}
gdjs._50FACode.GDIDObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18827460);
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs._50FACode.GDIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50FACode.GDIDObjects1.length;i<l;++i) {
    if ( gdjs._50FACode.GDIDObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs._50FACode.GDIDObjects1[k] = gdjs._50FACode.GDIDObjects1[i];
        ++k;
    }
}
gdjs._50FACode.GDIDObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18829196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50FACode.GDIDObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-E", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtsExt__Autenticador2FA__CriarChaves.func(runtimeScene, "Simple Database: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3), runtimeScene.getGame().getVariables().getFromIndex(2), null);
}
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), "QrCode", null);
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-2FA", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
{gdjs.evtTools.debuggerTools.log("Secret: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() + " Name: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + " Id: " + (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()), "info", "Experimental");
}
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects1.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects1[i].getBehavior("Text").setText("Created! You can now scan the Qr Code.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs._50FACode.GDCodigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50FACode.GDCodigoObjects1.length;i<l;++i) {
    if ( gdjs._50FACode.GDCodigoObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs._50FACode.GDCodigoObjects1[k] = gdjs._50FACode.GDCodigoObjects1[i];
        ++k;
    }
}
gdjs._50FACode.GDCodigoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs._50FACode.GDIDObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-2FA", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs._50FACode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Idcreate"), gdjs._50FACode.GDIdcreateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50FACode.GDIdcreateObjects1.length;i<l;++i) {
    if ( gdjs._50FACode.GDIdcreateObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._50FACode.GDIdcreateObjects1[k] = gdjs._50FACode.GDIdcreateObjects1[i];
        ++k;
    }
}
gdjs._50FACode.GDIdcreateObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs._50FACode.GDIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs._50FACode.GDStatusObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-E", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-S", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtsExt__Autenticador2FA__CriarChaves.func(runtimeScene, "Simple Database: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3), runtimeScene.getGame().getVariables().getFromIndex(2), null);
}
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), "QrCode", null);
}
{gdjs.evtTools.storage.writeStringInJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-2FA", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
{gdjs.evtTools.debuggerTools.log("Secret: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() + " Name: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + " Id: " + (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()), "info", "Experimental");
}
{for(var i = 0, len = gdjs._50FACode.GDStatusObjects1.length ;i < len;++i) {
    gdjs._50FACode.GDStatusObjects1[i].getBehavior("Text").setText("Created! You can now scan the Qr Code.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verify_the_code"), gdjs._50FACode.GDVerify_9595the_9595codeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50FACode.GDVerify_9595the_9595codeObjects1.length;i<l;++i) {
    if ( gdjs._50FACode.GDVerify_9595the_9595codeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._50FACode.GDVerify_9595the_9595codeObjects1[k] = gdjs._50FACode.GDVerify_9595the_9595codeObjects1[i];
        ++k;
    }
}
gdjs._50FACode.GDVerify_9595the_9595codeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs._50FACode.GDIDObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("User", (( gdjs._50FACode.GDIDObjects1.length === 0 ) ? "" :gdjs._50FACode.GDIDObjects1[0].getBehavior("Text").getText()) + "-2FA", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs._50FACode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs._50FACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50FACode.GDIDObjects1.length = 0;
gdjs._50FACode.GDIDObjects2.length = 0;
gdjs._50FACode.GDIDObjects3.length = 0;
gdjs._50FACode.GDStatusObjects1.length = 0;
gdjs._50FACode.GDStatusObjects2.length = 0;
gdjs._50FACode.GDStatusObjects3.length = 0;
gdjs._50FACode.GDQRCODE2Objects1.length = 0;
gdjs._50FACode.GDQRCODE2Objects2.length = 0;
gdjs._50FACode.GDQRCODE2Objects3.length = 0;
gdjs._50FACode.GDCodigoObjects1.length = 0;
gdjs._50FACode.GDCodigoObjects2.length = 0;
gdjs._50FACode.GDCodigoObjects3.length = 0;
gdjs._50FACode.GDIdcreateObjects1.length = 0;
gdjs._50FACode.GDIdcreateObjects2.length = 0;
gdjs._50FACode.GDIdcreateObjects3.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects1.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects2.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects3.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects1.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects2.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects3.length = 0;
gdjs._50FACode.GDBackground2Objects1.length = 0;
gdjs._50FACode.GDBackground2Objects2.length = 0;
gdjs._50FACode.GDBackground2Objects3.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects1.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects2.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects3.length = 0;

gdjs._50FACode.eventsList3(runtimeScene);
gdjs._50FACode.GDIDObjects1.length = 0;
gdjs._50FACode.GDIDObjects2.length = 0;
gdjs._50FACode.GDIDObjects3.length = 0;
gdjs._50FACode.GDStatusObjects1.length = 0;
gdjs._50FACode.GDStatusObjects2.length = 0;
gdjs._50FACode.GDStatusObjects3.length = 0;
gdjs._50FACode.GDQRCODE2Objects1.length = 0;
gdjs._50FACode.GDQRCODE2Objects2.length = 0;
gdjs._50FACode.GDQRCODE2Objects3.length = 0;
gdjs._50FACode.GDCodigoObjects1.length = 0;
gdjs._50FACode.GDCodigoObjects2.length = 0;
gdjs._50FACode.GDCodigoObjects3.length = 0;
gdjs._50FACode.GDIdcreateObjects1.length = 0;
gdjs._50FACode.GDIdcreateObjects2.length = 0;
gdjs._50FACode.GDIdcreateObjects3.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects1.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects2.length = 0;
gdjs._50FACode.GDVerify_9595the_9595codeObjects3.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects1.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects2.length = 0;
gdjs._50FACode.GDBackground_9595whiteObjects3.length = 0;
gdjs._50FACode.GDBackground2Objects1.length = 0;
gdjs._50FACode.GDBackground2Objects2.length = 0;
gdjs._50FACode.GDBackground2Objects3.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects1.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects2.length = 0;
gdjs._50FACode.GDBackground_9595black_9595darkObjects3.length = 0;


return;

}

gdjs['_50FACode'] = gdjs._50FACode;
