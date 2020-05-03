import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  test('Should return default state if there is no action type passsed into the reducer ', () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });
});