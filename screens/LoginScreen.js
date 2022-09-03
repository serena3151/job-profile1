import * as React from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import DrawerNavigation from '../navigation/drawerNavigation'

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>hi</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerNavigation")}>
                    <Text> login </Text>
                </TouchableOpacity>
            </View>
        )
    }

}