import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, StatusDetails, UpHeader, StatusBox } from "../../components";
import styles from "./styles";
const Details = ({navigation,route}) => {

    const { data , token } = route.params;


    return (
        
        <View style={styles.container}>
<UpHeader
text={`user ${data.id}`}
image={require("../../../assets/userIcon.png")}
/>
<View style={styles.contcontainer}>
    <Separate/>
    <View style={styles.mainStat}>
    <StatusDetails
status={"name"}
detail={data.name}
/>
<StatusDetails
status={"gender"}
detail={data.gender}
/>
<StatusDetails
status={"email"}
detail={data.email}
/>
<StatusDetails
status={"phone"}
detail={data.phone}
/>
<StatusDetails
status={"salary"}
detail={data.salary}
/>
<StatusDetails
status={"shift duration"}
detail={data.shift_duration}
/>
<StatusDetails
status={"start time"}
detail={data.start_time}
/>
<StatusDetails
status={"attended days"}
detail={data.attended_days}
/>
<StatusDetails
status={"attended late"}
detail={data.attended_late}
/>
<StatusDetails
status={"joined at"}
detail={data.created_at}
/>
<StatusDetails
status={"status"}
detail={<StatusBox active={data.active}/>}
/>

</View> 
    <Separate/>
</View>
    <TouchableOpacity style={styles.button1}
    onPress={()=>{navigation.navigate("adminadds",{info:data , Auth:token})}}
    ><Text style={styles.button1txt}>Admin Adds</Text></TouchableOpacity>

</View>
    );
}
 
export {Details};