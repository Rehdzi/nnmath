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
        <postCatalog/>
        

      </div>
      <div class="w-4/5 h-full rounded-xl bg-slate-50 p-14 ">
        <postContent/>
      </div>
    </div>
</template>

<script>

import postCatalog from './postCatalog.vue'
import postContent from './postContent.vue'
import PostContent from './postContent.vue'
//import { ref, onMounted } from 'vue'
// import form1 from './pages/form1.vue'
// import form1m from './pages/form1m.vue'
// import form2 from './pages/form2.vue'
// import form2m from './pages/form2m.vue'
// import form3 from './pages/form3.vue'
// import form3m from './pages/form3m.vue'

// import PostsDrawer from './postsDrawer.vue'
// import AddForm from './addForm.vue'


// const root = ref(null)
// console.log(getElementById('buttons'));
// var buttonsElements = document.querySelector(".buttons");
//     console.log(buttonsElements);
//     buttonsElements.addEventListener("click", function(){
//         console.log(this);
//     });

    export default {
        name: 'mainpage',
        data() {
            return {
                posts: [
                
            ],

            }
        },
        components: {
    postCatalog,
    postContent,
},
//        methods: {
//             createPost(post){
//                this.posts.push(post);
//            },
//            

            
//        mounted(){
//            this.fetchPosts();
//        }
}       
</script>
