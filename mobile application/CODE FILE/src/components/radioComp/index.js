import {placeholder} from '@babel/types';
import React,{useState} from 'react';
import {View, Text } from 'react-native';
import styles from "./style"
import { RadioButton } from 'react-native-paper';


const RadioComp = ({value,checked,pressed,text}) => {


  return (
    <View style={styles.container}>

<RadioButton
        value={value}
        status={ checked }
        onPress={pressed}
        color='#138086'
      />
      <Text style={styles.Text}>{text}</Text>

    </View>
  );
};

export {RadioComp};
