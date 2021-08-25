<template>
  <div class="burger-wrapper mb-5">
    <div @click='openSidebar' class="burger-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        openSidebar(){
            this.$emit('openSidebar')
        }
    }
};
</script>

<style lang='scss'>
%flex-element-center {
  display: flex;
  justify-content: start;
  align-items: center;
}

.burger-wrapper {
  @extend %flex-element-center;
  width: 100%;
}
.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 0;
  background: linear-gradient(
    180.57deg,
    #00a875 0.49%,
    rgba(53, 101, 86, 0) 336.28%
  );
  border-radius: 7px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px 10px;
  cursor: pointer;
  .line {
    background: rgba(34, 65, 86, 1);
    height: 3px;
    width: 25px;
  }
}
</style>