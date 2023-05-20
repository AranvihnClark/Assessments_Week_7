/*

***********************************************************
************************** Step 2 *************************
***********************************************************

Work through the following problems in Javascript (you have seen these problems before).
Create a new file for your code.
When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.
*/

//[--------------------------------------------------------]
//[------------------------Sum Zero------------------------]
//[--------------------------------------------------------]

// First we create the function addToZero.
const addToZero = arr => {
    
    // All we need to do is add up the values of every combination possible in the array and return true or false if there is a sum that equals 0 or not.
    // Since we need to iterate through the entire array at least once (because we need to check every combination of every index), we need a loop of some sort.
    for (let i = 0; i < arr.length; i++) {

        // We create a count to track the index of the next value in the array. Hence, "index + 1"
        let count = i + 1;

        // The second reason why we created a count variable was so that we can use a while loop that will be O(log(n)) - hopefully anyway.
        // This makes the total runtime complexity to be O(nLog(n)) because we won't always need to iterate through all of our array again.
        // As soon as we find a match where the sum = 0, we're done.
        while (count < arr.length) {
    
            // Then we check to see if the sum === 0 and return what's needed.
            if ((arr[i] + arr[count]) === 0) {
                return console.log(true);
            }

            // If the sum of the two values don't equal 0, we increase the count to check the next value
            count++
        }
    }

    // Otherwise, we will end up returning the default result answer, false.
    return console.log(false);
}

addToZero([]);      // False
addToZero([1]);     // False
addToZero([1, 2, 3]);   // False
addToZero([1, 2, 3, -2]);   // True

// ***** As state above in my comments on my code, this should be O(nLog(n))
//       n = for loop (because we will always iterate through the entire array)
//       Log(n) = while loop (because we only iterate what we need before returning what we found.)
//       I do, however, feel that the worst case scenario is that we have to go iterate through the array twice to reach our conclusion.
//       If so, then this would actually be O(n^2). But maybe I'm understanding this incorrectly.

// ***** I am not too familiar/confident with space complexity.
//       I think that this is at O(n) because we are linearly incrementing count higher and higher each iteration.


//[-----------------------------------------------------------------]
//[------------------------Unique Characters------------------------]
//[-----------------------------------------------------------------]

// First we create the function.
const hasUniqueChars = string => {
    
    // We will first lowercase the string so that we can easily evaluate all letters equally.
    string = string.toLowerCase();

    // Thankfully, we have the Set object we can use to store only unqiue values - also why we lowercase the string above.);
    return console.log((new Set(string).size === string.length));
}

hasUniqueChars("Monday");   // True
hasUniqueChars("Moonday");  // False

// ***** Thankfully creating Set object is only O(n). And since all we did was create it to evaluate its length, this function is O(n).
// ***** The space complexity should be O(n) as well but maybe I'm wrong.


//[----------------------------------------------------------------]
//[------------------------Pangram Sentence------------------------]
//[----------------------------------------------------------------]

// First we create the function.
const isPangram = sentence => {
    
    // I don't want to create an alphabet array but since I wouldn't normally, I will today.
    let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    // One thing to keep in mind is to lowercase everything in our sentence parameter.
    // Another good idea is to remove spaces to lower the amount of indexes we have to iterate through.
    // Ultimately had to use regex, though not covered during foundations, I just didn't know an easier way to get rid of special characters and spaces.
    let string = sentence.toLowerCase().replace(/[^a-z_]/gi, ``);

    // Then we will run a for-style loop to check each value of our array against our parameter.
    // We check inside of the array that a letter occurs once; meaning we need a counter variable.
    for (let i = 0; i < alphabet.length; i++) {
        let count = 0;

        // We create a for loop, using the count variable above to iterate through the letters in our string.
        // If a letter does show up we can it means we can break the while loop below and move on to the next letter of our alphabet.
        while (count < string.length) {
            if (string[count].includes(alphabet[i])) {
                break;
            } 
            
            // Increase the counter to check the rest of the string to see if the current letter exists.
            count++;

            // If whenever a letter doesn't exist in our sentence parameter, we can cut the loop short and return false.
            if (count === string.length) {
                return console.log(false);
            }
        }
    }

    // If not, we return true after iterating through the array.
    return console.log(true);
}

isPangram("The quick brown fox jumps over the lazy dog!");  // True
isPangram("I like cats, but not mice"); // False

// ***** In the case of this, I feel that the ultimate goal is iterate through two different arrays in a nested loop.
//       As such, the time complexity should most likely be O(n^2) since the worst case scenary is our ideal scenary.
//       Typing it out, it makes my code sound very inefficient haha.
// ***** The space complexity is O(n).


//[------------------------------------------------------------]
//[------------------------Longest Word------------------------]
//[------------------------------------------------------------]

// As always, we create the function first.
const findLongestWord = arr => {

    // We can use the Sort method to solve this problem because it allows us to implement a call back function (though we will just write it inside).
    // Ultimate not too sure how this works as I'm not too familiar with Javascript's Sort method (other than it uses Quick Sort algorithm).
    // This ultimately sorts the array from shortest to longest. Then we just need to grab the last item in the array and print out its length.
    return console.log(arr.sort((a, b) => a.length - b.length)[arr.length - 1].length);
}

findLongestWord(["hi", "hello", "destiny", "four", "redemption", "lunch"]); // 10

// ***** Normally wouldn't do this in one line as it's hideous to look at. But I felt like it was fine.
//       The time complexity of this should be O(nLog(n)).
// ***** The space complexity is O(n).