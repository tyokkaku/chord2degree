<template>
  <div>
    <h1 class="is-size-3">Score</h1>
    <span>tonic:</span> <input v-model="defaultTonic" />
    <Part
      v-for="(part, partIndex) in score"
      :key="partIndex"
      :part="part"
      :part-index="partIndex"
    />
    <button @click="addPart">addPart ++</button>
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
  methods: {
    ...mapActions('chord', {
      addPart: 'addPart'
    })
  }
}
</script>

<style></style>
