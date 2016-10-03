// A fun and simple example with Math.random() and Math.floor(x) - (where x is a random computer generated number.)

// To run this code in your browser simply 
// 1. open up dev tools (ctrl + shft + i)
// 2. go to Console 
// 3. paste in the below code
// 4. press enter

var slaying = true;
var youHit = Math.floor(Math.random() * 2); 
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0; 

while(slaying) { 
    if(youHit) {
        console.log("Congratulations! You hit the dragon!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("Dragon slewn!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2); 
        }
    }
    else {
        console.log("rutro. you lose.");
    }
    slaying = false;
}
