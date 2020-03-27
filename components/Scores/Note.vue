<template>
  <div class="column is-one-fifths" style="padding: 10px; padding-bottom: 4px">
    <span
      class="bold"
      style="font-size: 15px;font-family: 'Noto Serif JP', serif;"
      >{{ note }}</span
    >
    <span v-if="showContents.includes('chordButton')">
      <input
        v-model="chord"
        type="text"
        style="width:40px; padding: 5px 5px"
        class="input is-small"
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
