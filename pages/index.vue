<template>
  <section id="full">
    <div class="flex flex-wrap">
      <div
        v-for="item in list"
        :key="item.id"
        class="w-1/2 flex justify-center"
      >
        <img :src="imageUrl(item.poster_path)" :alt="item.title" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { BASE_IMAGE_URL } from '~/contants'
import { buildStoreParam } from '~/utils'
import {
  NAMESPACE as FULL_NAMESPACE,
  ACTION_TYPES as FULL_ACTION_TYPES
} from '~/store/full'

export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  computed: {
    ...mapState(FULL_NAMESPACE, ['list']),
    imageUrl() {
      return (path) => `${BASE_IMAGE_URL}w342${path}`
    }
  },
  mounted() {
    this.$store.dispatch(
      buildStoreParam(FULL_NAMESPACE, FULL_ACTION_TYPES.GET_LIST)
    )
  }
}
</script>
