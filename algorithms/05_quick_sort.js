const arr = [31, 5, 6, 22, 11, 4, 3, 14, 25, 0, 2];

let count = 0;

function QuickSort(array) {
    debugger;
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2),
        pivot = array[pivotIndex],
        less = [],
        greater = [];
        for (let i = 0; i < array.length; i++) {
            count++;
            if (i === pivotIndex) 
                continue;
            if (array[i] < pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
            
        }
        return [...QuickSort(less), pivot, ...QuickSort(greater)];
}

console.log(...QuickSort(arr));
console.log(`Iterations: ${count}`);

// logarithmic time in the worst case: O(log₂n * n)