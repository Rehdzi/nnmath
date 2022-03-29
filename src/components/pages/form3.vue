<template>
  <div v-show="visibility">
      <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'form3',
    data () {
        return {
            
                title: 'Формула №3',
                visibility: false,
            
        }
    }
}
</script>