import React from 'react'
import { FlatList, Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'
import ToggleSwitch from 'toggle-switch-react-native'

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



class ChildScammedScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (



      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

        <Text>
          You have been scammed.
        </Text>
        <Text>
          10$ have been held in your account until next week
        </Text>


      </View>


    )
  }
}


const mapStateToProps = (state) => ({
  remote: state.example.remote
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildScammedScreen)
