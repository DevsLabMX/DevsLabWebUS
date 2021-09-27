<template>
  <div :class="{ 'scrolled': !view.atTopOfPage }"  class="items-center justify-between flex bg-transparent bg-opacity-90 px-12 py-4 absolute w-full animated">
      <div class="text-2xl text-white font-semibold inline-flex items-center">
        <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" class="w-16 mr-4"
            alt="logo-img">
    </div>
    <div>
        <ul class="flex text-white">
            <!--<li class="ml-5 px-2 py-1"><a href="">Portfolio</a></li>
            <li class="ml-5 px-2 py-1"><a href="">Connect Us</a></li>
            <li class="ml-5 px-2 py-1"><a href="">Skillset</a></li>
            <li class="ml-5 px-2 py-1"><a href="">Projects</a></li>
            <li class="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="">Subscribe</a></li>-->
        </ul>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        view: {
            atTopOfPage: true
        }
    }
},
beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},

methods: {
	// the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}
}
</script>

<style scoped lang="css">
nav {
    z-index: 10
}

nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
}
</style>