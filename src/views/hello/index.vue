<template>
    <div v-color="'rgba(120, 0, 0, 1)'">{{ a }}</div>
    <VButton @click="count">{{ number }}</VButton>
    <div v-for="item of c" :key="item" :ref="setItemRef">{{ item }}</div>
</template>

<script lang="ts">
import VButton from '/@/components/VButton.vue';
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
    name: 'hello',
    components: {
        VButton
    },
    setup() {
        const a = 'message';
        const c = [1, 2, 3, 4];
        // 使用 ref 将 number 变成响应式 用对象包装是因为要使用引用传递
        const number = ref(0);
        const count = function () {
            console.log(number);
            // 通过 number.value 获得 number 的值，在 Mustache 就能通过 number 直接访问到
            number.value++;
        };
        let list: Array<HTMLElement | null> = [];
        // const c = this.$store.state.count;
        // console.log(this);
        const setItemRef = function (el: HTMLElement | null) {
            list.push(el);
        };
        onMounted(() => {
            console.log(list);
        });
        return {
            a,
            c,
            list,
            count,
            number,
            setItemRef
        };
    }
});
</script>
