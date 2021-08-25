<template>
  <div 
    class="big-star p-0" 
    :class="{fall}"
    :style="{
        top: top + '%', 
        left: left + '%',
        width: width + 'px',
        height: height + 'px',
        animationDuration: duration + 's'
    }">
  </div>
</template>

<script>
export default {
    props: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        duration: 0,
        fall: false
    }
}
</script>

<style lang="scss" scoped>
    .big-star{
        background: rgba(0, 168, 117, 0.75);
        box-shadow: 0px 0px 28px 12px rgba(0, 168, 117, 0.74);
        overflow: hidden;
        position: absolute;
        border-radius: 100%;
        transition-duration: 5s;
        animation: motion ease-in-out infinite alternate-reverse;
    }
    .fall{
        top: 110% !important
    }
    @keyframes motion {
        from{
            transform: translateY(0px);
            box-shadow: 0px 0px 28px 12px rgba(0, 168, 117, 0.74);
        }
        to{
            transform: translateY(20px);
            box-shadow: 0px 0px 45px 12px rgba(0, 168, 117, 0.74);
        }
    }
</style>