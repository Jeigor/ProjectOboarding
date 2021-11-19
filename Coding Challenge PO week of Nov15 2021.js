/**
 * Author: Rayshawn Cooper
 * Date: 18 Nov 2021
 * 
 * 
 * JavaScript:

 *  1) Write two functions:

 *  - One to retrieve all unique substrings that start and end with a vowel.
 *  - One to retrieve all unique substrings that start and end with a consonant.
 *  The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

 *  Examples:
 *  getVowelSubstrings("apple")
 *  --> ["a", "apple", "e"]

 *  getVowelSubstrings("hmm") --> []

 *  getConsonantSubstrings("aviation")
 *  --> ["n", "t", "tion", "v", "viat", "viation"]

 *  getConsonantSubstrings("motor")
 *  -->["m", "mot", "motor", "r", "t", "tor"]

 *  Notes:
 *  - Remember the output array should have unique values.
 *  - The word itself counts as a potential substring.
 *  - Exclude the empty string when outputting the array.

 *  2) Write a function redundant that takes in a string 'str' and returns a function that returns 'str'.

 *  Examples
 *  const f1 = redundant("apple")
 *  f1() --> "apple"

 *  const f2 = redundant("pear")
 *  f2() --> "pear"

 *  const f3 = redundant("")
 *  f3() -->""

 *  Notes:
 *  Your function should return a 'function', not a string.
 */

function getVowelSubstrings(str){
    this.str = str;
    let charLoc = 0;
    let char = "";
    let word = "";    
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
    let solution = [];
    let charLocs = [];

    for (let i=0; i<vowels.length; i++){
        if (str.includes(vowels[i])){
            charLoc = str.search(vowels[i]);
            char = str.charAt(charLoc)            
            solution.push(char);
            charLocs.push(charLoc);
        }
        
    }
    for (let p=0;p<charLocs.length;p++){
        for (let n=charLocs.length;n>1;n--){
            word = str.slice(charLocs[p], charLocs[n+1])
            if(!solution.includes(word)){
                solution.push(word);
            }
        }
    }    
    solution.sort();
    console.log(solution);
}

getVowelSubstrings("apple");

function getConsonantSubstrings(str){
    this.str = str;
    let charLoc = 0;
    let char = "";
    let word = "";    
    const consonants = ["b","B","c","C","d","D","f","F","g","G","h","H","j","J","k","K","l","L","m","M","n","N","p","P","q","Q","r","R","s","S","t","T","v","V","w","W","x","X","z","Z"];
    let solution = [];
    let charLocs = [];

    for (let i=0; i<consonants.length; i++){
        if (str.includes(consonants[i])){
            charLoc = str.search(consonants[i]);
            char = str.charAt(charLoc)            
            solution.push(char);
            charLocs.push(charLoc);
            charLocs.sort();
        }
        
        
    }
    
    for (let p=0;p<charLocs.length;p++){
        for (let n=charLocs.length-1;n>0;n--){
            if(charLocs[p]<=charLocs[n]){
                word = str.slice(charLocs[p], charLocs[n]+1)
               
            }
            if(!solution.includes(word)){
                solution.push(word);
                
            }
        }
    }    
    solution.sort();
    console.log(solution);
}

getConsonantSubstrings("motor");


function redundant(str){
    this.str = str; 
    console.log(str)  
    return () => str;
}
const f1 = redundant("pear");
f1();
