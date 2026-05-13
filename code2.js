gdjs.SchemaCode = {};
gdjs.SchemaCode.localVariables = [];
gdjs.SchemaCode.idToCallbackMap = new Map();
gdjs.SchemaCode.GDSchema_9595IconObjects1= [];
gdjs.SchemaCode.GDSchema_9595IconObjects2= [];
gdjs.SchemaCode.GDSchema_9595IconObjects3= [];
gdjs.SchemaCode.GDLabel_9595iconObjects1= [];
gdjs.SchemaCode.GDLabel_9595iconObjects2= [];
gdjs.SchemaCode.GDLabel_9595iconObjects3= [];
gdjs.SchemaCode.GDColissionObjects1= [];
gdjs.SchemaCode.GDColissionObjects2= [];
gdjs.SchemaCode.GDColissionObjects3= [];
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1= [];
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2= [];
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects3= [];
gdjs.SchemaCode.GDtextObjects1= [];
gdjs.SchemaCode.GDtextObjects2= [];
gdjs.SchemaCode.GDtextObjects3= [];
gdjs.SchemaCode.GDTileObjects1= [];
gdjs.SchemaCode.GDTileObjects2= [];
gdjs.SchemaCode.GDTileObjects3= [];
gdjs.SchemaCode.GDsaveObjects1= [];
gdjs.SchemaCode.GDsaveObjects2= [];
gdjs.SchemaCode.GDsaveObjects3= [];
gdjs.SchemaCode.GDdeleteObjects1= [];
gdjs.SchemaCode.GDdeleteObjects2= [];
gdjs.SchemaCode.GDdeleteObjects3= [];
gdjs.SchemaCode.GDName2Objects1= [];
gdjs.SchemaCode.GDName2Objects2= [];
gdjs.SchemaCode.GDName2Objects3= [];
gdjs.SchemaCode.GDInputObjects1= [];
gdjs.SchemaCode.GDInputObjects2= [];
gdjs.SchemaCode.GDInputObjects3= [];
gdjs.SchemaCode.GDCreateObjects1= [];
gdjs.SchemaCode.GDCreateObjects2= [];
gdjs.SchemaCode.GDCreateObjects3= [];
gdjs.SchemaCode.GDTile2Objects1= [];
gdjs.SchemaCode.GDTile2Objects2= [];
gdjs.SchemaCode.GDTile2Objects3= [];
gdjs.SchemaCode.GDStar_9595filterObjects1= [];
gdjs.SchemaCode.GDStar_9595filterObjects2= [];
gdjs.SchemaCode.GDStar_9595filterObjects3= [];
gdjs.SchemaCode.GDStarObjects1= [];
gdjs.SchemaCode.GDStarObjects2= [];
gdjs.SchemaCode.GDStarObjects3= [];
gdjs.SchemaCode.GDnormal_9595filterObjects1= [];
gdjs.SchemaCode.GDnormal_9595filterObjects2= [];
gdjs.SchemaCode.GDnormal_9595filterObjects3= [];
gdjs.SchemaCode.GDDowload_9595AllObjects1= [];
gdjs.SchemaCode.GDDowload_9595AllObjects2= [];
gdjs.SchemaCode.GDDowload_9595AllObjects3= [];
gdjs.SchemaCode.GDDowload_9595NoteObjects1= [];
gdjs.SchemaCode.GDDowload_9595NoteObjects2= [];
gdjs.SchemaCode.GDDowload_9595NoteObjects3= [];


gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects2Objects = Hashtable.newFrom({"text": gdjs.SchemaCode.GDtextObjects2});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.SchemaCode.GDStarObjects2});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects2Objects = Hashtable.newFrom({"Label_noplus_icon": gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects2Objects = Hashtable.newFrom({"text": gdjs.SchemaCode.GDtextObjects2});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.SchemaCode.GDStarObjects2});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects2Objects = Hashtable.newFrom({"Label_noplus_icon": gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2});
gdjs.SchemaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length = 0;

