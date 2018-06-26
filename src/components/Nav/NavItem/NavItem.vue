<template>
  <div>
    <div v-if="children" class="arrow" :class="{ up: open }"></div>
    <p>Menu</p>
    <ul>
      <li>test</li>
      <li>test2</li>
      <li>test3</li>
      <li>test5</li>
    </ul>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss"></style>
