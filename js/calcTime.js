import { getResult } from "./result.js";
import { } from "./howler.js"

let stop = document.getElementById('stop');
let result = 0; // пишем результат сюда

let sound = new Howl({ // добавляем звук
   src: ['../sounds/stop.mp3']
});

stop.onclick = function stopTimer() {
   sound.play();
   clearInterval(timer);
   getResult(`${result} <br>Таймер остановлен`);
}

export function timer(min, sec) {
   let allTime = sec + (min * 60); // расчитываем общее время 
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


