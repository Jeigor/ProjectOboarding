/*
* Author: Raysahwn Cooper
* Date: 12 November 2021

JavaScript:

1) This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. 

Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples:

trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.

Notes
Each movement is an integer (whole number).


*/




    function trackRobot(steps){
        this.steps = steps;
        x = 0;
        y = 0;
        heading = 0;
  
        for(let i = 0; i < steps.length; i++){
            switch(heading){
                case 0:
                    y += steps[i];
                    break;
                case 1:
                    x += steps[i];
                    break;
                case 2:
                    y -= steps[i];
                    break;
                case 3:
                    x -= steps[i];
                    break;
            }
            
            heading = (heading + 1) % 4;
            
        }
        finalDestination = [x,y];
        console.log(finalDestination);
        return finalDestination;
    }

    

trackRobot([-10, 20, 10]);



/*
2) Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents $ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

- product: the product name that the user selected.
- change: an array of coins (can be empty, must be sorted in descending order).

Examples:
vendingMachine(products, 200, 7) --> { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) --> "Enter a valid product number"

vendingMachine(products, 90, 1) --> "Not enough money for this product"

Notes:

- If 'productNumber' is invalid (out of range) you should return the string: "Enter a valid product number".
- If 'money' is not enough to buy a certain product you should return the string: "Not enough money for this product".
- If there's no change, return an empty array as the 'change'.
*/






function vendingMachine(money, productNumber) {
    this.money = money;
    this.productNumber = productNumber;
    const inventory = [
        {name: "Chips", productNumber: 1, cost: 150},
        {name: "Pop-Tarts", productNumber: 2, cost: 400},
        {name: "Pretzels", productNumber: 3, cost: 100},
        {name: "Nuts", productNumber: 4, cost: 70},
        {name: "Cookies", productNumber: 5, cost:200},
        {name: "Gummy Bears", productNumber: 6, cost:350},
        {name: "Crackers", productNumber: 7, cost:120}
    ];
    const coins = [500, 200, 100, 50, 20, 10];
    let yourChange = [0];
    let selection = "";
    let totalChange = 0;
    let productAndChange = {};
    console.log("Make a selection from 1-7.");

    switch(productNumber){
        case 1:
            if(money >= inventory[0].cost){
                selection = "You selected: "+inventory[0].name+" "+inventory[0].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[0].cost && totalChange < money-inventory[0].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[0].cost && totalChange + coins[i] <= money-inventory[0].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                       
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[0].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 2:
            if(money >= inventory[1].cost){
                selection = "You selected: "+inventory[1].name+" "+inventory[1].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[1].cost && totalChange < money-inventory[1].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[1].cost && totalChange + coins[i] <= money-inventory[1].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                        
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[1].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 3:
            if(money >= inventory[2].cost){
                selection = "You selected: "+inventory[2].name+" "+inventory[2].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[2].cost && totalChange < money-inventory[2].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[2].cost && totalChange + coins[i] <= money-inventory[2].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                        
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[2].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 4:
            if(money >= inventory[3].cost){
                selection = "You selected: "+inventory[3].name+" "+inventory[3].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[3].cost && totalChange < money-inventory[3].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[3].cost && totalChange + coins[i] <= money-inventory[3].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                       
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[3].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 5:
            if(money >= inventory[4].cost){
                selection = "You selected: "+inventory[4].name+" "+inventory[4].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[4].cost && totalChange < money-inventory[4].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[4].cost && totalChange + coins[i] <= money-inventory[4].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                        
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[4].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 6:
            if(money >= inventory[5].cost){
                selection = "You selected: "+inventory[5].name+" "+inventory[5].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[5].cost && totalChange < money-inventory[5].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[5].cost && totalChange + coins[i] <= money-inventory[5].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                        
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[5].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break; 
        case 7:
            if(money >= inventory[6].cost){
                selection = "You selected: "+inventory[6].name+" "+inventory[6].cost;
                console.log(selection);
                                
                while (totalChange != money-inventory[6].cost && totalChange < money-inventory[6].cost){
                    yourChange.pop();
                   
                    for (let i=0; i<coins.length; i++){
                        
                        if(totalChange < money-inventory[6].cost && totalChange + coins[i] <= money-inventory[6].cost){
                            yourChange.push(coins[i]);
                        }
                        totalChange = 0;
                        for(let n=0;n<yourChange.length;n++){
                            totalChange += yourChange[n];
                        }
                        
                        
                    }
                    
                    
                }
                productAndChange = {name: inventory[6].name, change: yourChange.sort(function(b, a){return a - b})};
                console.log("product: " + productAndChange.name +" change: " + productAndChange.change);
            }else{
                console.log("Not enough money.")
            }
            break;        
        default:
            selection = "Enter a valid selection";
            console.log(selection);
            break;
    }
    return productAndChange;
}

vendingMachine(400,7);
