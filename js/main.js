import { writeOutput, dateDiff as printDateDiff } from './output.js';
import calcDiff from './calcDate.js';
import { getResult } from './result.js';
import { timer } from './calcTime.js';

// import '../sounds/stop.mp3';
// import '../css/style.css'

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

const formCalc = document.getElementById('calcDate')

formCalc.onsubmit = function (event) {
   event.preventDefault()

   const formData = new FormData(event.target)
   const dateFrom = formData.get("dateFrom")
   const dateTo = formData.get("dateTo")

   if (!dateFrom || !dateTo) {
      writeOutput('Ошибка')
   } else {
      const diff = calcDiff(dateFrom, dateTo)

      printDateDiff(diff)
   }
}