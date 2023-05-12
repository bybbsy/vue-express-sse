<template>
    <div class="messages w-full overflow-auto h-2/3 px-5 py-3 bg-gray-200 rounded-lg border border-gray-300">
        <ul class="flex flex-col list">
            <li v-for="(msg, i) in messagesData" :key="i" class="element flex flex-col text-left bg-white my-2 py-2 px-2 rounded">
                <div class="flex">
                    <p class="font-bold">{{ msg.author }}</p>
                    <p class="ml-2">{{ formatDate(msg.dateSent) }}</p>
                </div>
                <p>{{ msg.message }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['messages'],
    setup(props) {
        const formatDate = (date) => {
            const q = new Date(date)
            return q.toLocaleTimeString('ru-RU');
        }

        return {
            formatDate,
            messagesData: props.messages
        }
    },
}
</script>