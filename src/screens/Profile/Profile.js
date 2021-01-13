import React from 'react';
import {Text,Image, View} from 'react-native';
import styles from './styles'

const Profile = ()=> {
    return(
    <View style={styles.container}>

        <Image source={{uri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg'}}  style={styles.viewImage}/>
    </View>);
};

export default Profile;
