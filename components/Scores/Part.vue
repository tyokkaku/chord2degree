<template>
  <div style="padding-top: 50px">
    <button @click="addBar(partIndex)">Add Bar++</button>
    <!-- <h1 class="is-size-6">{{ part.name }}</h1> -->
    <div class="columns is-multiline">
      <Bar
        v-for="(bar, barIndex) in part.bars"
        :key="barIndex"
        :bar="bar"
        :part-index="partIndex"
        :bar-index="barIndex"
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
    }
  },
  methods: {
    ...mapActions('chord', {
      addBar: 'addBar'
    })
  }
}
</script>

<style></style>
