<template>
  <div id="app">
    <van-count-down class="vant-count-down" :time="time" @change="changeCountDown">
      <template #default="timeData">
        <div class="block" v-for="item in dataTime" :key="item.id" style="display: flex">
          <!-- <span class="colon">:</span> -->
          <div class="time text">
            <!-- - 1 == -1 ? 59 :timeData[item.type] - 1 -->
            <div class="top t-block">{{ timeData[item.type] }}</div>
            <div class="flod-box">
              <div class="front flod-block">{{ timeData[item.type] + 1 == 60 ? 0 : timeData[item.type] + 1 }}</div>
              <div class="back flod-block">{{ timeData[item.type] }}</div>
            </div>
            <div class="bottom t-block">{{ timeData[item.type] + 1 == 60 ? 0 : timeData[item.type] + 1 }}</div>
          </div>
        </div>
      </template>
    </van-count-down>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
var app = new Vue({
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
})
</script>

<style scoped>
  html,body{
      border: 0;
      margin: 0;
    }
    #app{
      /* 我写这个只是撑开码上掘金的宽度,防止卡片翻转带动了滚动条 */
      width: 510px;
    }
    .time{
      position: relative;
      width: 100px; /*翻转卡片的宽*/
      height: 64px; /*翻转卡片的高*/
      box-sizing: border-box;/*padding和border的值就不会在影响元素的宽高*/
    }
    .text{
      font-size: 64px;
      color: #FFFFFF;
      text-align: center;
      font-weight: 800;
      line-height: 128px; /*height的2倍*/
    }
    .time .top{
      position: relative;
      border-bottom: 1px solid #fff;
    }
    .time .bottom{
      line-height: 0; /* 把数字头顶到上面去 */
      border-top: 1px solid #fff;
    }
    .time .t-block{
      width: 100%;
      height: 100%;
      background-color: black;
      overflow: hidden;
    }
    .time .flod-box{
      position: absolute;
      top: 0;  /* 为了把flod-box 放到top表面上 */
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #fff; /*给flod-box加以基点的肯定*/
      transform-style: preserve-3d;
      transform-origin: bottom; /* 以底部为旋转的基准点 */
    }
    .flod-box .flod-block{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility:hidden;
      overflow: hidden;
    }
    .flod-box .front{
      background-color: black;
      border-bottom: 1px solid #fff;
    }
    .flod-box .back{
      background-color: black;
      border-top: 1px solid #fff;
      transform: rotateX(0deg) rotateY(-180deg) scale(-1);
      line-height: 0px;   /* 把数字上移了*/
    }
    .vant-count-down{
      display: flex;
    }
    .vant-count-down .block{
      margin-left: 20px;
    }
</style>
