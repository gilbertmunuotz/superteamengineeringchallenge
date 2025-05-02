import { View, Pressable } from 'react-native'
import AntDesign from "@expo/vector-icons/AntDesign"

export default function FloatingActionButton() {
    return (
        <View className="absolute bottom-6 right-6">
            <Pressable className="bg-blue-500/90 w-16 h-16 rounded-full items-center justify-center shadow-lg">
                <AntDesign name="plus" size={32} color="white" />
            </Pressable>
        </View>
    )
}