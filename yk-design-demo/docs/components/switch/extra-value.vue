<template>
    <div>
        <YkSwitch checkedValue="value1" unCheckedValue="value2" v-model="value"></YkSwitch>
        value:{{ value }}
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import { YkSwitch } from "yk-design-zds"

const value = ref("value1")
</script>

<style scoped></style>
