import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, Platform } from 'react-native'
import ProgressRing from '@/components/ProgressRing';
import getCurrentMonthYear from '@/utils/date';
import { useGetSavingsQuery } from '@/api/savings';
import { format } from 'date-fns';
import { useGetTransactionQuery } from '@/api/transactions';

export default function Insights() {
    const currentDate = getCurrentMonthYear();

    // Destructure rtk Hook
    const { data: savings = [], isLoading, isError } = useGetSavingsQuery();
    const { data: transactions = [] } = useGetTransactionQuery();


    // Calculate total saved
    const totalSaved = transactions.reduce((sum, t) => sum + t.amount, 0);

    // 🔍 Find the saving entry for this month
    const currentMonth = format(new Date(), 'yyyy-MM');
    const currentSaving = savings.find((saving) =>
        saving.dueDate.startsWith(currentMonth)
    );

    const goalAmount = currentSaving?.goalAmount || 0;
    const percentComplete = goalAmount > 0 ? Math.min((totalSaved / goalAmount) * 100, 100) : 0;

    // 🔍 Find most used payment method
    const methodFrequency: Record<string, number> = {};
    transactions.forEach(tx => {
        methodFrequency[tx.method] = (methodFrequency[tx.method] || 0) + 1;
    });
    const mostUsedMethod = Object.entries(methodFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    // 🔍 Find top saving date
    const dateTotals: Record<string, number> = {};
    transactions.forEach(tx => {
        const dateKey = format(new Date(tx.date), 'yyyy-MM-dd');
        dateTotals[dateKey] = (dateTotals[dateKey] || 0) + tx.amount;
    });
    const topDate = Object.entries(dateTotals).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';


    // Handle Loading State
    if (isLoading) {
        return (
            <SafeAreaView className="flex-1 flex justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#007bff" />
                <Text className="text-gray-600 mt-4"> Fetching Data...</Text>
            </SafeAreaView >
        );
    }

    // Handle Error State
    if (isError) {
        return (
            <SafeAreaView className="flex-1 flex justify-center items-center bg-white">
                < Text className="text-red-500 text-lg" > Failed to load Data. Please try again later.</ Text>
            </SafeAreaView >
        );
    }


    return (

        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false} className={`flex-1 px-4 ${Platform.OS === 'android' ? 'my-12' : 'my-1'}`}>

                {/* Insights & Analytics */}
                <View className="mt-5">
                    <Text className="text-black text-2xl font-bold">
                        Insights & Analytics 📈📊
                    </Text>
                    <Text className="text-gray-900 text-2xl font-semibold">
                        {currentDate}
                    </Text>
                </View>


                {/* Summary Cards */}
                <View className="flex-row justify-between mt-6">
                    <View className="flex-1 bg-blue-100 p-4 rounded-xl">
                        <Text className="text-blue-800 font-semibold">Goal</Text>
                        <Text className="text-2xl font-bold">Tshs {goalAmount.toLocaleString()}/=</Text>
                    </View>
                    <View className="flex-1 bg-green-100 p-4 rounded-xl">
                        <Text className="text-green-800 font-semibold">Saved</Text>
                        <Text className="text-2xl font-bold">Tsh {totalSaved.toLocaleString()}/=</Text>
                    </View>
                </View>

                {/* Progress Ring */}
                <View className="flex-1 bg-white">
                    <ProgressRing percent={percentComplete} />
                    <Text className="text-gray-700 mt-4 font-semibold">Key:</Text>
                    <View className="mt-2">
                        <Text className="text-black mt-1 flex-row items-center">
                            <View className="w-3 h-3 bg-red-600 rounded-full mr-2" /> Under Average
                        </Text>
                        <Text className="text-black mt-1 flex-row items-center">
                            <View className="w-3 h-3 bg-amber-600 rounded-full mr-2" /> Fair
                        </Text>
                        <Text className="text-black mt-1 flex-row items-center">
                            <View className="w-3 h-3 bg-green-600 rounded-full mr-2" /> Excellent
                        </Text>
                    </View>
                </View>


                {/* Breakdown */}
                <View className="mt-6">
                    <Text className="text-lg font-semibold text-gray-800 mb-2">Breakdown</Text>
                    <View className="bg-gray-100 py-4 rounded-lg mb-2">
                        <Text className="text-gray-700">
                            Most Used Method: <Text className="font-semibold">{mostUsedMethod}</Text>
                        </Text>
                        <Text className="text-gray-700 mt-1">
                            Top Saving Day: <Text className="font-semibold">{topDate}</Text>
                        </Text>
                    </View>
                </View>


                {/* Footer Tip */}
                <View className="mt-10 mb-6">
                    <Text className="text-center text-sm text-gray-500 italic">
                        Tip: Automate your savings to stay on track 📅
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}