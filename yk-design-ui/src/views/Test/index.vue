<template>
  <div class="test">
    <YkCountDown :time="5000" />
    <!-- <messagebox /> -->
    <!-- <rate :value="value" @change="changeValue" :allow-half="true" show-score /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* var app = new Vue({
  el: '#app',
  data: function () {
    return {
      message: 'Hello Vue!',
      time: 30 * 60 * 60 * 1000 - 55000,
      dataTime: [
        { id: 0, text: '天', type: 'days' },
        { id: 1, text: '时', type: 'hours' },
        { id: 2, text: '分', type: 'minutes' },
        { id: 3, text: '秒', type: 'seconds' },
      ],
      dataTimeString: {},
      flodBoxNode: null,
    }
  },
  mounted() {
    this.flodBoxNode = document.querySelectorAll('.flod-box')
  },
  methods: {
    changeCountDown(value) {
      console.log(value.minutes)
      console.log(this.dataTimeString.minutes)
      if (value.seconds !== this.dataTimeString.seconds) {
        this.transform180(3) //秒一直在变,就无需判断了
      }
      if (value.minutes !== this.dataTimeString.minutes) {
        this.transform180(2)
      }
      if (value.hours !== this.dataTimeString.hours) {
        this.transform180(1)
      }
      if (value.days !== this.dataTimeString.days) {
        this.transform180(0)
      }
      this.dataTimeString = value
    },
    transform180(nodeNumber) {
      let timer = null
      let currentflodBoxNode = this.flodBoxNode[nodeNumber]
      currentflodBoxNode.style.transition = 'transform 0s' //使其瞬间返回到 0deg
      currentflodBoxNode.style.transform = 'perspective(400px) rotateX(0deg)'
      timer = setTimeout(() => {
        currentflodBoxNode.style.transition = 'transform 0.9s' //缓个100ms执行，0.9秒转完
        currentflodBoxNode.style.transform = 'perspective(400px) rotateX(-180deg)'
        clearTimeout(timer)
      }, 100)
    },
  },
}) */
</script>

<style lang="scss"></style>
