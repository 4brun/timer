import { DateTime } from './luxon.js'

export default function calcDate(dateFromString, dateToString) {
   if (dateFromString < dateToString) {
      [dateToString, dateFromString] = [dateFromString, dateToString]
   }

   const dateFrom = DateTime.fromISO(dateFromString)
   const dateTo = DateTime.fromISO(dateToString)

   const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()

   return diff
}