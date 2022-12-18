import absencesReducer, { 
} from './absencesSlice';

describe('absences reducer', () => {
 
  it('should handle initial state', () => {
    expect(absencesReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });
 
});
