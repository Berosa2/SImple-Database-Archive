gdjs.AICode = {};
gdjs.AICode.localVariables = [];
gdjs.AICode.idToCallbackMap = new Map();
gdjs.AICode.GDListedNameObjects1= [];
gdjs.AICode.GDListedNameObjects2= [];
gdjs.AICode.GDListedNameObjects3= [];
gdjs.AICode.GDHugging_9595FaceObjects1= [];
gdjs.AICode.GDHugging_9595FaceObjects2= [];
gdjs.AICode.GDHugging_9595FaceObjects3= [];
gdjs.AICode.GDOpenRouterObjects1= [];
gdjs.AICode.GDOpenRouterObjects2= [];
gdjs.AICode.GDOpenRouterObjects3= [];
gdjs.AICode.GDNameObjects1= [];
gdjs.AICode.GDNameObjects2= [];
gdjs.AICode.GDNameObjects3= [];
gdjs.AICode.GDDescriptionObjects1= [];
gdjs.AICode.GDDescriptionObjects2= [];
gdjs.AICode.GDDescriptionObjects3= [];
gdjs.AICode.GDBackground_9595whiteObjects1= [];
gdjs.AICode.GDBackground_9595whiteObjects2= [];
gdjs.AICode.GDBackground_9595whiteObjects3= [];
gdjs.AICode.GDBackground2Objects1= [];
gdjs.AICode.GDBackground2Objects2= [];
gdjs.AICode.GDBackground2Objects3= [];


gdjs.AICode.mapOfGDgdjs_9546AICode_9546GDListedNameObjects2Objects = Hashtable.newFrom({"ListedName": gdjs.AICode.GDListedNameObjects2});
gdjs.AICode.eventsList0 = function(runtimeScene) {

};gdjs.AICode.eventsList1 = function(runtimeScene) {

{


const repeatCount2 = 47;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.AICode.GDListedNameObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.AICode.mapOfGDgdjs_9546AICode_9546GDListedNameObjects2Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects2.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects2[i].returnVariable(gdjs.AICode.GDListedNameObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(23);
}
}
}

}


};gdjs.AICode.asyncCallback16897372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AICode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects3);

