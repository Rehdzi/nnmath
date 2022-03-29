<template>
  <div v-show="visibility">
      <h2>{{formula.title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'form3',
    data () {
        return {
            formula: {
                title: 'Формула №3',
                imgSource: "",
                visibility: true,
            }
            
        }
    }
}
</script>