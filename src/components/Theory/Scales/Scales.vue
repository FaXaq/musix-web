<template>
  <div id="scales">
    <div class="selectors">
      <note-picker @select="noteChanged"></note-picker>
      <accidental-picker @select="accidentalChanged"></accidental-picker>
    </div>
    <div class="scale">
      <div class="scale-presentation flex">
        <p v-if="scale">Notes in scale {{ scale.key.getFullText() + scale.name }} are : </p>
        <ul v-if="scale" class="note-list flex">
          <li v-for="n in scale.notes"> {{ n.getFullText() }}</li>
        </ul>
      </div>
      <div class="scale-representation">
        <music-sheet :notes="scale.notes" :k="ABCKey"></music-sheet>
        <guitar v-if="scale" :notes="scale.notes" :showNotesNames="true"/>
      </div>
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss"></style>
