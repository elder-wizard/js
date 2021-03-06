const array = [1, 31, 5, 6, 22, 11, 4, 3, 14, 25];

let count = 0;

//SORTING NECESSARY
array.sort( (a, b) => {
    return a - b;
  }); 
//SORTING NECESSARY

function BinarySearch(item, array) {
    let start = 0,
        end = array.length,
        middle,
        found = false,
        position = -1;

    while (found === false && start <= end) {
        // debugger
        count++;
        middle = Math.floor( (start + end) / 2 );
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        } 
    }
    return position;
}

// console.log(`Index: ${BinarySearch(31, array)}, Iterations: ${count}`);

// logarithmic time in the worst case: O(log n)


// Recursive functon

function RecursiveBinarySearch(item, array, start, end) {
    let middle = Math.floor( (start + end) / 2 );
    count++;
    if (item === array[middle]) {
        return middle;
    }
    debugger
    if(item < array[middle]) {
        return RecursiveBinarySearch(item, array, start, middle -1);
    } else {
        return RecursiveBinarySearch(item, array, middle +1, end);
    }
    
}

console.log(`Index: ${RecursiveBinarySearch(22, array, 0, array.length)}, Iterations: ${count}`);
