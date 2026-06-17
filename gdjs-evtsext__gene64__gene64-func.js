
if (typeof gdjs.evtsExt__Gene64__gene64 !== "undefined") {
  gdjs.evtsExt__Gene64__gene64.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gene64__gene64 = {};
gdjs.evtsExt__Gene64__gene64.idToCallbackMap = new Map();


gdjs.evtsExt__Gene64__gene64.userFunc0xdb35e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const path = eventsFunctionContext.getArgument("Path");

try {
    const fs = require("fs");

    const fileBuffer = fs.readFileSync(path);

    const base64 =
        "data:image/png;base64," +
        fileBuffer.toString("base64");

    eventsFunctionContext.returnValue = base64;

} catch(err) {
    console.error(err);
    eventsFunctionContext.returnValue = "";
}
};
gdjs.evtsExt__Gene64__gene64.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gene64__gene64.userFunc0xdb35e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Gene64__gene64.func = function(runtimeScene, Path, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gene64"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gene64"),
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
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
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
if (argName === "Path") return Path;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gene64__gene64.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gene64__gene64.registeredGdjsCallbacks = [];