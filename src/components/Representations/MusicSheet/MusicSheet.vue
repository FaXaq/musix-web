<template>
  <div>
    <pre v-if="debug">{{ tune }}</pre>
    <div id="paper" class="music-sheet"></div>
    <div id="midi"></div>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss"></style>
