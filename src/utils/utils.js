function binarySearch(items,left,right,filterElement){
    //check right >= left, right should be greater than or equals left
    //left : leftIndex, right:rightIndex | not element
    if(right>=left){
        let midIndex = left + (right - left)/2;
        //if mid element equals to filterElement , found, return index;
        if(items[midIndex] === filterElement) return midIndex;
        // if mid element greater than filterElement go to the left half
        if(items[midIndex] > filterElement) return binarySearch(items,left,midIndex-1,filterElement)
        // if mid element lesser than the filter element go to the right array
        if(items[midIndex] < filterElement) return binarySearch(items,midIndex+1,right,filterElement);
    }
    else return -1;
}

module.exports = binarySearch
// //check right >= left, right should be greater than or equals left
//     //left : leftIndex, right:rightIndex | not element
//     if(right>=left){
//         let midIndex = left + (right - left)/2;
//         //if mid element equals to filterElement , found, return index;
//         if(items[midIndex] === filterElement) return midIndex;
//         // if mid element greater than filterElement go to the left half
//         if(items[midIndex] > filterElement) return this.binarySearch(items,left,midIndex-1,filterElement)
//         // if mid element lesser than the filter element go to the right array
//         if(items[midIndex] < filterElement) return this.binarySearch(items,midIndex+1,right,filterElement);
//     }
//     else return -1;


