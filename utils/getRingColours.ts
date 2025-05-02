export default function getRingColor(percent: number): string {
  if (percent < 30) {
    return '#ef4444'; // red-500
  } else if (percent < 70) {
    return '#f59e0b'; // amber-500
  } else {
    return '#10b981'; // green-500
  }
}