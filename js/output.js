const output = document.getElementById('output')

export function writeOutput(outputValue) {
   output.innerHTML = outputValue
}

export function dateDiff(diffObject) {
   const { years, months, days } = diffObject

   writeOutput(`
        Лет: ${years}
        Месяцев: ${months}
        Дней: ${days}
    `)
}