<template lang="">
    <div class="messages-page h-full">
        <MessagesList :messages="messages" v-if="messages.length > 0"/>
        <span v-else>No messages</span>
        
        <MessageForm />
    </div>
</template>

<script>
import { ref } from 'vue';
import MessagesList from '@/components/messagesList.vue';
import MessageForm from '@/components/messageForm.vue';

export default {
    setup() {
        const messages = ref([])
        const eventSource = new EventSource('http://localhost:7070/api/sse/connect')

        eventSource.onmessage = (e) => {
            const data = JSON.parse(e.data)
            if (Array.isArray(data)) {
                messages.value = data
            } else {
                messages.value.push(data)
            }
        }

        return {
            messages,
        }
    },
    components: {
        MessagesList,
        MessageForm
    }
}
</script>
<style lang="">
    
</style>