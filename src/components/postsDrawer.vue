<template>
  <div class="bg-slate2-50 border-2 border-sky-400 rounded-lg text-sky-900 p-2 w-full" 
  v-for="post in posts" :key="post">
          <div>{{post.title}}</div>
      </div>
</template>

<script>
import Main from './Main.vue'
export default {

    props: {
        posts: {
            type: Array,
            required: true
        }
    }

}
</script>
