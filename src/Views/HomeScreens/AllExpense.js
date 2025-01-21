import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThameFont} from '../../Constants/theme';
import images from '../../Constants/images';
import Icon, {Icons} from '../../Constants/icons';

const AllExpense = () => {
  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Expenses</Text>
        <Image source={images.pic1} style={styles.profileImage} />
      </View>

      {/* Balance */}

      
        <View style={{width: '90%', height: 100, marginVertical:'10%',marginHorizontal:'5%',}}>
          <View style={{backgroundColor:'#AF52DE', height:'100%',flexDirection:'column', justifyContent:'space-around', padding:15,borderRadius:40 }}>
            <Text style={{textAlign:'auto', fontSize:18, fontFamily:ThameFont.PrimaryBold}}>My Balance</Text>
            <Text style={{textAlign:'auto', fontSize:21, fontFamily:ThameFont.PrimaryExtraBold}}> ₹112,908 </Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default AllExpense;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#7B78AA',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontFamily: ThameFont.PrimaryExtraBold,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
