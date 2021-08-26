import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Switch,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RNSpeedometer from 'react-native-speedometer';

const DashBoard = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const days = [
    {name: 'M'},
    {name: 'T'},
    {name: 'W'},
    {name: 'T'},
    {name: 'F'},
    {name: 'S'},
    {name: 'S'},
  ];

  const demandText = {
    goodDemand: 'Good Demand',
    averageDemand: 'Average Demand',
    lowDemand: 'Low Demand',
  };

  const [demandType, setDemandType] = useState(demandText.lowDemand);
  const [meterValue, setMeterValue] = useState(0);

  const [isEnabledPickPrice, setIsEnabledPickPrice] = useState(false);
  const [isEnabledLongTerm, setIsEnabledLongTerm] = useState(false);
  const [regularPrice, setRegularPrice] = useState('');
  const [pickPrice, setPickPrice] = useState('');
  const toggleSwitchPickPrice = () => {
    setIsEnabledPickPrice(!isEnabledPickPrice);
  };
  const toggleSwitchLongTerm = () => {
    setIsEnabledLongTerm(!isEnabledLongTerm);
  };

  const calculateMeterValue = () => {
    let isRegularPriceDone =
      regularPrice >= 55 && regularPrice <= 70 ? true : false;
    let isPickPriceDone = pickPrice >= 75 && pickPrice <= 90 ? true : false;
    let noOfCriteriaFullfilled = 0;
    if (isRegularPriceDone) {
      noOfCriteriaFullfilled = parseInt(noOfCriteriaFullfilled) + 1;
    }
    if (isPickPriceDone) {
      noOfCriteriaFullfilled = parseInt(noOfCriteriaFullfilled) + 1;
    }
    if (isEnabledPickPrice) {
      noOfCriteriaFullfilled = parseInt(noOfCriteriaFullfilled) + 1;
    }
    if (isEnabledLongTerm) {
      noOfCriteriaFullfilled = parseInt(noOfCriteriaFullfilled) + 1;
    }

    switch (noOfCriteriaFullfilled) {
      case 1:
        setDemandType(demandText.lowDemand);
        setMeterValue(15);
        break;
      case 2:
        setDemandType(demandText.averageDemand);
        setMeterValue(50);
        break;
      case 3:
        setDemandType(demandText.averageDemand);
        setMeterValue(50);
        break;
      case 4:
        setDemandType(demandText.goodDemand);
        setMeterValue(85);
        break;
      default:
        setDemandType(demandText.lowDemand);
        setMeterValue(0);
        break;
    }
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          height: 120,
          backgroundColor: '#00A3AD',
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontWeight: '400', fontSize: 18}}>
              Pricing
            </Text>
            <Image
              source={require('./../img/Path1.png')}
              style={{
                height: 10,
                width: 12,
                marginLeft: 8,
                marginTop: 5,
              }}></Image>
          </View>
          <View>
            <Text
              style={{
                color: '#FFCD05',
                textDecorationLine: 'underline',
                fontWeight: '600',
              }}>
              Save & Exit
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            alignContent: 'center',
          }}>
          <Text style={{color: 'white'}}>
            Enter the price that you want to charge for renting out your car
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    calculateMeterValue();
  }, []);

  useEffect(() => {
    calculateMeterValue();
  }, [regularPrice]);

  useEffect(() => {
    calculateMeterValue();
  }, [pickPrice]);

  useEffect(() => {
    calculateMeterValue();
  }, [isEnabledPickPrice]);

  useEffect(() => {
    calculateMeterValue();
  }, [isEnabledLongTerm]);

  const renderBody = () => {
    return (
      <View
        style={{paddingRight: 20, paddingLeft: 20, backgroundColor: '#FCFCFC'}}>
        <View style={{marginTop: 30}}>
          <View>
            <Text style={{color: '#026786', fontSize: 12}}>
              Regular Price (Daily) *
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
                paddingLeft: 10,
                color: '#026786',
                fontSize: 16,
                marginTop: 5,
              }}
              keyboardType={'numeric'}
              onChangeText={text => setRegularPrice(text)}>
              {regularPrice}
            </TextInput>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image
              source={require('./../img/info.png')}
              style={{height: 14, width: 14}}></Image>
            <Text style={{color: '#026786', fontSize: 12, marginLeft: 5}}>
              Our pricing algorithm recommends price between $55 - 70 to
              maximise demand basis your car type and location
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View>
            <Text style={{color: '#026786', fontSize: 12}}>
              Peak Price (Daily) *
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
                paddingLeft: 10,
                color: '#026786',
                fontSize: 16,
                marginTop: 5,
              }}
              keyboardType={'numeric'}
              onChangeText={text => setPickPrice(text)}>
              {pickPrice}
            </TextInput>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image
              source={require('./../img/info.png')}
              style={{height: 14, width: 14}}></Image>
            <Text style={{color: '#026786', fontSize: 12, marginLeft: 5}}>
              Peak price allow you to charge extra for weekends or holidays.
              Recommended peak price for your car is between $75-90.
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#026786', fontSize: 12, marginTop: 30}}>
            Peak Price Days
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              height: 50,
              justifyContent: 'space-between',
            }}>
            {days.map(item => {
              return (
                <TouchableOpacity
                  style={{
                    height: 42,
                    width: 42,
                    backgroundColor:
                      item.name == 'S' || item.name == 'M'
                        ? '#00A3AD'
                        : '#EFF7F8',
                    borderRadius: 21,
                    // marginLeft: 7,
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color:
                        item.name == 'S' || item.name == 'M'
                          ? '#FFFFFF'
                          : '#026786',
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    {item.name ? item.name : ''}
                  </Text>
                </TouchableOpacity>
              );
            })}
            {/* {days.map(item => {
              return ( */}
            {/* <View
              style={{
                height: 40,
                width: 40,
                // borderRadius: 10,
                color: 'red', //#00A3AD
                marginLeft: 7,
              }}> */}
            {/* <Text>{item.name ? item.name : ''}</Text> */}
            {/* </View>
            <View
              style={{
                height: 40,
                width: 40,
                // borderRadius: 10,
                color: 'red', //#00A3AD
                marginLeft: 7,
              }}></View> */}
            {/* //   );
            // })} */}
          </View>
        </View>
        <View
          style={{
            height: 95,
            marginLeft: -20,
            marginRight: -20,
            marginTop: 15,
            borderTopColor: '#E6E6E6',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#E6E6E6',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#026786', fontWeight: '500', fontSize: 16}}>
                Set peak price on public holidays
              </Text>
            </View>
            <View>
              <Switch
                trackColor={{false: '#E6E6E6', true: '#00A3AD'}}
                thumbColor={'#FFFFFF'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchPickPrice}
                value={isEnabledPickPrice}
                style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <View
            style={{
              height: 50,
              alignContent: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 8,
            }}>
            <Text style={{color: '#026786', fontSize: 12, fontWeight: '300'}}>
              Automatically apply peak prices on public holidays.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 95,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#026786', fontWeight: '500', fontSize: 16}}>
                Long Term Rental
              </Text>
            </View>
            <View>
              <Switch
                trackColor={{false: '#E6E6E6', true: '#00A3AD'}}
                thumbColor={'#FFFFFF'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchLongTerm}
                value={isEnabledLongTerm}
                style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <View
            style={{
              height: 50,
              alignContent: 'center',
              marginTop: 8,
            }}>
            <Text style={{color: '#026786', fontSize: 12, fontWeight: '300'}}>
              Allow guests to book your car for long term, ie greater than 2
              months.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 70,
            backgroundColor: '#EFF7F8',
            marginRight: -20,
            marginLeft: -20,
            flexDirection: 'row',
            paddingRight: 20,
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 80,
              height: 46,
              // backgroundColor: 'yellow',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            <RNSpeedometer
              value={meterValue}
              size={85}
              labels={speedoMeterLabel}
            />
          </View>
          <View
            style={{marginLeft: 10, flex: 1, flexDirection: 'row', height: 46}}>
            <Text style={{color: '#026786', fontSize: 12, fontWeight: '700'}}>
              {demandType}
              <Text style={{color: '#026786', fontSize: 12, fontWeight: '300'}}>
                : Based on your settings you are on your way to attract good
                level of demand.
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 100,
            backgroundColor: '#FFFFFF',
            marginRight: -20,
            marginLeft: -20,
            flexDirection: 'row',
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            marginBottom: 100,
          }}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 5,
              borderColor: '#00A3AD',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Image
              source={require('./../img/arrow-left.png')}
              style={{height: 20, width: 20}}></Image>
          </View>
          <View style={{marginLeft: 10, flex: 1}}>
            <TouchableOpacity
              style={{
                height: 44,
                backgroundColor: '#00A3AD',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#FCFCFC'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#00A3AD'}}>
      <StatusBar backgroundColor="#00A3AD" barStyle={'light-content'} />
      <View style={{backgroundColor: '#FCFCFC'}}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{flex: 1, backgroundColor: '#FCFCFC', marginBottom: 100}}>
            {renderBody()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const speedoMeterLabel = [
  {
    name: 'Too Slow',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
  {
    name: 'Very Slow',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
  {
    name: 'Slow',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    name: 'Normal',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    name: 'Fast',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
  {
    name: 'Unbelievably Fast',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
];
