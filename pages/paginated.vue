<template>
  <section id="paginated">
    <transition-group
      name="fade"
      tag="div"
      class="flex flex-wrap justify-center min-h-screen"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="w-1/2 flex justify-center"
      >
        <img :src="imageUrl(item.poster_path)" :alt="item.title" />
      </div>
    </transition-group>
    <client-only>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler" />
    </client-only>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { BASE_IMAGE_URL } from '~/contants'
import { buildStoreParam } from '~/utils'
import {
  NAMESPACE as PAGINATED_NAMESPACE,
  MUTATION_TYPES as PAGINATED_MUTATION_TYPES,
  ACTION_TYPES as PAGINATED_ACTION_TYPES
} from '~/store/paginated'

export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  computed: {
    ...mapState(PAGINATED_NAMESPACE, ['list', 'infiniteId']),
    imageUrl() {
      return (path) => `${BASE_IMAGE_URL}w342${path}`
    }
  },
  methods: {
    async infiniteHandler($state) {
      const list = await this.$store.dispatch(
        buildStoreParam(PAGINATED_NAMESPACE, PAGINATED_ACTION_TYPES.GET_LIST)
      )
      if (Array.isArray(list) && list.length) {
        await this.$store.commit(
          buildStoreParam(
            PAGINATED_NAMESPACE,
            PAGINATED_MUTATION_TYPES.INCREMENT_PAGE
          )
        )
        await $state.loaded()
      } else {
        await $state.complete()
      }
    }
  }
}
</script>
