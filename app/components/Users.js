import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { getUsersAttempt, usersRefresh } from '../actions';
import Pulse from './Pulse';
import styles from '../styles/UsersStyles';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    const { page } = this.state;
    dispatch(getUsersAttempt(page));
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 3000);
  }

  handleEndList = () => {
    const { dispatch, isLoading } = this.props;
    if (isLoading) return;
    this.setState(prevState => ({ page: prevState.page + 1 }), () => {
      const { page } = this.state;
      dispatch(getUsersAttempt(page));
    });
  }

  usersRefresh = () => {
    const { dispatch } = this.props;
    dispatch(usersRefresh());
    this.setState({ page: 0 }, () => {
      const { page } = this.state;
      dispatch(getUsersAttempt(page));
    });
  }

  render() {
    const {
      users,
      noMore,
      isLoading,
      refreshing,
    } = this.props;
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {!isLoaded ?
          <Pulse
            color="#7FB900"
            numPulses={2}
            diameter={200}
            speed={30}
            duration={700}
            insideDiameter={20}
          /> :
          <FlatList
            style={styles.containerContactList}
            data={users}
            keyExtractor={(x, i) => `${i}`}
            onRefresh={() => this.usersRefresh()}
            refreshing={refreshing}
            onEndReached={() => this.handleEndList()}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <View style={styles.userContainer}>
                <Image style={styles.userImage} source={{ uri: item.avatar }} />
                <Text style={styles.userName}>{item.first_name} {item.last_name}</Text>
              </View>
            )}
            ListFooterComponent={
              <View style={styles.footerComponent}>
                {
                  (noMore !== '' && !refreshing) ?
                    <Text>{noMore}</Text> :
                  isLoading && !refreshing &&
                  <Pulse
                    color="#7FB900"
                    numPulses={2}
                    diameter={150}
                    speed={20}
                    duration={300}
                    insideDiameter={10}
                  />
                }
              </View>
            }
          />
        }
      </View>
    );
  }
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  noMore: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refreshing: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  usersReducer: {
    users,
    noMore,
    isLoading,
    refreshing,
  },
}) => ({
  users,
  noMore,
  isLoading,
  refreshing,
});

export default connect(mapStateToProps)(Users);
