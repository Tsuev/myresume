<template>
  <div class="col-12 col-lg-3 mb-3 d-flex justify-content-center html">
    <div
      class="card card0 mx-3"
      :style="{
        'background-image':
          'url(' + require(`@/assets/img/${technologyPhoto}`) + ')',
      }"
    >
      <div class="border">
        <h2>{{ title }}</h2>
        <div class="icons">
          <div
            class="fa"
            v-for="(icon, key) in icons"
            :key="key"
            :data-value="icon.title"
            :style="{
              'background-image': 'url(' + require(`@/assets/img/${icon.icon}`) + ')',
              'color': icon.color
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "technologyPhoto", "icons"],
};
</script>

<style scoped>
.border {
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
.border:hover {
  border: 1px solid rgb(255, 255, 255);
}
.card {
  height: 379px;
  width: 300px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card0 {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 300px;
  animation-duration: 2s;
  animation-name: startinate;
  animation-direction: alternate-reverse;
}
.card0:hover {
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 600px;
}
.card0:hover h2 {
  opacity: 1;
}
.card0:hover .fa {
  opacity: 1;
}

h2 {
  font-family: "ROBOTO", Helvetica, Arial, sans-serif;
  color: #fff;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
  text-shadow: 3px 3px 5px black;
}
.fa {
  background-image: url("../../assets/img/twig.png");
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  opacity: 0;
  transition: opacity 1s;
  position: relative;
  cursor: pointer;
}
.fa::after {
  content: attr(data-value);
  font-weight: bold;
  position: absolute;
  width: 80px;
  height: 20px;
  background: white;
  top: 5px;
  left: 35px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  transition-duration: 0.3s;
  opacity: 0;
  transform: translateY(10px);
}

.fa:hover::after {
  transition-duration: 0.3s;
  opacity: 1;
  transform: translateY(0px);
}

.icons {
  position: absolute;
  fill: #fff;
  color: #fff;
  height: 130px;
  top: 226px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@keyframes startinate {
  from{
    background-position: center center;
  }
  to{
    background-position: left center;
    background-size: 600px;
  }
}

@media screen and (max-width: 448px) {
  .icons{
    left: 20px;
  }
}
</style>