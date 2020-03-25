<template>
  <div style="margin-bottom: 200px">
    <div class="toggleButtonArea">
      <ToggleButtonArea :toggle="toggle" />
    </div>
    <div style="clear: both">
      <h1 class="is-size-3 has-text-centered	">Title</h1>
      <div><span>tonic:</span> <input v-model="defaultTonic" /></div>
      <Part
        v-for="(part, partIndex) in score"
        :key="part.id"
        :part="part"
        :part-index="partIndex"
        :default-tonic="defaultTonic"
        :show-contents="showContents"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Part from '~/components/Scores/Part'
import ToggleButtonArea from '~/components/toglleButton/toggleButtonArea'

export default {
  components: {
    Part,
    ToggleButtonArea
  },
  data() {
    return {
      defaultTonic: 'C',
      showContents: ['chordButton']
    }
  },
  computed: {
    ...mapState('chord', {
      score: 'score'
    })
  },
  methods: {
    ...mapActions('chord', {}),
    toggle(data) {
      if (this.showContents.includes(data)) {
        this.showContents = this.showContents.filter(
          (element) => element !== data
        )
      } else {
        this.showContents.push(data)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.toggleButtonArea
  float: right
</style>
