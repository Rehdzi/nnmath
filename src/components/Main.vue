<template>
    <div class="h-screen bg-slate-200 flex flex-row space-x-4 p-4">
      <div class="w-1/5 h-min rounded-xl bg-slate-50 p-5 flex flex-col space-y-4 ">
<!--       <AddForm
            @create="createPost"
            />
            <PostsDrawer 
            :posts="posts"
           />   -->

<!--    тут насрано, но это не беда!    -->
        <h1>гавно</h1>
        
        <form1m/>
            

      </div>
      <div class="w-4/5 h-full rounded-xl bg-slate-50 p-14 ">
        <form1/>
        
      </div>
    </div>
</template>

<script>
import axios from 'axios'

import form1 from './pages/form1.vue'
import form1m from './pages/form1m.vue'

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
    AddForm,
    form1, form1m,
},
//        methods: {
//             createPost(post){
//                this.posts.push(post);
//            },
//            
//        },
//        mounted(){
//            this.fetchPosts();
//        }
    }       
</script>
