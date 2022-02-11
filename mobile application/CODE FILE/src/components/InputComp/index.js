import {placeholder} from '@babel/types';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

const InputComp = ({
  text,
  onChangeNumber,
  value,
  placeHolder,
  TypeOf,
  setChangeTxt,
  setChangeNum,
  setPass,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}> {text} </Text>
      <TextInput
        style={styles.inputbox}
        onChangeText={onChangeNumber}
        value={value}
        placeholder={placeHolder}
        keyboardType={TypeOf}
        onChangeText={setChangeTxt}
        onChangeNumber={setChangeNum}
        secureTextEntry={setPass}
      />
    </View>
  );
};

export {InputComp};
