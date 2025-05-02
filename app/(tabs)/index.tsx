import { format } from 'date-fns'
import getCurrentMonthYear from '@/utils/date'
import { BarChart } from 'react-native-chart-kit';
import { useGetSavingsQuery } from '@/api/savings';
import * as Progress from 'react-native-progress';
import { useGetTransactionQuery } from '@/api/transactions';
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingActionButton from '@/components/FloatingActionButton';
import { View, Text, ScrollView, ActivityIndicator, Dimensions } from 'react-native'


export default function Index() {

    const currentDate = getCurrentMonthYear();

    // Destructure rtk Hook
    const { data: transactions = [] } = useGetTransactionQuery();
    console.log(transactions);
    const { data: savings = [], isLoading, isError } = useGetSavingsQuery();

    // Calculate total saved
    const totalSaved = transactions.reduce((sum, t) => sum + t.amount, 0);
    // 🔍 Find the saving entry for this month
    const currentMonth = format(new Date(), 'yyyy-MM');
    const currentSaving = savings.find((saving) =>
        saving.dueDate.startsWith(currentMonth)
    );

    const goalAmount = currentSaving?.goalAmount || 0;
    const percentComplete = goalAmount > 0 ? Math.min((totalSaved / goalAmount) * 100, 100) : 0;


    const chartData = {
        labels: transactions?.map((item) =>
            new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', })) ?? [],
        datasets: [{ data: transactions?.map((item) => item.amount) ?? [], },],
    };


    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundColor: '#e1eaff',
        backgroundGradientFrom: '#e1eaff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(29, 78, 216, ${opacity})`, // Blue-600
        labelColor: () => '#374151',
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#1D4ED8',
        },
        propsForLabels: {
            fontSize: 10,
            dx: 9, // shift label a bit to the right
        },
    };

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
        <SafeAreaView className="flex-1 bg-white px-4">
            <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>


                {/* Greetings */}
                <View className="mt-5">
                    <Text className="text-black text-4xl font-bold">
                        👋 Hello Gilbert
                    </Text>
                    <Text className="text-gray-600 text-2xl font-semibold">
                        {currentDate}
                    </Text>
                </View>


                {/* Hero Section  */}
                <View className="bg-blue-500/90 mt-6 p-6 rounded-xl shadow-sm">
                    <Text className="text-white  text-xl font-bold">
                        Find All Your Installment& Savings Here!
                    </Text>
                    <Text className="text-white mt-2">
                        All At Your Fingertips 💰.
                    </Text>
                </View>


                {/* Monthly Summary Badge */}
                <View className="mt-6 bg-blue-100 px-4 py-3 rounded-xl flex-row justify-between items-center">
                    <Text className="text-gray-800 text-lg font-semibold">Total Saved This Month</Text>
                    <Text className="text-blue-600 text-xl font-bold">Tsh {totalSaved.toLocaleString()}/=</Text>
                </View>


                {/* Progress Ring */}
                <View className="my-6 items-center justify-center">
                    <Progress.Circle
                        size={140}
                        progress={percentComplete / 100}
                        showsText={true}
                        formatText={() => `${Math.floor(percentComplete)}%`}
                        color="#3B82F6"
                        borderWidth={0}
                        unfilledColor="#e5e7eb"
                        thickness={10}
                    />
                    <Text className="text-gray-700 mt-3 font-medium">Goal: Tsh {goalAmount.toLocaleString()}/=</Text>
                </View>


                {/* Savings Progress Chart */}
                <View className="mt-6">
                    <Text className="text-lg font-semibold text-gray-800 mb-2">Your Savings Progress</Text>
                    <BarChart
                        data={chartData}
                        width={screenWidth - 32}
                        height={220}
                        yAxisLabel="Tsh "
                        chartConfig={chartConfig}
                        verticalLabelRotation={15}
                        style={{ borderRadius: 16 }}
                        yAxisSuffix={''}
                    />
                </View>


            </ScrollView>
            <FloatingActionButton />
        </SafeAreaView >
    )
}