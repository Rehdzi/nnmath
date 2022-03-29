<template>
  
    <postCatalogItem
        v-for="post in posts"
        :key="post.id"
        :post_data="post"
        @pushBody="pushDataToContent"
    />

</template>

<script>
import postCatalogItem from "./postCatalogItem.vue"
import postContent from "./postContent.vue"
export default {
    name: "postCatalog",
    components: {
        postCatalogItem,
        postContent
    },

    props: {},

    methods: {
        pushDataToContent(data) {
            console.log(data)
        }
    },

    data() {
        return {
            posts: [
        {   id:1,
            title:"Формула№1",
            img:"1.png",
            body:"lorem ipsum dolor sit amet"
        },
        {   id:2,
            title:"Формула№2",
            img:"2.png",
            body:"wehnnnnnnsssovrsopisp"
        },
        {   id:3,
            title:"Формула№3",
            img:"3.png",
            body:"lorem ipsum ya pokakal:)"
        }

    ]
        }
    },
}
</script>

<style>

</style>