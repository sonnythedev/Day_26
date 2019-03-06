/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "map()" method.

    Samples:
    [1, 2, 3].solution(e => `${e}`)                == ['1', '2', '3']
    ['1', '2', '3'].solution(e => parseInt(e))     == [1, 2, 3]
    [8, 3, 6].solution((e, i) => `${i}: ${e * 2}`) == ['0: 16', '1: 6', '2: 12']
*/

// solution1



Array.prototype.myMap=function(callback){
    //console.log(this);
    let output=[];
    for(let i=0; i<this.length; i++){
        output.push(callback(this[i],i,this));
    }
    return output;
}



/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test

let arr=['1','2','3','4','5','6','7'];
//arr=['a','b','c','d','e','f','g'];

// test solution1()

console.log(arr.myMap(e=>parseInt(e)+5));


// test default map()
console.log(arr.map(e=>parseInt(e)+5));


/*
************************* PERFORMANCE RESULTS *************************

*/