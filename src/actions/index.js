export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => ({
  // Fill in this function
  type: INCREMENT,
});

export const decrement = () => ({
  // Fill in this function
  type: DECREMENT,
});

export const incrementIfOdd = () => ({
  type: INCREMENT_IF_ODD,
});
