import {DATE_TIME_TYPE} from '@/Constants/DatetimeConstants'
import moment from 'moment'

export default class DatetimeUtil {
  static validDate(date: any, type = DATE_TIME_TYPE.TYPE_1) {
    const m = moment(date, type)
    return m.isValid()
  }

  static formatDate(date: any, char: string) {
    try {
      let day = new Date(date)
      function pad(n: number) {
        return n < 10 ? '0' + n : n
      }
      return (
        pad(day.getDate()) +
        char +
        pad(day.getMonth() + 1) +
        char +
        day.getFullYear()
      )
    } catch (error) {
      console.log('formatDate' + error)
      return ''
    }
  }
}
