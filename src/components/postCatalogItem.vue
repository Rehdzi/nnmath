<template>
  <button 
    class="bg-slate-50 border-2 border-sky-400 rounded-lg text-sky-900 p-2 w-full"
    @click="sendDataToContent"
    >
    <h2>{{post_data.title}}</h2>
  </button>
</template>

<script>
export default {
    name: 'postCatalogItem',
    props: {
        post_data: {
            type: Object,
            default () {
                return {}
            }
        },

    },
    methods:{
        sendDataToContent(){
            this.$emit('pushBody', this.post_data.id)
        }
    },
    data() {
        return {}
    }
}
</script>

<style>

</style>