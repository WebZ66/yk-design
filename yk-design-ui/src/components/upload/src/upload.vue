<template>
  <div class="yk-upload" @dragover="ondragover" @drop="ondrop">
    <div v-if="flag == 'select'" class="upload-select" @click="handleSelect">
      <YkIcon name="jiahao" color="black"></YkIcon>
      <input
        ref="selectFile"
        id="select"
        type="file"
        @change="selectFileChange"
      />
    </div>
    <div v-else-if="flag == 'progress'" class="upload-progress">
      <div class="progress-number">{{ progressNumber }}%</div>
      <div ref="progLiner" class="progress-liner"></div>
      <div class="cancel-btn" @click="cancelUpload">取消上传</div>
      <div class="mask"></div>
    </div>
    <div v-else class="upload-result">
      <div class="del-btn" @click="cancelUpload">x</div>
    </div>
    <img v-show="flag != 'select'" class="preview" src="" ref="previewImg" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'

const flag = ref('select')
function showArea(value: string) {
  flag.value = value
}

//选择
const previewImg = ref<HTMLImageElement | null>(null)
const selectFile = ref<HTMLInputElement | null>(null)
let cancel: any = null
function handleSelect() {
  const select = document.querySelector('#select') as HTMLInputElement
  select.click()
}
function selectFileChange() {
  showArea('progress')
  let files = selectFile.value?.files
  console.log(files)
  if (files?.length == 0) {
    return
  }
  const file = files![0]
  //展示预览图
  const reader = new FileReader()
  //将文件转化为base64
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    if (e.target && e.target.result) {
      previewImg.value!.src = e.target.result as string
    }
  }
  //进行上传
  cancel = uploadFile(
    file,
    (progress) => {
      progressNumber.value = progress
      setProgress(progress)
    },
    (res) => {
      console.log(res)
      showArea('result')
    }
  )
}

//上传
function uploadFile(
  file: File,
  onProgress: (n: number) => void,
  onFinish: (flag: string, file?: File) => void
) {
  //模拟请求
  let p = 0
  nextTick(() => {
    setProgress(0)
  })
  const timerId = setInterval(() => {
    p++
    onProgress(p)
    if (p == 100) {
      onFinish('服务器接收到了', file)
      clearInterval(timerId)
    }
  }, 20)
  //中断请求
  return function () {
    clearInterval(timerId)
  }
}

//progress
const progressNumber = ref(0)
const progLiner = ref<HTMLDivElement | null>(null)
function setProgress(value: number) {
  let v = 0.6 * value + 'px'
  progLiner.value?.style.setProperty('--progress', v)
}

//cancel
function cancelUpload() {
  //停止上传
  cancel && cancel()
  showArea('select')
  //注意：vue里不需要让对应的上传input.value清空，因为是通过v-if进行切换的
  //每次更改都会导致其重新创建。而纯css，只能通过display:none的方式进行显示隐藏，实际上还是同一个元素
}

/* 拖拽上传 */
// 方式①注意 input type='file'本身就支持拖拽,所以只需要让其宽高百分百
//通过 opacity让其透明即可，这样甚至不需要前面那个点击外层里面的input再点击

function ondragover(e: DragEvent) {
  e.preventDefault()
}
function ondrop(e: DragEvent) {
  e.preventDefault()

  let files = e.dataTransfer!.files
  //直接其放入到input的file中，是无法直接触发onchange事件的,
  //需要手动触发
  selectFile.value!.files = files
  selectFileChange()
}
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
