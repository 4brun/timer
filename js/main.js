import { getResult } from './result.js';
import { timer } from './calcTime.js';


const form = document.getElementById('timer');

form.onsubmit = function (e) {
   e.preventDefault();
   const timeFrom = document.getElementById('timeFrom').value;
   let min = parseInt(timeFrom.split(":")[0]); // получаем минуты
   let sec = parseInt(timeFrom.split(":")[1]); // Получаем секунды
   if (!timeFrom) {
      getResult(`Вы не ввели время`);
   }
   else {
      timer(min, sec);
      console.log(timeFrom);
   }
}