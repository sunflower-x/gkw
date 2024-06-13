import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtCard as Card, AtAvatar as Avatar } from "taro-ui";
import "./index.scss";
const App = (props) => {
  const { avatar, name, date, title, img, content } = props;
  return (
    <View style={{ margin: "10px 0px" }}>
      <Card
        note={
          <View className="card-note">
            <Avatar circle size="small" image={avatar} />
            <Text className="card-title">{name}</Text>
          </View>
        }
        extra={date}
        title={title}
      >
        <View className="card-content">
          <View className="card-img-wrapper">
            <Image className="card-img" fix="cover" src={img} />
          </View>
          {content}
        </View>
      </Card>
    </View>
  );
};

export default App;
