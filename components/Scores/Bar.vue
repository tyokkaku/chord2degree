<template>
  <div class="column is-one-quarter bar">
    <button @click="addNoteAt({ partIndex, barIndex })">Add Note++</button>
    <!-- <span>bTonic:</span> <input v-model="barTonic" /> -->
    <span v-if="showContents.includes('barTonicInput')">
      bTonic:<input v-model="barTonic" type="text" />
    </span>
    <div class="columns">
      <Note
        v-for="(note, noteIndex) in bar"
        :key="noteIndex"
        :note="degreeName[noteIndex]"
        :part-index="partIndex"
        :bar-index="barIndex"
        :note-index="noteIndex"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Progression } from '@tonaljs/tonal'
import Note from '~/components/Scores/Note'

export default {
  components: {
    Note
  },
  props: {
    bar: {
      required: true,
      type: Array
    },
    partIndex: {
      required: true,
      type: Number
    },
    partTonic: {
      required: true,
      type: String
    },
    barIndex: {
      required: true,
      type: Number
    },
    defaultTonic: {
      required: true,
      type: String
    },
    showContents: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      barTonic: ''
    }
  },
  computed: {
    degreeName() {
      if (this.barTonic) {
        return Progression.toRomanNumerals(this.barTonic, this.bar)
      } else if (this.partTonic) {
        return Progression.toRomanNumerals(this.partTonic, this.bar)
      } else {
        return Progression.toRomanNumerals(this.defaultTonic, this.bar)
      }
    }
  },
  methods: {
    ...mapActions('chord', {
      addNoteAt: 'addNoteAt'
    })
  }
}
</script>

<style lang="sass" scoped>
.bar
  border-left: 1px solid #ccc
  &:nth-child(4n)
    border-right: 1px solid #ccc
</style>
