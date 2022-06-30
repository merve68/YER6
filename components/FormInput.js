import React from "react";
import {View,StyleSheet,TextInput} from "react-native";

const FormInput = ({labelValue,placeholderText,...rest}) =>{
    return(
        <View style={styles.inputContainer}>

            <TextInput 
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor= "black"
            {...rest}
            />

        </View>
    )
}
export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:200,
        marginBottom: 10,
        width: '85%',
        height: 50,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:15
        
      },
    
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
})