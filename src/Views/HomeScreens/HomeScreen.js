import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ThameFont} from '../../Constants/theme';
import PieChart from 'react-native-pie-chart';
import images from '../../Constants/images';

const HomeScreen = () => {
  const data = [
    {name: 'Rent', value: 500, color: '#ff6384'},
    {name: 'Groceries', value: 300, color: '#36a2eb'},
    {name: 'Transport', value: 200, color: '#cc65fe'},
    {name: 'Entertainment', value: 40, color: '#ffce56'},
  ]; // Sample data for Pie Chart
  const expenses = [
    {
      id: '1',
      name: 'Nike Air Max 2090',
      date: '09 Oct 2023',
      amount: '-₹16,999',
      icon: images.pic2,
    },
    {
      id: '2',
      name: 'iPad Pro',
      date: '10 Oct 2023',
      amount: '-₹79,999',
      icon: images.pic2,
    },
    {
      id: '3',
      name: 'Uber',
      date: '5 Mar 2023',
      amount: '+₹50.00',
      icon: images.pic2,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 10,
          backgroundColor: '#19173D',
          marginVertical: 10,
          borderRadius: 30,
        }}>
        <Image
          style={{height: 50, width: 50, borderRadius: 50}}
          source={item.icon}
        />
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'flex-start',
            width: 200,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: ThameFont.PrimaryExtraBold,
              color: 'white',
              width: '100%',
            }}>
            {item.name}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: ThameFont.PrimaryExtraBold,
              color: 'white',
            }}>
            {item.amount}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <Image source={images.pic1} style={styles.profileImage} />
      </View>

      {/* Pie Chart */}
      <View style={styles.pieChartContainer}>
        <PieChart
          widthAndHeight={200}
          series={data}
          cover={0.7}
          style={styles.pieChart}
        />
        <Text style={styles.balance}>₹112,908</Text>
        <Text style={styles.subText}>Available balance</Text>
      </View>

      {/* Tip of the Day Section */}
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip of the Day</Text>
        <Text style={styles.tipText}>Prepare a Budget and Abide by it</Text>
      </View>

      {/* Expenses Block */}
      <View
        style={{
          height: '100%',
          width: '100%',
          marginTop: '5%',
        }}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '2%',
          }}>
          <Text style={{fontFamily: ThameFont.PrimaryExtraBold, fontSize: 20}}>
            Expenses
          </Text>
          <TouchableOpacity>
            <Text
              style={{fontSize: 18, fontFamily: ThameFont.PrimaryExtraBold}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            renderItem={renderItem}
            data={expenses}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#7B78AA',
    height:'100%'
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
  pieChartContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  balance: {
    fontSize: 28,
    color: 'white',
    fontFamily: ThameFont.PrimaryBold,
    position: 'absolute',
    top: '38%',
  },
  subText: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    top: '55%',
    fontFamily: ThameFont.PrimaryMeduim,
  },
  tipContainer: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    padding: 15,
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
  },
  tipTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    fontFamily: ThameFont.PrimaryBold,
  },
  tipText: {
    fontSize: 14,
    color: 'white',
    fontFamily: ThameFont.PrimarySemiBold,
  },
  expensesContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  expensesTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: ThameFont.PrimaryExtraBold,
  },
  seeAll: {
    fontSize: 14,
    color: '#4DB6AC',
    textAlign: 'right',
    fontFamily: ThameFont.PrimaryExtraBold,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  expenseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  expenseName: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'black',
  },
  expenseDate: {
    fontSize: 12,
    color: 'gray',
  },
  expenseAmount: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});
