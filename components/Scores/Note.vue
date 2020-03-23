<template>
  <div class="column">
    <div class="is-size-5">{{ note }}</div>
    <input type="text" />
  </div>
</template>

<script>
export default {
  props: {
    note: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
input
  height: 30px
  width: 30px
</style>
