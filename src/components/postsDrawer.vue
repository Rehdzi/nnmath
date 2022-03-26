<template>
  <div class="bg-purple-200 rounded-lg text-white p-2 w-full" 
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
