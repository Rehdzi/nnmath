<template>
  <div v-show="visibility">
      <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'form2',
    data () {
        return {
                title: 'Формула №2',
                visibility: false,
            
        }
    }
}
</script>