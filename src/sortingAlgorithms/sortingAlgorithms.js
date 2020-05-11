
  
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {  
    animations.push([i, i]);
    animations.push([i, i]);
    
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  let n=array.length;
  if (n <= 1) return array;
  quickSortHelper(array,0,n-1,animations);
  return animations;
}

function quickSortHelper(mainArray,low,high,animations) {
  if (low < high){
    let part = partition(mainArray,low,high,animations);
    if (low<part-1){
      quickSortHelper(mainArray,low,part-1,animations);
    }
    if (part<high){
      quickSortHelper(mainArray,part,high,animations);
    }
  }
}

function partition(mainArray,low,high,animations) {
  let pivot = mainArray[Math.floor((high+low)/2)]; 
  let i = low;
  let j = high;  
     
  while (i<=j){
    while (mainArray[i] < pivot) {
      i++;
    }
    while (mainArray[j] > pivot) {
      j--;
    }
    if (i <= j) {
      animations.push([i,j]);
      animations.push([i,j]);
      animations.push([i, mainArray[j]]);
      animations.push([j,j]);
      animations.push([j,j]);
      animations.push([j, mainArray[i]]);
      let temp=mainArray[i];
      mainArray[i]=mainArray[j];
      mainArray[j]=temp;
      i++;
      j--;
    }
  }
  return i;
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  for (let v=0;v<array.length-2;v++){
    for (let i=0;i<array.length-1-v;i++){
      animations.push([i,i+1]);
      animations.push([i,i+1]);
      if (array[i]>array[i+1]){
        animations.push([i, array[i+1]]);
	animations.push([i,i+1]);
      	animations.push([i,i+1]);
        animations.push([i+1,array[i]]);
        let temp=array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
      } else {
        animations.push([i, array[i]]);
      }
    }
  }
  return animations;
}


export function getHeapSortAnimations(array) {
  const animations = [];
  let n=array.length;
  if (n <= 1) return array;

  for (let i=Math.round(n/2)-1;i>=0;i--){
    treeHeap(array, n, i,animations); 
  }  
   // One by one extract an element from heap 
  for (let i=n-1;i>0; i--){
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, array[i]]);
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i,array[0]]);
    let temp=array[i];
    array[i]=array[0];
    array[0]=temp;
    treeHeap(array, i, 0,animations);  
    } 
  
  return animations;
}

function treeHeap(array,n,i,animations){
  let largest=i;
  let left=2*i+1;
  let right=2*i+2;
  
  if (left<n && array[left]>array[largest]){
    largest=left;
  }
  if (right<n && array[right]>array[largest]){
    largest=right;
  }

  if (largest!==i){
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([largest,array[i]]);
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i,array[largest]]);
    let temp=array[i];
    array[i]=array[largest];
    array[largest]=temp;
    treeHeap(array,n,largest,animations);
  } 
}


