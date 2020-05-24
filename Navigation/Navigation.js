import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
        title: 'Bienvenu sur la meilleur application ',
      title: 'OUARRAQISOUFIANE'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }

})

export default createAppContainer(SearchStackNavigator)
