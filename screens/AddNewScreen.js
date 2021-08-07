import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import styles from '../styles'

function AddNewScreen() {

    const [restaurantName, setRestaurantName] = useState('')
    const [address, setAddress] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [rating, setRating] = useState('')

    const newRestaurant = {
        address: address,
        name: restaurantName,
        photoUrl: photoUrl,
        rating: rating,
    }

    console.log(newRestaurant)

    const handleNewRestaurant = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
         .then(() => console.log('new restaurant added'))
         .catch(err => alert(err))
    }

    return(
        <View>
            <Text h3>
                this is add new screen
            </Text>
            <Input 
                placeholder='Restaurant Name' 
                // keyboardType='email-address'
                autoCorrect={false}
                onChangeText={text => setRestaurantName(text)}
            />
            <Input
                placeholder='Address Here'
                onChangeText={text => setAddress(text)}
            />
            <Input
                placeholder='photo URL'
                onChangeText={text => setPhotoUrl(text)}
            />
            <Input
                placeholder='Rating'
                onChangeText={text => setRating(text)}
            />
            <Ionicons name="md-checkmark-circle" size={32} color="green"/>
            <Button style={{width: 200}} title='Send New Restaurant' onPress={handleNewRestaurant}/>
        </View>
    )
}

export default AddNewScreen