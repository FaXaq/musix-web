<template>
  <div class="piano">
    <piano-note :note="n" v-for="n, i in keys" :highlight="highlights[i]"></piano-note>
  </div>
</template>

<script src="./main.js"></script>
<style src="./main.scss" lang="scss"></style>
