<template>
  <div class="container h-100 d-flex align-items-center">
    <div class="row w-100">
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
        <h1 class="mb-3"><span class="green-title">Привет,</span> меня зовут <span class="my-name">Мансур</span>!</h1>
        <p>
          <b class="green-title">Frontend</b> разработчик с опытом <span class="green-title"><b>2</b></span> года ✌️
          <br>
          Себя расцениваю как <span class="green-title"><b>pre-middle</b></span>
          <br>
          Люблю писать web-приложения на <span class="green-title"><b>Vue</b></span> и <span class="green-title"><b>Nuxt</b></span>
          <br>Из личных качеств: 
          <ul class="mt-2">
            <li><span class="green-title"><b>Ответственный,</b></span> четко соблюдаю внутреннюю политику.</li>
            <li><b>Пунктуальный,</b> внимателен к срокам.</li>
            <li><span class="green-title"><b>Коммуникабельный,</b></span> мгновенно нахожу общий язык с командой.</li>
            <li><b>Координированный,</b> быстро вхожу в проект, решаю проблемы.</li>
          </ul>
        </p>
      </div>
      <div class="col-12 col-lg-6">
        <img class="img-fluid mans-img" src="@/assets/img/mansur.jpg" alt="mansur">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = "Главная";
  },
};
</script>

<style lang='scss' scoped>
.container{
  color: rgb(165, 165, 165);
  .green-title{
    color: #00a875;
  }
}
.mans-img{
  border-radius: 100%;
  animation: animate-img 5s ease-in-out 0.2s infinite alternate-reverse none;
}

@keyframes animate-img {
  from{
    box-shadow: none;
  }
  10%{
    box-shadow: 0 0 10px 0px #224157;
  }
  to{
    box-shadow: 0 0 20px 10px #00a875;
  }
}
</style>

