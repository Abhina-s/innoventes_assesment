import { connect } from 'react-redux';
import HomePresenter from '../presenters/home';

const mapStateToProps = (state) => {
  const roomCount = state.home.roomCount;
  const adultCount = state.home.adultCount;
  const childrenCount = state.home.childrenCount;

  return {
    roomCount,
    adultCount,
    childrenCount,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    onClick: (name, action) => {
      switch (name) {

        case 'ROOM':
          if (action === '+') {
            dispatch({
              type: 'ROOM_INC',
            })
          }
          else {
            dispatch({
              type: 'ROOM_DEC'
            })
          }
          break;

        case 'ADULT':
          if (action === '+') {
            dispatch({
              type: 'ADULT_INC',
            })
          }
          else {
            dispatch({
              type: 'ADULT_DEC'
            })
          }
          break;

        case 'CHILDREN':
          if (action === '+') {
            dispatch({
              type: 'CHILDREN_INC',
            })
          }
          else {
            dispatch({
              type: 'CHILDREN_DEC'
            })
          }
          break;
        default:
      }

    }
  };
};

const Home = connect(
  mapStateToProps,
  mapdispatchToProps,
)(HomePresenter);

export default Home;