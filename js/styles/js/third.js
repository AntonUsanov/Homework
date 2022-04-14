/*let price = 20;
let value = "hryvnas";
let ready = price + " " + value;

switch (price + " " + value) {
    case "10 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
    case "25 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
    case "15 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
    case "100 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
    case "20 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
    case "2 hryvnas":
        console.log("apple price",  price + " " + value);
        break;
        default:
            console.log("not found",  price + " " + value);

};*/

let userAge = prompt('How old are you?', 'your age');

/*if (userAge >=0 && userAge<=11) {
    alert('You are a child');
} else if (userAge>11 && userAge<=17) {
    alert('You are teenager');
} else if (userAge>17 && userAge<=59) {
    alert('You are adult');
} else if (userAge>59) {
    alert('You are retired');
}*/

switch (true) {
    case userAge >=0 && userAge<=11:
        console.log( "User is a child" );
        break;
    case userAge>11 && userAge<=17:
        console.log('User is a teenager');
        break;
    case userAge>17 && userAge<=59:
        console.log('User is an adult');
        break;
    case userAge>59 && userAge<=100:
        console.log('User is retired');
        break;
    default:
        console.log('age undefined');
};

let numb = prompt('Choose number from 0 to 9', 'Enter your number');

switch (numb) {
    case '1':
        alert( "!" );
        break;
    case '2':
        alert( "@" );
        break;
    case '3':
        alert( "#" );
        break;
    case '4':
        alert( "$" );
        break;
    case '5':
        alert( "%" );
        break;
    case '6':
        alert( "^" );
        break;
    case '7':
        alert( "&" );
        break;
    case '8':
        alert( "*" );
        break;
    case '9':
        alert( "(" );
        break;
    case '0':
        alert( ")" );
        break;
    default:
        alert('Wrong number')
};

let firstNumber = i = +prompt("First number");
let secondNumber = +prompt("Second number");
let sum = firstNumber;

for (i >= 0; i < secondNumber; i++) {
    sum += secondNumber
    alert(sum);
}

let i = +prompt("First number");
let secondNumber = +prompt("Second number");
let sum = 0;

for (i >= 0; i <= secondNumber; i++) {
    sum += i;
};
alert(sum);


//Запитай у користувача число і виведи всі дільники цього числа.
let number = +prompt("");
let i = 0;
let fin = 1;
for ( i > 0; i <= number; i++) {
    fin = number/i;
    console.log(fin);
};

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.
/*let quantity = +prompt("");
let fin = 1;
let i = 0;
let quantity2 = +prompt("");
let fin2 = 1;
let j = 0;
let fin3 = 0;

fin3 <= quantity;
for (i>0; i<=quantity; i++) {
    fin = quantity/i;
    console.log(fin);
};
for (j>0; j<=quantity2; j++) {
    fin2 = quantity2/j;
    console.log(fin2);
    fin3 = (fin = fin2);
};

if (fin)
 

alert(fin3);*/





