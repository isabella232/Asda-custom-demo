import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { connectStateResults } from 'react-instantsearch-dom';
import { getQuery, getInput } from '../../actions/getQuery';

const StateResults = ({ searchResults, searchState }) => {
//   const dispatch = useDispatch()
//   let query = searchResults.query
//   console.log('stetaaeresult')
//   console.log(typeof query)
//  useEffect((query) => {
//    if(query !== undefined){
//      console.log('if')
//     dispatch(getQuery(query))
//    } 
  
//    console.log('useefeect')
//  }, [query])
  return null
};

const CustomStateResults = connectStateResults(StateResults);

export default CustomStateResults;