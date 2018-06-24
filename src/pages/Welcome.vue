<template>
    <div>
        <div class="title">
            <h1>{{msg}}</h1>
            <p>And other stories</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>