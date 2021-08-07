import React, { useState, useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native'
import { Button } from 'react-native-elements'

import Box from '../components/Box'
import styles from '../styles'

const image = {
    uri:'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

function Home({navigation}) {
    const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(allRestaurants => {
        setRestaurants(allRestaurants)
      })
      .catch(err => alert(err))
  }, [])

    return(
        <View>
            <Text>
                this is home
            </Text>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.customText}>Hello Matthew McKney</Text>
                        <StatusBar style="auto" />
                            <ImageBackground source={image} resizeMode='cover' style={{ ...styles.container}}>
                            {restaurants?.map((singleRestaurant, index) => {
                                return (
                                    <View key={singleRestaurant.id}>
                                        <Box item={singleRestaurant}/>
                                        <Button title='Details' color='red' onPress={() => {
                                            navigation.navigate('RestaurantDetails', {restaurant: singleRestaurant })
                                        }}
                                        />
                                    </View>
                                )
                            })}
                    </ImageBackground>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Home