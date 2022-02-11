import React,{useEffect, useState} from 'react';
import {
    Alert,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {InputComp, RadioComp, Separate, UpHeader} from '../../components';
import styles from './styles';
const AdminAdds = ({navigation,route}) => {
    const [shiftDuration, setShiftDuration] = useState('');
    const [startTime, setStartTime] = useState('');
    const [active, setActive] = useState();
    const [salary, setSalary] = useState('');
    const { info , Auth } = route.params;




  const Submithandler = (e) => {
      e.preventDefault();

      const data = {
        shift_duration:shiftDuration,
        start_time:startTime,
        active:active,
        salary: salary
      };

  
          
        axios.patch(`https://attendence123.herokuapp.com/employee/${info.id}`,data, {headers:{authorization:Auth}} )
    .then(function (response) {
      navigation.navigate('admin',{tokenAuth:Auth});
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
         
      
   
  }


  return (
    <View style={styles.container}>
      <UpHeader
        text={`User ${info.id} Approval`}
        image={require('../../../assets/userIcon.png')}
        pressed={() => navigation.navigate('admin-login')}
      />
      <ScrollView>
        <View style={styles.contcontainer}></View>
        <InputComp text={'Shift Duration'} placeHolder={'user shift duration'} TypeOf={'numeric'} setChangeTxt={(e)=>setShiftDuration(e)} />


        <InputComp
          text={'start time'}
          placeHolder={'user start time'}
          setChangeTxt={(e)=>setStartTime(e)}
        />
        <InputComp
          text={'salary'}
          placeHolder={'please enter user salary'}
          TypeOf={'numeric'}
          setChangeTxt={(e)=>setSalary(e)}
        />
        <Separate />
        
        <TouchableOpacity style={styles.button1} onPress={()=>{setActive(true);console.log("thanks")}}>
          <Text style={styles.button1txt}>Activate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={Submithandler}>
          <Text style={styles.button1txt}>Accept</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export {AdminAdds};
