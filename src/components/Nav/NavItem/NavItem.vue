<template>
  <div>
    <div class="menu-item" :class="{ active: currentRoute === route.name }">
      <div v-if="route.children" class="arrow" :class="{ up: open }" @click="toggleSubMenu()"></div>
      <router-link :to="{ name: route.name }" @click.native="menuItemSelected()">
        <p>{{ route.name }}</p>
      </router-link>
    </div>
    <ul v-if="route.children" :class="{ active: open }">
      <li v-for="subRoute in route.children">
        <nav-item :route="subRoute" @selected="menuItemSelected()"></nav-item>
      </li>
    </ul>
  </div>
</template>

<script src="./main.js"></script>

<style src="./main.scss" lang="scss" scoped></style>
