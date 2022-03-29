<template>
  <div v-show="visibility">
      <h2>{{title}}</h2>
      <p></p>
  </div>
</template>

<script>
export default {
    name: 'form1',

    data () {
        return {
                title: 'Формула №1',
                visibility: true,
            
        }
    },

    
}
</script>
