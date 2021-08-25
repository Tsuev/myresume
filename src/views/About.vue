<template>
  <div
    class="
      about-wrapper
      h-100
      d-flex
      flex-lg-column
      align-items-center
      justify-content-center
    "
  >
    <div v-show="!state" class="row w-100 info-block justify-content-center align-items-center">
      <ul class="mt-3 flex-column flex-lg-row justify-content-center align-items-center">
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="1" type="checkbox" />
          <div>В</div>
        </li>
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="2" type="checkbox" />
          <div>К</div>
        </li>
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="3" type="checkbox" />
          <div>Л</div>
        </li>
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="4" type="checkbox" />
          <div>Ю</div>
        </li>
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="5" type="checkbox" />
          <div>Ч</div>
        </li>
        <li class="mb-3 mx-2">
          <input v-model="checkedInps" value="6" type="checkbox" />
          <div>И</div>
        </li>
      </ul>
    </div>
    <div v-show="state" class="w-100">
      <div class="row type-text p-3 mb-5">
        <div class="wrapper">
          <div class="typing-demo">Мои навыки и умения...</div>
        </div>
        <div class="prompt text-center w-100 d-flex justify-content-center">
          наведитесь на карточку для просмотра остальных технологий
        </div>
        <div @click="backAction" class="back w-100 d-flex justify-content-center">
          🠔 Назад
        </div>
      </div>
      <div v-show="state" class="row w-100 justify-content-center">
        <Card
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :technologyPhoto="card.technologyPhoto"
          :icons="card.icons"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      checkedInps: [],
      state: false,
    };
  },
  components: {
    Card,
  },
  computed: mapState(["cards"]),
  methods: {
    backAction() {
      this.state = false;
      this.checkedInps.length = 0;
    },
  },
  watch: {
    checkedInps() {
      this.checkedInps.length >= 6 ? (this.state = true) : null;
    },
  },
};
</script>

<style lang="scss" scoped>
%text-block-main-words {
  color: #167558;
  background: white;
  border-radius: 8px;
}
.main-info-wrapper {
  width: 800px;
  .img-block {
    // animation: borderanimate 5s alternate infinite;
    border-radius: 20px;
  }
  .text-block {
    font-weight: bold;
    color: white;
    font-size: 30px;
    .name,
    .age,
    .skill {
      @extend %text-block-main-words;
    }
  }
}
.skils-text {
  font-size: 50px;
  font-weight: bold;
  text-shadow: 3px 3px 1px #167558;
}
.info-block {
  ul {
    position: relative;
    display: flex;
  }

  li {
    list-style: none;
    transition-duration: 0.5s;
  }
  li:hover {
    transform: translateY(-15px);
    transition-duration: 0.5s;
  }
  label {
    position: relative;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 80px;
    width: 80px;
    z-index: 100;
  }

  div {
    position: relative;
    font-weight: bold;
    height: 80px;
    width: 80px;
    background: #18191f;
    color: #555;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    cursor: pointer;
    margin: 0 4px;
    border-radius: 20px;
    box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
      4px 4px 6px rgba(0, 0, 0, 0.2),
      inset -1px -1px 4px rgba(255, 255, 255, 0.05),
      inset 1px 1px 1px rgba(0, 0, 0, 0.1);
  }

  /* div:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 75px;
  height: 38px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
} */

  input[type="checkbox"]:checked ~ div {
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: glow 5.5s linear infinite;
  }
}
.type-text {
  .wrapper {
    /*This part is important for centering*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .typing-demo {
    width: 22ch;
    animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    color: rgb(255, 255, 255);
  }
  .back {
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      transform: translateX(-5px);
      transition-duration: 0.3s;
      color: rgb(97, 97, 97);
    }
  }
}
@keyframes borderanimate {
  from {
    border: solid 6px rgb(73, 163, 0);
  }
  50% {
    border: solid 6px rgb(0, 124, 77);
  }
  to {
    border: solid 6px rgb(0, 146, 172);
  }
}
@keyframes glow {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 448px) {
  .typing-demo{
    font-size: 1em !important;
  }
}
</style>