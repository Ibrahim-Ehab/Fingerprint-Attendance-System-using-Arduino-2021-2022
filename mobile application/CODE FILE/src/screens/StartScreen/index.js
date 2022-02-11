import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View , Image } from "react-native";
import { InputComp, Separate, StatusDetails, UpHeader } from "../../components";
import styles from "./styles";
const StartScreen = ({ navigation }) => {
    return (
        
        <View style={styles.container}>
            <View style={styles.contcontainer}>

            {/* <Text style={styles.maintxt}>WeLcome to</Text> */}
            <View style={styles.conttcontainer}>
            <Image source={require("../../../assets/icon.png")} style={styles.img}/>
</View>
<TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate('register')}}><Text style={styles.button1txt}>Register</Text></TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate('login')}}><Text style={styles.button1txt}>sign in</Text></TouchableOpacity>
            </View>

</View>
    );
}
 
export {StartScreen};