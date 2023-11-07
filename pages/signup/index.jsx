import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2';

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth(app);

    const btnLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home', { usuario: user.email })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>SignUp</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='email'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='senha'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />
                <View style={{ marginTop:20 }}>
                    <Shadow>
                        <TouchableOpacity
                            style={styles.btnOk}
                            onPress={btnLogin}
                        >
                            <Text style={{ fontSize: 25 }}>OK</Text>
                        </TouchableOpacity>
                    </Shadow>
                </View>
            </View>
        </View>
    )
}