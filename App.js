import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from './styles'
import Box from './components/Box';

const image = {
  uri:'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

export default function App() {

  const boxes = [0,1,2,3,4,5,6,7,8,9]
  const students = [
    {name: 'Emily', age: 24, city: 'Boca Raton'},
    {name: 'Christian', age: 20, city: 'Boca Raton'},
    {name: 'Luiz', age: 25, city: 'Boca Raton'},
    {name: 'Dan', age: 38, city: 'Boca Raton'},
    {name: 'Chris', age: 29, city: 'Boca Raton'},
    {name: 'Matt', age: 19, city: 'Boca Raton'},
    {name: 'Val', age: 30, city: 'Boca Raton'},
    {name: 'Noah', age: 17, city: 'Boca Raton'},
    {name: 'Mia', age: 13, city: 'Boca Raton'},
    {name: 'Cathy', age: 59, city: 'Boca Raton'},
    {name: 'Zach', age: 30, city: 'Boca Raton'},]

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.customText}>Hello Matthew McKney</Text>
        <StatusBar style="auto" />
        <View>
        <ImageBackground source={image} resizeMode='cover' style={{ ...styles.container}}>
          {students.map(student => {
            return (
            <Box entireStudent={student} /> // passing entire object to props
            )
          })}
        </ImageBackground>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}