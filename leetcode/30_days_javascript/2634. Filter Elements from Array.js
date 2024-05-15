/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 * Example without using .filter method
 */
var filter = function(arr, fn) {
    filteredArr = []

    for (i=0;i<arr.length;i++){
        if ( Boolean ( fn(arr[i],i) ) ){
            filteredArr.push(arr[i])
        }
    }
    return (filteredArr)
};