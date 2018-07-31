<template>
  <div id="findTheNote">
    <guitar :notes="[currentState]" :randomOnce="true"/>
    <div style="height: 100px; width: 100%">
      <piano :notes="[currentState]"></piano>
    </div>
    <h2>Score : {{ score }}</h2>
    <ul class="guesses">
      <li v-for="n in notes">
        <button class="btn btn-note" @click="checkNotes(n)">{{ stringifyNotesArray(n, ' / ') }}</button>
      </li>
    </ul>
  </div>
</template>

<script src="./main.js"></script>
<style src="./main.scss" lang="scss"></style>
