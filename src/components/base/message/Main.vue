<template>
    <div>
        <transition name="fade">
            <div class="message" v-if="visible"><span :class="className"></span>{{message}}</div>
        </transition>
        <transition name="fade">
            <div class="cover" v-if="cover"></div>
        </transition>
    </div>
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
                let icon = {icon: true};
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
                    this.cover = false;
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
        z-index: 1000;

        span {
            margin-right 5px
        }
    }

    .cover {
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index: 999;
        background-color: rgba(0, 0, 0, .3);
    }
</style>