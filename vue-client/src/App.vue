<template>
  <div class="container mx-auto h-full py-2 px-4">
    <router-view></router-view>
  </div>
</template>

<script>
export default { }
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
