gdjs.AICode = {};
gdjs.AICode.localVariables = [];
gdjs.AICode.idToCallbackMap = new Map();


gdjs.AICode.eventsList0 = function(runtimeScene) {

};

gdjs.AICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.AICode.eventsList0(runtimeScene);


return;

}

gdjs['AICode'] = gdjs.AICode;
