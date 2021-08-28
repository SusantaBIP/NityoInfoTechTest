import {StyleSheet} from 'react-native';

export const dashBoardStyles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: '#00A3AD',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  priceText: {color: 'white', fontWeight: '400', fontSize: 18},
  imageStyle: {
    height: 10,
    width: 12,
    marginLeft: 8,
    marginTop: 5,
  },
  saveText: {
    color: '#FFCD05',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  headerDescText: {
    height: 50,
    alignContent: 'center',
  },
  bodyContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#FCFCFC',
  },
  regularText: {color: '#026786', fontSize: 12},
  inputTextRegularPrice: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    color: '#026786',
    fontSize: 16,
    marginTop: 5,
  },
  regularTextDesc: {color: '#026786', fontSize: 12, marginLeft: 5},
  inputTextPickPrice: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    color: '#026786',
    fontSize: 16,
    marginTop: 5,
  },
  pickPriceTextDesc: {color: '#026786', fontSize: 12, marginLeft: 5},
  infoIcon: {height: 14, width: 14},
  pickPriceTitle: {color: '#026786', fontSize: 12, marginTop: 30},
  pickPriceView: {
    height: 95,
    marginLeft: -20,
    marginRight: -20,
    marginTop: 15,
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  pickPriceSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  pickPriceSwitchTitle: {color: '#026786', fontWeight: '500', fontSize: 16},
  pickPriceAutomaticApply: {
    height: 50,
    alignContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
  },
  longTermRentalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonViewContainer: {
    height: 70,
    backgroundColor: '#EFF7F8',
    marginRight: -20,
    marginLeft: -20,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  buttonViewSubContainer: {
    width: 80,
    height: 46,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  demandTypeTitle: {marginLeft: 10, flex: 1, flexDirection: 'row', height: 46},
  nextButtonContainer: {
    height: 100,
    backgroundColor: '#FFFFFF',
    marginRight: -20,
    marginLeft: -20,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    marginBottom: 100,
  },
  nextButtonSubContainer: {
    width: 45,
    height: 45,
    borderRadius: 5,
    borderColor: '#00A3AD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  nextButton: {
    height: 44,
    backgroundColor: '#00A3AD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  safeArea: {backgroundColor: '#00A3AD'},
  container: {backgroundColor: '#FCFCFC'},
  mainBodyContainer: {flex: 1, backgroundColor: '#FCFCFC', marginBottom: 100}
});
