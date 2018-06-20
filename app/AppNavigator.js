import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { addListener } from '../app/utils/redux';
import Users from './components/Users';

export const AppNavigator = StackNavigator({
  Users: {
    screen: Users,
    navigationOptions: () => ({
      title: 'Users',
    }),
  },
});

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      dispatch,
      nav,
    } = this.props;
    return [
      <StatusBar barStyle={Platform.OS !== 'ios' ? 'light-content' : 'dark-content'} backgroundColor="blue" key="StatusBar" />,
      <AppNavigator
        key="AppNavigator"
        screenProps={{}}
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />,
    ];
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    isTransitioning: PropTypes.bool,
    key: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

AppWithNavigationState.defaultProps = {
};

const mapStateToProps = ({
  nav,
}) => ({
  nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