gdjs.SchemaCode.GDStarObjects2.length = 0;

gdjs.SchemaCode.GDtextObjects2.length = 0;

{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects2Objects, 64, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects2Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].returnVariable(gdjs.SchemaCode.GDStarObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].SetChecked(true, null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects2Objects, 32, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].returnVariable(gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add((( gdjs.SchemaCode.GDtextObjects2.length === 0 ) ? 0 :gdjs.SchemaCode.GDtextObjects2[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length = 0;

gdjs.SchemaCode.GDStarObjects2.length = 0;

gdjs.SchemaCode.GDtextObjects2.length = 0;

{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects2Objects, 64, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects2Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].returnVariable(gdjs.SchemaCode.GDStarObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects2[i].SetChecked(false, null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects2Objects, 32, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].returnVariable(gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add((( gdjs.SchemaCode.GDtextObjects2.length === 0 ) ? 0 :gdjs.SchemaCode.GDtextObjects2[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.SchemaCode.GDtextObjects1});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.SchemaCode.GDStarObjects1});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects1Objects = Hashtable.newFrom({"Label_noplus_icon": gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.SchemaCode.GDtextObjects1});
gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDColissionObjects1Objects = Hashtable.newFrom({"Colission": gdjs.SchemaCode.GDColissionObjects1});
gdjs.SchemaCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", ((gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-C");
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDInputObjects1 */
/* Reuse gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1 */
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", ((gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-C", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{for(var i = 0, len = gdjs.SchemaCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDInputObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}
}

}


};gdjs.SchemaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-S");
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString() + "-star.txt", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("content").getAsString(), null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-S"));
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name").getAsString() + ".txt", runtimeScene.getScene().getVariables().getFromIndex(7).getChild("content").getAsString(), null);
}
}

}


};gdjs.SchemaCode.asyncCallback14808020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SchemaCode.localVariables);
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{gdjs.evtTools.debuggerTools.log(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + " Loged", "info", "Notes");
}
gdjs.SchemaCode.localVariables.length = 0;
}
gdjs.SchemaCode.idToCallbackMap.set(14808020, gdjs.SchemaCode.asyncCallback14808020);
gdjs.SchemaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SchemaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.SchemaCode.asyncCallback14808020(runtimeScene, asyncObjectsList)), 14808020, asyncObjectsList);
}
}

}


};gdjs.SchemaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "-N");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name"));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "-C", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("content"));
}

