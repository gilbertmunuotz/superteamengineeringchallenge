import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Profile() {


    const profileOptions = [
        { id: "1", title: "My Account", icon: <AntDesign size={24} name="user" color={"black"} /> },
        { id: "2", title: "Face ID", icon: <MaterialCommunityIcons size={24} name="face-recognition" color={"black"} /> },
        { id: "3", title: "Two-Factor Authentication", icon: <MaterialCommunityIcons size={24} name="two-factor-authentication" color={"black"} /> },
        { id: "4", title: "Help & Support", icon: <MaterialIcons size={24} name="support-agent" color={"black"} /> },
        { id: "5", title: "About App", icon: <Feather size={24} name="info" color={"black"} /> },
    ];

    return (
        <View className="flex-1">
            {/* Background Theme */}
            <View className="bg-blue-500/90 absolute top-0 left-0 right-0 h-3/4" />
            <ScrollView showsVerticalScrollIndicator={false} className="bg-transparent flex-1">

                {/* Hero Section */}
                <View className="p-10 flex-row items-center mt-12">
                    {/* Profile Image */}
                    <Image
                        source={require('../../assets/profile.jpg')}
                        className="w-28 h-28 rounded-full border-2 border-white"
                        resizeMode="cover"
                    />

                    {/* User Details */}
                    <View className="ml-4">
                        <Text className="text-white text-2xl font-semibold">
                            Gilbert
                        </Text>
                        <Text className="text-white opacity-90 text-lg">
                            officialgilbert45@gmail.com
                        </Text>
                    </View>
                </View>

                {/* White Background Section */}
                <View className="bg-white rounded-t-2xl mt-3 min-h-screen px-4">
                    {/* Search Bar */}
                    <View className="mt-2">
                        <View className={`flex-row items-center rounded-lg px-3 ${Platform.OS === 'android' ? 'py-0' : 'py-2'} border border-gray-300`}>
                            <MaterialIcons name="search" size={24} color="#000000" />
                            <TextInput
                                className="flex-1 ml-2 text-black text-lg mb-3"
                                placeholder="Search profile..."
                                placeholderTextColor="#6B7280"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>


                    {/* Profile Options List */}
                    <View className="mt-4">
                        {profileOptions.map((item) => (
                            <TouchableOpacity key={item.id} className="flex-row items-center py-6 border-b border-gray-200">
                                <View className="mr-3">{item.icon}</View>
                                <Text className="text-black text-lg">{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}