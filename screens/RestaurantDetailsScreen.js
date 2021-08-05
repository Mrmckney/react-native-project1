import React from 'react'
import { View, Text, Image, Button} from 'react-native'

function RestaurantDetails({route, navigation}) {

    const {name, photoUrl, rating, address} = route.params.restaurant



    return(
        <View>
            <Image source={{uri:photoUrl}} style={{width: '100%', height: 200}}/>
            <Text>this is restaurant {name} </Text>
            <Text>{address}</Text>
            <Button title='Add New Restaurant' onPress={() => navigation.navigate('AddNewRestaurant')}/>
        </View>
    )
}

export default RestaurantDetails