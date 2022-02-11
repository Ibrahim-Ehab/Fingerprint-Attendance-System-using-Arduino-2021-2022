import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View ,AsyncStorage } from "react-native";
import axios from 'axios';
import { InputComp, Separate, UpHeader } from "../../components";
import styles from "./styles";

const LoginScreen = ({navigation}) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");



    const Submithandler = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };

    
    
        if(email && password) {
            
                axios.post('https://attendence123.herokuapp.com/employee/login', data)
                    .then(async (res) => { await AsyncStorage.setItem('token', res.data.jwt);if(res.data.jwt){ navigation.navigate('status',{tokenAuth : res.data.jwt}); console.log(res.data);} else alert("Invalid Email or Password")})
                    .catch((err) => {console.log(err);   alert("Invalid Email or Password")})
           
        }
        else
        {alert("Please insert Email and Password")}
    }



    return (
        
        <View style={styles.container}>
<UpHeader
text={"sign in"}
image={require("../../../assets/userIcon.png")}
pressed={()=>navigation.navigate('admin-login')}
/>
<ScrollView>
<View style={styles.contcontainer}>
</View>

<InputComp
text={"username"}
placeHolder={"please enter your username"}
setChangeTxt={e => setemail(e)}
/>

<InputComp
text={"password"}
placeHolder={"password"}
setChangeTxt={e => setpassword(e)}
setPass={true}
/>
<TouchableOpacity style={styles.button1} onPress={Submithandler}><Text style={styles.button1txt}>sign in</Text></TouchableOpacity>
</ScrollView>
</View>
    );
}
 
export {LoginScreen};