// very cool upperbound problem from Pear Deck screener
// link to repo - https://github.com/peardeck/pd-interview-screener
// credit to "hourback" for this version of the solution (in pull requests)

// To run this code in your browser simply 
// 1. open up dev tools (ctrl + shft + i)
// 2. go to Console 
// 3. paste in the below code
// 4. press enter

var upperBound = function (guess) {

    var pattern = [2, 5, 10, 20, 50, 100, 200, 500, 1000];

   var continuePattern = function(pattern) {
     var nextFirstNumber = pattern[pattern.length-3];
     pattern.push(nextFirstNumber * 10, nextFirstNumber * 25, nextFirstNumber * 50);
     return pattern;
   };

   var getUpperBound = function(pattern, guess) {
     var theUpperBound;

     for (i=0; i < pattern.length; i++) {
       if (pattern[i] > guess) {
         theUpperBound = pattern[i];
         break;
       }
       if (i === pattern.length - 1) {
         pattern = continuePattern(pattern);
      }
    }
    return theUpperBound;
};

return getUpperBound(pattern, guess);

};

console.log(upperBound(2500));
