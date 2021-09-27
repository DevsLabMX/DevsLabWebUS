<template>
  <header>
    <div class="container">
      <nav class="nav">
        <img v-if="blanco" src="../assets/logodevslab-blanco.png" width="200" height="200px" id="logo" alt="" />
        <img v-else src="../assets/logodevslab.png" width="200" height="200px" alt="">
        <ul class="nav-list">
          <li>
            <a href="#start" class="nav-link" style="font-size: 16px; font-style: bold;">Home</a>
          </li>
          <li>
            <a href="#who-we-are" class="nav-link" style="font-size: 16px; font-style: bold;">Who we are?</a>
          </li>
          <li>
            <a href="#services" class="nav-link" style="font-size: 16px; font-style: bold;">Our Services</a>
          </li>
          <li>
            <a href="#clients" class="nav-link" style="font-size: 16px; font-style: bold;">Clients</a>
          </li>
          <li>
            <a href="#contact" class="nav-link" style="font-size: 16px; font-style: bold;">Contact Us</a>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      blanco: true
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let header = document.querySelector("header");
      if(header){
        let windowPosition = window.scrollY > 0;
      if (window.scrollY > 0) {
        this.blanco=false
      } else {
        this.blanco=true
      }
      header.classList.toggle("scrolling-active", windowPosition);
      }
    },
  },
};
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if(header){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
  }
});
</script>

<style scoped lang="css">
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 0.5s ease;
  z-index: 1000;
}
.container .nav .img {
  background-image: url("../assets/logodevslab-blanco.png") no-repeat;
  width: 100px;
  height: 100px;
}

.container {
  width: 70%;
  margin: 0 auto;
  padding: 0 1.5rem;
  transition: width 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  transition: height 0.1s ease;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
}

.nav .logo {
  font-size: 3.5rem;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  display: flex;
  margin-left: 4rem;
  align-items: flex-end;
}

.font-config {
  font-size: 16px;
  color: #F2547D;
}

.nav-link {
  margin: 0 1rem;
  position: relative;
}

.nav-link::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: -3px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

#nav-cta {
  display: inline-block;
  background-color: #fff;
  color: #313131;
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: background-color 0.1s ease;
}

#nav-cta:hover {
  background-color: #d3d3d3;
}

/*Apply styles after scroll*/
.scrolling-active {
  background-color: #fff;
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.1);
}

.scrolling-active .container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  transition: width 2s cubic-bezier(0.075, 0.82, 0.165, 1)
}

.scrolling-active .nav {
  height: 85px;
}

.scrolling-active .nav a {
  color: #313131;
}

.scrolling-active #nav-cta {
  background-color: #313131;
  color: #fff;
}

.scrolling-active #nav-cta:hover {
  background-color: #151515;
}

.scrolling-active .nav-link::after {
  background-color: #313131;
}

/*Apply styles after scroll end*/

/* Hero Demo Content*/
.hero {
  width: 100%;
  height: 100vh;
  /*background: url("mountain-large.jpg") center no-repeat;*/
  background-size: cover;
  position: relative;
}

.hero::after {
  content: "";
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.demo-content {
  width: 100%;
  height: 200vh;
  background-color: #fff;
}
</style>