import { combineReducers } from "redux";
import { ActionConstants } from "./Actions";

// {
// 	filter:"SHOW_ALL",
// 	todos:[{id,note}],
// }

function filterReducer(state=ActionConstants.SHOW_ALL,action){
	switch(action.type){
		case ActionConstants.SHOW_ALL:
		case ActionConstants.SHOW_COMPLETED:
		case ActionConstants.SHOW_INCOMPLETE:
			return action.type;
		default:
			return ActionConstants.SHOW_ALL;
	}
}

function todoReducer(state=[],action){
	// console.log(action.type);
	// console.log(state);
	switch(action.type){
		case ActionConstants.ADD_TODO:
			return [...state,{id:state.length,note:action.data,completed:false}];
		
		case ActionConstants.COMPLETE_TODO:
			var newState=state.slice().map( (item)=>{
				if(item.id === action.id)
					return Object.assign({},item,{completed:true});
				else return item;
			});
			// console.log(newState);
			return newState;

		case ActionConstants.DELETE_COMPLETED:
			return state.slice().filter( (item)=> {if(!item.completed) return item} );

		case ActionConstants.DELETE_TODO:
			return state.slice().filter( (item)=>{
				if(item.id !== action.id)
					return item;
			});
		
		default:
			return state;
	}
}

var mainReducer= combineReducers({
	filter:filterReducer,
	todos:todoReducer
});


export default mainReducer