const music = new Audio('audios/1.mp3');


const songs = [{
    id: '1',
    songname: ` Faded <div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg"
},
{
    id: '2',
    songname: `Alone <div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg"

},
{
    id: '3',
    songname: `Power  <div class="subtitle">Alan Walker</div>`,
    poster: "img/3.jpg"

},
{
    id: '4',
    songname: `The Spectre <div class="subtitle">Alan Walker</div>`,
    poster: "img/4.jpg"

},
{
    id: '5',
    songname: ` New Heart <div class="subtitle">Alan Walker</div>`,
    poster: "img/5.jpg"

},
{
    id: '6',
    songname: `Despechá <div class="subtitle">Rosalia</div>`,
    poster: "img/6.jpg"

},
{
    id: '7',
    songname: `La Bachata  <div class="subtitle">Manuel Turizo</div>`,
    poster: "img/7.jpg"

},
{
    id: '8',
    songname: `Titi Me Pregunto  <div class="subtitle">Bad Bunny</div>`,
    poster: "img/8.jpg"

},
{
    id: '9',
    songname: `LOKERA  <div class="subtitle">Rauw Alejandro</div>`,
    poster: "img/9.jpg"

},
{
    id: '10',
    songname: `Ultra Solo  <div class="subtitle">Polima Wescoast</div>`,
    poster: "img/10.jpg"

},
{
    id: '11',
    songname: `La noche de anoche  <div class="subtitle">BadBunny y Rosalia</div>`,
    poster: "img/11.jpg"

},
{
    id: '12',
    songname: `Me Porto Bonito <div class="subtitle">BadBunny</div>`,
    poster: "img/12.jpg"

},
{
    id: '13',
    songname: `Noche de Novela <div class="subtitle">PauloLondra y EdSheeran</div>`,
    poster: "img/13.jpg"

},
{
    id: '14',
    songname: `Luces <div class="subtitle">Paulo Londra</div>`,
    poster: "img/14.jpg"

},
{
    id: '15',
    songname: ` thats what i like <div class="subtitle">Bruno Mars</div>`,
    poster: "img/15.jpg"

},
{
    id: '16',
    songname: `Se Preparo <div class="subtitle">Ozuna</div>`,
    poster: "img/16.jpg"

},
{
    id: '17',
    songname: `Dura <div class="subtitle">Daddy Yankee</div>`,
    poster: "img/17.jpg"

},
{
    id: '18',
    songname: `Tutu <div class="subtitle">Camilo y Pedro capo</div>`,
    poster: "img/18.jpg"

},
{
    id: '19',
    songname: `I Love You So <div class="subtitle">The Walters</div>`,
    poster: "img/19.jpg"

},
{
    id: '20',
    songname: `i don't care how long it takes <div class="subtitle">Cassiopeia
    </div>`,
    poster: "img/20.jpg"

},
{
    id: '21',
    songname: `Somewhere Only We Know <div class="subtitle">Keane</div>`,
    poster: "img/21.jpg"

},
{
    id: '22',
    songname: `Bad Habit<div class="subtitle">Steve Lacy</div>`,
    poster: "img/22.jpg"

},


]




///aca hacemos pasar todas las imagenes y titulos de las canciones a los demas indices



Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
    
    
    
});
///



//search data start


let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const { id, songname, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
   <div class="content">
        ${songname}
   </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
        if (input_value == 0) {
            search_result.style.display = "none";

        } else {
            search_result.style.display = "";
        }

    }
})
//search data end



/// aca hacemos el boton de play y pause de las musicas y aparte el efecto de las barrasmusicales
let masterplay = document.querySelector('#masterplay');
var wave = document.getElementsByClassName('wave')[0];
var circle=document.querySelector('.circle-image');

masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();

        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        circle.classList.add('active');
        makeAllPlays();


    } else {
        music.pause();

        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
        circle.classList.remove('active');
        makeAllPlays();
      

    }
})
///


//// esta parte de aca es para cuando demos un click al boton circulo del play y cambie al pause
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle');
        element.classList.remove('bi-pause-circle');

    })
}

///


//// aca es cuando demos un click al next o back el fondo de color vaya avanzado o retrociendo 
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgba(105,105,170,0)";

    })
}
///



let index = 0;
let track_image = document.querySelector('#track_image');

let title = document.querySelector('#title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');
        music.src = `audios/${index}.mp3`;

        track_image.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })
        song_title.forEach(ele => {
            let { songname } = ele;
            title.innerHTML = songname;

        })
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        circle.classList.add('active');
        // music.addEventListener('ended', () => {
        //     masterplay.classList.add('bi-play-fill');
        //     masterplay.classList.remove('bi-pause-fill');
        // })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    })
})


let currentStart = document.querySelector('#currentStart');
let currentEnd = document.querySelector('#currentEnd');
let seek = document.querySelector('#seek');
let bar2 = document.querySelector('#bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`

    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`

    }
    currentStart.innerText = `${min1}:${sec1}`;



    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

const next_music = () => {
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    circle.classList.add('active');
    if (index == songs.length) {
        index == 0;
    }
    index++;
    music.src = `audios/${index}.mp3`;
    track_image.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle');

}
const repeat_music = () => {
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    circle.classList.add('active');
    index;
    music.src = `audios/${index}.mp3`;
    track_image.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle');

}
const random_music = () => {
    masterplay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    circle.classList.add('active');
    if (index == songs.length) {
        index == 0;
    }
    index = Math.floor((Math.random() * songs.length) + 1);
    music.src = `audios/${index}.mp3`;
    track_image.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle');

}

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat"

            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random"

            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next"

            break;


    }
})

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})

let vol_icon = document.querySelector('#vol_icon');
let vol = document.querySelector('#vol');
let vol_dot = document.querySelector('#vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');

    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.querySelector('#back');
let next = document.querySelector('#next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;


    }
    music.src = `audios/${index}.mp3`;
    track_image.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    // makeAllPlays();
    //  document.getElementById(`${index}`).classList.remove('bi-play-fill');
    //  document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle');


})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;


    }
    music.src = `audios/${index}.mp3`;
    track_image.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songname } = ele;
        title.innerHTML = songname;
    })
    // makeAllPlays()
    // document.getElementById(`${index}`).classList.remove('bi-play-fill');
    // document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle');

})


let prev = document.querySelector('#left_scroll')
let nextt = document.querySelector('#right_scroll')
let pop_song = document.querySelector('.pop_song')

prev.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
nextt.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

let prevv = document.querySelector('#left_scrolls')
let nexttt = document.querySelector('#right_scrolls')
let item = document.querySelector('.item')

prevv.addEventListener('click', () => {
    item.scrollLeft -= 330;

})
nexttt.addEventListener('click', () => {
    item.scrollLeft += 330;
})


  
let regres= document.querySelector('#regresar');

regres.addEventListener('click', () => {
    location.href='login.html';
})
 