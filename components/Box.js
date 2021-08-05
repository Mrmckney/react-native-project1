import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Box({item}) { // receiving destructuring entireStudent from props

    const {name, photoUrl, rating, address} = item

    return(
        <View style={styles.box}>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{rating}</Text>
        </View>
    )
}

export default Box