import { useGetTransactionQuery } from '@/api/transactions';
import getCurrentMonthYear from '@/utils/Date'
import { View, Text, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarChart } from 'react-native-chart-kit';
import FloatingActionButton from '@/components/FloatingActionButton';


export default function Index() {

    const currentDate = getCurrentMonthYear();

    // Destructure rtk Hook
    const { data, isLoading, isError } = useGetTransactionQuery();
    const chartData = {
        labels: data?.map((item) =>
            new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', })) ?? [],
        datasets: [{ data: data?.map((item) => item.amount) ?? [], },],
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
                <Text className="text-gray-600 mt-4"> Fetching Transactions...</Text>
            </SafeAreaView >
        );
    }

    // Handle Error State
    if (isError) {
        return (
            <SafeAreaView className="flex-1 flex justify-center items-center bg-white">
                < Text className="text-red-500 text-lg" > Failed to load jobs.Please try again later.</ Text>
            </SafeAreaView >
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white px-4">
            <ScrollView showsVerticalScrollIndicator={false}>


                {/* Greetings */}
                <View className="mt-5">
                    <Text className="text-black text-4xl font-bold">
                        👋 Hello Gilbert
                    </Text>
                    <Text className="text-gray-600 text-2xl font-semibold">
                        {currentDate}
                    </Text>
                </View>
                {/* Placeholder for savings goal, progress bar, and Add (+) button */}

                {/* Hero Section  */}
                <View className="bg-blue-500 mt-6 p-6 rounded-xl shadow-sm">
                    <Text className="text-white  text-xl font-bold">
                        Find All Your Installment& Savings Here!
                    </Text>
                    <Text className="text-white mt-2">
                        All At Your Fingertips 💰.
                    </Text>
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
            <FloatingActionButton onPress />
        </SafeAreaView >
    )
}