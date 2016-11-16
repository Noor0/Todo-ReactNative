import React from "react";
import {
	Text,
	TouchableNativeFeedback,
	Animated,
	Easing,
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";

export default class MyListItem extends React.Component{
	constructor(props){
		super(props);
		this.heightAnim=new Animated.Value(0);
		this.flag=false;
	}

	heightAnimator(){
		if(!this.flag)
			Animated.timing(this.heightAnim,
				{
					toValue:1,
					timing:100,
					easing:Easing.inout
				}
			).start();
		else
			Animated.timing(this.heightAnim,
				{
					toValue:0,
					timing:100,
					easing:Easing.inout
				}
			).start();
		// console.log(this.heightAnim);
		this.flag=!this.flag;
	}

	render(){
		let heightMain=this.heightAnim.interpolate({
			inputRange:[0,1],
			outputRange:[45,90]
		});

		let actionPanelHeight=this.heightAnim.interpolate({
			inputRange:[0,1],
			outputRange:[0,50]
		});

		return(
			<TouchableWithoutFeedback onPress={this.heightAnimator.bind(this)}>
				<View style={{flex:0,flexDirection:"row"}}>
					<Animated.View style={[styles.itemContainer,{backgroundColor:this.props.completed?"#E4F1FE":"white"}]}>
						<Text style={styles.textStyle}>{this.props.text}</Text>
						<Animated.View style={[styles.actionPanel,{height:actionPanelHeight}]}>
							<TouchableNativeFeedback onPress={this.props.doneFunction.bind(null,this.props.id)}>
								<Animated.View style={[styles.actionButtons,{opacity:this.heightAnim,backgroundColor:"steelblue"}]}>
									<Text style={styles.buttonText}>Done</Text>
								</Animated.View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={this.props.deleteFunction.bind(null,this.props.id)}>
								<Animated.View style={[styles.actionButtons,{opacity:this.heightAnim,backgroundColor:"#52B3D9"}]}>
									<Text style={styles.buttonText}>Delete</Text>
								</Animated.View>
							</TouchableNativeFeedback>
						</Animated.View>
					</Animated.View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

MyListItem.propTypes={
	id:React.PropTypes.number.isRequired,
	text:React.PropTypes.string.isRequired,
	doneFunction:React.PropTypes.func,
	deleteFunction:React.PropTypes.func,
	completed:React.PropTypes.bool.isRequired
};

let styles= StyleSheet.create({
	itemContainer:{
		flex:1,
		borderBottomColor:"steelblue",
		borderBottomWidth:1
	},
	actionButtons:{
		flex:1,
		backgroundColor:"green",
		justifyContent:"center",
		alignItems:"center"
	},
	actionPanel:{
		flex:0,
		flexDirection:"row",
		backgroundColor:"aliceblue"
	},
	textStyle:{
		flex:0,
		fontSize:16,
		padding:10,
		marginBottom:10
	},
	buttonText:{
		fontSize:16,
		color:"rgb(250,250,250)"
	}
});