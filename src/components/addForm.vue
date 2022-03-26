<template>
  <div class="flex flex-row space-x-4">
        <form @submit.prevent>
            <span class="bg-yellow-200 rounded-lg text-black p-2 px-4 mt-1" 
            @click="createPost">+</span>
            <input 
            v-model="post.title"
            type="text" 
            placeholder="Название">    
        </form>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            post: {
                title: ''
            }
        }
    },
    methods:{
        createPost(){
            
            this.post.id = Date.now()*Math.random(),
            this.$emit('create', this.post)
            this.post = {
                title: ''
            }
            
        }
        
    }
}
</script>

<style>

</style>