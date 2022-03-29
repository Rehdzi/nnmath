<template>
  <div v-show="visibility">
      <h2>{{formula.title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'form2',
    data () {
        return {
            formula: {
                title: 'Формула №2',
                imgSource: "",
                visibility: true,
            }
            
        }
    }
}
</script>