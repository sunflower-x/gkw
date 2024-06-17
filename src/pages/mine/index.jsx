import { View } from "@tarojs/components";
import "./index.scss";
import {
  AtCard as Card,
  AtAvatar as Avatar,
  AtList,
  AtListItem,
} from "taro-ui";
const App = () => {
  return (
    <View className="mine-container">
      <View className="mine-card">
        <View className="mine-header">
          <Avatar circle />
          <View style={{ marginLeft: "20px" }}>
            <View style={{ fontSize: "20px" }}>thomas</View>
            <View style={{ fontSize: "10px" }}>LV:1初级</View>
          </View>
        </View>
        
      </View>
      <View className="mine-content">
          <AtList>
            <AtListItem title="我的旅行计划" arrow="right"  />
            <AtListItem title="免责声明" arrow="right" />
            <AtListItem title="联系我们" arrow="right" />
          </AtList>
        </View>
    </View>
  );
};

export default App;
