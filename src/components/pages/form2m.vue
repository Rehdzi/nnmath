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
    name: 'form2m',
    data () {
        return {
                title: 'Формула №2',
        }
    },
    components: {
      form1, form2, form3
    },
    methods: {
    hideSmth(){
                form1.visibility = false;
                form2.visibility = true;
                form3.visibility = false;
                console.log('залупа');
            },
        },
}
</script>