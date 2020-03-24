<template>
  <div class="column is-one-quarter bar">
    <button @click="addNote({ partIndex, barIndex })">Add Note++</button>
    <div class="columns">
      <Note
        v-for="(note, noteIndex) in bar"
        :key="noteIndex"
        :note="note"
        :part-index="partIndex"
        :bar-index="barIndex"
        :note-index="noteIndex"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    barIndex: {
      required: true,
      type: Number
    }
  },
  methods: {
    ...mapActions('chord', {
      addNote: 'addNote'
    })
  }
}
</script>

<style lang="sass" scoped>
.bar
  // padding-top: 5px
  border-left: 1px solid #ccc
  &:nth-child(4n)
    border-right: 1px solid #ccc
</style>
