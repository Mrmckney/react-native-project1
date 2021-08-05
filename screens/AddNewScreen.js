import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

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
            <Text>
                this is add new screen
            </Text>
            <TextInput 
                placeholder='Restaurant Name' 
                style={styles.inputbox}
                // keyboardType='email-address'
                autoCorrect={false}
                onChangeText={text => setRestaurantName(text)}
            />
            <TextInput
                placeholder='Address Here'
                style={styles.inputbox}
                onChangeText={text => setAddress(text)}
            />
            <TextInput
                placeholder='photo URL'
                style={styles.inputbox}
                onChangeText={text => setPhotoUrl(text)}
            />
            <TextInput
                placeholder='Rating'
                style={styles.inputbox}
                onChangeText={text => setRating(text)}
            />
            <TouchableOpacity style={styles.customBtn} onPress={handleNewRestaurant}>
                <Text style={{color: 'black'}}>Send the Restaurant</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewScreen