<template>
  <div>
      <div class="relative">
      <img
          class="
            w-screen
            h-screen
            object-cover
          "
          src="../assets/fondo2.jpg"
          alt="dashboard analitycs"
        />
    </div>
    <div class="overlay">
        <vue-typed-js :strings="['Development', 'Business Intelligence', 'Artifficial Intelligence', 'Taylored systems']" :loop="true" :smartBackspace="true" :backSpeed="50" class="child">
        <p class="lg:text-xl md:text-xs text-white">Solutions in <span class="typing" style="color: #F2547D"></span></p>
    </vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="css">

.child {
  width: 40%;
  height: 50px;
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 40%; /* apply negative top and left margins to truly center the element */
}

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.60);
    width: 100%;
    height: 100%;
    position: absolute;
    top: auto;
    bottom: 0;
    opacity: 1;
}
</style>