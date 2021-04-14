import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,TouchableOpacity
} from 'react-native';

import styles from './styles';
import Profile from '../../components/Profile/Profile';
const HomeScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Profile />
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(Math.max(0, count - 1))}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal: 10}}>{count}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCount(count+1)
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

