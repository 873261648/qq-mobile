<template>
    <div class="home">
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <the-app-bar @select="selectBar"/>
    </div>
</template>

<script>
    import Chat from './home/chat'
    import Friend from './home/friend'
    import Dynamic from './home/dynamic'

    import BaseMessage from '../components/base/message/Main'
    import TheAppBar from '../components/TheAppBar'

    let newMessageAudio = require('@/assets/audio/newMessage.mp3')

    export default {
        name: 'home',
        components: {
            Chat,
            Friend,
            Dynamic,
            TheAppBar,
            BaseMessage
        },
        data () {
            return {
                componentName: 'Chat',
                messageAudio: new Audio(newMessageAudio)
            }
        },
        computed: {
            message () {
                return this.$store.getters.message
            }
        },
        watch: {
            message (val) {
                this.newMessage(val)
            }
        },
        methods: {
            selectBar (componentName) {
                this.componentName = componentName
            },
            newMessage (val) {
                if (val.cmd !== 'message') return
                this.messageAudio.play()
            }
        }
    }
</script>
