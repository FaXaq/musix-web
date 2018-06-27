<template>
  <div id="nav" :class="{ open: close }">
    <div id="burger" @click="toggleClose()" :class="{ close: close }">
      <div id="topBar"></div>
      <div id="centralBar"></div>
      <div id="bottomBar"></div>
    </div>
    <!-- handling mobile -->
    <v-touch id="dragOpen" :class="{ active: !close }" @swiperight="dragOpen()" />
    <ul id="menu" :class="{ active: close }">
      <li v-for="route in routes">
        <nav-item :route="route" @selected="menuItemSelected()"></nav-item>
      </li>
    </ul>

    <!-- handling mobile -->
    <v-touch :class="{ active: close }" id="dragClose" @swipeleft="dragClose()" @tap="dragClose()"/>
  </div>
</template>

<script src="./main.js"></script>

<style lang="scss" src="./main.scss"></style>
