<template>
    <button :style="style" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'baseButton',
        props: {
            type: {
                type: String,
                default: 'default'
            }
        },
        computed: {
            style () {
                if (this.type === 'text') {
                    return {
                        backgroundColor: 'transparent',
                        color: '#fff',
                        fontSize: '16px',
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
