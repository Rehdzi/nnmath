<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <header>
    <h1>NNMath</h1>
  </header>
  <main>
    <div class="bg-gray-600 flex">
      <div class="w-1/5 rounded-xl bg-purple-400 p-14 m-4">
        <p>nav</p>
      </div>
      <div class="w-4/5 rounded-xl bg-green-400 p-14 m-4">
        <p>content</p>
      </div>
    </div>
  </main>
</template>
