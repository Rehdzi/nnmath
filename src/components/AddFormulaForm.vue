<template>
    <div class="flex flex-row space-x-4">
        <span class="bg-yellow-200 rounded-lg text-black p-2 px-4 mt-1 ">+</span>
        <form @submit.prevent="sendData">
            <div class="form-control">
                <label for="name">Name</label>
                <input 
                    type="name"
                    :value="name"
                    @input="nameInput($event.target.value)"
                />
            </div>
            <input type="submit" class="send" value="Send">
        </form>
        {{name}}
    </div>

</template>

<script>
    export default {
        name: 'AddFormulaForm',

        data: function () {
            return {
                name:'',
            }
        },
        methods: {
                nameInput(value) {
                    this.name = value;
                    console.log(this.name);
                    //sendData();
                } 
        }
    }
</script>