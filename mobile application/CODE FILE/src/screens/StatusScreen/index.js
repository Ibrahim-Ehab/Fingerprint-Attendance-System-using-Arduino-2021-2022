import React, {useEffect, useState} from 'react';
import {useJwt} from 'react-jwt';
import axios from 'axios';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import {
  InputComp,
  Separate,
  StatusBox,
  StatusDetails,
  UpHeader,
} from '../../components';
import styles from './styles';
const StatusScreen = ({route}) => {
  const {tokenAuth} = route.params;

  const [UserData, setUserData] = useState([]);

  const {decodedToken} = useJwt(tokenAuth);

  useEffect(() => {
    if (tokenAuth)
      axios
        .get('https://attendence123.herokuapp.com/employee', {
          headers: {authorization: tokenAuth},
        })
        .then(res => {
          console.log(res.data);
          setUserData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
  }, [tokenAuth]);

  // useEffect(()=>{
  //     console.log(token);
  // }
  //     ,[])
  return (
    <View style={styles.container}>
      <UpHeader
        text={`welcome user ${UserData.id}`}
        image={require('../../../assets/userIcon.png')}
      />
      <View style={styles.contcontainer}>
        <Separate />
        <View style={styles.mainStat}>
          <StatusDetails status={'name'} detail={UserData.name} />
          <StatusDetails status={'gender'} detail={UserData.gender} />
          <StatusDetails status={'email'} detail={UserData.email} />
          <StatusDetails status={'phone'} detail={UserData.phone} />
          <StatusDetails status={'salary'} detail={UserData.salary} />
          <StatusDetails
            status={'shift duration'}
            detail={UserData.shift_duration}
          />
          <StatusDetails status={'start time'} detail={UserData.start_time} />
          <StatusDetails
            status={'attended days'}
            detail={UserData.attended_days}
          />
          <StatusDetails
            status={'attended late'}
            detail={UserData.attended_late}
          />
          <StatusDetails status={'joined at'} detail={UserData.created_at} />
          <StatusDetails
            status={'status'}
            detail={<StatusBox active={UserData.active} />}
          />

        </View>
        <Separate />
      </View>
    </View>
  );
};

export {StatusScreen};
