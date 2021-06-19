import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ProductScreen from '../screens/ProductScreen'
import CreateScreen from '../screens/CreateScreen'
import DetailsScreen from '../screens/DetailsScreen'
import styles from '../styles/styleSheet'

const StackNavigator = createStackNavigator(
  {
    'Product Screen': {
      screen: ProductScreen
    },
    'Create Screen': {
      screen: CreateScreen
    },
    'Details Screen': {
      screen: DetailsScreen
    },
  },
  {
    initialRouteName: 'Product Screen',
    headerMode: 'float',
    mode: 'modal'

  }
)

export default createAppContainer(StackNavigator)