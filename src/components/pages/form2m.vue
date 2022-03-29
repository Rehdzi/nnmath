<template>
  <button 
  class="bg-slate-50 border-2 border-sky-400 rounded-lg text-sky-900 p-2 w-full"
    
  >
    <h2>{{title}}</h2>
  </button>
</template>

<script>
export default {
    name: 'form2m',
    data () {
        return {
                title: 'Формула №2',
        }
    },
}
</script>