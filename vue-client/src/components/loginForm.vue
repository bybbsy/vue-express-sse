<template>
    <div>
        <form class="flex flex-col mt-72">
            <label for="website-admin"
                class="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300">Username</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-3xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    @
                </span>
                <input type="text" id="website-admin"
                v-model="username"
                    class="flex rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-3xl border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie Green">
            </div>
            <div class="flex spac-x-2 justify-center mt-16">
                <div>
                    <button type="button"
                    @click="handleUsernameSubmit"
                        class="inline-block px-16 py-3 bg-blue-600 text-white font-medium text-3xl leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { router } from '@/router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    emits: [
        'onUsernameSubmit'
    ],
    setup() {
        const username = ref('')
        const routerHook = useRouter(router);

        const handleUsernameSubmit = () => {
            if(username.value.trim()) {
                localStorage.setItem('sse-username', '@'+username.value);
                routerHook.push({name: 'chat'});
            }
        }

        return {
            username,
            handleUsernameSubmit
        }
    },
}
</script>