gdjs.copyArray(runtimeScene.getObjects("OpenRouter"), gdjs.AICode.GDOpenRouterObjects3);
{for(var i = 0, len = gdjs.AICode.GDHugging_9595FaceObjects3.length ;i < len;++i) {
    gdjs.AICode.GDHugging_9595FaceObjects3[i].getBehavior("Text").setText("> Hugging Face");
}
}
{for(var i = 0, len = gdjs.AICode.GDOpenRouterObjects3.length ;i < len;++i) {
    gdjs.AICode.GDOpenRouterObjects3[i].getBehavior("Text").setText("Openrouter");
}
}
gdjs.AICode.localVariables.length = 0;
}
gdjs.AICode.idToCallbackMap.set(16897372, gdjs.AICode.asyncCallback16897372);
gdjs.AICode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.AICode.localVariables);
/* Don't save Hugging_Face as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.AICode.asyncCallback16897372(runtimeScene, asyncObjectsList)), 16897372, asyncObjectsList);
}
}

}


};gdjs.AICode.asyncCallback13146604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AICode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}

{ //Subevents
gdjs.AICode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AICode.localVariables.length = 0;
}
gdjs.AICode.idToCallbackMap.set(13146604, gdjs.AICode.asyncCallback13146604);
gdjs.AICode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AICode.localVariables);
for (const obj of gdjs.AICode.GDHugging_9595FaceObjects1) asyncObjectsList.addObject("Hugging_Face", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://huggingface.co/api/models", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.AICode.asyncCallback13146604(runtimeScene, asyncObjectsList)), 13146604, asyncObjectsList);
}
}

}


};gdjs.AICode.asyncCallback16894580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AICode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("OpenRouter"), gdjs.AICode.GDOpenRouterObjects3);

{for(var i = 0, len = gdjs.AICode.GDHugging_9595FaceObjects3.length ;i < len;++i) {
    gdjs.AICode.GDHugging_9595FaceObjects3[i].getBehavior("Text").setText("Hugging Face");
}
}
{for(var i = 0, len = gdjs.AICode.GDOpenRouterObjects3.length ;i < len;++i) {
    gdjs.AICode.GDOpenRouterObjects3[i].getBehavior("Text").setText("> Openrouter");
}
}
gdjs.AICode.localVariables.length = 0;
}
gdjs.AICode.idToCallbackMap.set(16894580, gdjs.AICode.asyncCallback16894580);
gdjs.AICode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.AICode.localVariables);
/* Don't save OpenRouter as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.AICode.asyncCallback16894580(runtimeScene, asyncObjectsList)), 16894580, asyncObjectsList);
}
}

}


};gdjs.AICode.asyncCallback9827412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AICode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}

{ //Subevents
gdjs.AICode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AICode.localVariables.length = 0;
}
gdjs.AICode.idToCallbackMap.set(9827412, gdjs.AICode.asyncCallback9827412);
gdjs.AICode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AICode.localVariables);
for (const obj of gdjs.AICode.GDOpenRouterObjects1) asyncObjectsList.addObject("OpenRouter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://openrouter.ai/api/v1/models", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.AICode.asyncCallback9827412(runtimeScene, asyncObjectsList)), 9827412, asyncObjectsList);
}
}

}


};gdjs.AICode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16899876);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.AICode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects1[i].returnVariable(gdjs.AICode.GDListedNameObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects1[i].returnVariable(gdjs.AICode.GDListedNameObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDHugging_9595FaceObjects1.length;i<l;++i) {
    if ( (gdjs.AICode.GDHugging_9595FaceObjects1[i].getBehavior("Text").getText()).startsWith(">") ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDHugging_9595FaceObjects1[k] = gdjs.AICode.GDHugging_9595FaceObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDHugging_9595FaceObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.AICode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.AICode.GDNameObjects1);
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.AICode.GDListedNameObjects1[i].getVariables().getFromIndex(0).getAsNumber()).getChild("id").getAsString());
}
}
{for(var i = 0, len = gdjs.AICode.GDNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("id").getAsString());
}
}
{for(var i = 0, len = gdjs.AICode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.AICode.GDDescriptionObjects1[i].getBehavior("Text").setText("👤 Author: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("author").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "⬇ Downloads: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("downloads").getAsNumber()) + gdjs.evtTools.string.newLine() + "❤ Likes: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("likes").getAsNumber()) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "🏷 Type: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("pipeline_tag").getAsString() + gdjs.evtTools.string.newLine() + "📚 Library: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("library_name").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "📜 License: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("cardData").getChild("license").getAsString() + gdjs.evtTools.string.newLine() + "🌎 Language: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("cardData").getChild("language").getChild(0).getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "🧠 Architecture: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("config").getChild("architectures").getChild(0).getAsString() + gdjs.evtTools.string.newLine() + "⚙ Model Type: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("config").getChild("model_type").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "📅 Updated: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("lastModified").getAsString());
}
}
{for(var i = 0, len = gdjs.AICode.GDNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("id").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenRouter"), gdjs.AICode.GDOpenRouterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDOpenRouterObjects1.length;i<l;++i) {
    if ( (gdjs.AICode.GDOpenRouterObjects1[i].getBehavior("Text").getText()).startsWith(">") ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDOpenRouterObjects1[k] = gdjs.AICode.GDOpenRouterObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDOpenRouterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.AICode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.AICode.GDNameObjects1);
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.AICode.GDListedNameObjects1[i].getVariables().getFromIndex(0).getAsNumber()).getChild("id").getAsString());
}
}
{for(var i = 0, len = gdjs.AICode.GDNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("name").getAsString());
}
}
{for(var i = 0, len = gdjs.AICode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.AICode.GDDescriptionObjects1[i].getBehavior("Text").setText("🆔 " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("id").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("description").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "📏 Context: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("context_length").getAsNumber()) + " tokens" + gdjs.evtTools.string.newLine() + "💲 Input: $" + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("pricing").getChild("prompt").getAsString() + gdjs.evtTools.string.newLine() + "💲 Output: $" + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("data").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))).getChild("pricing").getChild("completion").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDListedNameObjects1.length;i<l;++i) {
    if ( gdjs.AICode.GDListedNameObjects1[i].getBehavior("Text").getText() == "0" ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDListedNameObjects1[k] = gdjs.AICode.GDListedNameObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDListedNameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.AICode.GDListedNameObjects1 */
{for(var i = 0, len = gdjs.AICode.GDListedNameObjects1.length ;i < len;++i) {
    gdjs.AICode.GDListedNameObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDHugging_9595FaceObjects1.length;i<l;++i) {
    if ( gdjs.AICode.GDHugging_9595FaceObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDHugging_9595FaceObjects1[k] = gdjs.AICode.GDHugging_9595FaceObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDHugging_9595FaceObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AICode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenRouter"), gdjs.AICode.GDOpenRouterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDOpenRouterObjects1.length;i<l;++i) {
    if ( gdjs.AICode.GDOpenRouterObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDOpenRouterObjects1[k] = gdjs.AICode.GDOpenRouterObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDOpenRouterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.AICode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDHugging_9595FaceObjects1.length;i<l;++i) {
    if ( (gdjs.AICode.GDHugging_9595FaceObjects1[i].getBehavior("Text").getText()).startsWith(">") ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDHugging_9595FaceObjects1[k] = gdjs.AICode.GDHugging_9595FaceObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDHugging_9595FaceObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDListedNameObjects1.length;i<l;++i) {
    if ( gdjs.AICode.GDListedNameObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDListedNameObjects1[k] = gdjs.AICode.GDListedNameObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDListedNameObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.AICode.GDListedNameObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(((gdjs.AICode.GDListedNameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.AICode.GDListedNameObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hugging_Face"), gdjs.AICode.GDHugging_9595FaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListedName"), gdjs.AICode.GDListedNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDHugging_9595FaceObjects1.length;i<l;++i) {
    if ( (gdjs.AICode.GDHugging_9595FaceObjects1[i].getBehavior("Text").getText()).startsWith(">") ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDHugging_9595FaceObjects1[k] = gdjs.AICode.GDHugging_9595FaceObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDHugging_9595FaceObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AICode.GDListedNameObjects1.length;i<l;++i) {
    if ( gdjs.AICode.GDListedNameObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AICode.GDListedNameObjects1[k] = gdjs.AICode.GDListedNameObjects1[i];
        ++k;
    }
}
gdjs.AICode.GDListedNameObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.AICode.GDListedNameObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(((gdjs.AICode.GDListedNameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.AICode.GDListedNameObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.AICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AICode.GDListedNameObjects1.length = 0;
gdjs.AICode.GDListedNameObjects2.length = 0;
gdjs.AICode.GDListedNameObjects3.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects1.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects2.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects3.length = 0;
gdjs.AICode.GDOpenRouterObjects1.length = 0;
gdjs.AICode.GDOpenRouterObjects2.length = 0;
gdjs.AICode.GDOpenRouterObjects3.length = 0;
gdjs.AICode.GDNameObjects1.length = 0;
gdjs.AICode.GDNameObjects2.length = 0;
gdjs.AICode.GDNameObjects3.length = 0;
gdjs.AICode.GDDescriptionObjects1.length = 0;
gdjs.AICode.GDDescriptionObjects2.length = 0;
gdjs.AICode.GDDescriptionObjects3.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects1.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects2.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects3.length = 0;
gdjs.AICode.GDBackground2Objects1.length = 0;
gdjs.AICode.GDBackground2Objects2.length = 0;
gdjs.AICode.GDBackground2Objects3.length = 0;

gdjs.AICode.eventsList6(runtimeScene);
gdjs.AICode.GDListedNameObjects1.length = 0;
gdjs.AICode.GDListedNameObjects2.length = 0;
gdjs.AICode.GDListedNameObjects3.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects1.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects2.length = 0;
gdjs.AICode.GDHugging_9595FaceObjects3.length = 0;
gdjs.AICode.GDOpenRouterObjects1.length = 0;
gdjs.AICode.GDOpenRouterObjects2.length = 0;
gdjs.AICode.GDOpenRouterObjects3.length = 0;
gdjs.AICode.GDNameObjects1.length = 0;
gdjs.AICode.GDNameObjects2.length = 0;
gdjs.AICode.GDNameObjects3.length = 0;
gdjs.AICode.GDDescriptionObjects1.length = 0;
gdjs.AICode.GDDescriptionObjects2.length = 0;
gdjs.AICode.GDDescriptionObjects3.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects1.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects2.length = 0;
gdjs.AICode.GDBackground_9595whiteObjects3.length = 0;
gdjs.AICode.GDBackground2Objects1.length = 0;
gdjs.AICode.GDBackground2Objects2.length = 0;
gdjs.AICode.GDBackground2Objects3.length = 0;


return;

}

gdjs['AICode'] = gdjs.AICode;
