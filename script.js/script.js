'use strict';

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }


*/
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB = {
        count: numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false
    };
if(personalMovieDB.count < 10 ){
    alert('Вы просмотрели очень мало фильмов!');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
    alert('Вы среднестатистический пользователь)');
}else if (personalMovieDB.count >= 50){
    alert('Да вы жуткий киноман!!');
}else{
    alert('Произошла ошибка((');
}


let i = 0;
i++;  
while(i<2){
  
    console.log(i);
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
    if(a != null && b != null && a != "" && b != "" && a.length < 50 ){
        personalMovieDB.movies[a] = b;
        console.log('1');
    }else{

        console.log('2');
        i--;
    }
}
 
console.log(personalMovieDB);



