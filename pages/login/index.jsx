import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msn, setMsn] = useState('')

    const auth = getAuth(app);

    function btnLogin() {
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home', { usuario: user.email })
            })
            .catch((error) => {
                ()=>{setMsn = 'Nome de usuário ou senha inválido...'}
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='Digite o valor 1'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='Digite o valor 2'
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
                <View style={{ padding: 20 }}>
                    <Shadow>
                        <TouchableOpacity
                            style={styles.btnOk}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={{ fontSize: 25 }}>SignUp</Text>
                        </TouchableOpacity>
                    </Shadow>
                    <View>
                    </View>
                    <Text style={styles.message}>{msn}</Text>
                </View>
            </View>
        </View>
    )
}