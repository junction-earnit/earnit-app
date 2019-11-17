import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'
import ExampleActions from 'App/Stores/Example/Actions'

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

class ParentApprovalsScreen extends React.Component {
  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    if (!this.props.remote.approvals) {
      return (<View />)
    }
    return (
      <View style={{padding: 50}}>

        <Text> Approve? </Text>

        <Text>Aref wants to spend {this.props.remote.approvals.productPrice}$ in {this.props.remote.approvals.productName}</Text>

        <Button
          onPress={() => {
            this.props.setRemote({
              child: {
                ...this.props.remote.child,
                balance: this.props.remote.child.balance + this.props.remote.approvals.productPrice
              },
              approvals: 0
            })
            NavigationService.goBack()
          }}
          title="Approve"
        />
        <Button
          onPress={() => {
            this.props.setRemote({
              approvals: 0
            })
            NavigationService.goBack()
          }}
          title="Reject"
        />

      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  remote: state.example.remote
})

const mapDispatchToProps = (dispatch) => ({
  setRemote: data => dispatch(ExampleActions.setRemote(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentApprovalsScreen)
