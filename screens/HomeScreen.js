import React, { useState, useEffect} from 'react'
import { View, Text, Button, ScrollView, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native'

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

    const routeToRestaurant = () => {
        navigation.navigate('RestaurantDetails')
    }

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
                        <>
                        <Box key={singleRestaurant.id} item={singleRestaurant}/>
                        <Button title='Details' color='red' onPress={routeToRestaurant}/>
                        </>
                        )
                    })}
                    </ImageBackground>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Home