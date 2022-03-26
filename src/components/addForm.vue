<template>
  <div class="flex flex-row space-x-4">
        <form @submit.prevent>
            <span class="bg-sky-50 border-2 border-sky-400 rounded-lg text-sky-400 p-2 px-4 mt-1" 
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
