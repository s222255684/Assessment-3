<template>
  <body>
    <!-- Wrapper covers all elements -->
    <div class="wrapper">
      <!-- Block for the title -->
      <div class="header block">
        <p id="title">Helpful Planner</p>
      </div>
      <div class="other block">
        <div class="contact">
          <h1>Get In Touch!</h1>
          <h2>We would love to hear from you!</h2>

          <h3>Require assistance? We are here for you</h3>
          <p>
            Feel free to contact us at email 's222255684@deakin.edu.au' and we
            will help support your user experience. Furthermore, feel free to
            contact us via number +1 202-945-7556 if email does not suit you.
          </p>
          <p id="location">
            Currently located at 221 Burwood Hwy, Burwood VIC 3125,
            Monday-Friday
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
/* Aligns text in center, and moves the location to bottom of screen */
.contact {
  text-align: center;
}
.contact #location {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
