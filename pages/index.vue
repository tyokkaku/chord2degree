<template>
  <div class="container">
    <h1 class="is-size-4">chord2degree</h1>
    <Score />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Score from '~/components/Scores/Score.vue'

export default {
  name: 'Index',
  components: {
    Score
  },
  methods: {
    ...mapActions('chord', {
      hello: 'hello'
    })
  }
}
</script>

<style lang="sass" scoped>
.container
  margin-bottom: 20%
</style>
