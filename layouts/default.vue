<template>
  <div class="text-gray-900 leading-normal md:w-2/3 lg:w-1/3 w-full mx-auto">
    <header class="fixed md:w-2/3 lg:w-1/3 w-full">
      <nav class="flex items-center justify-around navigation">
        <nuxt-link class="navigation__item" to="/">
          Full
        </nuxt-link>
        <nuxt-link class="navigation__item" to="/paginated">
          Paginated
        </nuxt-link>
      </nav>
    </header>
    <main class="pt-12">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.navigation {
  &__item {
    @apply bg-teal-500 block w-full text-center p-3 text-gray-100;

    &.nuxt-link-exact-active {
      @apply bg-teal-600;
    }
  }
}
</style>
