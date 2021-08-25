<template>
  <div class="sidebar" :class="{active: isOpenSidebar}">
    <BurgerMenu
      @openSidebar='openedSidebar'
    />
    <div class="sidebar-menu">
      <SidebarMenu
        v-for="(menu, index) in sidebarMenu"
        :key=index
        :title=menu.title
        :icon=menu.icon
        :router=menu.router
        :isOpen=isOpenSidebar
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BurgerMenu from '@/components/Burger/BurgerMenu.vue'
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu.vue'

export default {
  components: {
    BurgerMenu,
    SidebarMenu
  },
  computed: mapState(['isOpenSidebar', 'sidebarMenu']),
  methods: {
    ...mapMutations(['openedSidebar'])
  }
}

</script>

<style lang="scss" scoped>
  %flex-element-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar{
    width: 55px;
    background: linear-gradient(180deg, #167558 0%, rgba(26, 116, 88, 0.98) 99.12%);
    height: 100vh;
    padding: 18px 10px;
    transition-duration: 0.4s;
    position: sticky;
    top: 0;
  } 

  .active{
    width: 175px !important;
    transition-duration: 0.4s;
  }
</style>