<template>
  <div class="note column is-one-fifths">
    <span class="note-degree bold">{{ note }}</span>
    <input
      v-if="showContents.includes('chordButton')"
      v-model="chord"
      type="text"
      class="note-input input is-small"
      @input="editNoteAt({ partIndex, barIndex, noteIndex, chord })"
    />
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

<style lang="sass" scoped></style>
