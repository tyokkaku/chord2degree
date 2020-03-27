<template>
  <div class="bar column is-one-quarter">
    <!-- Note -->
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
    <!-- Bar Controls -->
    <div class="bar-controls">
      <!-- Note Add/Rem -->
      <span
        v-if="showContents.includes('addRemNoteButton')"
        class="note-add-rem"
      >
        <ion-icon
          class="has-text-success"
          name="add"
          @click="addNoteAt({ partIndex, barIndex })"
        />
        <ion-icon
          class="has-text-danger"
          name="remove"
          @click="removeNoteAt({ partIndex, barIndex })"
        />
      </span>
      <!-- Bar Tonic -->
      <span
        v-if="showContents.includes('barTonicInput')"
        class="bar-tonic is-size-6"
      >
        <input
          v-model="barTonic"
          type="text"
          class="input is-small is-rounded"
          placeholder="Key"
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

<style lang="sass" scoped></style>
