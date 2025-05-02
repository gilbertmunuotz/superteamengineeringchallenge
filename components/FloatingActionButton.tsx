import { View, Pressable } from 'react-native'
import AntDesign from "@expo/vector-icons/AntDesign"

export default function FloatingActionButton({ onPress }: { onPress: () => void }) {
    return (
        <View className="absolute bottom-6 right-6">
            <Pressable onPress={onPress} className="bg-blue-500/90 w-16 h-16 rounded-full items-center justify-center shadow-lg">
                <AntDesign name="plus" size={32} color="white" />
            </Pressable>
        </View>
    )
}