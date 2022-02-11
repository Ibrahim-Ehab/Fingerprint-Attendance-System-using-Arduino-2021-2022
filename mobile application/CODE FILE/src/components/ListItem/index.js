import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { StatusBox } from '../StatusBox';
import styles from './styles';
const ListItem = ({Name,SocialId,onpress,activeStatus}) => {
  return (
  <TouchableOpacity onPress={onpress}>
    <View style={styles.container}>
      <View style={styles.downcont}>
        <View style={styles.mainrow}>
          <Text style={styles.Text2}>{Name}</Text>
          <StatusBox
          active={activeStatus}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export {ListItem};
