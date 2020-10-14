<template>
    <div v-color="'rgba(120, 0, 0, 1)'">{{ msg }}</div>
    <VButton @click="count" :number="number">{{ number }}</VButton>
    <div v-for="item of itemList" :key="item" :ref="setItemRef">{{ item }}</div>
    <div>{{ global }}</div>
</template>

<script lang="ts">
import VButton from '/@/components/VButton.vue';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    name: 'hello',
    components: {
        VButton
    },
    // 被注入的全局变量
    inject: {
        global: {
            from: 'global'
        }
    },
    setup() {
        // 现在通过调用useRouter 或者 useRoute的方式获得this.$router this.$route
        // 因为现在setup 里面的this指向undefined
        const router = useRouter();
        const route = useRoute();
        console.log(router);
        console.log(route);
        const msg = 'message';
        const itemList = [1, 2, 3, 4];
        // 使用 ref 将 number 变成响应式 用对象包装是因为要使用引用传递
        const number = ref(0);
        const count = function () {
            // 通过 number.value 获得 number 的值，在 Mustache 就能通过 number 直接访问到
            number.value++;
        };
        let list: Array<HTMLElement | null> = [];
        // const itemList = this.$store.state.count;
        // console.log(this);
        const setItemRef = function (el: HTMLElement | null) {
            list.push(el);
        };
        onMounted(() => {
            console.log(list);
        });
        return {
            msg,
            itemList,
            list,
            count,
            number,
            setItemRef
        };
    }
});
</script>
