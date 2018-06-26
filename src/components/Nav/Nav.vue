<template>
  <div id="mainNav">
    <div id="burger" @click="toggleClose()" :class="{ close: close }">
      <div id="topBar"></div>
      <div id="centralBar"></div>
      <div id="bottomBar"></div>
    </div>
    <v-touch id="dragOpen" :class="{ active: !close }" @swiperight="dragOpen()" />
    <ul id="menu" :class="{ active: close }">
      <li>
        <div>
          <div class="arrow"></div>
          <p>Menu</p>
          <ul>
            <li>test</li>
          </ul>
        </div>
        <div>
          <div class="arrow"></div>
          <p>Menu</p>
          <ul>
            <li>test</li>
          </ul>
        </div>
      </li>
    </ul>
    <v-touch :class="{ active: close }" id="dragClose" @swipeleft="dragClose()" @tap="dragClose()"/>
  </div>
</template>

<script src="./main.js"></script>

<style lang="scss" src="./main.scss"></style>
