<template>
  <div class="partContainer">
    <span class="is-size-5 bold verticalAlignMiddle">{{ part.name }}</span>
    <span>
      <div class="select is-small">
        <select
          v-model="partName"
          @change="setPartNameAt({ partIndex, partName })"
        >
          <option disabled value="">Please select</option>
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
      <button
        class="button is-small is-success is-light"
        @click="addBarAt(partIndex)"
      >
        Bar <ion-icon name="add" />
      </button>
      <button
        class="button is-small is-danger is-light"
        @click="removeBarAt(partIndex)"
      >
        Bar <ion-icon name="close" />
      </button>
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
      <button
        class="button is-small is-success is-light"
        @click="addPartAt(partIndex)"
      >
        <span class="bold">
          PART
        </span>
        <ion-icon name="add" />
      </button>
      <button
        class="button is-small is-danger is-light"
        @click="removePartAt(partIndex)"
      >
        <span class="bold">
          PART
        </span>
        <ion-icon name="close" />
      </button>
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
