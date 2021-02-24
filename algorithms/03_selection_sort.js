const arr = [31, 5, 6, 22, 11, 4, 3, 14, 25, 0, 2];

let count = 0;

function SelectionSort(array) {
    
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;

        for (let j = i+1; j < array.length; j++) {
            
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }

        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log(...SelectionSort(arr));
console.log(`Iterations: ${count}`);

// logarithmic time in the worst case: O(n*n)