import React from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const SongListCard = props => {
  const {artistName, collectionName, artworkUrl100, country} = props.dataSet;
  const goToDetails = () => {
    // Actions.songDetails(props.dataSet);
    Actions.push('songDetails', props.dataSet);
  };
  
  return (
    <TouchableOpacity onPress={goToDetails} style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{uri: artworkUrl100}}
            style={{height: 80, width: 80, borderRadius: 5}}></Image>
        </View>
        <View style={styles.boxWrapper}>
          <Text style={styles.headerText}>{collectionName}</Text>
          <Text style={styles.subText}>{artistName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SongListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: 'rgba(128,128,128,0.5)',
    borderRadius: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  imgContainer: {
    margin: 10,
  },
  subContainer: {
    flexDirection: 'row',
  },
  boxWrapper:{
      marginRight: 10,
      justifyContent:'space-around',
      flex: 1,
      // backgroundColor: 'red'
  },
  headerText:{

  },
  subText:{
    fontWeight: '700'
  }
});
