<template>
  <div id="start">
    <Navbar v-if="windowHeight>1230"/>
    <Navbar2 v-else/>
    <Home/>
    <WhoWeAre/>
    <OurServices/>
    <OurClients/>
    <ContactUs/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/navbar2.vue'
import Navbar2 from '../components/navbar3.vue'
import Home from '../components/HomeComponent.vue'
import WhoWeAre from '../components/whoweare.vue'
import OurServices from '../components/ourservices.vue'
import OurClients from '../components/ourclients.vue'
import ContactUs from '../components/contactus.vue'
import Footer from '../components/footer.vue'
export default {
  data(){
    return{
      windowHeight: window.innerWidth,
    }
  },
  components: {
    Navbar,
    // ContactCard,
    // ContactCard,
    //IconoDevsLab,
    Footer,
    Home,
    WhoWeAre,
    OurServices,
    OurClients,
    ContactUs,
    Navbar2
  },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },

    methods: {  
        onResize() {
            this.windowHeight = window.innerWidth
        }
    }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
h1{
  text-align: start;
  color: #f2547d;
}
strong{
  color: #f2547d;
}
.header-image {
  width: 100%;
  height: 100%;
}
.who-whe-are {
  width: 80%;
  margin-left: 10%;
  font-size: 25px;
}

.contact {
  width: 100%;
}
.form-contact {
  width: 45%;
  margin-left: 3%;
  height: 600px;
  display: inline-block;
  background: cornflowerblue;
}
.contact-card {
  width: 45%;
  display: inline-block;
}
#devslab {
  background: rgb(0, 124, 236);
  background: linear-gradient(
    118deg,
    rgba(0, 124, 236, 1) 0%,
    rgba(10, 22, 101, 1) 49%,
    rgba(97, 9, 121, 1) 100%
  );
}
</style>