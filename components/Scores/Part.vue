<template>
  <div style="padding-top: 50px">
    <h1 class="is-size-6">{{ part.name }}</h1>
    <div class="columns is-multiline">
      <Bar v-for="(bar, index) in part.bars" :key="index" :bar="bar" />
    </div>
  </div>
</template>

<script>
import Bar from '~/components/Scores/Bar'

export default {
  components: {
    Bar
  },
  props: {
    part: {
      required: true,
      type: Object
    }
  }
}
</script>

<style></style>
