import React from "react";
import { View , Text,Image, Pressable} from "react-native";

import styles from "./styles";
const UpHeader = ({image,text,pressed}) => {
    return (
     <View style={styles.container}>
         <Pressable onPress={pressed} style={styles.presser}>
<Image source={image} style={styles.image1}/>
         </Pressable>
        <Text style={styles.mainText}>{text}</Text>
    </View> 
    );
}
 
export {UpHeader};