{ //Subevents
gdjs.SchemaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "-N"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{gdjs.evtTools.debuggerTools.log(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "info", "Notes");
}
}

}


};gdjs.SchemaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Colission"), gdjs.SchemaCode.GDColissionObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Mark", "Quantity", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.SchemaCode.GDColissionObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDColissionObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "0");
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SchemaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "Star");
}
}
}
}
if (isConditionTrue_0) {
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length = 0;

gdjs.SchemaCode.GDStarObjects1.length = 0;

gdjs.SchemaCode.GDtextObjects1.length = 0;

{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects1Objects, 64, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDStarObjects1Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].returnVariable(gdjs.SchemaCode.GDStarObjects1[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].getBehavior("Resizable").setSize(32, 32);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].SetChecked(true, null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDLabel_95959595noplus_95959595iconObjects1Objects, 32, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].returnVariable(gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].getBehavior("Resizable").setSize(32, 32);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add((( gdjs.SchemaCode.GDtextObjects1.length === 0 ) ? 0 :gdjs.SchemaCode.GDtextObjects1[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-S"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "Star");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-N"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "0");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Colission"), gdjs.SchemaCode.GDColissionObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.SchemaCode.GDtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDtextObjects1Objects, gdjs.SchemaCode.mapOfGDgdjs_9546SchemaCode_9546GDColissionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects1[i].getBehavior("Scale").setScaleX(gdjs.SchemaCode.GDtextObjects1[i].getBehavior("Scale").getScaleX() - (0.01));
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects1[i].getBehavior("Scale").setScaleY(gdjs.SchemaCode.GDtextObjects1[i].getBehavior("Scale").getScaleY() - (0.01));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Label_noplus_icon"), gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[k] = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SchemaCode.GDInputObjects1);
/* Reuse gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs.SchemaCode.GDName2Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", ((gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{for(var i = 0, len = gdjs.SchemaCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDName2Objects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDName2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(((gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}

{ //Subevents
gdjs.SchemaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("delete"), gdjs.SchemaCode.GDdeleteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDdeleteObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDdeleteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDdeleteObjects1[k] = gdjs.SchemaCode.GDdeleteObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDdeleteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SchemaCode.GDInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs.SchemaCode.GDName2Objects1);
{gdjs.evtTools.storage.deleteElementFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-N");
}
{gdjs.evtTools.storage.deleteElementFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-C");
}
{for(var i = 0, len = gdjs.SchemaCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDName2Objects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDName2Objects1[i].getBehavior("Text").setText("Nothing");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("save"), gdjs.SchemaCode.GDsaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDsaveObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDsaveObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDsaveObjects1[k] = gdjs.SchemaCode.GDsaveObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDsaveObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SchemaCode.GDInputObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-C", (( gdjs.SchemaCode.GDInputObjects1.length === 0 ) ? "" :gdjs.SchemaCode.GDInputObjects1[0].getBehavior("Text").getText()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Create"), gdjs.SchemaCode.GDCreateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label_icon"), gdjs.SchemaCode.GDLabel_9595iconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDLabel_9595iconObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDLabel_9595iconObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDLabel_9595iconObjects1[k] = gdjs.SchemaCode.GDLabel_9595iconObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDLabel_9595iconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDCreateObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDCreateObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDCreateObjects1[k] = gdjs.SchemaCode.GDCreateObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDCreateObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDCreateObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.SchemaCode.GDInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs.SchemaCode.GDName2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "-N", (( gdjs.SchemaCode.GDCreateObjects1.length === 0 ) ? "" :gdjs.SchemaCode.GDCreateObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.SchemaCode.GDName2Objects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDName2Objects1[i].getBehavior("Text").setText((( gdjs.SchemaCode.GDCreateObjects1.length === 0 ) ? "" :gdjs.SchemaCode.GDCreateObjects1[0].getBehavior("Text").getText()));
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDInputObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Mark", "Quantity", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.SchemaCode.GDCreateObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDCreateObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Schema_Icon"), gdjs.SchemaCode.GDSchema_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDSchema_9595IconObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDSchema_9595IconObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDSchema_9595IconObjects1[k] = gdjs.SchemaCode.GDSchema_9595IconObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDSchema_9595IconObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDStarObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDStarObjects1[k] = gdjs.SchemaCode.GDStarObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDStarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDStarObjects1[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDStarObjects1[k] = gdjs.SchemaCode.GDStarObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDStarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDStarObjects1 */
{gdjs.evtTools.storage.writeStringInJSONFile("Mark", ((gdjs.SchemaCode.GDStarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDStarObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-S", "true");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDStarObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDStarObjects1[k] = gdjs.SchemaCode.GDStarObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDStarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDStarObjects1.length;i<l;++i) {
    if ( !(gdjs.SchemaCode.GDStarObjects1[i].HasJustBeenChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDStarObjects1[k] = gdjs.SchemaCode.GDStarObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDStarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDStarObjects1 */
{gdjs.evtTools.storage.deleteElementFromJSONFile("Mark", ((gdjs.SchemaCode.GDStarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDStarObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-S");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star_filter"), gdjs.SchemaCode.GDStar_9595filterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDStar_9595filterObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDStar_9595filterObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDStar_9595filterObjects1[k] = gdjs.SchemaCode.GDStar_9595filterObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDStar_9595filterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Label_noplus_icon"), gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.SchemaCode.GDtextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("Star");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(160);
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("normal_filter"), gdjs.SchemaCode.GDnormal_9595filterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDnormal_9595filterObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDnormal_9595filterObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDnormal_9595filterObjects1[k] = gdjs.SchemaCode.GDnormal_9595filterObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDnormal_9595filterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Label_noplus_icon"), gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.SchemaCode.GDtextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("0");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(160);
}
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDtextObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Mark", ((gdjs.SchemaCode.GDStarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDStarObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-S");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14800820);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDStarObjects1 */
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Mark", ((gdjs.SchemaCode.GDStarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SchemaCode.GDStarObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-S"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14801900);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SchemaCode.GDStarObjects1 */
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].Activate(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Colission"), gdjs.SchemaCode.GDColissionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.SchemaCode.GDStarObjects1);
{for(var i = 0, len = gdjs.SchemaCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDStarObjects1[i].getBehavior("Resizable").setSize(32, 32);
}
}
{for(var i = 0, len = gdjs.SchemaCode.GDColissionObjects1.length ;i < len;++i) {
    gdjs.SchemaCode.GDColissionObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dowload_Note"), gdjs.SchemaCode.GDDowload_9595NoteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDDowload_9595NoteObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDDowload_9595NoteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDDowload_9595NoteObjects1[k] = gdjs.SchemaCode.GDDowload_9595NoteObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDDowload_9595NoteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("name"));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Mark", runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "-C", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getChild("content"));
}

{ //Subevents
gdjs.SchemaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dowload_All"), gdjs.SchemaCode.GDDowload_9595AllObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SchemaCode.GDDowload_9595AllObjects1.length;i<l;++i) {
    if ( gdjs.SchemaCode.GDDowload_9595AllObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SchemaCode.GDDowload_9595AllObjects1[k] = gdjs.SchemaCode.GDDowload_9595AllObjects1[i];
        ++k;
    }
}
gdjs.SchemaCode.GDDowload_9595AllObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, "Notes-" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + ".json", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(8)), null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() - 1 < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SchemaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.SchemaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SchemaCode.GDSchema_9595IconObjects1.length = 0;
gdjs.SchemaCode.GDSchema_9595IconObjects2.length = 0;
gdjs.SchemaCode.GDSchema_9595IconObjects3.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects1.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects2.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects3.length = 0;
gdjs.SchemaCode.GDColissionObjects1.length = 0;
gdjs.SchemaCode.GDColissionObjects2.length = 0;
gdjs.SchemaCode.GDColissionObjects3.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects3.length = 0;
gdjs.SchemaCode.GDtextObjects1.length = 0;
gdjs.SchemaCode.GDtextObjects2.length = 0;
gdjs.SchemaCode.GDtextObjects3.length = 0;
gdjs.SchemaCode.GDTileObjects1.length = 0;
gdjs.SchemaCode.GDTileObjects2.length = 0;
gdjs.SchemaCode.GDTileObjects3.length = 0;
gdjs.SchemaCode.GDsaveObjects1.length = 0;
gdjs.SchemaCode.GDsaveObjects2.length = 0;
gdjs.SchemaCode.GDsaveObjects3.length = 0;
gdjs.SchemaCode.GDdeleteObjects1.length = 0;
gdjs.SchemaCode.GDdeleteObjects2.length = 0;
gdjs.SchemaCode.GDdeleteObjects3.length = 0;
gdjs.SchemaCode.GDName2Objects1.length = 0;
gdjs.SchemaCode.GDName2Objects2.length = 0;
gdjs.SchemaCode.GDName2Objects3.length = 0;
gdjs.SchemaCode.GDInputObjects1.length = 0;
gdjs.SchemaCode.GDInputObjects2.length = 0;
gdjs.SchemaCode.GDInputObjects3.length = 0;
gdjs.SchemaCode.GDCreateObjects1.length = 0;
gdjs.SchemaCode.GDCreateObjects2.length = 0;
gdjs.SchemaCode.GDCreateObjects3.length = 0;
gdjs.SchemaCode.GDTile2Objects1.length = 0;
gdjs.SchemaCode.GDTile2Objects2.length = 0;
gdjs.SchemaCode.GDTile2Objects3.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects1.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects2.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects3.length = 0;
gdjs.SchemaCode.GDStarObjects1.length = 0;
gdjs.SchemaCode.GDStarObjects2.length = 0;
gdjs.SchemaCode.GDStarObjects3.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects1.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects2.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects3.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects1.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects2.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects3.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects1.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects2.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects3.length = 0;

gdjs.SchemaCode.eventsList5(runtimeScene);
gdjs.SchemaCode.GDSchema_9595IconObjects1.length = 0;
gdjs.SchemaCode.GDSchema_9595IconObjects2.length = 0;
gdjs.SchemaCode.GDSchema_9595IconObjects3.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects1.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects2.length = 0;
gdjs.SchemaCode.GDLabel_9595iconObjects3.length = 0;
gdjs.SchemaCode.GDColissionObjects1.length = 0;
gdjs.SchemaCode.GDColissionObjects2.length = 0;
gdjs.SchemaCode.GDColissionObjects3.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects1.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects2.length = 0;
gdjs.SchemaCode.GDLabel_9595noplus_9595iconObjects3.length = 0;
gdjs.SchemaCode.GDtextObjects1.length = 0;
gdjs.SchemaCode.GDtextObjects2.length = 0;
gdjs.SchemaCode.GDtextObjects3.length = 0;
gdjs.SchemaCode.GDTileObjects1.length = 0;
gdjs.SchemaCode.GDTileObjects2.length = 0;
gdjs.SchemaCode.GDTileObjects3.length = 0;
gdjs.SchemaCode.GDsaveObjects1.length = 0;
gdjs.SchemaCode.GDsaveObjects2.length = 0;
gdjs.SchemaCode.GDsaveObjects3.length = 0;
gdjs.SchemaCode.GDdeleteObjects1.length = 0;
gdjs.SchemaCode.GDdeleteObjects2.length = 0;
gdjs.SchemaCode.GDdeleteObjects3.length = 0;
gdjs.SchemaCode.GDName2Objects1.length = 0;
gdjs.SchemaCode.GDName2Objects2.length = 0;
gdjs.SchemaCode.GDName2Objects3.length = 0;
gdjs.SchemaCode.GDInputObjects1.length = 0;
gdjs.SchemaCode.GDInputObjects2.length = 0;
gdjs.SchemaCode.GDInputObjects3.length = 0;
gdjs.SchemaCode.GDCreateObjects1.length = 0;
gdjs.SchemaCode.GDCreateObjects2.length = 0;
gdjs.SchemaCode.GDCreateObjects3.length = 0;
gdjs.SchemaCode.GDTile2Objects1.length = 0;
gdjs.SchemaCode.GDTile2Objects2.length = 0;
gdjs.SchemaCode.GDTile2Objects3.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects1.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects2.length = 0;
gdjs.SchemaCode.GDStar_9595filterObjects3.length = 0;
gdjs.SchemaCode.GDStarObjects1.length = 0;
gdjs.SchemaCode.GDStarObjects2.length = 0;
gdjs.SchemaCode.GDStarObjects3.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects1.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects2.length = 0;
gdjs.SchemaCode.GDnormal_9595filterObjects3.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects1.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects2.length = 0;
gdjs.SchemaCode.GDDowload_9595AllObjects3.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects1.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects2.length = 0;
gdjs.SchemaCode.GDDowload_9595NoteObjects3.length = 0;


return;

}

gdjs['SchemaCode'] = gdjs.SchemaCode;
