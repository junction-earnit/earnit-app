import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, StyleSheet } from 'react-native'
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

class LoginScreen extends React.Component {
  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>

        <Text style={styles.titleText} > EARN IT </Text>

        <View style={{margin: 16, width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>

            <Button style={{margin:16,  width: '50%'}} onPress={() => NavigationService.navigate('ChildMainScreen')} title="Child" />
            <Button style={{margin:16,  width: '50%'}} onPress={() => NavigationService.navigate('ParentTeachingSettingsScreen')} title="Parent" />

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
)(LoginScreen)
