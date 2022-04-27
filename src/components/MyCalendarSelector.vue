<template>
  <div class="calendar-selector">
    <div class="calendar-selector__info">
      <button
          @click="prevMonth"
          class="calendar-selector__button"
      >
        &#8249;
      </button>
      <div class="calendar-selector__month">{{ getMonthTitle() }}
        <span
            v-if="getYearTitle() !== new Date().getFullYear()"
            class="calendar-selector__year"
        >
          {{ getYearTitle() }}
        </span>
      </div>
      <button
          @click="nextMonth"
          class="calendar-selector__button"
      >
        &#8250;
      </button>
    </div>
<!--    <div-->
<!--        v-if="getYearTitle() !== new Date().getFullYear()"-->
<!--        class="calendar-selector__year"-->
<!--    >-->
<!--      <button @click="prevYear">&#8249;</button>-->
<!--      <span>{{ getYearTitle() }}</span>-->
<!--      <button @click="nextYear">&#8250;</button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "CalendarSelector",
  props: [
    'date'
  ],
  methods: {
    getMonthTitle () {
      return this.getMonthName(this.date.getMonth())
    },
    getMonthName (index) {
      const d = new Date(2022, index, 1)
      return d.toLocaleDateString('ru-Ru', {month: 'long'})
    },
    nextMonth () {
      this.$emit('nextMonth')
    },
    prevMonth () {
      this.$emit('prevMonth')
    },
    getYearTitle () {
      return this.date.getFullYear()
    },
    nextYear () {
      this.$emit('nextYear')
    },
    prevYear () {
      this.$emit('prevYear')
    }
  }
}
</script>

<style lang="scss" scoped>
  .calendar-selector {
    display: flex;
    align-items: center;
    &__info {
      display:flex;
      justify-content:space-between;
      width:19%;
    }
    &__month,
    &__button,
    &__year {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      cursor: default;
      color: darkblue;
      font-family: sans-serif;
      font-weight: 700;
    }
    &__button {
      color: black;
      font-weight: 400;
      font-family: serif;
      border: none;
      outline: none;
      background: none;
      font-size: 26px;
      padding: 0 12px 5px;
      //transition: .3s all ease-in-out;
      cursor: pointer;
      &:hover {
        border-radius: 50%;
        background: whitesmoke;
      }
    }
    &__year {
      margin: 0 0 0 5px;
    }
  }
</style>
