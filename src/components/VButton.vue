<template>
    <button v-bind="$attrs">
        <slot />
    </button>
    <div>{{ number }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'VButton',
    props: {
        number: {
            type: Number
        }
    },
    setup() {
        onMounted(() => {});
    },
    inheritAttrs: false
});
</script>
