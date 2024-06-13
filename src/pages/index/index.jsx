import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import {
  AtButton as Button,
  AtIcon as Icon,
  AtCard as Card,
  AtAvatar as Avatar,
} from "taro-ui";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      {/* 轮播图 */}
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="demo-text-1">图片一</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">图片二</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">图片三</View>
        </SwiperItem>
      </Swiper>
      {/* 城市足迹 */}
      <View className="city-track">
        <View>城市足迹</View>
        <View>待开发功能</View>
      </View>
      {/* 热门路线 */}
      <View className="hot">
        <View className="hot-title">
          <Icon className="hot-icon" value="subtract" />
          热门推荐
        </View>
        {/* 列表 */}
        <View className="hot-list">
          <Card
            note={
              <View style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  circle
                  size="small"
                  image="https://jdc.jd.com/img/200"
                />
                <Text style={{ marginLeft: "10px", fontSize: "16px" }}>
                  thomas
                </Text>
              </View>
            }
            extra="2024-02-15"
            title="长沙两日游"
          >
            <View style={{ width: "100%" }}>
              <View style={{ float: "left", clear: "both", align: "center" }}>
                <Image
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                  fix="cover"
                  src="https://s2.loli.net/2023/07/13/6OcJoj2wQSlz3Kb.jpg"
                />
              </View>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              error delectus odio adipisci ex reiciendis hic doloremque
              voluptatum commodi doloribus facere aut illum consectetur, in,
              numquam quaerat, praesentium rem. Soluta. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Deserunt ut a ducimus voluptate
              vero dolorum optio quam dolores nemo placeat nostrum, possimus
              corrupti, laudantium tempore corporis expedita inventore dolorem
              sequi!
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
}
