<template>
  <div class="col-auto d-flex align-items-center justify-content-center">
    <div class="card mb-4">
      <div class="image">
        <img class="img-fluid" :src="require(`@/assets/img/${photo}`)" />
      </div>
      <div class="details">
        <div class="center">
          <h1>
            {{ title }}<br /><span>{{ description }}</span>
          </h1>
          <p>
            {{ experience }}
          </p>
          <ul>
            <li>
              <a :href="link">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="20px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    fill="#fff"
                    d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813
                        l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0
                        l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219
                        c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0
                        C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0
                        c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125
                        c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0
                        l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594
                        C274.561,395.092,246.42,392.342,220.326,382.186z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a @click="getActiveImg(fullImg)" href="#">
                <svg
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  id="image"
                  viewBox="0 0 48.89 41.84"
                >
                  <path
                    fill="#fff"
                    d="M.39,45.38V3.53H49.28V45.38ZM46,36.77a4.75,4.75,0,0,0,.22-.87c0-8.88,0-17.75,0-26.63,0-2-1.05-2.24-2.67-2.23-12.32,0-24.64,0-37,0-2,0-2.7.68-2.69,2.69.08,8.43,0,16.87,0,25.3,0,.47.1.93.19,1.72.8-.93,1.37-1.59,1.93-2.26L17.12,21.09c1.95-2.34,3.07-2.36,5.16-.1,1.5,1.61,3,3.24,4.48,4.85,2,2.12,2.41,2.14,4.7.24s2.65-2,4.83.32Z"
                    transform="translate(-0.39 -3.53)"
                  />
                  <path
                    fill="#fff"
                    d="M42.67,15.78a5.28,5.28,0,1,1-5.41-5.2A5.32,5.32,0,0,1,42.67,15.78Z"
                    transform="translate(-0.39 -3.53)"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ["photo", "title", "description", "experience", "link", "fullImg"],
  methods: mapMutations(['openedModal', 'getActiveImg'])
};
</script>

<style>
.card {
  width: 360px;
  height: 400px;
  background: #000;
}
.card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card .image img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.card:hover .image img {
  opacity: 0.5;
  transform: translateX(30%); /*100%*/
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%; /*100%*/
  height: 100%;
  background: #1b7559;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
  padding: 20px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.card .details .center h1 {
  margin: 0;
  padding: 0;
  color: #224157;
  line-height: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-transform: uppercase;
}
.card .details .center h1 span {
  font-size: 14px;
  color: #262626;
}
.card .details .center p {
  margin: 10px 0;
  padding: 0;
  color: #262626;
  font-size: 13px;
}
.card .details .center ul {
  margin: 10px auto 0;
  padding: 0;
  display: table;
}
.card .details .center ul li {
  list-style: none;
  margin: 0 5px;
  float: left;
}
.card .details .center ul li a {
  display: block;
  background: #262626;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  transform: 0.5s;
  transition-duration: 0.2s;
  border-radius: 5px;
}
.card .details .center ul li a:hover {
  background: #224157;
  transition-duration: 0.2s;
}
@media screen and (max-width: 510px) {
  .typing-demo{
    font-size: 1em !important;
  }
}
</style>