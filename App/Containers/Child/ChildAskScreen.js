import React from 'react'
import { TextInput, Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
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

class ChildAskScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: '',
      productPrice: 0,
      timePeriod: 1
    }
  }

  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (
      <View>

        <Text> Ask for money! </Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1 }}
          onChangeText={text => this.setState(s => ({...s, productName: text}))}
          value={this.state.productName}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1 }}
          onChangeText={text => this.setState(s => ({...s, productName: text}))}
          value={this.state.productPrice}
          keyboardType={numeric}
        />

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
)(ChildAskScreen)
