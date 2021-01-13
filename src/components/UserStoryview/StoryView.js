import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Profile from '../Profile/Profile';
const StoryView = () => {
  const {
    story: {
      user: {id, image, name},
    },
  } = props;
  return (
    <View>
      <TouchableOpacity  style={styles.container}>
      <Profile uri={image}/>
      <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoryView;
