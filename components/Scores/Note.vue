<template>
  <div class="column">
    <div class="is-size-5">{{ note }}</div>
    <span v-if="showContents.includes('chordButton')">
      <input
        v-model="chord"
        type="text"
        @input="editNoteAt({ partIndex, barIndex, noteIndex, chord })"
      />
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    note: {
      required: true,
      type: String
    },
    partIndex: {
      required: true,
      type: Number
    },
    barIndex: {
      required: true,
      type: Number
    },
    noteIndex: {
      required: true,
      type: Number
    },
    showContents: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      chord: ''
    }
  },
  methods: {
    ...mapActions('chord', {
      editNoteAt: 'editNoteAt'
    })
  }
}
</script>

<style lang="sass" scoped>
input
  height: 25px
  width: 25px
</style>
