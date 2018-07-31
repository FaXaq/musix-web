<template>
  <div>
    <ul class="note-picker">
      <li v-for="(n, index) in notes">
        <div class="note-selector">
          <input v-if="multipleChoice" type="checkbox" :id="'note' + n.getFullName()" :value="index" v-model="s" @changed="selectionChanged"/>
          <input v-else type="radio" :id="'note' + n.getFullName()" :value="index" v-model="s" @change="selectionChanged"/>
          <label :for="'note' + n.getFullName()">{{ n.getFullName() }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss"></style>
