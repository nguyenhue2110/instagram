import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './/styles';

const Profile = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri
        }}
        style={styles.viewImage}
      />
    </View>
  );
      };


      
export default Profile;
