var recipes ={};

var updateObjectWithKeyAndValue=function(object,key,value){
  Object.assign({},object,{[key]:value});
  return object;
}

