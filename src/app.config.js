export default defineAppConfig({
  pages: ["pages/index/index","pages/mine/index","pages/travelCircle/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      { pagePath: "pages/index/index", text: "首页" },
      { pagePath: "pages/travelCircle/index", text: "旅行圈" },
      { pagePath: "pages/mine/index", text: "我的" },
    ],
  },
});
