import React from 'react'
import { FlatList, Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'
import ToggleSwitch from 'toggle-switch-react-native'
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



class ParentTeachingSettingsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      one: false,
      two: false,
      three: false,
      four: true,
      five: false,
    }
  }

  componentDidMount() {
    // this._fetchUser()
  }

  render() {
    return (



      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}}>

      <View style={{margin: 8}}>

        <ToggleSwitch
        isOn={this.state.one}
        onColor="green"
        offColor="red"
        label="Insurance"
        labelStyle={{ color: "black", fontSize: 24, alignSelf:'flex-start', width: '75%' }}
        size="large"
        onToggle={isOn => this.setState(s => ({...this.state, one:isOn}))}
/>

</View>

<View style={{margin: 8}}>

        <ToggleSwitch
        isOn={this.state.two}
        onColor="green"
        offColor="red"
        label="Investing"
        labelStyle={{ color: "black", fontSize: 24, alignSelf:'flex-start', width: '75%' }}
        size="large"
        onToggle={isOn => this.setState(s => ({...this.state, two:isOn}))}
/>

</View>

<View style={{margin: 8}}>

        <ToggleSwitch
        isOn={this.state.three}
        onColor="green"
        offColor="red"
        label="Phishing"
        labelStyle={{ color: "black", fontSize: 24, alignSelf:'flex-start', width: '75%' }}
        size="large"
        onToggle={isOn => {
          this.setState(s => ({...this.state, three:isOn}))
          if (isOn) {
            const now = new Date()
            const secondsSinceEpoch = Math.round(now.getTime() / 1000)
            this.props.setRemote({options: {phishing: true, lastPhishing: secondsSinceEpoch}})
          } else {
            this.props.setRemote({options: {phishing: false}})
          }
        }}
/>

</View>

<View style={{margin: 8}}>

        <ToggleSwitch
        isOn={this.state.four}
        onColor="green"
        offColor="red"
        label="Installments"
        labelStyle={{ color: "black", fontSize: 24, alignSelf:'flex-start', width: '75%' }}
        size="large"
        onToggle={isOn => this.setState(s => ({...this.state, four:isOn}))}
/>

</View>

<View style={{margin: 8}}>

        <ToggleSwitch
        isOn={this.state.five}
        onColor="green"
        offColor="red"
        label="Interests"
        labelStyle={{ color: "black", fontSize: 24, alignSelf:'flex-start', width: '75%' }}
        size="large"
        onToggle={isOn => this.setState(s => ({...this.state, five:isOn}))}
/>

</View>

<FlatList style={{margin:16, alignSelf: 'flex-start'}}
          data={[
            {key: 'Aref', debt: (this.props.remote && this.props.remote.child.balance) || 0},
            {key: 'Sergiu', debt: -10},
          ]}
          renderItem={
            ({item}) =>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{fontSize:24}}>{item.key}</Text>
          <Text style={{fontSize:20}}>{item.debt}</Text>
        </View>
        }
        />

        { this.props.remote.approvals ? (<Button
        title="Approvals"
        onPress={() => NavigationService.navigate('ParentApprovalsScreen')}
      />) : null
      }


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
)(ParentTeachingSettingsScreen)
