gdjs.TablesCode = {};
gdjs.TablesCode.localVariables = [];
gdjs.TablesCode.idToCallbackMap = new Map();
gdjs.TablesCode.GDBackgroundObjects1= [];
gdjs.TablesCode.GDBackgroundObjects2= [];
gdjs.TablesCode.GDTableslist_9595textObjects1= [];
gdjs.TablesCode.GDTableslist_9595textObjects2= [];
gdjs.TablesCode.GDBackObjects1= [];
gdjs.TablesCode.GDBackObjects2= [];
gdjs.TablesCode.GDOptionObjects1= [];
gdjs.TablesCode.GDOptionObjects2= [];
gdjs.TablesCode.GDOption2Objects1= [];
gdjs.TablesCode.GDOption2Objects2= [];
gdjs.TablesCode.GDInformationObjects1= [];
gdjs.TablesCode.GDInformationObjects2= [];


gdjs.TablesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TablesCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TablesCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.TablesCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TablesCode.GDBackObjects1[k] = gdjs.TablesCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.TablesCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Table", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-N", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Table", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-D", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(8));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Table-" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "-" + runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), "Content", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tableslist_text"), gdjs.TablesCode.GDTableslist_9595textObjects1);
{for(var i = 0, len = gdjs.TablesCode.GDTableslist_9595textObjects1.length ;i < len;++i) {
    gdjs.TablesCode.GDTableslist_9595textObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " - Table Viewer - ID: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Information"), gdjs.TablesCode.GDInformationObjects1);
{for(var i = 0, len = gdjs.TablesCode.GDInformationObjects1.length ;i < len;++i) {
    gdjs.TablesCode.GDInformationObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}
}

}


};

gdjs.TablesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TablesCode.GDBackgroundObjects1.length = 0;
gdjs.TablesCode.GDBackgroundObjects2.length = 0;
gdjs.TablesCode.GDTableslist_9595textObjects1.length = 0;
gdjs.TablesCode.GDTableslist_9595textObjects2.length = 0;
gdjs.TablesCode.GDBackObjects1.length = 0;
gdjs.TablesCode.GDBackObjects2.length = 0;
gdjs.TablesCode.GDOptionObjects1.length = 0;
gdjs.TablesCode.GDOptionObjects2.length = 0;
gdjs.TablesCode.GDOption2Objects1.length = 0;
gdjs.TablesCode.GDOption2Objects2.length = 0;
gdjs.TablesCode.GDInformationObjects1.length = 0;
gdjs.TablesCode.GDInformationObjects2.length = 0;

gdjs.TablesCode.eventsList0(runtimeScene);
gdjs.TablesCode.GDBackgroundObjects1.length = 0;
gdjs.TablesCode.GDBackgroundObjects2.length = 0;
gdjs.TablesCode.GDTableslist_9595textObjects1.length = 0;
gdjs.TablesCode.GDTableslist_9595textObjects2.length = 0;
gdjs.TablesCode.GDBackObjects1.length = 0;
gdjs.TablesCode.GDBackObjects2.length = 0;
gdjs.TablesCode.GDOptionObjects1.length = 0;
gdjs.TablesCode.GDOptionObjects2.length = 0;
gdjs.TablesCode.GDOption2Objects1.length = 0;
gdjs.TablesCode.GDOption2Objects2.length = 0;
gdjs.TablesCode.GDInformationObjects1.length = 0;
gdjs.TablesCode.GDInformationObjects2.length = 0;


return;

}

gdjs['TablesCode'] = gdjs.TablesCode;
