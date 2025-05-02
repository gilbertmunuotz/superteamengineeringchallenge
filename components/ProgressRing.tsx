import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import getRingColor from '@/utils/getRingColours';
import getProgressText from '@/utils/getProgressText';

interface ProgressRingProps {
    percent: number;
    size?: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percent, size = 140 }) => {
    const ringColor = getRingColor(percent);
    const label = getProgressText(percent);

    return (
        <View className="items-center mt-6">
            <Progress.Circle
                size={size}
                progress={percent / 100}
                showsText
                formatText={() => `${Math.floor(percent)}%`}
                color={ringColor}
                borderWidth={0}
                unfilledColor="#e5e7eb"
                thickness={10}
            />
            <Text className="text-gray-700 mt-2 italic">{label}</Text>
        </View>
    );
};

export default ProgressRing;