<template>
    <div id="nav_wrapper">
        <nav
            id="router_nav">
            <router-link
              v-for="item in menu_items"
              :key=item 
              id="router_link" 
              :to="item.path">{{item.name}}
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu_items: [
                { path: '/', name: 'Proyectos'},
                { path: '/jobs', name: 'Trabajos'},
                { path: '/userinfo', name: 'Sobre mi'},
                { path: '/contact', name: 'Contactame'},
            ]
        }
    }
}
</script>


<style scoped>

#router_nav {
  background-color: purple;
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
  background-color: aqua;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-items: center;
  width: inherit;
}
</style>

