import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  Image,
  Switch,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RNSpeedometer from 'react-native-speedometer';
import {dashBoardStyles} from './dashBoardStyles';

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
      <View style={dashBoardStyles.headerContainer}>
        <View style={dashBoardStyles.headerSubContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={dashBoardStyles.priceText}>Pricing</Text>
            <Image
              source={require('./../img/Path1.png')}
              style={dashBoardStyles.imageStyle}></Image>
          </View>
          <View>
            <Text style={dashBoardStyles.saveText}>Save & Exit</Text>
          </View>
        </View>
        <View style={dashBoardStyles.headerDescText}>
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
      <View style={dashBoardStyles.bodyContainer}>
        <View style={{marginTop: 30}}>
          <View>
            <Text style={dashBoardStyles.regularText}>
              Regular Price (Daily) *
            </Text>
          </View>
          <View>
            <TextInput
              style={dashBoardStyles.inputTextRegularPrice}
              keyboardType={'numeric'}
              onChangeText={text => setRegularPrice(text)}>
              {regularPrice}
            </TextInput>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image
              source={require('./../img/info.png')}
              style={dashBoardStyles.infoIcon}></Image>
            <Text style={dashBoardStyles.regularTextDesc}>
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
              style={dashBoardStyles.inputTextPickPrice}
              keyboardType={'numeric'}
              onChangeText={text => setPickPrice(text)}>
              {pickPrice}
            </TextInput>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image
              source={require('./../img/info.png')}
              style={dashBoardStyles.infoIcon}></Image>
            <Text style={dashBoardStyles.pickPriceTextDesc}>
              Peak price allow you to charge extra for weekends or holidays.
              Recommended peak price for your car is between $75-90.
            </Text>
          </View>
        </View>
        <View>
          <Text style={dashBoardStyles.pickPriceTitle}>Peak Price Days</Text>
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
          </View>
        </View>
        <View style={dashBoardStyles.pickPriceView}>
          <View style={dashBoardStyles.pickPriceSubView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={dashBoardStyles.pickPriceSwitchTitle}>
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
          <View style={dashBoardStyles.pickPriceAutomaticApply}>
            <Text style={{color: '#026786', fontSize: 12, fontWeight: '300'}}>
              Automatically apply peak prices on public holidays.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 95,
          }}>
          <View style={dashBoardStyles.longTermRentalView}>
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
        <View style={dashBoardStyles.buttonViewContainer}>
          <View style={dashBoardStyles.buttonViewSubContainer}>
            <RNSpeedometer
              value={meterValue}
              size={85}
              labels={speedoMeterLabel}
            />
          </View>
          <View style={dashBoardStyles.demandTypeTitle}>
            <Text style={{color: '#026786', fontSize: 12, fontWeight: '700'}}>
              {demandType}
              <Text style={{color: '#026786', fontSize: 12, fontWeight: '300'}}>
                : Based on your settings you are on your way to attract good
                level of demand.
              </Text>
            </Text>
          </View>
        </View>
        <View style={dashBoardStyles.nextButtonContainer}>
          <View style={dashBoardStyles.nextButtonSubContainer}>
            <Image
              source={require('./../img/arrow-left.png')}
              style={{height: 20, width: 20}}></Image>
          </View>
          <View style={{marginLeft: 10, flex: 1}}>
            <TouchableOpacity style={dashBoardStyles.nextButton}>
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
    <SafeAreaView style={dashBoardStyles.safeArea}>
      <StatusBar backgroundColor="#00A3AD" barStyle={'light-content'} />
      <View style={dashBoardStyles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={dashBoardStyles.mainBodyContainer}>{renderBody()}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default DashBoard;

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
