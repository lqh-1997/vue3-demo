<template>
    <div>{{ b }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'bye',
    setup() {
        const b = 'bye message';
        return {
            b
        };
    }
});
</script>
