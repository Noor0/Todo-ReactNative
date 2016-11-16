import React from 'react';
import { connect } from "react-redux";
import { 
	showAllAction,
	showIncompleteAction,
	showCompletedAction,
	deleteTodoAction,
	completeTodoAction,
	deleteCompletedAction
} from "./Actions";
import MyList from "./List";

function mapStateToProps(state){
	return {
		todos:state.todos,
		filter:state.filter
	};
}

function mapDispatchToProps(dispatch){
	return{
		deleteFunction:(id)=>{dispatch( deleteTodoAction(id) )},
		doneFunction:(id)=>{dispatch( completeTodoAction(id) )},
		showAll:()=>{dispatch( showAllAction() )},
		showIncomplete:()=>{dispatch( showIncompleteAction() )},
		showCompleted:()=>{dispatch( showCompletedAction() )},
		clearCompleted:()=>{dispatch( deleteCompletedAction() )}
	};
}

var ListContainer = connect(mapStateToProps,mapDispatchToProps)(MyList);

export default ListContainer