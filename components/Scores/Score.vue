<template>
  <div>
    <div class="toggleButtonArea">
      <div class="field">
        <input
          id="partTonic"
          type="checkbox"
          class="switch is-thin is-rtl"
          @click="toggle('partTonicInput')"
        />
        <label for="partTonic">Tonic(Part)</label>
      </div>
      <div class="field">
        <input
          id="barTonic"
          type="checkbox"
          class="switch is-thin is-rtl"
          @click="toggle('barTonicInput')"
        />
        <label for="barTonic">Tonic(Bar)</label>
      </div>
    </div>
    <span>tonic:</span> <input v-model="defaultTonic" />
    <Part
      v-for="(part, partIndex) in score"
      :key="part.id"
      :part="part"
      :part-index="partIndex"
      :default-tonic="defaultTonic"
      :show-contents="showContents"
    />
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
      defaultTonic: 'C',
      showContents: []
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
  text-align: right
</style>
