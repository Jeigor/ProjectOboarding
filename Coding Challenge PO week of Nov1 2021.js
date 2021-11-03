/**
* Author: Raysahwn Cooper
* Date: 3 November 2021
* 1) Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

* Examples
* zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) --> [1, 2, 4, 5, 0, 0, 0]

* zeroesToEnd([0, 0, 2, 0, 5]) --> [2, 5, 0, 0, 0]
* 
* zeroesToEnd([4, 4, 5]) --> [4, 4, 5]

* zeroesToEnd([0, 0]) --> [0, 0]
* Notes:

* -You must mutate the original array.
* -Keep the relative order of the non-zero elements the same.


* 2) Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

* Examples
* shiftToRight(80, 3) --> 10

* shiftToRight(-24, 2) --> -6

* shiftToRight(-5, 1) --> -3

* shiftToRight(4666, 6) --> 72

* shiftToRight(3777, 6) --> 59

* shiftToRight(-512, 10) --> -1

* Notes
* -There will be no negative values for the second parameter y.
* -This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
**/


function zerosToEnd(items){
    this.items = items;    
    let zeros = [];
    for (let i=0; i<items.length;i++){        
        if(items[i]===0){            
            zeros = zeros.concat(items.splice(i,1));
            i--;
        }

    }
    items = items.concat(zeros);
    console.log(items);    
}

function shiftToRight(value, numShifts){
    this.value = value;
    this.numShifts = numShifts;
    
    for (let i= numShifts; i>0; i--){
        value = Math.floor(value /= 2);
    }
    console.log(value);
}

zerosToEnd([1, 2, 0, 0, 4, 0, 5]);
shiftToRight(4666, 6);