<script>
//Imports JS from calendar.js
import { getDate } from "./calendar";

export default {
  name: "date",
  //Allows the function to run
  mounted() {
    getDate();
  },
};
</script>

<template>
  <body>
    <!-- Wrapper covers all elements -->
    <div class="wrapper">
      <!-- Block for the title -->
      <div class="header block">
        <p id="title">Helpful Planner</p>
      </div>
      <div class="other block">
        <!--Displays time of day greeting-->
        <p id="hours"></p>
        <!--Displays all the infomation of the calendar-->
        <!--Heavily Inspired by 'Online Tutorials' @= https://www.youtube.com/watch?v=kn1bNLMTgdo -->
        <div class="display">
          <p id="monthName"></p>
          <p id="dayNumber"></p>
          <p id="dayName"></p>
          <p id="year"></p>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
/* Adds specific design to the hours of the calendar */
.other #hours {
  font-size: 3rem;
  font-weight: 700;
  float: left;
  margin-top: auto;
  margin-bottom: auto;
}
/* Moves the Calendar to the right of the screen, as well as rounds its borders */
.display {
  float: right;
  color: white;
  border-radius: 15px;
  width: 200px;
  text-align: center;
}
/* Changes how the text looks from the others */
.display #monthName {
  border-radius: 15px 15px 0px 0px;
  margin-top: auto;
  margin-bottom: auto;
  background: #e56ab3;
  font-size: 30px;
  font-weight: 700;
  overflow: hidden;
}
/* Changes how the text looks from the others */
.display #dayNumber {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 80px;
  font-weight: 800;
  background: #ef87be;
}
/* Alligns it center with a differnt background colour */
.display #dayName {
  margin-top: auto;
  margin-bottom: auto;
  background: #f9a3cb;
  font-size: 30px;
}
/* Alligns it center with a differnt background colour, and rounds the bottom edges because there was a visual error */
.display #year {
  margin-top: auto;
  margin-bottom: auto;
  background: #fcbcd7;
  font-size: 30px;
  border-radius: 0px 0px 15px 15px;
}
</style>
