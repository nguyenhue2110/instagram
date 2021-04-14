import React from 'react';
import {Text,View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Profile from '../Profile/Profile';
const StoryView = ({imageUri,name}) => {
  // const {
  //   story: {
  //     user: {id, imageUri, name},
  //   },
  // } = props;
  return (
    <View>
      <TouchableOpacity  style={styles.container}>
      <Profile uri={imageUri}/>
      <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoryView;
