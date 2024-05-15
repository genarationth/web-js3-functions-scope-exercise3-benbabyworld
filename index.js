// // ### Exercise #3.1

// // Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
// // Can you help her calculate her costs?

const totalPay = function(a) {
let total = a + (a*0.001);
console.log(total);

}

// totalPay(3);


// // ### Exercise #3.2

// // #### Part 1

// // Ed would like a way to input 3 names of his friends.
// // The output should be a console greeting to his friends saying:

// // `Welcome {name1}, {name2}, {name3}.`

let edsFriends = ['Ben', 'Goil', 'Jene'];
let output = [];

let greeting = function() {
    output.push(edsFriends[0]);
    output.push(edsFriends[1]);
    output.push(edsFriends[2]);
    console.log('Welcome ' + output[0] + ', ' + output[1] + ' and ' + output[2] + '.') ;
}

greeting();


// // #### Part 2

// // Ed would like to create a function that takes in a birth year and returns the age.

// // i.e. 1990 returns 30

let edsAge = function(birthyear) {
    let calAge = 2024 - birthyear;
    console.log(calAge); 
}

edsAge(1995);


// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

let edsFriendsAge = [{name: 'Ben', age: 24}, {name: 'Goil', age: 25}, {name: 'Jene', age: 28}];
let greetings = function() {
    console.log("Welcome " + edsFriendsAge[0].name + '. ' + "You're " + edsFriendsAge[0].age + ' years old.');
    console.log("Welcome " + edsFriendsAge[1].name + '. ' + "You're " + edsFriendsAge[1].age + ' years old.');
    console.log("Welcome " + edsFriendsAge[2].name + '. ' + "You're " + edsFriendsAge[2].age + ' years old.');
}
greetings()

// ### Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
    // #### Part 1
// A student passes if they have a score greater than or equal to 5.
// Create a function that returns a boolean true or false.

let isPass = function(score) {
    if (score >= 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPass(4);


// #### Part 2

// A student has an excellent grade if they score higher than 8.
// Add on to your function to print out "Excellent" for scores greater than 8.


let excellent = function(a) {
    if (a > 8) {
        console.log('Excellent');
    } else {
        console.log('You tried your best!');
    }
}
excellent(11)



// #### Part 3

// A student has a perfect grade if their score is 11.
// Add on to your function to print out "Perfect" for a score of 11.


let congrats = function(a) {
    if (a === 11) {
        console.log('Perfect');
    } else {
        console.log('You tried your best!');
    }
}
congrats(11)


