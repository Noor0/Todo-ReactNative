import React from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	Dimensions,
	TouchableNativeFeedback
} from "react-native";
import MyListItem from "./ListItem";
import { ActionConstants } from "./Actions";

export default class MyList extends React.Component{
	render(){
		// console.log(this.props.filter);
		var st= this.props.filter =="SHOW_ALL" ? "skyblue":"white";
		var st1= this.props.filter =="SHOW_COMPLETED" ? "skyblue":"white";
		var st2= this.props.filter =="SHOW_INCOMPLETE" ? "skyblue":"white";
		var list=[];
		switch(this.props.filter){
			case ActionConstants.SHOW_ALL:
				list=this.props.todos.map( (item,i)=>(<MyListItem completed={item.completed} key={i} id={item.id} text={item.note} doneFunction={this.props.doneFunction} deleteFunction={this.props.deleteFunction}/>));
				break;
			case ActionConstants.SHOW_INCOMPLETE:
				// console.log(this.props.todos);
				list=this.props.todos.filter( 
					(item)=>{
						if(!item.completed)
							return true;
					});
				list=list.map((item,i)=>(<MyListItem completed={item.completed} key={i} id={item.id} text={item.note} doneFunction={this.props.doneFunction} deleteFunction={this.props.deleteFunction}/>));
				// console.log(list);
				break;
			case ActionConstants.SHOW_COMPLETED:
				list=this.props.todos.filter( 
					(item)=>{
						if(item.completed)
							return true;
					});
				list=list.map((item,i)=>(<MyListItem completed={item.completed} key={i} id={item.id} text={item.note} doneFunction={this.props.doneFunction} deleteFunction={this.props.deleteFunction}/>));
				break;
		}
		return(
			<View style={styles.listStyle}>
					<Text style={styles.header}>Todos</Text>
					<View style={styles.filterButtonsStyle}>
						<TouchableNativeFeedback onPress={this.props.showAll.bind(null)}>
							<View style={[styles.filterButton,{backgroundColor:st}]}>
								<Text>All</Text>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback onPress={this.props.showCompleted.bind(null)}>
							<View style={[styles.filterButton,{backgroundColor:st1}]}>
								<Text>Completed</Text>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback onPress={this.props.showIncomplete.bind(null)}>
							<View style={[styles.filterButton,{backgroundColor:st2}]}>
								<Text>Incomplete</Text>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback onPress={this.props.clearCompleted.bind(null)}>
							<View style={styles.filterButton}>
								<Text>Clear Completed</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
					{list}
			</View>
		);
	}
}

MyList.propTypes={
	todos:React.PropTypes.array,
	doneFunction:React.PropTypes.func.isRequired,
	deleteFunction:React.PropTypes.func.isRequired,
	filter:React.PropTypes.string.isRequired,
	showAll:React.PropTypes.func.isRequired,
	showIncomplete:React.PropTypes.func.isRequired,
	showCompleted:React.PropTypes.func.isRequired,
	clearCompleted:React.PropTypes.func.isRequired
}

MyList.defaultProps={
	todos:[{id:-1,note:"dummy"}]
}

let styles= StyleSheet.create({
	listStyle:{
		flex:1,
		justifyContent: 'flex-start',
    	alignItems: 'center',
    	width:Dimensions.get('window').width
	},
	header:{
		fontSize:24,
		textAlign:"center"
	},
	filterButtonsStyle:{
		flex:1,
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center"
	},
	filterButton:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		height:50
	}
});