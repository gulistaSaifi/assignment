import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CombineStackNavigation } from './src/routes/navigation';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

const App = props => {
  return (
    <NavigationContainer>
          <CombineStackNavigation />
    </NavigationContainer>
  );
};

export default App;
