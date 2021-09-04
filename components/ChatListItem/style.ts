import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'

let ScreenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    flexWrap:'wrap',
  },
  time: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 14,
    color: 'grey'
  },
});

export default styles;
