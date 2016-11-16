
var ActionConstants={
	SHOW_ALL:"SHOW_ALL",
	SHOW_COMPLETED:"SHOW_COMPLETED",
	SHOW_INCOMPLETE:"SHOW_INCOMPLETE",
	ADD_TODO:"ADD_TODO",
	COMPLETE_TODO:"COMPLETE_TODO",
	DELETE_TODO:"DELETE_TODO",
	DELETE_COMPLETED:"DELETE_COMPLETED"
};

function showAllAction(){
	return{
		type:ActionConstants.SHOW_ALL
	};
}

function showCompletedAction(){
	return {
		type:ActionConstants.SHOW_COMPLETED
	};
}

function showIncompleteAction(){
	return{
		type:ActionConstants.SHOW_INCOMPLETE
	}
}

function addTodoAction(data){
	return {
		type:ActionConstants.ADD_TODO,
		data:data
	}
}

function completeTodoAction(id){
	return{
		type:ActionConstants.COMPLETE_TODO,
		id
	}
}

function deleteTodoAction(id){
	return{
		type:ActionConstants.DELETE_TODO,
		id
	}
}

function deleteCompletedAction(){
	return{
		type:ActionConstants.DELETE_COMPLETED
	};
}

export 
{	deleteCompletedAction,
	ActionConstants,
	showAllAction,
	showCompletedAction,
	showIncompleteAction,
	addTodoAction,
	completeTodoAction,
	deleteTodoAction
}

// function initStoreThunk(){
// 	return (dispatch)=>{
// 		AsyncStorage.get("todos").then((val)=>{dispatch(type:"DATA_CHANGED",JSON.parse(val))})
// 	}
// }

// function addTodoThunk(data){
// 	return (dispatch)=>{
// 		AsyncStorage.get("todos").then( (val)=>{ dispatch( {type:"DATA_CHANGED",JSON.parse(val).push({id:val.length,note:data,completed:false})} ) } )
// 	}
// }

// export {initStoreThunk};