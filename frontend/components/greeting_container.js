import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => {
  let loggedIn = Boolean(state.session.id);
  let currentUser = null;
  if (loggedIn) { currentUser = state.entities.users[state.session.id] }
  return {
    currentUser: currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);