import { createApp } from 'vue'
import Dialog from '../components/Dialog.vue'

export const useDialog = (message, option = {}) => {
  const mountNode = document.createElement('div')
  const Instance = createApp(Dialog, {
    show: true,
    message,
    ...option,
    close: () => { 
      Instance.unmount(mountNode); 
      document.body.removeChild(mountNode);
    }
  })
  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}
