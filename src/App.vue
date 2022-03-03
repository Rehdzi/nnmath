<script>
import mainpage from './components/Main.vue'
import HeaderForm from './components/Header.vue'
export default {
  name: 'App',
  components: {
    mainpage,
    HeaderForm,
  }
}
</script>

<template>
  <div id="app"></div>
  <header-form/>
  <mainpage/>
</template>


