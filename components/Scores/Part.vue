<template>
  <div class="part">
    <div class="part-controls">
      <!-- Part Name -->
      <span
        v-if="showContents.includes('partNameLabel')"
        class="part-name is-size-6 bold"
        :class="partNameColor"
        >{{ part.name }}
      </span>
      <!-- Part Select -->
      <span class="part-select">
        <div
          v-if="showContents.includes('partSelectBox')"
          class="select is-small"
        >
          <select
            v-model="partName"
            @change="setPartNameAt({ partIndex, partName })"
          >
            <option disabled value="">Please select one</option>
            <option>Intro</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>サビ</option>
            <option>間奏</option>
            <option>Outro</option>
          </select>
        </div>
      </span>

      <!-- Bar Add/Rem -->
      <span v-if="showContents.includes('addRemBarButton')" class="bar-add-rem">
        <ion-icon
          name="add-circle-outline"
          class="has-text-success"
          @click="addBarAt(partIndex)"
        />
        <ion-icon
          name="remove-circle-outline"
          class="has-text-danger"
          @click="removeBarAt(partIndex)"
        />
      </span>

      <!-- Part Add/Rem -->
      <span
        v-if="showContents.includes('addRemPartButton')"
        class="part-add-rem"
      >
        <ion-icon
          name="add-circle"
          class="has-text-success"
          @click="addPartAt(partIndex)"
        />
        <ion-icon
          name="close-circle"
          class="has-text-danger"
          @click="removePartAt(partIndex)"
        />
      </span>

      <!-- Part Tonic -->
      <span
        v-if="showContents.includes('partTonicInput') || partTonic"
        style=""
        class="part-tonic is-size-6"
      >
        <input v-model="partTonic" type="text" placeholder="Key" />
      </span>
    </div>

    <!-- Bar -->
    <div class="bar-wrapper columns is-multiline is-mobile">
      <Bar
        v-for="(bar, barIndex) in part.bars"
        :key="barIndex"
        :bar="bar"
        :part-index="partIndex"
        :part-tonic="partTonic"
        :bar-index="barIndex"
        :default-tonic="defaultTonic"
        :show-contents="showContents"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Bar from '~/components/Scores/Bar'

export default {
  components: {
    Bar
  },
  props: {
    part: {
      required: true,
      type: Object
    },
    partIndex: {
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
      partTonic: '',
      partName: ''
    }
  },
  computed: {
    partNameColor() {
      const part = this.part.name

      if (part === 'Intro') {
        return 'intro'
      } else if (part === 'A') {
        return 'a'
      } else if (part === 'B') {
        return 'b'
      } else if (part === 'C') {
        return 'c'
      } else if (part === 'サビ') {
        return 'sabi'
      } else if (part === '間奏') {
        return 'kansou'
      } else if (part === 'Outro') {
        return 'outro'
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions('chord', {
      addBarAt: 'addBarAt',
      addPartAt: 'addPartAt',
      removePartAt: 'removePartAt',
      removeBarAt: 'removeBarAt',
      setPartNameAt: 'setPartNameAt'
    })
  }
}
</script>

<style lang="sass" scoped></style>
