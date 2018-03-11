var recipes ={};

var updateObjectWithKeyAndValue=function(object,key,value){
  Object.assign({},object,{[key]:value});
  return object;
};

var destructivelyUpdateObjectWithKeyAndValue=function(object,key,value){
  object[key]=value;
  return object;
};

var deleteFromObjectByKey=function(object,key){
  var clone = Object.assign({},obj);
  delete clone[key];
  return clone;
}

var destructivelyDeleteFromObjectByKey=function(object,key){
  delete object[key];
  return object;
}