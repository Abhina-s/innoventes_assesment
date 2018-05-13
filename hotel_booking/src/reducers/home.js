const defaultState = {
  roomCount: 1,
  adultCount: 1,
  childrenCount: 0,
};

const home = (state = defaultState, action) => {
  // updates the store with respect to the user input
  switch (action.type) {
    case 'ROOM_INC':
      if (state.roomCount + 1 > state.adultCount + state.childrenCount)
        return Object.assign({}, state, {
          roomCount: state.roomCount + 1,
          adultCount: state.roomCount + 1
        });
      else
        return Object.assign({}, state, {
          roomCount: state.roomCount + 1,
        });

    case 'ROOM_DEC':
      var childrenCount = state.childrenCount;
      var adultCount = state.adultCount;
      var roomCount = state.roomCount;
      while ((childrenCount + adultCount) >= (roomCount - 1) * 4) {
        if (childrenCount > 0) {
          childrenCount = childrenCount - 1;
        }
        else if (adultCount > (roomCount - 1) * 4) {
          adultCount = adultCount - 1;
        }
        else break;
      }

      return Object.assign({}, state, {
        roomCount: state.roomCount - 1,
        adultCount: adultCount,
        childrenCount: childrenCount
      });

    case 'ADULT_INC':
      if (((state.adultCount + 1) + state.childrenCount) <= (state.roomCount * 4))
        return Object.assign({}, state, {
          adultCount: state.adultCount + 1,
        });
      return state;

    case 'ADULT_DEC':
      return Object.assign({}, state, {
        adultCount: state.adultCount - 1,
      });

    case 'CHILDREN_INC':
      if (((state.adultCount + 1) + state.childrenCount) <= (state.roomCount * 4))
        return Object.assign({}, state, {
          childrenCount: state.childrenCount + 1,
        });
      return state;

    case 'CHILDREN_DEC':
      return Object.assign({}, state, {
        childrenCount: state.childrenCount - 1,
      });

    default:
      return state;
  }
};

export default home;