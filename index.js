function bubbleSort(arr) {
    
    var tempVar;
    //var notSwap = true;
    
    for (var i = 0; i < arr.length; i++) {
        
        var notSwap = true;
        for (var j = 0; j < arr.length - i - 1; j++) {
            
            tempVar = arr[j];
            
            if (tempVar > arr[j+1] && arr[j+1] !== undefined) {
                arr[j] = arr[j+1];
                arr[j+1] = tempVar;
                notSwap = false;
            }
            
        }
        
        if (notSwap == true) {
            break;
        }
    }
    
    return arr;
}

function selectionSort(arr) {
  
    var minimum;
    var minIndex;
  
    for (var i = 0; i < arr.length; i++) {
      var swap = false;
      minimum = arr[i];
      
      for (var j = i; j < arr.length; j++) {
        
        if (minimum > arr[j]) {
          
          minimum = arr[j];
          minIndex = j
          swap = true;
          
        }
        
      }
      
      if (swap == true){
        arr[minIndex] = arr[i];
        arr[i] = minimum;
      }
      
    }
    
    return arr;
    
}

module.exports = {
    selectionSort: selectionSort,
    bubbleSort: bubbleSort
}