<template>
  <div class="p-4 grid place-items-center">
      <div
        class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 max-w-2xl"
        v-for="x in 1"
        :key="x"
      >
        <img
          class="
            w-32
            h-32
            md:w-48
            md:h-auto
            md:rounded-none
            rounded-full
            mx-auto
          "
          src="https://source.unsplash.com/random"
          alt=""
        />

        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p class="text-lg font-semibold">
            Por el momento el sitio se encuentra en construcción pero puedes
            contactarnos a través de nuestro correo electrónico de ventas
          </p>
          <figcaption class="font-medium">
            <div class="text-blue-600">
              <a href="mailto:jzavala@devslab.com.mx">ventas@devslab.com.mx</a>
            </div>
            <div class="text-gray-500">
              Soluciones de vanguardia en desarrollo, IA, BI y más.
            </div>
          </figcaption>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>