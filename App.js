import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View, Image, Animated, useWindowDimensions, Easing } from "react-native";
import { Assets } from "react-navigation-stack";

const images = 
[
require('./assets/image/31512.jpg'),
require('./assets/image/23322162.jpg'),
require('./assets/image/Wallpaper.png'),
];

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  const [showWelcome, setShowWelcome] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    // Анімація зникнення вікна привітання
    if (showWelcome) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 6000, // Тривалість анімації
        easing: Easing.ease,
      }).start(() => {
        setShowWelcome(false);
      });
    }
  }, [showWelcome]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.showWelcome}>
        {showWelcome && (
          <Animated.View
            style={[
              styles.welcomeContainer,
              { opacity: fadeAnim },
            ]}
          >
            <Text style={styles.welcomeText}>Welcome to My App!</Text>
          </Animated.View>
        )}
      </View>


      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 ,}}
                key={imageIndex}
              >
                <Image source={image} style={styles.card}>
                  
                </Image>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 4,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width:400,
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  showWelcome: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
  
  },
  welcomeContainer: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
    height:300,
    width:300,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
