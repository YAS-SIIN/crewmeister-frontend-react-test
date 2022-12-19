import counterReducer, { getAbsencesList } from './absencesSlice'

describe('counter reducer sync actions', () => {
  const initialState = {
    absences: [],
    loading: false,
    error: false,
  }
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      absences: [],
      loading: false,
      error: false,
    })
  })
})

describe('counter reducer async actions', () => {
  const initialState = {
    absences: [],
    loading: true, 
    error: false,
  }

  it('should set status to "pending"', async () => {
    const action = { type: getAbsencesList.pending.type }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('should set get data', async () => {
 
    const action = { type: getAbsencesList.fulfilled.type, payload: [] }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      absences: initialState.absences,
      loading: false,
      error: false,
    })
  })

  it('should set status to "failed"', async () => {
    const action = {
      type: getAbsencesList.rejected.type,
      error: true,
    }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      error: true,
    })
  })
})