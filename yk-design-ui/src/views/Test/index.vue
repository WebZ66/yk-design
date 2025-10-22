<template>
  <div class="test">
    <Calendar :value="day" @on-change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import Calendar from '@/components/calendar/src/calendar.vue'
import * as dayjs from 'dayjs'
import { h, ref } from 'vue'
const day = ref(dayjs('2025-10-20'))
function handleChange(date:any) {
  day.value = date
}

</script>

<style lang="scss"></style>
