import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
   // padding: 10,
    width: 86,
    height: 86,
    borderRadius:40,
    borderWidth: 3,
    borderColor: 'red',
    margin:10
  },

  viewImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
  },
  button:{
    borderWidth:1,
    width:30,
    height:30,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  }
});
export default styles;
