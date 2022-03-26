<template>
    <div class="h-screen bg-gray-600 flex flex-row space-x-4 p-4">
      <div class="w-1/5 h-min rounded-xl bg-purple-400 p-5 flex flex-col space-y-4 ">
            <AddForm
            @create="createPost"
            />
            <PostsDrawer 
            :posts="posts"
            />
      </div>
      <div class="w-4/5 h-full rounded-xl bg-green-400 p-14 ">

        {{text}}
      </div>
    </div>
</template>

<script>
import axios from 'axios'

import PostsDrawer from './postsDrawer.vue'
import AddForm from './addForm.vue'
    export default {
        name: 'mainpage',
        data() {
            return {
                posts: [
                
            ],

            }
        },
        components: {
            PostsDrawer,
            AddForm
        },
        methods: {
            createPost(post){
                this.posts.push(post);
            },
            async fetchPosts(){
                try{
                    //const response = await axios.get();
                } 
                catch(e){
                    alert('Ошишка.')
                }
            }
        },
        mounted(){
            this.fetchPosts();
        }
    }
</script>
