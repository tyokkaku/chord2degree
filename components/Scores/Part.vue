<template>
  <div class="partContainer">
    <span
      v-if="showContents.includes('partNameLabel')"
      class="is-size-5 bold verticalAlignMiddle"
      :class="partNameColor"
      >{{ part.name }}</span
    >
    <span>
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
    <span
      v-if="showContents.includes('partTonicInput')"
      class="is-size-6 verticalAlignMiddle"
    >
      Part Tonic:
      <input
        v-model="partTonic"
        type="text"
        style="width: 50px; "
        class="input is-small is-rounded"
      />
    </span>
    <span v-if="showContents.includes('addRemBarButton')">
      <ion-icon
        style="font-size: 22px; cursor:pointer; vertical-align: middle"
        name="add-circle-outline"
        class="has-text-success"
        @click="addBarAt(partIndex)"
      />
      <ion-icon
        style="font-size: 22px; cursor:pointer; vertical-align: middle"
        name="remove-circle-outline"
        class="has-text-danger"
        @click="removeBarAt(partIndex)"
      />
    </span>
    <div
      class="columns is-multiline"
      style="margin-top: calc(1.5rem - 0.75rem)"
    >
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

    <span v-if="showContents.includes('addRemPartButton')" style="float:right">
      <!-- <button
        class="button is-small is-success is-light"
        @click="addPartAt(partIndex)"
      >
        <span class="bold">
          PART
        </span>
        <ion-icon name="add" />
      </button> -->

      <ion-icon
        style="font-size: 30px; cursor:pointer; vertical-align: middle"
        name="add-circle"
        class="has-text-success"
        @click="addPartAt(partIndex)"
      />
      <ion-icon
        style="font-size: 30px; cursor:pointer; vertical-align: middle"
        name="close-circle"
        class="has-text-danger"
        @click="removePartAt(partIndex)"
      />
      <!--
      <button
        class="button is-small is-danger is-light"
        @click="removePartAt(partIndex)"
      >
        <span class="bold">
          PART
        </span>
        <ion-icon name="close" />
      </button> -->
    </span>
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

<style lang="sass" scoped>
.partContainer
  margin-top: 50px
</style>
