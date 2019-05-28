import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator
} from 'react-native';

import Toolbar from './app/components/Toolbar/Toolbar';
import Books from './app/components/Books/Books';
import BookDetails from './app/components/BookDetails/BookDetails';

export default class bookfinder extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'books':
        return (
          <View style={styles.container}>
            <Toolbar />
            <Books navigator={navigator} title="books" />
          </View>
        )
      case 'details':
        return (
          <View style={styles.container}>
            <Toolbar title={route.book.volumeInfo.title} />
            <BookDetails navigator={navigator} book={route.book} title="details" />
          </View>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'books'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#cccccc',
    height: Dimensions.get('window').height
  }
});

AppRegistry.registerComponent('bookfinder', () => bookfinder);
