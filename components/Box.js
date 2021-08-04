import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Box({entireStudent}) { // receiving destructuring entireStudent from props

    const {name, city, age} = entireStudent // destructuring name, city, age from entireStudent

    return(
        <View style={styles.box}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{city}</Text>
        </View>
    )
}

export default Box