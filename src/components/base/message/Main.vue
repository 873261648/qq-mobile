<template>
    <transition name="fade">
        <div class="message" v-if="visible"><span :class="className"></span>{{message}}</div>
    </transition>
</template>

<script>
    export default {
        name: "baseMessage",
        data() {
            return {
                verticalOffset: 20,
                visible: false
            }
        },
        computed: {
            className() {
                let icon = {icon:true};
                switch (this.type) {
                    case 'error':
                        icon['icon-frown'] = true;
                        break;
                    case 'loading':
                        icon['icon-loading'] = true;
                        break;
                    case 'warning':
                        icon['icon-meh'] = true;
                        break;
                    case 'success':
                        icon['icon-smile'] = true;
                        break;
                }
                return icon
            }
        },
        created() {
            this.close()
        },
        methods: {
            close() {
                if (this.duration === 0) return;
                setTimeout(() => {
                    this.visible = false;
                }, this.duration || 3000)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .message {
        position fixed
        top 0
        width calc(100% - 40px)
        margin 20px
        border-radius 4px
        padding 10px
        line-height 1
        text-align center
        color #fff
        background-color: rgba(0, 0, 0, .7)

        span {
            margin-right 5px
        }
    }

    .fade-leave-active
    .fade-enter-active {
        transition: all .2s ease;
    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>