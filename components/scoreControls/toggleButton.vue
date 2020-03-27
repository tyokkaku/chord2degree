<template>
  <div class="field">
    <input
      :id="payload.id"
      type="checkbox"
      :checked="payload.isChecked"
      class="switch is-thin"
      @click="toggle(payload.arg)"
    />
    <label :for="payload.id">{{ payload.label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      required: true,
      type: Function
    },
    payload: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
label
  user-select: none
</style>
