<template>
    <div class="slider w-full">
      <div class="slide w-full">
        <img class="transform-gpu scale-50" src="../assets/ourclients/radiotrunk.png" alt="radiotrunk ptt network telecomm company">
        <!-- <img class="transform-gpu scale-50" src="../assets/ourclients/waye.png"> -->
        <img class="transform-gpu scale-50" src="../assets/ourclients/barza-logo.png" alt="BarzaConstructores construction company">
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      images: [{src: "../assets/ourclients/radiotrunk.png"}, { src: '../assets/ourclients/waye.png'}, { src: '../assets/ourclients/barza-logo.png'}]
    }
  }
};
</script>

<style>

.slider {
  width: 100%;
  height: 100px;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(0, 124, 236, 1) 0%,
    rgba(10, 22, 101, 1) 49%,
    rgba(97, 9, 121, 1) 100%
  );;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
  display: flex;
  overflow: hidden;
}
.slide {
    width: 100%;
  height: 70%px;
  display: flex;
  justify-items: center;
  align-items: center;
  /*animation: scroll 20s linear infinite;*/
}
.slide img {
  height: 70%;
  padding: 0 30px 0 30px;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.slider::before,.slider::after{
    content: "";
    position: absolute;
    height: 100px;
    background: linear-gradient(to right,white 0%,rgba(255,255,255,0) 100%);
    z-index: 2;
}
.slider::before{
    top: 0;
    left: 0;
}
.slider::after{
    top: 0;
    right: 0;
    transform: rotateZ(180deg);
}
</style>