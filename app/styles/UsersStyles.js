import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerContactList: {
    alignSelf: 'stretch',
  },
  footerComponent: {
    marginTop: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  userContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    alignItems: 'center',
    borderColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 20,
  },
  userName: {
    fontWeight: '600',
    fontSize: 17,
  },
});
