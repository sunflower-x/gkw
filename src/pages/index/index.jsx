import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import CardInfo from "../../components/cardInfo/index.jsx";
import { AtIcon as Icon } from "taro-ui";
import { dataList } from "./config.js";

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
          {dataList.map((item, index) => {
            return <CardInfo key={index} {...item} />;
          })}
        </View>
      </View>
    </View>
  );
}
