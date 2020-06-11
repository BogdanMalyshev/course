'use strict';

let numberOfFilms;
function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "Вы ввели числовой вид данных:(");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function yourStatus(){
    if(personalMovieDB.count < 10 ){
        alert('Вы просмотрели очень мало фильмов!');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
        alert('Вы среднестатистический пользователь)');
    }else if (personalMovieDB.count >= 50){
        alert('Да вы жуткий киноман!!');
    }else{
        alert('Произошла ошибка((');
    } 
}
yourStatus();

function newFilm (){
    for(let i = 0; i<2; i++ ){

        let a = prompt("Какой последний фильм вы посмотрели?"),
            b = prompt("Какую оценку вы дадите этому фильму?");
        
        if(a != null && b != null && a != " " && b != " " && a.length < 50 && !isNaN(b)){
            personalMovieDB.movies[a]=b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}
newFilm();

function myDataBase(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
myDataBase(personalMovieDB.privat);


function writeYourGeners() {
    for (let i = 1; i <=3; i++) {
        let geners = prompt(`Ваш любимий жанр под номером ${i}`);
        if (geners!== " " && geners !== null && isNaN(geners)) {
            personalMovieDB.genres[i-1] = geners;
            console.log('good!');
        } else {
            i--;
            console.log('no');
        }
    }
}
writeYourGeners();