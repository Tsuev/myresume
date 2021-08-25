<template>
  <div id="app">
    <Sidebar />
    <div class="main container-fluid position-relative p-0">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/container/SidebarContainer/SidebarContainer.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
  #app{
    display: flex;
    align-items: stretch;
    font-family: 'Roboto', sans-serif;
  }
  .main{
    background: rgb(15, 15, 15);
    width: 100%;
    overflow: hidden;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>