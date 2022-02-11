import React,{useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {InputComp, RadioComp, Separate, UpHeader} from '../../components';
import styles from './styles';
const RegistScreen = ({navigation}) => {
    const [name, setName] = useState('');
  const [checked, setChecked] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



  const Submithandler = (e) => {
      e.preventDefault();
      const data = {
          name:name,
          gender:checked,
          phone:phone,
          email: email,
          password: password
      };

  
  
      if(data) {
          
        axios.post('https://attendence123.herokuapp.com/employee', data)
          .then(function (response) {
            navigation.navigate('login');
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         
      }
      else
      {alert("Please insert Email and Password")}
  }



  return (
    <View style={styles.container}>
      <UpHeader
        text={'Register'}
        image={require('../../../assets/userIcon.png')}
        pressed={() => navigation.navigate('admin-login')}
      />
      <ScrollView>
        <View style={styles.contcontainer}></View>
        <InputComp text={'name'} placeHolder={'please enter your name'} setChangeTxt={(e)=>setName(e)} />
        <Text style={styles.Text}>gander</Text>
        <View style={styles.radioCont}>
          <RadioComp
            text={'male'}
            value={'male'}
            checked={checked === 'male' ? 'checked' : 'unchecked'}
            pressed={() => setChecked('male')}
          />
          <RadioComp
            text={'female'}
            value={'female'}
            checked={checked === 'female' ? 'checked' : 'unchecked'}
            pressed={() => setChecked('female')}
          />
        </View>

        <InputComp
          text={'phone mumber'}
          placeHolder={'please enter your number'}
          TypeOf={'phone-pad'}
          setChangeTxt={(e)=>setPhone(e)}
        />
        <Separate />
        <InputComp
          text={'Email'}
          placeHolder={'please enter your e-mail'}
          TypeOf={'email-address'}
          setChangeTxt={(e)=>setemail(e)}
        />

        <InputComp text={'password'} placeHolder={'password'} setPass={true} setChangeTxt={(e)=>setpassword(e)} />
        <TouchableOpacity style={styles.button1} onPress={Submithandler}>
          <Text style={styles.button1txt}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export {RegistScreen};
