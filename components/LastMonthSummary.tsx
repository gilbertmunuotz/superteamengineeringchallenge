import { View, Text } from 'react-native';
import { format, subMonths } from 'date-fns';

interface Saving {
    userId: number;
    goalAmount: number;
    dueDate: string;
    targetDate: string;
    frequency: string;
}

interface Transaction {
    date: string;
    amount: number;
    userId: string;
}

interface Props {
    savings: Saving[];
    transactions: Transaction[];
}

export default function LastMonthSummary({ savings, transactions }: Props) {
    const lastMonthDate = subMonths(new Date(), 1);
    const lastMonthKey = format(lastMonthDate, 'yyyy-MM');
    const monthName = format(lastMonthDate, 'MMMM');

    const lastMonthSaving = savings.find((s) =>
        s.dueDate.startsWith(lastMonthKey)
    );

    if (!lastMonthSaving) return null;

    const lastMonthTransactions = transactions.filter((t) =>
        t.date.startsWith(lastMonthKey)
    );

    const totalSavedLastMonth = lastMonthTransactions.reduce(
        (sum, t) => sum + t.amount,
        300000
    );

    const goalAmountLastMonth = lastMonthSaving.goalAmount;
    const goalMet = totalSavedLastMonth >= goalAmountLastMonth;

    return (
        <View className="bg-indigo-50 rounded-xl p-4 mt-4">
            <Text className="text-lg font-bold text-indigo-800 mb-2">
                {monthName} Savings Summary
            </Text>

            <View className="flex-row justify-between">
                <Text className="text-gray-700">Saved:</Text>
                <Text className="font-semibold text-gray-900">
                    Tsh {totalSavedLastMonth.toLocaleString()}/=
                </Text>
            </View>

            <View className="flex-row justify-between mt-1">
                <Text className="text-gray-700">Goal:</Text>
                <Text className="font-semibold text-gray-900">
                    Tsh {goalAmountLastMonth.toLocaleString()}/=
                </Text>
            </View>

            <View className="mt-2 bg-white py-1 px-2 rounded-full self-start">
                <Text className={`text-sm font-semibold ${goalMet ? 'text-green-600' : 'text-red-500'}`}>
                    {goalMet ? 'Goal Met 🎉' : 'Goal Missed ⚠️'}
                </Text>
            </View>
        </View>
    );
}