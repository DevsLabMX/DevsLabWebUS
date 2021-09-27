<template>
  <div class="mt-40">
    <div class="who-whe-are inline-flex space-x-1">
      <div class="flex-1 sm:text-center md:text-left">
        <h1
          id="clients"
          class="md:text-3xl space-x-1 md:ml-20 sm:ml-2 font-light pb-5"
        >
          Our clients
        </h1>
      </div>
    </div>
    <div>
      <ClientsSlider class="w-full" />
    </div>
  </div>
</template>

<script>
import ClientsSlider from "../components/clientsSlider2.vue";
export default {
  components: {
    ClientsSlider,
  },
};
</script>

<style>
</style>