// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Define two screens as separate components
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// // Create a stack navigator
// const Stack = createNativeStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="Details" component={DetailsScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;
