<template>
  <div class="slider bg-purple-600 w-960px h-100px overflow-hidden relative m-auto ...">
      <div class="slider-track">
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
          <div class="slide">
              <img src="../assets/insta.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slider{
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5);
}
.slider::before,.slider::after{
    content: '';
    position: absolute;
    width: 200px;
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
    transform: rotateZ(100deg);
}
.slider .slider-track{
    display: flex;
    width: calc(250px * 14);
    animation: scroll 40s infinite linear;
}
.slider .slide img{
    width: 250px;
    height: 100px;
}

@keyframes scroll {
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-250px * 7);
    }
}
</style>