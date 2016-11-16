/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import MyListItem from "./ListItem";
import MyList from "./List";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ListContainer from "./ListContainer";
import { Provider } from "react-redux";
import store from "./Store";
import { addTodoAction } from "./Actions";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.headerImage = [ 
      "http://s1.bwallpapers.com/wallpapers/2014/03/03/sea-hd-wallpapers_015446995.jpg",
      "https://images5.alphacoders.com/488/488177.jpg",
      "http://cdn.wallpapersafari.com/30/78/owck1I.jpg",
      "https://images8.alphacoders.com/628/628129.jpg",
      "https://w-dog.net/wallpapers/9/4/561885071278084/greece-mykonos-sky-sea-clouds-mountain-night-lights-liner-ship-chair-table-sports.jpg",
      "http://images.forwallpaper.com/files/images/8/8364/8364942e/128379/santorini-greece-hotel-pool-sea.jpg",
      "http://www.publicdomainpictures.net/pictures/30000/velka/restaurant-tables-with-sea-view.jpg",
      "https://chicstay-prod.s3.amazonaws.com/uploads/attachment/file/709/modern-seaview-villa-Kissamos-Crete-Greece-modern-architecture.jpg",
      "https://static.pexels.com/photos/24491/pexels-photo-24491.jpg",
      "http://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2013/8/2/0/Original_Contrasting-Colors-Camila-Pavone-Bedroom-Office_4x3.jpg.rend.hgtvcom.1280.960.jpeg",
      "http://newtopwallpapers.com/wp-content/uploads/2013/06/Very-Attractive-Beautiful-Waterfall.jpg",
      "https://homefurn.com/blog/wp-content/uploads/2016/03/hgtv-master-bathroom-analysis.jpeg"
    ];
    this.state={text:""};
    this.image=this.headerImage[Math.floor(Math.random()*13)];
  }

  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          backgroundColor="powderblue"
          contentBackgroundColor="white"
          renderBackground={()=>(<Image style={styles.headerImageStyle} source={{uri:this.image}}/>)}
          renderForeground={()=>(
            <View style={styles.inputHolder} >
              <TextInput
                value={this.state.text}
                onChangeText={(text)=>{this.setState({text})}}
                ref="input"
                style={styles.inputStyle}
                underlineColorAndroid="white"
                placeholder="Add a todo"
                placeholderTextColor="white"
                textColor="white"
                returnKeyType="done"
                onSubmitEditing={ ()=>{if(this.state.text !== ""){store.dispatch( addTodoAction(this.state.text) );this.setState({text:""})}else alert("Please write something") }}
                selectionColor="aliceblue"
              />
            </View>
            )
        }
          fadeOutForeground={true}
          parallaxHeaderHeight={Dimensions.get("window").height}
        >
        {/*<MyList todos={[{id:1,note:"My first todo"}]}/>*/}
          <Provider store={store}>
            <ListContainer />
          </Provider>
        </ParallaxScrollView>
      </View>
    );
  }
}

// var inputWidth=Dimensions.get("window").width-50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerImageStyle:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  inputHolder:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.3)",
    justifyContent:"center",
    alignItems:"center"
  },
  inputStyle:{
    fontSize:18,
    width:Dimensions.get("window").width-50,
    color:"white"
  }
});

AppRegistry.registerComponent('Todo', () => Todo);
