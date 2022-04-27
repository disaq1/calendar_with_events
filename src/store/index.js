import { createStore } from 'vuex'

// class Enent {
//     eventTitle = ''
//     eventId = ''
//     eventType = ''
//
//     constructor(date) {
//         this.date = date
//     }
// }

export default createStore({
  state: {
      calendarDate: new Date(),
      events: [
          {
              eventTitle: 'Сделать что-то невообразимо длинное и содержательное',
              eventId: 0,
              eventType: 'Hard',
              eventYear: 2022,
              eventMonth: 3,
              eventDay: 21,
              eventHour: 11,
              eventMinutes: 29
          },
          {
              eventTitle: 'Сделать сё',
              eventId: 1,
              eventType: 'Easy',
              eventYear: 2022,
              eventMonth: 3,
              eventDay: 26,
              eventHour: 23,
              eventMinutes: 59
          },
          {
              eventTitle: 'HNY',
              eventId: 2,
              eventType: 'Medium',
              eventYear: 2021,
              eventMonth: 11,
              eventDay: 31,
              eventHour: 23,
              eventMinutes: 59
          },
          {
              eventTitle: 'Сделать то',
              eventId: 3,
              eventType: 'Hard',
              eventYear: 2022,
              eventMonth: 3,
              eventDay: 26,
              eventHour: 10,
              eventMinutes: 20
          },
          {
              eventTitle: 'Title 5',
              eventId: 4,
              eventType: 'Easy',
              eventYear: 2022,
              eventMonth: 4,
              eventDay: 22,
              eventHour: 11,
              eventMinutes: 51
          },
          {
              eventTitle: 'Title 6',
              eventId: 5,
              eventType: 'Hard',
              eventYear: 2022,
              eventMonth: 5,
              eventDay: 28,
              eventHour: 16,
              eventMinutes: 10
          },
          {
              eventTitle: 'Оранжевое имя',
              eventId: 6,
              eventType: 'Medium',
              eventYear: 2022,
              eventMonth: 3,
              eventDay: 28,
              eventHour: 9,
              eventMinutes: 31
          }
      ]
  },
  getters: {
  },
  mutations: {
      // UPDATE_CALENDAR_DATE: (state, diff) => {
      //     const date = new Date(this.calendarDate)
      //     date.setDate(date.setMonth() + diff)
      //     this.date = date
      // }
  },
  actions: {
  }
})
