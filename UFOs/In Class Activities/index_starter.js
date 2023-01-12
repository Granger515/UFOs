// Array of movie ratings
var movieScores = [
    4.4,
    3.3,
    5.9,
    8.8,
    1.2,
    5.2,
    7.4,
    7.5,
    7.2,
    9.7,
    4.2,
    6.9
  ];
  
  // Starting a rating count
  var sum = 0;
  
  // Arrays to hold movie scores
  var goodMovieScores = [];
  var okMovieScores = [];
  var badMovieScores = [];
  
//start for loop
for (var i = 0; i < movieScores.length; i++) {

  //Sum Scores
  var sum_ = movieScores[i];
  sum += sum_;

  //The good
  if (score > 7) {goodMovieScores.push(score);}
  
  //The bad
  else if (score <= 7 && score > 5) {okMovieScores.push(score);}
  
  //The ugly
  else {badMovieScores.push(score);}

}

//Calculate Average
var ave = sum_ / movieScores.length;

console.log(`There are ${goodMovieScores.length} good movies.`);
console.log(`There are ${okMovieScores.length} ok movies.`);
console.log(`There are ${badMovieScores.length} bad movies.`);
console.log(`The average movie rating is ${ave}.`);

