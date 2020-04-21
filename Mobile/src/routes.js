import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SingIn"
          options={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#FFF',
            title: 'SingIn',
          }}
          component={SingIn}
        />
        <Tab.Screen name="SingUp" component={SingUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
