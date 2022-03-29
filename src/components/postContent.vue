<template>
  <h2>{{post_data.title}}</h2>
  <img :src=" '../assets/img' + post_data.img " alt="">
  <p>{{post_data.body}}</p>
</template>

<script>
export default {
    name: 'postContent',
    props: {
        post_data: {
            type: Object,
            default () {
                return {}
            }
        },

    },

    data() {
        return {}
    }
}
</script>
