<template>
  <div>
    <h1 class="is-size-3">Score</h1>
    <span>tonic:</span> <input v-model="defaultTonic" />
    <button @click="addPart">addPart ++</button>
    <Part v-for="(part, index) in score" :key="index" :part="part" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Part from '~/components/Scores/Part'

export default {
  components: {
    Part
  },
  data() {
    return {
      defaultTonic: 'C'
    }
  },
  computed: {
    ...mapState('chord', {
      score: 'score'
    })
  },
  // mounted() {
  //   console.log(this.score)
  // },
  methods: {
    ...mapActions('chord', {
      addPart: 'addPart'
    })
  }
}
</script>

<style></style>
