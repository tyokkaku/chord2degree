<template>
  <div class="column is-one-quarter bar">
    <!-- <h1 class="is-size-6">Bar</h1> -->
    <div class="columns">
      <Note v-for="(note, index) in bar" :key="index" :note="note" />
    </div>
  </div>
</template>

<script>
import Note from '~/components/Scores/Note'

export default {
  components: {
    Note
  },
  props: {
    bar: {
      required: true,
      type: Array
    }
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
