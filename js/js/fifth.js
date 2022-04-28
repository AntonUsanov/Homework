//Playlist

document.title = 'Playlist';

//Modal window

let modalBtn = document.querySelector(".btn");
let modalWindow = document.querySelector('.modal');

modalBtn.addEventListener('click', function() {
    modalWindow.classList.add('modal-active');
});

let modalClose = document.querySelector('.btn-close');
modalClose.addEventListener('click', function() {
    modalWindow.classList.remove('modal-active');
});

//playlist

let list = [
    {    
     author: "LED ZEPPELIN",    
     song:"STAIRWAY TO HEAVEN"    
    },    
    {    
     author: "QUEEN",    
     song:"BOHEMIAN RHAPSODY"    
    },    
    {    
     author: "LYNYRD SKYNYRD",    
     song:"FREE BIRD"    
    },    
    {    
     author: "DEEP PURPLE",    
     song:"SMOKE ON THE WATER"    
    },    
    {    
     author: "JIMI HENDRIX",    
     song:"ALL ALONG THE WATCHTOWER"    
    },    
    {    
     author: "AC/DC",    
     song:"BACK IN BLACK"    
    },    
    {    
     author: "QUEEN",    
     song:"WE WILL ROCK YOU"    
    },    
    {    
     author: "METALLICA",    
     song:"ENTER SANDMAN"    
    }    
    ];
  
  let div = document.createElement('div');
  div.className = 'container';
  document.body.append(div);
  console.log(div);
  
  let playlist = document.createElement('ol');
  playlist.className = 'list';
  playlist.innerHTML = 'Your playlist <br><br>';
  div.prepend(playlist);  
  
list.forEach(function (item, i, arr) {
    let track = document.createElement('li');
    track.className = 'list-item';
    track.innerHTML = /*list[i].author + '<br><br>' +*/ list[i].song + '<br><br>';
    playlist.append(track);
});

//Traffic light

let btnTraffic = document.querySelector('.btn-traffic');
let redLight = document.querySelector('.red');
let yellowLight = document.querySelector('.yellow');
let greenLight = document.querySelector('.green');
let btnYellow = document.querySelector('.btn-yellow');
btnTraffic.onclick = function() {
    redLight.classList.add('red-active');
    btnTraffic.onclick = function() {
        yellowLight.classList.add('yellow-active');
        redLight.classList.remove('red-active');
        btnTraffic.onclick = function() {
            greenLight.classList.add('green-active');
            yellowLight.classList.remove('yellow-active');
        };
    };
};
function toggle() {
    console.log(this);
};








// btnTraffic.addEventListener('click', function() {
//     redLight.classList.toggle('red-active');

    
// });