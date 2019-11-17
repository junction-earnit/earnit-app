import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import ParentAllowanceScreen from 'App/Containers/Parent/ParentAllowanceScreen'
import ParentApprovalsScreen from 'App/Containers/Parent/ParentApprovalsScreen'
import ParentChoresScreen from 'App/Containers/Parent/ParentChoresScreen'
import ParentMainScreen from 'App/Containers/Parent/ParentMainScreen'
import ParentTeachingSettingsScreen from 'App/Containers/Parent/ParentTeachingSettingsScreen'

import ChildPurchaseScreen from 'App/Containers/Child/ChildPurchaseScreen'
import ChildAskScreen from 'App/Containers/Child/ChildAskScreen'
import ChildChoresScreen from 'App/Containers/Child/ChildChoresScreen'
import ChildGetScreen from 'App/Containers/Child/ChildGetScreen'
import ChildMainScreen from 'App/Containers/Child/ChildMainScreen'
import ChildScammedScreen from 'App/Containers/Child/ChildScammedScreen'



/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: ExampleScreen,
    LoginScreen: LoginScreen,

    ParentMainScreen: ParentMainScreen, 
    ParentAllowanceScreen: ParentAllowanceScreen,
    ParentChoresScreen: ParentChoresScreen,
    ParentApprovalsScreen: ParentApprovalsScreen,
    ParentTeachingSettingsScreen: ParentTeachingSettingsScreen,

    ChildMainScreen: ChildMainScreen,
    ChildGetScreen: ChildGetScreen,
    ChildChoresScreen: ChildChoresScreen,
    ChildAskScreen: ChildAskScreen,
    ChildPurchaseScreen: ChildPurchaseScreen,
    ChildScammedScreen: ChildScammedScreen,

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
