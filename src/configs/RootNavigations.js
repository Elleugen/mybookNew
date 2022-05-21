import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
// import MainMenu from '../features/main_menu/index';
import Dashboard from '../features/dashboard/navigation';
import {enableScreens} from 'react-native-screens';

enableScreens(true);
const Stack = createNativeStackNavigator();

// const getInitialRoute = () => {
//   const { authentication } = store.getState();
//   // console.log("getInitialRoute", authentication.userToken);
//   console.log("getInitialRoute", authentication.userToken);
//   return authentication.userToken ? 'MainMenuScreen' : 'Authentication.OnboardingScreen';
//   // return 'Authentication.OnboardingScreen';
// }

function RootStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={{
        animation: 'flip',
        orientation: 'portrait',
      }}>
      {Object.entries({
        // ...MainMenu,
        ...Dashboard,
        // ...Contact
      }).map(([name, component], id) => (
        <Stack.Screen
          key={id}
          name={name}
          component={component.screen}
          options={component.options}
        />
      ))}
    </Stack.Navigator>
  );
}

const RootNavigation = () => {
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();
  // const scheme = useColorScheme();
  // const [theme, setTheme] = React.useState(
  //   scheme === 'dark' ? Constants.PMDarkTheme : Constants.PMDefaultTheme,
  // );

  return (
    <PaperProvider>
      <NavigationContainer
        ref={navigationRef}
        // onReady={() => {
        //   NavigatorHelper.setContainer(navigationRef);
        //   routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        //   RNBootSplash.hide();
        //   changeNavigationBarColor('#FFFFFF', true);
        // }}
        onStateChange={state =>
          onStateChange(state, navigationRef, routeNameRef)
        }>
        <RootStackScreens />
      </NavigationContainer>
    </PaperProvider>
  );
};

function onStateChange(state, navigationRef, routeNameRef) {
  const currentRouteName = navigationRef.current.getCurrentRoute().name;

  routeNameRef.current = currentRouteName;
}

function getInitialRoute() {
  // return 'Product.ProductDetailScreen';
  // return 'MainMenuScreen'
  return 'Dashboard.DashboardScreen';
}

export default RootNavigation;
