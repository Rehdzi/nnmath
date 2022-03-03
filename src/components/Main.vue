<template>
    <div class="h-screen bg-gray-600 flex flex-row space-x-4 p-4">
      <div class="w-1/5 h-min rounded-xl bg-purple-400 p-5 flex flex-col space-y-4 ">
            <add-formula-form/>
        
        
        <NavElement/>
        <NavElement/>
        <NavElement/>
      </div>
      <div class="w-4/5 h-full rounded-xl bg-green-400 p-14 ">
        {{text}}
      </div>
    </div>
</template>

<script>
    import AddFormulaForm from './AddFormulaForm.vue'
    import NavElement from './NavElement.vue'
    export default {
        name: 'mainpage',
        data() {
            return {
                text: 'content'
            }
        },
        components: {
            NavElement,
            AddFormulaForm,
        }
    }
</script>
