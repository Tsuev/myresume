<template>
  <div class="d-flex justify-content-start align-items-end mb-4 menu-wrapper">
	  <router-link :to='router' exact class="menu-icon me-3">
		  <img :src="require(`@/assets/img/${icon}`)" alt="">
	  </router-link>
	  <transition name="fade">
	  	<a v-show="isOpen" href="">{{title}}</a>
	  </transition>
  </div>
</template>

<script>
export default {
	props: ['title', 'icon', 'isOpen', 'router']
}
</script>

<style lang="scss" scoped>
	.router-link-active{
		background: #00ffb3 !important;
	}
	a{
		word-break: normal;
		text-decoration: none;	
		font-size: 18px;
		position: relative;
		color: white;
		text-shadow: 0 1px 3px black;
		font-weight: bold;
		&:hover{
			color: white;
		}
	}

	.menu-icon{
		display: flex;
		justify-content: center;
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
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .6s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}

	.menu-wrapper{
		transition-duration: 0.3s;
		&:hover{
			transform: translateX(3px);
			transition-duration: 0.3s;
		}
	}
</style>