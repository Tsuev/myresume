<template>
  <div class="row flex-column justify-content-center">
    <div class="logo">
      <img class="" :src="require(`@/assets/img/${img}`)" alt="">
      <div class="color-fill" :style="{ background: color }"></div>
    </div>
    <a :href="link" class="text">{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'color', 'link']
};
</script>

<style scoped lang='scss'>
  .row{
    width: 100%;
    height: 20vh;
    overflow: hidden;
    &:hover > .logo .color-fill{
      transform: scale(140);
      transition-duration: 1s;
    }
    .logo{
      position: relative;
      width: 145px;
      height: 145px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 100px;
      img{
        z-index: 10;
        width: 120px;
      }
      .color-fill{
        position: absolute;
        background: #d30309;
        width: 20px;
        height: 20px;
        transform: scale(1);
        border-radius: 100%;
        z-index: 1;
        transition-duration: 0.3s;
      }
    }
    .text{
      font-size: 70px;
      color: white;
      font-weight: 500;
      margin-left: 100px;
      z-index: 10;
      text-decoration: none;
      transition-duration: 0.5s;
      cursor: pointer;
      &:hover{
        transform: translateY(-5px);
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.440);
        transition-duration: 0.5s;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .text{
      font-size: 30px !important;
    }
  }
</style>