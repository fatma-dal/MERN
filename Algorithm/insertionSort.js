// we loop throught the array till the end of the array(i)

//we marke the first item as sorted 
//we start looping from the  and compare  second element in the array arr[j+1]
// if arr[i]>arr[j+1] we swap and we keep comparing arr[j+1] with arr[j-i]


const arr=[2,15,18,10,9]

const insertionSort = arr => {
    for (let i=0 ; i< arr.length-1 ;i++){
        let temp = arr[i]
        console.log (i)
        for (let j=i+1; j>=0; j--) {
            console.log(j+'******')
            if (arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
            else{
                arr[i]=arr[i]
            } 
        }
    }
    return arr
}
console.log(insertionSort(arr))


//*********************************************************** */
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]; // Store the current element
        let j;

        // Shift elements to the right to make space for temp
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];  
        }

        arr[j + 1] = temp; // Insert temp in its correct position
    }
    return arr;
};

const arr = [2, 15, 18, 10, 9];
console.log(insertionSort(arr));
