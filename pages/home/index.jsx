import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Home({navigation, route}){

    const {usuario} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
            <Text style={styles.usuario}>{usuario}</Text>
        </View>
    )
}