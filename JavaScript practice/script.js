

bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr;
}

insertionSorting=(arr)=>{
    for(let k=1; k < arr.length; k++){
        let n=k
        while(n>0 && arr[n-1]>arr[n]){
            let temp = arr[n-1]
            arr[n-1]= arr[n]
            arr[n]=temp

            n--
        }
    }
    return arr;
}


let array = [1,5,3,6,8,2,21,9];

const swap =(arr, i,j)=>{
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

const partition=(arr,left,right)=>{
    let pivot = arr[right]
    let i=left-1
    for(j=left; j<arr.length; j++){
        if(arr[j]< pivot){
            i++;
            swap(arr, i,j)
        }
    }
    swap(arr,i+1,right)
    return i+1
}

const quickSort=(arr, left=0, right = arr.length)=>{
    if(left<right){
        let pi = partition(arr,left,right)

        quickSort(arr,left, pi-1)
        quickSort(arr, pi+1,right)
    }
    return arr
}


// console.log(`Array before Sorting: ${array}`)
// console.log(`Array after Bubble Sorting: ${bubbleSort(array)}`)

// console.log(`Array before Sorting: ${array}`)
// console.log(`Array after Insertion Sorting: ${insertionSorting(array)}`)

console.log(`Array before Sorting: ${array}`)
console.log(`Array after quickSort Sorting: ${quickSort(array)}`)

