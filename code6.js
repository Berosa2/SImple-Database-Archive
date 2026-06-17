gdjs.FileCode = {};
gdjs.FileCode.localVariables = [];
gdjs.FileCode.idToCallbackMap = new Map();
gdjs.FileCode.GDFile_9595logoObjects1= [];
gdjs.FileCode.GDFile_9595logoObjects2= [];
gdjs.FileCode.GDFile_9595logoObjects3= [];
gdjs.FileCode.GDFile_9595logoObjects4= [];
gdjs.FileCode.GDFile_9595logoObjects5= [];
gdjs.FileCode.GDFilesObjects1= [];
gdjs.FileCode.GDFilesObjects2= [];
gdjs.FileCode.GDFilesObjects3= [];
gdjs.FileCode.GDFilesObjects4= [];
gdjs.FileCode.GDFilesObjects5= [];
gdjs.FileCode.GDInputObjects1= [];
gdjs.FileCode.GDInputObjects2= [];
gdjs.FileCode.GDInputObjects3= [];
gdjs.FileCode.GDInputObjects4= [];
gdjs.FileCode.GDInputObjects5= [];
gdjs.FileCode.GDBackground_9595whiteObjects1= [];
gdjs.FileCode.GDBackground_9595whiteObjects2= [];
gdjs.FileCode.GDBackground_9595whiteObjects3= [];
gdjs.FileCode.GDBackground_9595whiteObjects4= [];
gdjs.FileCode.GDBackground_9595whiteObjects5= [];
gdjs.FileCode.GDBackground2Objects1= [];
gdjs.FileCode.GDBackground2Objects2= [];
gdjs.FileCode.GDBackground2Objects3= [];
gdjs.FileCode.GDBackground2Objects4= [];
gdjs.FileCode.GDBackground2Objects5= [];
gdjs.FileCode.GDBackground_9595black_9595darkObjects1= [];
gdjs.FileCode.GDBackground_9595black_9595darkObjects2= [];
gdjs.FileCode.GDBackground_9595black_9595darkObjects3= [];
gdjs.FileCode.GDBackground_9595black_9595darkObjects4= [];
gdjs.FileCode.GDBackground_9595black_9595darkObjects5= [];


gdjs.FileCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString(), gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString()) - 4, 99)).includes("."));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString()).startsWith("."));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Files"), gdjs.FileCode.GDFilesObjects4);
{for(var i = 0, len = gdjs.FileCode.GDFilesObjects4.length ;i < len;++i) {
    gdjs.FileCode.GDFilesObjects4[i].getBehavior("Text").setText(gdjs.FileCode.GDFilesObjects4[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString() + "\n"));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString()).includes("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Files"), gdjs.FileCode.GDFilesObjects4);
{for(var i = 0, len = gdjs.FileCode.GDFilesObjects4.length ;i < len;++i) {
    gdjs.FileCode.GDFilesObjects4[i].getBehavior("Text").setText(gdjs.FileCode.GDFilesObjects4[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString() + "/\n"));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString()).startsWith("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Files"), gdjs.FileCode.GDFilesObjects3);
{for(var i = 0, len = gdjs.FileCode.GDFilesObjects3.length ;i < len;++i) {
    gdjs.FileCode.GDFilesObjects3[i].getBehavior("Text").setText(gdjs.FileCode.GDFilesObjects3[i].getBehavior("Text").getText() + (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString() + "/\n"));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


};gdjs.FileCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 23);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Files"), gdjs.FileCode.GDFilesObjects3);
{for(var i = 0, len = gdjs.FileCode.GDFilesObjects3.length ;i < len;++i) {
    gdjs.FileCode.GDFilesObjects3[i].getBehavior("Text").setText(gdjs.FileCode.GDFilesObjects3[i].getBehavior("Text").getText() + ("..."));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 23);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FileCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.FileCode.eventsList2 = function(runtimeScene) {

{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.FileCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


};gdjs.FileCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.fileSystem.readdir("C:\\", runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.FileCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.FileCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FileCode.GDFile_9595logoObjects1.length = 0;
gdjs.FileCode.GDFile_9595logoObjects2.length = 0;
gdjs.FileCode.GDFile_9595logoObjects3.length = 0;
gdjs.FileCode.GDFile_9595logoObjects4.length = 0;
gdjs.FileCode.GDFile_9595logoObjects5.length = 0;
gdjs.FileCode.GDFilesObjects1.length = 0;
gdjs.FileCode.GDFilesObjects2.length = 0;
gdjs.FileCode.GDFilesObjects3.length = 0;
gdjs.FileCode.GDFilesObjects4.length = 0;
gdjs.FileCode.GDFilesObjects5.length = 0;
gdjs.FileCode.GDInputObjects1.length = 0;
gdjs.FileCode.GDInputObjects2.length = 0;
gdjs.FileCode.GDInputObjects3.length = 0;
gdjs.FileCode.GDInputObjects4.length = 0;
gdjs.FileCode.GDInputObjects5.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects1.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects2.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects3.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects4.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects5.length = 0;
gdjs.FileCode.GDBackground2Objects1.length = 0;
gdjs.FileCode.GDBackground2Objects2.length = 0;
gdjs.FileCode.GDBackground2Objects3.length = 0;
gdjs.FileCode.GDBackground2Objects4.length = 0;
gdjs.FileCode.GDBackground2Objects5.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects1.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects2.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects3.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects4.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects5.length = 0;

gdjs.FileCode.eventsList3(runtimeScene);
gdjs.FileCode.GDFile_9595logoObjects1.length = 0;
gdjs.FileCode.GDFile_9595logoObjects2.length = 0;
gdjs.FileCode.GDFile_9595logoObjects3.length = 0;
gdjs.FileCode.GDFile_9595logoObjects4.length = 0;
gdjs.FileCode.GDFile_9595logoObjects5.length = 0;
gdjs.FileCode.GDFilesObjects1.length = 0;
gdjs.FileCode.GDFilesObjects2.length = 0;
gdjs.FileCode.GDFilesObjects3.length = 0;
gdjs.FileCode.GDFilesObjects4.length = 0;
gdjs.FileCode.GDFilesObjects5.length = 0;
gdjs.FileCode.GDInputObjects1.length = 0;
gdjs.FileCode.GDInputObjects2.length = 0;
gdjs.FileCode.GDInputObjects3.length = 0;
gdjs.FileCode.GDInputObjects4.length = 0;
gdjs.FileCode.GDInputObjects5.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects1.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects2.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects3.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects4.length = 0;
gdjs.FileCode.GDBackground_9595whiteObjects5.length = 0;
gdjs.FileCode.GDBackground2Objects1.length = 0;
gdjs.FileCode.GDBackground2Objects2.length = 0;
gdjs.FileCode.GDBackground2Objects3.length = 0;
gdjs.FileCode.GDBackground2Objects4.length = 0;
gdjs.FileCode.GDBackground2Objects5.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects1.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects2.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects3.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects4.length = 0;
gdjs.FileCode.GDBackground_9595black_9595darkObjects5.length = 0;


return;

}

gdjs['FileCode'] = gdjs.FileCode;
