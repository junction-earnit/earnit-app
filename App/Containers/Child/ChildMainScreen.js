import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, StyleSheet  } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'

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

class ChildMainScreen extends React.Component {
  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch'}}>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}> 
        <Text style={styles.titleText} > Hi Aref! </Text> 
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.titleText} >Pocket</Text> 
          <Text style={styles.titleText} >13$</Text> 
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.titleText} > Savings </Text> 
          <Text style={styles.titleText} > 104$ </Text> 
        </View>

      </View>


      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button onPress={() => NavigationService.navigate('ChildGetScreen')} title="Get" />
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button onPress={() => NavigationService.navigate('ChildGetScreen')} title="Manage" />
        </View>

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
    margin: 16, 
  },
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildMainScreen)
