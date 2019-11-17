import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
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

class ParentChoresScreen extends React.Component {
  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (
      <View>

        <Text> EARN IT! </Text>
        
            <Button onPress={() => NavigationService.navigateAndReset('ChildMainScreen')} title="Child" />
            <Button onPress={() => NavigationService.navigateAndReset('ParentMainScreen')} title="Parent" />
        
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentChoresScreen)
