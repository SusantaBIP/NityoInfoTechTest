import React from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const songDetails = props => {
  const {
    artistName,
    collectionName,
    artworkUrl100,
    country,
    wrapperType,
    collectionCensoredName,
    collectionViewUrl,
    copyright,
    releaseDate,
    previewUrl,
    description,
    collectionPrice,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: artworkUrl100}} style={{height: 200}}></Image>
      </View>
      <View style={styles.boxWrapper}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Artist Name: </Text>
            <Text style={styles.subText}>{artistName}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Collection Name: </Text>
            <Text style={styles.subText}>{collectionName}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Price: </Text>
            <Text style={styles.subText}>{collectionPrice}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Release On: </Text>
            <Text style={styles.subText}>{releaseDate}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Description: </Text>
            <Text style={styles.subText}>{description}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Collection View URL: </Text>
            <Text style={styles.subText}>{collectionViewUrl}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default songDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10,
  },
  boxWrapper: {
    margin: 10,
    flex: 1,
  },
  headerText: {
    width: 120,
    fontWeight: '700'
  },
  subText: {
    flex: 1,
  },
});
