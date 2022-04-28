/*class User {
    constructor (name, birthYear, age) {
        this.name = name;
        this.birthYear = birthYear;
        this.age = age;
        this.gender;
    }

    isAgeTrue() {
        let currentYear = new Date();
        if ((currentYear.getFullYear() - this.birthYear) == this.age) {
            alert('ok');
        }
        else {
            alert('wrong');
            return this.age = (currentYear - this.birthYear);
        }
    }
}

let anton = new User('Anton', 1993, 30);

anton.isAgeTrue();

class NewUser extends User {
    checkGender(gender) {
        if (gender == 'Male' ) {
            this.gender = gender;
            alert('Male')
        }
        else {
            this.gender = gender;
            alert('Female');
        }
    }
}

let lena = new NewUser('lena', 1998, 23);
lena.checkGender('male');*/


let userInfo = document.getElementById('user-info');
console.log(userInfo);

let name = document.createElement('li');
name.className = 'list-item';
name.innerHTML = prompt('What is your name?');

let age = document.createElement('li');
age.className = 'list-item';
age.innerHTML = prompt('How old are you?');

userInfo.append(name, age);

// setTimeout(function () {
//     userInfo.classList.add("yellow")
// },1000);

// setInterval(function(){
//     if (userInfo.classList.contains('yellow')) {
//         userInfo.classList.add('blue');
//         userInfo.classList.remove('yellow');
//     }
//     else {
//         userInfo.classList.add('yellow');
//         userInfo.classList.remove('blue');
//     }
// },1000);  

let btn = document.querySelector(".btn");


