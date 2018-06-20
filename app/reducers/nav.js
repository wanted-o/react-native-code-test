import { AppNavigator } from '../AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Users');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
