import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#a7c1eb',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    caixa:{
        width:300,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        borderRadius:10,
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    message:{
        fontSize:15
    },


})

export default styles