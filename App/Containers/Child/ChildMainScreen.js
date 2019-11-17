import React from 'react'
import { TouchableWithoutFeedback, Platform, Text, View, Button, ActivityIndicator, Image, StyleSheet, Modal, TouchableHighlight, Alert} from 'react-native';
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
  constructor(props) {
    super(props)
    let initial_child = {
      balance: 0,
      savings: 0
    }
    if (props.remote && props.remote.child) {
      initial_child = props.remote.child
    }

    this.state = {
      modalVisible: false,
      child: initial_child
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.remote) {
      if (JSON.stringify(this.props.remote.child) !== JSON.stringify(prevProps.remote.child)) {
        this.setState(state => ({ ...state, child: this.props.remote.child }))
      }
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


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
          <Text style={styles.titleText} >{this.state.child.balance}$</Text>
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.titleText} > Savings </Text>
          <Text style={styles.titleText} > {this.state.child.savings}$ </Text>
        </View>

      </View>


      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button onPress={() => {
            this.setModalVisible(true);
          }} title="Get" />
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button  title="Manage" />
        </View>

      </View>

      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => {this.setModalVisible(false)}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.1)', flex: 1}}>
              <TouchableWithoutFeedback>
                <View style={{backgroundColor: '#FFF', width: '80%', marginLeft: '10%', marginTop: 200, padding: 50}}>
                  <Button onPress={() => {
                    this.setModalVisible(false);
                    NavigationService.navigate('ChildChoresScreen');
                  }} title="Do a chore" />
                  <Button onPress={() => {
                    this.setModalVisible(false);
                    NavigationService.navigate('ChildAskScreen');
                  }} title="Ask for extra money" />
                  <Button onPress={() => {
                    this.setModalVisible(false);
                    NavigationService.navigate('ChildPurchaseScreen');
                  }} title="Big purchase" />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

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
