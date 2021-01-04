import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  allNews: []
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.GET_ALL_NEWS:
      return state.set("allNews",action.allNews)
    default:
       return state;
  }
}

export default reducer