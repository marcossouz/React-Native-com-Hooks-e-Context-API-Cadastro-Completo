import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import users from '../data/users'

export default props => {

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete ' + user.id)
        }
      },
      {
        text: 'Não'
      }
    ])
  }

  function getActions(user) {
    return (
      <>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button 
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    )
  }

  function getUserItem({ item: user }) {
    return (
      <>
        <ListItem
          key={user.id}
          onPress={() => props.navigation.navigate('UserForm', user)}
          rightElement={getActions(user)}
          bottomDivider>
          <Avatar
            rounded
            title={user.name[0]}
            source={ user.avatarUrl ? {uri: user.avatarUrl} : null } />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          {getActions(user)}
        </ListItem>
      </>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}