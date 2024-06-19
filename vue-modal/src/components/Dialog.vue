<template>
  <div v-if="show" class="dialog-mask flex-center">
    <div class="dialog-box">
      <div class="dialog-header">{{title}}</div>
      <slot><p class="dialog-content">{{message}}</p></slot>
      <div class="dialog-footer">
        <button class="button dialog-confirm" @click="close(handleClose)">知道了</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  close: {
    type: Function,
    default: fun => fun()
  }
})
const emit = defineEmits(['update:show'])

const handleClose = () => {
  emit('update:show', false)
}
</script>


<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.dialog-box {
  background: #fff;
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.dialog-header {
  padding-top: 20px;
  font-weight: bold;
  text-align: center;
}

.dialog-content {
  padding: 5px 20px 20px 20px;
  font-size: 14px;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.dialog-footer {
  display: flex;
  overflow: hidden;
  user-select: none;
  border-top: 1px solid #EBEDF0;
}

.button {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  line-height: 40px;
  background-color: #fff;
}
.dialog-confirm {
  color: #409EFF;
}
</style>
