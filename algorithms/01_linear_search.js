const array = [1, 31, 5, 6, 22, 11, 4, 3, 14, 25];

let count = 0;

// function LinearSearch(item, A) {
//     // debugger
//     var n = A.length, 
//         i = 0;

//     A[n] = item;

//     while (A[i] !== item) i++;

//     if (i < n) console.log(i);
//     else return -1;
// }

// LinearSearch(222, array);

function LinearSearch(item, array) {
    for(let i = 0; i < array.length; i++) {
        count++;
        if(array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(`Index: ${LinearSearch(22, array)}, Iterations: ${count}`);

// logarithmic time in the worst case: O(n)
