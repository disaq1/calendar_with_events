<template>
  <div
      @click="addEvent"
      :class="itemClasses"
      class="item"
  >
    {{ date.getDate() }}
    <div
        v-for="event in events"
        :key="event.eventId"
        class="event-wrapper"
    >
      <span
          v-if="event.eventDay === date.getDate()
          &&
          event.eventMonth === date.getMonth()
          &&
          event.eventYear === date.getFullYear()"
          :class="(event.eventType === 'Hard') ? 'hard' : (event.eventType === 'Medium' ? 'medium' : (event.eventType === 'Easy') ? 'easy' : '')"
          class="event"
      >
        {{ event.eventHour }}:{{ event.eventMinutes }} {{ event.eventTitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCalendarItem",
  props: ['date', 'events'],
  computed: {
    itemClasses () {
      const isCurrentDate = this.getISODate(new Date()) === this.getISODate(this.date)
      const isPrevDate = this.getISODate(new Date()) < this.getISODate(this.date) + 1
      return {
        'prevDate': !isPrevDate,
        'currentDate': isCurrentDate,
        'notCurrentDate': !isCurrentDate,
      }
    }
  },
  methods: {
    getISODate (date) {
      const d = new Date(date)
      d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
      return d.toISOString().split('T')[0]
    },
    addEvent () {
      console.log(this.date)
      // this.$store.state.events = {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    margin: 7px auto;
    padding: 10px;

    width: 130px;
    height: 130px;

    border-radius: 10px;
    box-sizing: border-box;

    text-align: right;
    font-size: 16px;
    font-weight: 700;
  }
  .prevDate.notCurrentDate {
    color: darkgray;
    background: #f5f5f5;
  }
  .currentDate {
    color: green !important;
    outline: 1px solid black !important;
    background: white;
  }
  .notCurrentDate {
    color: black;
    outline: 1px solid lightgrey;
    background: white;
  }
  .event {
    margin: 5px 0 0;
    padding: 3px 4px;

    height: 20px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    border-radius: 5px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    text-align: left;
    font-weight: 300;
    font-size: 12px;
    &-wrapper {
      position: relative;
    }
    &:hover {
      min-width: 100%;
      min-width: -webkit-fill-available;
      width: fit-content;

      overflow: visible;

      z-index: 10;

      font-weight: bold;
      &.hard {
        color: red;
        background: darkred;
      }
      &.medium {
        color: yellow;
        background: orange;
      }
      &.easy {
        color: greenyellow;
        background: green;
      }
    }
    &.hard {
      color: red;
      background: rgba(255, 0, 0, 0.5);
    }
    &.medium {
      color: orange;
      background: rgba(255, 165, 0, 0.5);
    }
    &.easy {
      color: green;
      background: rgba(0, 128, 0, 0.5);
    }
  }
</style>
