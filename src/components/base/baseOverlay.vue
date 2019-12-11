<!--遮罩层组件-->
<template>
    <transition name="fade">
        <div class="overlay" v-if="show" @click="$emit('update:show',false)"></div>
    </transition>
</template>

<script>
    export default {
        name: "overlay",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 99;
    }
</style>