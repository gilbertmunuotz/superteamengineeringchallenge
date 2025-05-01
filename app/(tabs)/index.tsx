import getCurrentMonthYear from '@/utils/Date'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {

    const currentDate = getCurrentMonthYear();

    return (
        <SafeAreaView className="flex-1 bg-white px-4">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Greetings */}
                <View className="mt-5">
                    <Text className="text-black text-4xl font-bold">
                        👋 Hello Welcome
                    </Text>
                    <Text className="text-gray-600 text-2xl font-semibold">
                        {currentDate}
                    </Text>
                </View>
                {/* Placeholder for savings goal, progress bar, and Add (+) button */}
            </ScrollView>
        </SafeAreaView>
    )
}