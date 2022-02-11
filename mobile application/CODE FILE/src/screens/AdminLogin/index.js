import React,{useState} from "react";
import axios from "axios";
import { Pressable, ScrollView, Text, TouchableOpacity, View ,AsyncStorage} from "react-native";
import { InputComp, Separate, UpHeader } from "../../components";
import styles from "./styles";
const AdminLogin = ({navigation}) => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");



    const Submithandler = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };

    
    
        if(username && password) {
            
                axios.post('https://attendence123.herokuapp.com/admin/login', data)
                    .then(async (res) => { await AsyncStorage.setItem('token', res.data.jwt);if(res.data.jwt){ navigation.navigate('admin',{tokenAuth : res.data.jwt}); console.log(res.data);} else alert("Invalid Email or Password")})
                    .catch((err) => {console.log(err);   alert("Invalid Email or Password")})
           
        }
        else
        {alert("Please insert Email and Password")}
    }



    return (
        
        <View style={styles.container}>
<UpHeader
text={"Admin Login"}
image={require("../../../assets/userIcon.png")}
pressed={()=>{navigation.navigate('start')}}
/>
<ScrollView>
<View style={styles.contcontainer}>
</View>

<InputComp
text={"username"}
placeHolder={"please enter your username"}
setChangeTxt={e => setusername(e)}
/>

<InputComp
text={"password"}
placeHolder={"password"}
setChangeTxt={e => setpassword(e)}
setPass={true}
/>
<TouchableOpacity style={styles.button1} onPress={Submithandler}><Text style={styles.button1txt}>sign in as admin</Text></TouchableOpacity>
</ScrollView>
</View>
    );
}
 
export {AdminLogin};