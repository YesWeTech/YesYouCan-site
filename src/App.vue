<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <custom-example message="Hello"></custom-example>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Yes You Can'
    }
  }
}
</script>

<style lang="scss">
  @import 'main.scss';
</style>
