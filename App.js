import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppRegistry, ToastAndroid } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { ToastProvider, useToast } from 'react-native-toast-notifications';

const { width, height } = Dimensions.get('screen')

AppRegistry.registerComponent('main',() => App);

const App = () => {

  // init states :
  const [datas, setDatas] = useState([
    {
      "id" : 1,
      "name" : "Order 1",
      "dateOrder" : 1643559046000
    },
    {
      "id" : 1,
      "name" : "Order 1",
      "dateOrder" : 1643559046000
    }
  ])

  function handleClick (dateOrder) {

    // init variables :
    let counter = 14400000
    let liveDate = Date.now()
    let res =  dateOrder - liveDate - counter
    // let newDt = new Date(newDate)
    // let dateObject = new Date(liveDate)
    // console.log(dateObject.toLocaleString(), newDt.toLocaleString())

    let finalRes = new Date(res).getHours()

    if(finalRes < 4) {
      ToastAndroid.show('It Still Just a :' + finalRes + 'Hours', 
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.LONG
      );
    }

    // console.log(new Date(res).getHours())

    
  }

  function handlePress (dateOrder) { 
    let timeBefore = 14400000
    let res = Date.now() - dateOrder

    let hours = (res / (1000 * 60 * 60)).toFixed(2)

    Alert.alert(hours.toString())
  }
  

  // set time out to deverge the date before 4 hours :
  // setTimeout(() => {
  //   let timeBefore = 14400000
  // }, )

  return (
      <ScrollView>
        <NavBar style={styles.nav}></NavBar>
        {/* <Text style={styles.heading}>My Orders</Text> */}
        <View
        style={styles.container}>
          {datas.map((i) => (
            <View key={i.id}
            style={styles.card}>
            <Text style={styles.title}>{i.name}</Text>
            <Text>{i.dateOrder}</Text>
            <Button
            style={styles.btn}
            title='Remind Me'
            onPress={() => {handleClick(i.dateOrder)}}
            />
          </View>
          ))}
        </View>
      </ScrollView>
  );
};


const styles = StyleSheet.create({

  container : {
    backgroundColor : 'white',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 30,
    margin : 10
  },
  title :{
    fontSize : 30,
    fontWeight : 3,
    justifyContent : 'center'
  },
  nav : {},
  card : {
    width : width / 1.3,
    height : height * 0.3,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    backgroundColor : "lemonchiffon",
    borderRadius : 20,
    margin : 15,
    borderWidth : 1,
    borderColor : 'black'
  },
  btn : {

  },
  heading : {
    fontSize : 30,
    alignItems : 'center',
    justifyContent : 'center'
  }

})

export default App;
