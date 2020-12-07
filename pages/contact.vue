<template>
  <section>
    <h1>Contact us</h1>
    <div :class="$style.contact">
      <section :class="$style.appointment">
        <h3>
          Appointments
        </h3>
        <p>
          <strong>Olesya Plakhotna</strong><br>
          <a href="tel:+41765777649">+41 76 57 77 649</a><br>
          (All appointments)
        </p>
        <p>
          <strong>Nataliya Shendrik</strong><br>
          <a href="tel:+41774415045">+41 77 441 50 45</a><br>
          (Hair and permanent makeup)
        </p>
        <p>
          <strong>Irina Aristova</strong><br>
          <a href="tel:+41762505157">+41 76 250 51 57</a> <br>
          (Nails)
        </p>
      </section>
      <section :class="$style.map">
        <h3>Our address</h3>
        <p>Riedmatt 4, 6330 Zug</p>
        <iframe width="100%" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCYGXUgVMb4Ox24h0UlFSAX04260Sbs7PE
&amp;q=Riedmatt+4,+6300+Zug" allowfullscreen="allowfullscreen" style="border: 0px;"></iframe>
        <section>
          <h3>Parking</h3>
          <p>Outdoor parking spaces (number 1 - 5) are reserved for our clients.</p>
        </section>
      </section>
    </div>
  </section>
</template>

<style lang="scss" module>
.contact {
  display: flex;
}
.appointment {
  flex: 0 0 40%;

  h3 {
    margin-top: 0;
  }
}

.map {
  margin-top: 0;
  flex: 0 0 60%;
}
</style>
