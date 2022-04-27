<template>
  <div class="main">
    <MyCalendarSelector
        :date="calendarDate"
        @nextMonth="nextMonth"
        @prevMonth="prevMonth"
        @nextYear="nextYear"
        @prevYear="prevYear"
    />
    <div class="calendar__days-wrapper">
      <div
          v-for="(dayName) in daysName"
          :key="dayName"
          class="calendar__days"
      >
        {{ dayName }}
      </div>
    </div>
    <div class="calendar__item-wrapper">
      <div
          v-for="day in days"
          :key="day"
          class="calendar__item"
      >
        <MyCalendarItem
            :date="day"
            :events="events"
            v-if="day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyCalendarSelector from "@/components/MyCalendarSelector";
import MyCalendarItem from "@/components/MyCalendarItem";

export default {
  name: "App",
  components: {
    MyCalendarItem,
    MyCalendarSelector
  },
  data () {
    return {
      calendarDate: this.$store.state.calendarDate,
      month: 0,
      year: 0,
      days: [],
      daysName: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      events: this.$store.state.events
    }
  },
  mounted() {
    this.getCurrentDay()
  },
  methods: {
    getCurrentDay () {
      const currentDay = this.calendarDate
      const month = currentDay.getMonth()
      const year = currentDay.getFullYear()

      this.month = month + 1
      this.year = year

      const a = this.getDaysOfMonth(month, year)
      const b = this.getFirstWeekday(month, year)

      const daysArr = []

      for (let i = b; i < a + b; i++) {
        daysArr[i] = new Date(year, month, i + 1 - b)
      }

      this.days = daysArr
    },
    getDaysOfMonth (month, year) {
      return new Date(year, month + 1, 0).getDate();
    },
    getFirstWeekday (month, year) {
      return new Date(year, month, 1).getUTCDay();
    },
    // Функции переключения месяцев
    nextMonth () {
      const date = new Date(this.calendarDate)
      date.setMonth(date.getMonth() + 1)
      this.calendarDate = date
    },
    prevMonth () {
      const date = new Date(this.calendarDate)
      date.setMonth(date.getMonth() - 1)
      this.calendarDate = date
    },
    // Функции переключения лет
    nextYear () {
      const date = new Date(this.calendarDate)
      date.setFullYear(date.getFullYear() + 1)
      this.calendarDate = date
    },
    prevYear () {
      const date = new Date(this.calendarDate)
      date.setFullYear(date.getFullYear() - 1)
      this.calendarDate = date
    },
    // проверка на ошибки
    assertEquals(actual, expected) {
      console.assert(actual === expected, 'Ошибка проверки: значения не равны ' + actual + ' != ' + expected)
    }
  },
  watch: {
    calendarDate () {
      this.getCurrentDay()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1000px;
  margin: 0 auto 60px;
  font-family: sans-serif;
}
.calendar {
  &__item {
    width: calc(100% / 7);
    &:nth-child(6) div,
    &:nth-child(7) div,
    &:nth-child(13) div,
    &:nth-child(14) div,
    &:nth-child(20) div,
    &:nth-child(21) div,
    &:nth-child(27) div,
    &:nth-child(28) div,
    &:nth-child(34) div,
    &:nth-child(35) div,{
      color: lightblue; // weekend days
    }
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &__days {
    width: calc(100% / 7);
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
