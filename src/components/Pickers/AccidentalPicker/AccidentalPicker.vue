<template>
  <div>
    <ul class="accidental-picker">
      <li v-for="(a, index) in accidentals">
        <div class="note-selector">
          <input type="radio" :id="'accidental' + a.getName()" :value="a" v-model="selectedAccidental" @change="selectionChanged"/>
          <label :for="'accidental' + a.getName()">{{ a.getText() || "none" }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss" scoped></style>
