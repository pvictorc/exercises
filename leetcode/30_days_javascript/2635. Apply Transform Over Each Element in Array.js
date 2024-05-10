/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    let array2 = []
    // arr.forEach( (element) => array2.push( fn(parseInt(element)) ));

    for (i=0; i<arr.length; i++){
        array2.push( fn(arr[i],i) )
        // console.log(array2[i])
    }
    return (array2)
};