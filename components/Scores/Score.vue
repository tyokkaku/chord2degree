<template>
  <div class="score">
    <div class="score-controls-wrapper">
      <div class="score-controls">
        <ScoreControls :toggle="toggle" />
      </div>
    </div>
    <div class="score-display">
      <div class="title-block">
        <input class="title-input" placeholder="Title" />
      </div>
      <div class="score-tonic">
        <span class="is-size-6">Key:</span>
        <input v-model="defaultTonic" placeholder="Key" />
      </div>
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
import ScoreControls from '~/components/ScoreControls/ScoreControls'

export default {
  components: {
    Part,
    ScoreControls
  },
  data() {
    return {
      defaultTonic: 'C',
      showContents: [
        'chordButton',
        'addRemPartButton',
        'addRemBarButton',
        'partNameLabel',
        'partSelectBox'
      ]
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

<style lang="sass" scoped></style>
