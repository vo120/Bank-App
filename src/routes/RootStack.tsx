import React, { FunctionComponent } from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";
import Home from "../screens/Home";
import Balance from "../screens/Balance";

// header
import Greeting from "../components/Headers/Greeting";
import Profile from "../components/Headers/Profile";

// assets
import colors from "../../assets/colors/colors";
import avatar1 from "../../assets/images/avatars/avatar1-3D-initial.png";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// props
import { CardProps } from "../components/Cards/types";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              borderBottomWidth: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              elevation: 0,
              height: 120,
            },
            headerBackground: () => (
              <LinearGradient
                colors={["#262450", "#000020"]}
                style={{ flex: 1 }}
                start={[0, 10]}
                end={[0, 1]}
              />
            ),
            headerTintColor: colors.secondary,
            headerRightContainerStyle: {
              paddingRight: 25,
            },
            headerRight: () => <Profile img={avatar1} />,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => (
                <Greeting
                  mainText="welcome back!"
                  subText="Austin Doe"
                  {...props}
                />
              ),
              headerLeft: () => <></>,
              headerTitleContainerStyle: {
                position: "absolute",
              },
            }}
          />
          <Stack.Screen
            name="Balance"
            component={Balance}
            options={({ route }) => ({
              headerTitle: route?.params?.alias,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "MonumentExtended-Light",
                color: colors.offWhite,
              },

              headerBackImage: (props) => (
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={colors.offWhite}
                  {...props}
                />
              ),
              headerBackTitleStyle: {
                fontFamily: "NeueMetanaMono-SemiBold",
                color: colors.offWhite,
              },
              headerLeftContainerStyle: {
                paddingLeft: 0,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStack;
