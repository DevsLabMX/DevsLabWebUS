<template>
  <div>
    <div class="who-whe-are inline-flex space-x-1">
      <div class="flex-1 sm:text-center md:text-left">
        <h1
          id="who-we-are" 
          class="md:text-3xl space-x-1 md:ml-20 sm:ml-2 font-light pb-5 pt-7"
        >
          Who we are?
        </h1>
        <div>
          <img
            class="mr-5 md:w-20 md:float-left sm:w-40 sm:justify-center"
            src="@/assets/iconoDevslab300ppp.jpg"
            alt="Devslab logo developers company"
          />
        </div>
        <p class="font-thin text-xl">
          At <strong>DevsLab</strong> we work to create 
          <strong>custom software business solutions</strong> for companies 
          looking to <strong>grow at an accelerated pace</strong> with the cutting-edge,
          enterprise-level technology tools and solutions we offer our clients.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 pt-10 pb-10">
      <div class="xsm:col-span-3 sm:col-span-3 md:col-span-1 mb-10 ">
        <WhoWeAreCards
          title="Mission"
          text="To create high quality technological solutions, scalability and technology for the consumption of our customers, offering a framework of products accessible to any type of company regardless of its characteristics."
          image="whoweare/mision.jpg"
        />
      </div>
      <div class="xsm:col-span-3 sm:col-span-3 md:col-span-1 mb-10 ">
        <WhoWeAreCards
          title="Vision"
          text="To establish ourselves as the best company in the development of cutting-edge technological solutions as well as the one that offers the best products and infrastructure in the market."
          image="whoweare/vision.jpg"
        />
      </div>
      <div class="xsm:col-span-3 sm:col-span-3 md:col-span-1 mb-10 ">
        <WhoWeAreCards
          title="Objectives"
          text="To establish ourselves in the market as a top competitor in technology and development, offering high quality and state-of-the-art products and services."
          image="whoweare/objetivos.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WhoWeAreCards from "../components/whowearecards.vue";
export default {
  components: {
    WhoWeAreCards,
  },
};
</script>

<style>
</style>