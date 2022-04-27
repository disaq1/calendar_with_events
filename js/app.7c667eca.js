(function(){"use strict";var e={7530:function(e,t,n){var a=n(9242),r=n(3396),o=n(7139);const s={class:"main"},i={class:"calendar__days-wrapper"},v={class:"calendar__item-wrapper"};function l(e,t,n,a,l,d){const c=(0,r.up)("MyCalendarSelector"),u=(0,r.up)("MyCalendarItem");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(c,{date:l.calendarDate,onNextMonth:d.nextMonth,onPrevMonth:d.prevMonth,onNextYear:d.nextYear,onPrevYear:d.prevYear},null,8,["date","onNextMonth","onPrevMonth","onNextYear","onPrevYear"]),(0,r._)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.daysName,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"calendar__days"},(0,o.zw)(e),1)))),128))]),(0,r._)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.days,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"calendar__item"},[e?((0,r.wg)(),(0,r.j4)(u,{key:0,date:e,events:l.events},null,8,["date","events"])):(0,r.kq)("",!0)])))),128))])])}const d={class:"calendar-selector"},c={class:"calendar-selector__info"},u={class:"calendar-selector__month"},h={key:0,class:"calendar-selector__year"};function D(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",c,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>i.prevMonth&&i.prevMonth(...e)),class:"calendar-selector__button"}," ‹ "),(0,r._)("div",u,[(0,r.Uk)((0,o.zw)(i.getMonthTitle())+" ",1),i.getYearTitle()!==(new Date).getFullYear()?((0,r.wg)(),(0,r.iD)("span",h,(0,o.zw)(i.getYearTitle()),1)):(0,r.kq)("",!0)]),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>i.nextMonth&&i.nextMonth(...e)),class:"calendar-selector__button"}," › ")])])}var g={name:"CalendarSelector",props:["date"],methods:{getMonthTitle(){return this.getMonthName(this.date.getMonth())},getMonthName(e){const t=new Date(2022,e,1);return t.toLocaleDateString("ru-Ru",{month:"long"})},nextMonth(){this.$emit("nextMonth")},prevMonth(){this.$emit("prevMonth")},getYearTitle(){return this.date.getFullYear()},nextYear(){this.$emit("nextYear")},prevYear(){this.$emit("prevYear")}}},p=n(89);const y=(0,p.Z)(g,[["render",D],["__scopeId","data-v-654b53e0"]]);var M=y;function f(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",{onClick:t[0]||(t[0]=(...e)=>i.addEvent&&i.addEvent(...e)),class:(0,o.C_)([i.itemClasses,"item"])},[(0,r.Uk)((0,o.zw)(n.date.getDate())+" ",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.events,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.eventId,class:"event-wrapper"},[e.eventDay===n.date.getDate()&&e.eventMonth===n.date.getMonth()&&e.eventYear===n.date.getFullYear()?((0,r.wg)(),(0,r.iD)("span",{key:0,class:(0,o.C_)(["Hard"===e.eventType?"hard":"Medium"===e.eventType?"medium":"Easy"===e.eventType?"easy":"","event"])},(0,o.zw)(e.eventHour)+":"+(0,o.zw)(e.eventMinutes)+" "+(0,o.zw)(e.eventTitle),3)):(0,r.kq)("",!0)])))),128))],2)}var w={name:"MyCalendarItem",props:["date","events"],computed:{itemClasses(){const e=this.getISODate(new Date)===this.getISODate(this.date),t=this.getISODate(new Date)<this.getISODate(this.date)+1;return{prevDate:!t,currentDate:e,notCurrentDate:!e}}},methods:{getISODate(e){const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().split("T")[0]},addEvent(){console.log(this.date)}}};const m=(0,p.Z)(w,[["render",f],["__scopeId","data-v-1d2ef5b1"]]);var _=m,Y={name:"App",components:{MyCalendarItem:_,MyCalendarSelector:M},data(){return{calendarDate:this.$store.state.calendarDate,month:0,year:0,days:[],daysName:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],events:this.$store.state.events}},mounted(){this.getCurrentDay()},methods:{getCurrentDay(){const e=this.calendarDate,t=e.getMonth(),n=e.getFullYear();this.month=t+1,this.year=n;const a=this.getDaysOfMonth(t,n),r=this.getFirstWeekday(t,n),o=[];for(let s=r;s<a+r;s++)o[s]=new Date(n,t,s+1-r);this.days=o},getDaysOfMonth(e,t){return new Date(t,e+1,0).getDate()},getFirstWeekday(e,t){return new Date(t,e,1).getUTCDay()},nextMonth(){const e=new Date(this.calendarDate);e.setMonth(e.getMonth()+1),this.calendarDate=e},prevMonth(){const e=new Date(this.calendarDate);e.setMonth(e.getMonth()-1),this.calendarDate=e},nextYear(){const e=new Date(this.calendarDate);e.setFullYear(e.getFullYear()+1),this.calendarDate=e},prevYear(){const e=new Date(this.calendarDate);e.setFullYear(e.getFullYear()-1),this.calendarDate=e},assertEquals(e,t){console.assert(e===t,"Ошибка проверки: значения не равны "+e+" != "+t)}},watch:{calendarDate(){this.getCurrentDay()}}};const T=(0,p.Z)(Y,[["render",l],["__scopeId","data-v-8cadbae4"]]);var k=T,b=n(65),C=(0,b.MT)({state:{calendarDate:new Date,events:[{eventTitle:"Сделать что-то невообразимо длинное и содержательное",eventId:0,eventType:"Hard",eventYear:2022,eventMonth:3,eventDay:21,eventHour:11,eventMinutes:29},{eventTitle:"Сделать сё",eventId:1,eventType:"Easy",eventYear:2022,eventMonth:3,eventDay:26,eventHour:23,eventMinutes:59},{eventTitle:"HNY",eventId:2,eventType:"Medium",eventYear:2021,eventMonth:11,eventDay:31,eventHour:23,eventMinutes:59},{eventTitle:"Сделать то",eventId:3,eventType:"Hard",eventYear:2022,eventMonth:3,eventDay:26,eventHour:10,eventMinutes:20},{eventTitle:"Title 5",eventId:4,eventType:"Easy",eventYear:2022,eventMonth:4,eventDay:22,eventHour:11,eventMinutes:51},{eventTitle:"Title 6",eventId:5,eventType:"Hard",eventYear:2022,eventMonth:5,eventDay:28,eventHour:16,eventMinutes:10},{eventTitle:"Оранжевое имя",eventId:6,eventType:"Medium",eventYear:2022,eventMonth:3,eventDay:28,eventHour:9,eventMinutes:31}]},getters:{},mutations:{},actions:{}});(0,a.ri)(k).use(C).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,v=0;v<a.length;v++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[v])}))?a.splice(v--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],i=a[1],v=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(v)var d=v(n)}for(t&&t(a);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkcalendar_with_events"]=self["webpackChunkcalendar_with_events"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7530)}));a=n.O(a)})();
//# sourceMappingURL=app.7c667eca.js.map