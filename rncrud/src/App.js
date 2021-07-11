import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'

const Stack = createStackNavigator()

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
      >
        <Stack.Screen
          name="UserList"
          component={UserList}
        >
        </Stack.Screen>
        <Stack.Screen
          name="UserForm"
          component={UserForm}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    )
}