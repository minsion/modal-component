<template>
  <button class="btn" @click="handleClick">组件调用弹框</button>
  <button class="btn" @click="handleClickJs">组件调用和函数式调用合二一</button>
  <Dialog
    v-model:show="show"
    title="提示"
    message="Error request failed with status code 404"
  />
</template>
<script setup>
  import { ref } from 'vue'
  import Dialog from './components/Dialog.vue'
  import { useDialog } from './uitils'

  let show = ref(false)
  const handleClick = () => {
    show.value = true
  }
  const handleClickJs = () => {
    useDialog('Error request failed with status code 404', {title: '提示'});
  }
</script>
<style scoped>
.btn{
  margin: 10px;
  background-color: #409EFF;
  color: #fff;
}
</style>
