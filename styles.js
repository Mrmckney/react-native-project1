import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    box: {
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        margin: 10,
        borderStyle: 'dashed',
        borderColor: 'darkslategray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        color: 'red',
    },
    inputbox: {
        borderColor: '#666', 
        borderStyle: 'solid', 
        borderWidth: 2, 
        marginHorizontal: 20,
        paddingVertical: 10
    },
    customBtn: {
        backgroundColor: 'lightgray', 
        paddingVertical: 10, 
        marginHorizontal: 50, 
        borderRadius: 10, 
        marginVertical: 40
    }
})


