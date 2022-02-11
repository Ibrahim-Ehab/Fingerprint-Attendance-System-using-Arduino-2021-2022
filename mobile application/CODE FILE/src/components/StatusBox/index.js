import {placeholder} from '@babel/types';
import React, { useState } from 'react';
import {View, Text ,TextInput} from 'react-native';
import styles from "./style"

const StatusBox = ({text,backcolor,active}) => {
// const [status,setstatus]=useState(false)
//   const IsWait=()=>{
//     setstatus = waiting
//     if (status=true){
//       styles.container.backgroundColor="red";
//     }
//   }
  return (
    <View style={active ? styles.container : styles.containerTrue}>
      <Text style={styles.Text}>{active?"active":"waiting"}</Text>
    </View>
  );
};

export {StatusBox};
