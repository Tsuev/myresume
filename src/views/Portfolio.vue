<template>
  <div
    class="
      portfolio-wrapper
      h-100
      d-flex
      align-items-center
      justify-content-center
      flex-column
      position-relative
    "
  >
    <!-- <h1 class="text-white">Проекты</h1> -->
    <div class="row type-text mb-4">
      <div class="wrapper">
        <div class="typing-demo">Мои коммерческие проекты...</div>
      </div>
      <div class="prompt w-100 d-flex justify-content-center text-center">
        наведитесь на карточку для более подробной информации
      </div>
    </div>
    <div class="row">
      <Card
        v-for="card in portfolioCards"
        :key="card.id"
        :photo="card.img"
        :title="card.title"
        :description="card.description"
        :experience="card.experience"
        :link="card.link"
        :fullImg="card.fullImg"
      />
    </div>
    <Modal :photo="modal.activeImg" :isActive="modal.isActive" />
  </div>
</template>

<script>
import Card from "@/components/Card/PortfolioCard.vue";
import Modal from "@/components/Modal/Modal.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card,
    Modal,
  },
  computed: mapState(["portfolioCards", "modal"]),
  created() {
    document.title = "Проекты";
  },
};
</script>

<style scoped lang='scss'>
.row {
  width: 100%;
  display: flex;
  align-items: center;
}

.backdrop {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  img {
    width: 50vw;
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
    width: 27ch;
    animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    color: rgb(255, 255, 255);
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}
</style>