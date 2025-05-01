// Import npm packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Foundation } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// Import all tab screens dynamically
import Index from "@/app/(tabs)";
import Insights from "@/app/(tabs)/insights";
import Profile from "@/app/(tabs)/profile";

// Create instance of tab navigator(createBottomTabNavigator)
const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <Foundation name={'home'} size={size} color={color} />;
                    } else if (route.name === 'Insights') {
                        iconName = focused ? 'MaterialIcons' : 'Material-outline';
                        return <MaterialIcons name={'insights'} size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        iconName = focused ? 'user' : 'user-outline';
                        return <AntDesign name={'user'} size={size} color={color} />;
                    }
                },
            })}
        >
            {/* Screen One */}
            <Tab.Screen
                name="Home"
                component={Index}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Insights"
                component={Insights}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}