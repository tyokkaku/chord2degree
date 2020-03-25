<template>
  <div style="padding-top: 50px">
    <span v-if="showContents.includes('partTonicInput')">
      pTonic:<input v-model="partTonic" type="text" />
    </span>
    <button @click="addBarAt(partIndex)">Add Bar++</button>
    <button @click="removeBarAt(partIndex)">Remove Bar--</button>
    <!-- <h1 class="is-size-6">{{ part.name }}</h1> -->
    <div class="columns is-multiline">
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
    <button
      class="button is-small is-success is-light"
      @click="addPartAt(partIndex)"
    >
      <span class="bold">
        PART
      </span>
      <ion-icon name="add"></ion-icon>
    </button>
    <button
      class="button is-small is-danger is-light"
      @click="removePartAt(partIndex)"
    >
      <span class="bold">
        PART
      </span>
      <ion-icon name="close"></ion-icon>
    </button>
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
      partTonic: ''
    }
  },
  methods: {
    ...mapActions('chord', {
      addBarAt: 'addBarAt',
      addPartAt: 'addPartAt',
      removePartAt: 'removePartAt',
      removeBarAt: 'removeBarAt'
    })
  }
}
</script>

<style></style>
