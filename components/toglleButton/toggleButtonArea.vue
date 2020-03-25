<template>
  <div class="container">
    <div class="wrapper">
      <div class="field">
        <input
          id="addRemNote"
          type="checkbox"
          class="switch is-thin"
          @click="toggle('addRemNoteButton')"
        />
        <label for="addRemNote">Note ±</label>
      </div>
      <div class="field">
        <input
          id="chord"
          type="checkbox"
          checked="checked"
          class="switch is-thin"
          @click="toggle('chordButton')"
        />
        <label for="chord">Chord</label>
      </div>
    </div>
    <div>
      <div class="field">
        <input
          id="partTonic"
          type="checkbox"
          class="switch is-thin"
          @click="toggle('partTonicInput')"
        />
        <label for="partTonic">Tonic(Part)</label>
      </div>
      <div class="field">
        <input
          id="barTonic"
          type="checkbox"
          class="switch is-thin"
          @click="toggle('barTonicInput')"
        />
        <label for="barTonic">Tonic(Bar)</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      required: true,
      type: Function
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
.wrapper
  margin-right: 50px
</style>
