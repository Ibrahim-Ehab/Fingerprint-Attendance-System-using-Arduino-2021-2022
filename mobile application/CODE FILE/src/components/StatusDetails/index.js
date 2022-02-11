import {placeholder} from '@babel/types';
import React from 'react';
import {View,Text} from 'react-native';
import styles from "./style"

const StatusDetails = ({status,detail}) => {
  return (
    <View style={styles.container}>
<Text style={styles.textA}>{status}</Text>
<Text style={styles.separate}>:</Text>
<Text style={styles.textB}>{detail}</Text>
    </View>
  );
};

export {StatusDetails};
