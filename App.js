import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native'
import { Welcome } from './src/screens/Welcome';

export default function App() {
  return (
    <NavigationContainer>
      <Welcome/>
    </NavigationContainer>
  )
}

