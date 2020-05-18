<template lang="html">
  <div class="styles">
    <Header/>
    <Nav/>
    <main class="main">
      <h1 class="text-center font-weight-light text-uppercase">Styles of Pizza</h1>
      <h2 class="text-center pb-5 font-weight-lighter h6">Click on each picture for more info</h2>
      <!-- bootstrap grid displays three images across on lg and up screens, two across on md and above screens and one across on xs and above screens -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">Neapolitan</h2>
            <!-- popover on each image displays pizza style info when clicked -->
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="The true original, topped with sauce from fresh tomatoes, olive oil, and minimal mozzarella. A single-serving, 12-inch pie cooked in a wood-fired oven between 800 and 900 degrees F.">
            <img class="img-fluid pizza-img" src="../assets/Neapolitan-Pizza.jpg" alt="Neapolitan stle pizza">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">New York</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Large, foldable slices with a crispy outer crust. Traditional toppings of tomato sauce and mozzarella cheese, Originally a variation of Neapolitan-style pizza. Unique flavor due to minerals in New York’s tap water supply.">
            <img class="img-fluid pizza-img" src="../assets/NewYork-Pizza.jpg" alt="New York style pizza slice">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">Chicago</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Prepared as the thick, classic deep-dish pizza. Baked in a greased round pan with tall sides. Toppings assembled upside-down from their usual order.">
            <img class="img-fluid pizza-img" src="../assets/chicago-pizza.jpg" alt="Chicago deep dish style pizza">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">Detroit</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Originally baked in a square automotive parts pan in the 1940’s, this pizza is first topped with pepperoni, followed by brick or mozzarella cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is spooned over the cheese. The crust is extra crispy but tender and airy on the inside.">
            <img class="img-fluid pizza-img" src="../assets/detroit-pizza.jpg" alt="Detroit style pizza">
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">California</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="A single-serving, thin crust pizza popular due to its creative, nontraditional toppings, like chicken, egg, artichokes, salmon, feta, or goat cheese. Also known as Gourmet pizza.">
            <img class="img-fluid pizza-img" src="../assets/california-pizza.jpg" alt="California style pizza">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">New Haven</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Referred to locally by the name apizza (ah-beets). Thin-crusted pie that’s cooked in a very hot, traditionally coal-fired, oven until it is charred on the bottom. Mozzarella cheese, or mootz, is considered a topping.">
            <img class="img-fluid pizza-img" src="../assets/new-haven-pizza.jpg" alt="New Haven style pizza">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">Sicilian</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Brought to America in the 19th century by Sicilian immigrants and became popular after WWII. Thick, square-cut pizza with a pillowy dough and tomato sauce. Served with or without cheese, sometimes with the cheese underneath the sauce. Often topped with bits of tomato, onion, anchovies and herbs.">
            <img class="img-fluid pizza-img" src="../assets/sicilian-pizza.jpg" alt="Sicilian style pizza">
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <h2 class="font-weight-lighter">Tomato Pie</h2>
            <a data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="Thick, focaccia-like bread covered in tomato sauce, cut into squares and served at room temperature. Usually baked and served without cheese or toppings.">
            <img class="img-fluid pizza-img" src="../assets/tomato-pie-pizza.jpg" alt="Tomato Pie style pizza">
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Styles',

  components: {
    Nav,
    Header,
    Footer
  }

  // $(function() {
  //   // popover displays pizza style info when clicked
  //   $('a').click(function() {
  //   $(this).popover('toggle')
  //   })
  // });

}
</script>

<style lang="css" scoped>
.main {
    padding: 2rem 4rem;
}

.pizza-img {
  width: 25rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
}
</style>
