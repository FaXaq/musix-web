<template>
  <div class="piano-note" :class="{ accidental: note[0].hasAccidental(), highlight: highlighted() > -1 }"></div>
</template>

<script src="./main.js"></script>
<style src="./main.scss" lang="scss"></style>
