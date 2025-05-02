export default function getProgressText(percent: number): string {
    if (percent < 30) return 'Let’s step it up! 🚀';
    if (percent < 70) return 'You’re halfway there! 🔄';
    if (percent < 100) return 'Almost there! Keep going 💪';
    return 'Congratulations 👏'
}
