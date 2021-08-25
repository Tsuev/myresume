<template>
  <transition name="fade">
    <div @click="openedModal" v-show="modal.isActive" class="backdrop">
      <div class="modal-custom">
        <img :src="require(`@/assets/img/${photo}`)" alt="Error" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["photo"],
  computed: mapState(["modal"]),
  methods: mapMutations(["openedModal"]),
};
</script>

<style>
.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 50vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>