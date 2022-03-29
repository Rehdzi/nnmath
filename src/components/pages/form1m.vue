<template>
  <button 
  class="bg-slate-50 border-2 border-sky-400 rounded-lg text-sky-900 p-2 w-full"
  @click="hideSmth"
  >
    <h2>{{title}}</h2>
  </button>
</template>

<script>
import form1 from './form1.vue'
import form2 from './form2.vue'
import form3 from './form3.vue'

export default {
    name: 'form1m',
    data () {
        return {
                title: 'Формула №1',
        }
    },
    components: {
      form1, form2, form3
    },
    methods: {
    hideSmth(){
                form2.visibility = false;
            },
        },
}
</script>
