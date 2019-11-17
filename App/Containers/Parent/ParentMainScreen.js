import React from 'react'
import { FlatList, Platform, Text, View, Button, ActivityIndicator, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Aref Moradi',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Current balance: 20$'
  },
  {
    name: 'Sergiu Lazar',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '-10$'
  },
]
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ParentMainScreen extends React.Component {
  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}> 
        <Text style={styles.titleText}>Hi Dad!</Text> 
      </View>

      

      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
})

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentMainScreen)
