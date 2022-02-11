import React , {useEffect,useState} from "react";
import { useJwt } from "react-jwt";
import axios from "axios";
import { Pressable, ScrollView, Text, TouchableOpacity, View ,FlatList } from "react-native";
import { InputComp, ListItem, Separate, UpHeader } from "../../components";
import PTRView from 'react-native-pull-to-refresh';
import styles from "./styles";
const Admin = ({navigation,route}) => {


    const { tokenAuth } = route.params;
    const [UserData, setUserData] = useState([])
    const [refrishing, setRefrishing] = useState(false)

    const { decodedToken } = useJwt(tokenAuth);

    useEffect(() => {
        getData();
    }, [])



const getData = ()=>{
    setRefrishing(true);
    if(tokenAuth)
        axios.get("https://attendence123.herokuapp.com/employee", {headers:{authorization:tokenAuth}})
        .then(res => {
            console.log(res.data)
            setUserData(res.data);})
        .catch(err => {console.log(err);})
        setRefrishing(false);

}

   
    return (
        
        <View style={styles.container}>
<UpHeader
text={"users list"}
image={require("../../../assets/userIcon.png")}
/>

<PTRView onRefresh={getData}>
    <View>
<FlatList
        data={UserData}
        keyExtractor={item => item.id}
        style={styles.listt}
        renderItem={({ item }) => ( <ListItem
        Name={item.name}
        activeStatus={item.active}
        onpress={()=>{navigation.navigate('details',{data:item,token:tokenAuth})}}
        // onRefresh={getData}
        // refrishing={refrishing}
            />
        )}
      />
      </View>
</PTRView>

</View>
    );
}
 
export {Admin};