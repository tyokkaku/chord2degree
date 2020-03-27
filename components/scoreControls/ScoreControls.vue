<template>
  <div class="container">
    <div class="wrapper">
      <!-- Chord / Note +- -->
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'chord',
          isChecked: true,
          arg: 'chordButton',
          label: 'Chord'
        }"
      />
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'addRemNote',
          isChecked: false,
          arg: 'addRemNoteButton',
          label: 'Note'
        }"
      />
    </div>
    <!-- Part +- / Bar +- -->
    <div class="wrapper">
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'addRemPart',
          isChecked: true,
          arg: 'addRemPartButton',
          label: 'Part ±'
        }"
      />
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'addRemBar',
          isChecked: true,
          arg: 'addRemBarButton',
          label: 'Bar ±'
        }"
      />
    </div>
    <!-- Part Name / Part Select -->
    <div class="wrapper">
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'partName',
          isChecked: true,
          arg: 'partNameLabel',
          label: 'Part Name'
        }"
      />
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'partSelect',
          isChecked: true,
          arg: 'partSelectBox',
          label: 'Part Select'
        }"
      />
    </div>
    <!-- Tonic Part / Tonic Bar -->
    <div>
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'partTonic',
          isChecked: false,
          arg: 'partTonicInput',
          label: 'Tonic(Part)'
        }"
      />
      <ToggleButton
        :toggle="toggle"
        :payload="{
          id: 'barTonic',
          isChecked: false,
          arg: 'barTonicInput',
          label: 'Tonic(Bar)'
        }"
      />
    </div>
  </div>
</template>

<script>
import ToggleButton from '~/components/ScoreControls/toggleButton'

export default {
  components: {
    ToggleButton
  },
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
