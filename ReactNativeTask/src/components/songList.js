import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SongListCard from './songListCard';
import SplashScreen from 'react-native-splash-screen';

const songList = () => {
  const [songList, setSongList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setReFreshing] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    getData();
  }, []);

  const getData = () => {
    fetch('https://itunes.apple.com/search?term=Michael+jackson', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setReFreshing(false);
        setSongList(responseJson.results);
      })
      .catch(error => {
        console.error(error);
      });
  };
  function onRefresh() {
    setReFreshing(true); 
    getData();
 }

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: 'blue'
            }}>
            <ActivityIndicator size="large" color="#000000" isLoading={true} />
          </View>
        ) : (
          <FlatList
            data={songList}
            renderItem={({item}) => (
              <SongListCard dataSet={item}></SongListCard>
            )}
            keyExtractor={(item, index) => item.key}
            onRefresh={() => onRefresh()}
            refreshing={refreshing}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default songList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
