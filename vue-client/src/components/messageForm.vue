<template lang="">
    <form class="message-form mb-2">
        <div>
            <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Hey, <span class="italic">{{ username }}</span>, type your
                message here</label>
            <textarea
                id="message" v-model="message" rows="4"
                class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment...">
            </textarea>
        </div>
            <div class="mt-2">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    @click.prevent="handleMessageSending">
                    Send message
                </button>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const message = ref('');
        const username = localStorage.getItem('sse-username');

        const handleMessageSending = async () => {
            const data = JSON.stringify({ author: username, message: message.value, dateSent: new Date() })

            await fetch('http://localhost:7070/api/sse/send-msg', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: data
            })

            message.value = '';
        }

        return {
            handleMessageSending,
            message,
            username
        }
    }
}
</script>
<style lang="">
    
</style>