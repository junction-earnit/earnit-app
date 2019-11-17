import React from 'react'
import { Slider, TextInput, Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
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

class ChildPurchaseScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: 'bike',
      productPrice: 200,
      timePeriod: 21
    }
  }

  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    let timeUnit = "days"
    let timeAmount = this.state.timePeriod

    if (timeAmount >= 7 && timeAmount <= 28) {
      timeAmount = Math.floor(timeAmount / 7)
      timeUnit = "weeks"
    } else if (timeAmount > 28) {
      timeAmount = Math.min(12, Math.floor(timeAmount / 30))
      timeUnit = "months"
    }

    const interestRate = 1.001
    const totalPrice = Math.pow(interestRate, this.state.timePeriod)*this.state.productPrice;
    const difference = totalPrice - this.state.productPrice

    let installmentPrice = 0
    if (timeUnit == "days") {
      installmentPrice = totalPrice
    } else if (timeUnit == "weeks") {
      installmentPrice = totalPrice / timeAmount
    } else if (timeUnit == "months") {
      installmentPrice = totalPrice / (timeAmount * 4.5)
    }

    const commonTextStyle = {
      fontSize: 20,
      marginTop: 30
    }

    const highlightTextStyle = {
      fontSize: 30,
      fontWeight: 'bold'
    }

    return (
      <View style={{padding: 30}}>

        <Text> Buy something you cannot afford yet </Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1 }}
          onChangeText={text => this.setState(s => ({...s, productName: text}))}
          value={this.state.productName}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1 }}
          onChangeText={text => this.setState(s => ({...s, productPrice: parseInt(text) || null }))}
          value={`${this.state.productPrice || ''}`}
          keyboardType="numeric"
        />
        <Slider
          maximumValue={365}
          minimumValue={0}
          step={1}
          onValueChange={v => this.setState(s => ({...s, timePeriod: v}))}
          value={this.state.timePeriod}
        />
        <Text style={commonTextStyle}>
          To be paid for <Text style={highlightTextStyle}>{timeAmount} {timeUnit}</Text>
        </Text>

        <Text style={commonTextStyle}>
          You will have to pay
        </Text>
        <Text style={highlightTextStyle}>{installmentPrice.toFixed(2)}$ each week.</Text>

        <Text style={commonTextStyle}>
          The total price for your {this.state.productName} will be <Text style={{fontWeight: 'bold'}}>{totalPrice.toFixed(2)}$</Text>.
        </Text>

        <Text style={commonTextStyle}>
          You will pay <Text style={highlightTextStyle}>{difference.toFixed(2)}$ extra</Text> by financing this.
        </Text>

        <Button
          style={{marginTop: 60}}
          title="Buy"
          onPress={() => {
            this.props.setRemote({
              child: {
                ...this.props.remote.child,
                balance: this.props.remote.child.balance + this.state.productPrice
              }
            })
            NavigationService.goBack()
          }}
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
)(ChildPurchaseScreen)
