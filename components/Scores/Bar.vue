<template>
  <div
    class="column is-one-quarter bar"
    style="margin-top: 10px; padding-bottom: 5px"
  >
    <div class="columns is-mobile is-desktop is-multiline">
      <Note
        v-for="(note, noteIndex) in bar"
        :key="noteIndex"
        :note="degreeName[noteIndex]"
        :part-index="partIndex"
        :bar-index="barIndex"
        :note-index="noteIndex"
        :show-contents="showContents"
      />
    </div>
    <div>
      <span v-if="showContents.includes('addRemNoteButton')">
        <ion-icon
          style="font-size: 15px; cursor:pointer; vertical-align: middle"
          class="has-text-success"
          name="add"
          @click="addNoteAt({ partIndex, barIndex })"
        />
        <ion-icon
          style="font-size: 15px; cursor:pointer; vertical-align: middle"
          class="has-text-danger"
          name="remove"
          @click="removeNoteAt({ partIndex, barIndex })"
        />
      </span>
      <span
        v-if="showContents.includes('barTonicInput')"
        class="is-size-6"
        style="float:right"
      >
        <span style="vertical-align: middle">
          Bar Tonic:
        </span>
        <input
          v-model="barTonic"
          type="text"
          style="width:50px"
          class="input is-small is-rounded"
        />
      </span>
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
      addNoteAt: 'addNoteAt',
      removeNoteAt: 'removeNoteAt'
    })
  }
}
</script>

<style lang="sass" scoped>
.bar
  border-right: 1px dotted gray
  border-bottom: 1px dotted gray
  &:nth-child(4n)
    border-right: 0px solid #ccc
  &:last-child
    border-right: 1px solid #ccc
</style>
