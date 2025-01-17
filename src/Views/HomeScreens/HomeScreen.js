import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThameFont} from '../../Constants/theme';
import PieChart from 'react-native-pie-chart';
import images from '../../Constants/images';

const HomeScreen = () => {
  const data = [
    {value: 360, color: '#42c592'},
    {value: 100, color: '#127dd0'},
    {value: 100, color: '#3f10b8'},
    {value: 100, color: '#1875bb'},
  ];
  return (
    <SafeAreaView>
      <>
        <View
          style={{backgroundColor: '#0C445B', height: '100%', width: '100%'}}>
          <View style={{margin: 10}}>
            <Text
              style={{
                fontFamily: ThameFont.PrimaryExtraBold,
                fontSize: 30,
                color: 'white',
              }}>
              Home
            </Text>
          </View>

          <View style={{width: '100%', justifyContent: 'center'}}>
            <PieChart
              style={{marginHorizontal: '18.5%', marginTop: '10%'}}
              widthAndHeight={250}
              series={data}
              cover={0.7}
            />
          </View>
          <ImageBackground source={images.cover} style={{height:'100%', position:'relative', bottom:'18%'}}/>
        </View>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
