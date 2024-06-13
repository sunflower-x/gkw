
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import 'taro-ui/dist/style/index.scss' //taro-ui样式文件

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
