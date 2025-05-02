import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Profile() {


    const profileOptions = [
        { id: "1", title: "My Account", icon: <AntDesign size={24} name="user" color={"white"} /> },
        { id: "2", title: "Face ID", icon: <MaterialCommunityIcons size={24} name="face-recognition" color={"white"} /> },
        { id: "3", title: "Two-Factor Authentication", icon: <MaterialCommunityIcons size={24} name="two-factor-authentication" color={"white"} /> },
        { id: "4", title: "Help & Support", icon: <MaterialIcons size={24} name="support-agent" color={"white"} /> },
        { id: "5", title: "About App", icon: <Feather size={24} name="info" color={"white"} /> },
    ];

    return (
        <View className="flex-1">
            {/* Background Theme */}
            <View className="bg-blue-600 absolute top-0 left-0 right-0 h-3/4" />
            <ScrollView showsVerticalScrollIndicator={false} className="bg-transparent flex-1">

                {/* Hero Section */}
                <View className="p-10 flex-row items-center mt-12">
                    {/* Profile Image */}
                    <Image
                        source={{ uri: 'https://www.gravatar.com/avatar/?d=mp' }}
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
                <View className="bg-white rounded-t-2xl -mt-6 min-h-screen px-4">
                    <Text className="text-black text-xl font-bold mt-3">Profile Information</Text>
                    <Text className="text-gray-700 mt-2">More details about the user...</Text>

                    {/* Profile Options List */}
                    <View className="mt-4">
                        {profileOptions.map((item) => (
                            <TouchableOpacity key={item.id} className="flex-row items-center py-6 border-b border-gray-200">
                                <View className="mr-3">{item.icon}</View>
                                <Text className="text-white text-lg">{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}