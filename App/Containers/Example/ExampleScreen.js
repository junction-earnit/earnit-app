import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { Images } from 'App/Theme'

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

class ExampleScreen extends React.Component {
  constructor(props) {
    super(props);
    let initialText = '';
    if (props.remote) {
      console.log('remote', props.remote)
      initialText = props.remote.text;
    }
    this.state = {text: initialText};
  }

  componentDidMount() {
    this._fetchUser()
  }

  componentDidUpdate(prevProps) {
    if (this.props.remote) {
      if (this.props.remote.text !== prevProps.remote.text) {
        this.setState(state => ({ ...state, text: this.props.remote.text }))
      }
    }
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>To get started, edit App.js</Text>
            <Text style={Style.instructions}>{instructions}</Text>
            {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Text>
                <Text style={Style.result}>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Text>
              </View>
            )}
            <Button onPress={() => this._fetchUser()} title="Refresh" />
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.setRemote({text: this.state.text})}
              value={this.state.text}
              style={{color: '#000000'}}
            />
          </View>
        )}
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
  remote: PropTypes.object,
  setRemote: PropTypes.func
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
  remote: state.example.remote
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
  setRemote: data => dispatch(ExampleActions.setRemote(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
