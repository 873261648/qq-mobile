<template>
    <div id="sign_up">
        <base-progress :number="50" :width="5"></base-progress>
    </div>
</template>

<script>
    import BaseProgress from '../components/base/progress'
    export default {
        name: 'SignUp',
        components: { BaseProgress }
    }
</script>

<style scoped>

</style>
