import { getResult } from "./result.js";
import { } from "./howler.js"

let stop = document.getElementById('stop');
let progress = document.getElementById('progress');
let result = 0; // пишем результат сюда

let sound = new Howl({ // добавляем звук
   src: ['../sounds/stop.mp3']
});

export function timer(min, sec) {
   let allTime = sec + (min * 60); // расчитываем общее время 

   // progressBar(allTime); 

   timer = setInterval(function () {
      let minutes = allTime / 60 % 60; // получаем минуты
      let seconds = allTime % 60; // получаем секунды
      if (allTime <= 0) {
         sound.play();
         clearInterval(timer);
         getResult("Время закончилось");
      } else {
         result = `${Math.trunc(minutes)}:${seconds}`;
         getResult(result);
      }
      --allTime;
   }, 1000)
};

stop.onclick = function stopTimer() {
   sound.play();
   clearInterval(timer);
   getResult(`${result} <br>Таймер остановлен`);
}

// function progressBar(time) { // функция для прогресс бара
//    let start = 0;
//    time = time * 1000 / 100; // получаем время для прогресс бара в милисекундах
//    let interval = setInterval(function () {
//       if (start > 100) {
//          clearInterval(interval); // останавливаем процесс, если value = 100
//       } else {
//          progress.value = start;
//       }
//       start++;
//    }, time)
// }