import * as React from "react"
import LoginScreen from "./screens/LoginScreen"
import DrawerNavigation from "./navigation/drawerNavigation"
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { NavigationContainer } from "@react-navigation/native"

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  DrawerNavigation: DrawerNavigation
})
const AppContainer = createAppContainer(SwitchNavigator)