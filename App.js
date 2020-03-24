import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Color: ColorScreen,
  },
  {
    initialRouteName: 'Color',
    defaultNavigationOptions: {
      title: 'Color App',
    }
  }
);

export default createAppContainer(navigator);