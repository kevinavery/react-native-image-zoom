import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import ImageZoom from './built/index';

export default class App extends React.Component {
  state = {
    backgroundOpacity: 1
  };

  render() {
    const swipeDownThreshold = 200;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: `rgba(0, 0, 0, ${this.state.backgroundOpacity})` }}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width / 2}
            imageHeight={Dimensions.get('window').height / 2}
            swipeDownThreshold={swipeDownThreshold}
            onSwipingDown={position => {
              let opacity = 1 - position.offset / swipeDownThreshold;
              if (opacity > 1) {
                opacity = 1;
              } else if (opacity < 0.3) {
                opacity = 0.3;
              }
              this.setState({ backgroundOpacity: opacity });
            }}
            enableSwipeDown={true}
          >
            <Image
              enableHorizontalBounce={true}
              style={{
                width: Dimensions.get('window').width / 2,
                height: Dimensions.get('window').height / 2
              }}
              source={{
                uri:
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522606437962&di=f93f5c645225a5681155ebcde27b257f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0159fa5944bcd3a8012193a34b762d.jpg%402o.jpg'
              }}
            />
          </ImageZoom>
        </View>
      </View>
    );
  }
}
