<template>
  <div>d {{ name }} | {{ age }}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
const props = defineProps(['person'])
//它返回的是一个objrefimpl对象，需要通过value来读取get  set value来修改props中的对象

const { person } = toRefs(props)
const { name, age } = toRefs(person.value)
//props.person==person false
/*
可以这么理解:
    person:{
        get value(){
            return props.person
        }
        set value(newValue){
            props.person=newValue
        } 
    }

*/
console.log(props.person == person.value) //true
</script>

<style scoped></style>
