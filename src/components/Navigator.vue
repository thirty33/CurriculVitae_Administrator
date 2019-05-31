<template>
    <div id="nav_wrapper">
      <nav
          id="router_nav">
          <!-- Open Burger Button -->
          <button
            id="router_nav_button"
            v-on:click="ToggleBurgerMenu">
              <font-awesome-icon icon="bars" size="lg" />
          </button>
          <!-- /Close Burger Button -->
          <ul id="router_nav_menu_list"
            class="menu_list"
            :class="{ 'burger_is_active' : burgerMenuIsActive }">
            <!-- Close burger button -->
            <div id="button_close_container">
              <button id="router_nav_button_close"
                v-on:click="ToggleBurgerMenu">
                  <font-awesome-icon icon="times" size="lg"/>
              </button>
            </div>
            <!-- /Close burger button -->
            <router-link
              @click.native="ToggleBurgerMenu"
              v-for="item in menu_items"
              :key=item.key 
              id="router_link"
              :class="item.item_num"
              :to="item.path">
              {{item.name}}
            </router-link>
          </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu_items: [
        { path: '/', name: 'Proyectos', item_num: 'item1'},
        { path: '/jobs', name: 'Trabajos', item_num: 'item2'},
        { path: '/userinfo', name: 'Sobre mi', item_num: 'item3'},
        // { path: '/contact', name: 'Contactame', item_num: 'item4'},
      ],
      burgerMenuIsActive: false
    }
  },
  methods: {
    ToggleBurgerMenu: function() {
      this.burgerMenuIsActive = !this.burgerMenuIsActive;
    }
  }
}
</script>


<style scoped>
#router_nav_button,
#router_nav_button_close {
  background: transparent;
  border: none;
}

#router_nav_menu_list {
  height: inherit;
  width: inherit;
  padding: 0;
  margin: 0;
  display:grid;
}

#router_nav {
  background-color: #806d40;
  display: grid;
  grid-gap: 5px;
  justify-items: center;
  text-align: center;
  height: inherit;
  width: inherit;
}

#router_link {
  color: white;
  font-size: 3em;
  text-decoration : none;
  /* background-color: aqua; */
  opacity: 0.7;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-items: center;
  width: inherit;
}

#router_nav_button {
  display: none;
}

#router_nav_button_close {
  display:none;
}

#button_close_container {
  background-color: blue;
  grid-row: 1;
  align-self: stretch;
  display:none;
}

/* media queries */
@media (max-width: 540px) {

  #router_nav_menu_list {
    background: rgba(255, 60, 88, .8);
    position: fixed;
    align-items: center;
    margin: 0;
    left: 0;
		top:0;
		bottom:0;
		right: 0;
    left: -100%;
    transition:.3s; 
    grid-template-rows: 4fr 1fr 1fr 1fr 1fr 4fr;
    grid-gap:0;
    z-index: 3;
  }

  .menu_list.burger_is_active {
		left:0 !important;
    /* background: black !important; */
	}

  .item1 { grid-row: 2;}
  .item2 { grid-row: 3;}
  .item3 { grid-row: 4;}
  .item4 { grid-row: 5;}

  #router_nav_button {
    display: block;
  }

  #button_close_container {
    display: grid;
    grid-template-rows: 0.3fr 2fr 10fr;
    grid-template-columns: 0.3fr 2fr 10fr;
  }

  #router_nav_button_close {
    display:block;
    grid-row:2;
    grid-column: 2;
  }
}


</style>

