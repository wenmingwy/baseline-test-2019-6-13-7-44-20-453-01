'use strict';

function collectSameElements(collectionA, collectionB) {
	
	
for(var k in collectionA){  //通过定义一个局部变量k遍历获取到了map中所有的key值
 
  var docList=collectionA[k]; //获取到了key所对应的value的值！ 
}

	
	
	var collectionB01 = new Array();
		collectionB01 = Object.values(collectionB)[0];	
var result = new Array();
var sameCount = 0;
 for(var i=0;i<collectionA.length;i++){
    var tempA = collectionA[i].key
    for(var j=0;j<collectionB01.length;j++){
        var tempB = collectionB01[j];
        if(tempA == tempB){
                result[sameCount] = tempB;
                sameCount++;
        }
    }
	
}
return result;
}