export interface UserSavings {
    userId: number;
    goalAmount: number;
    targetDate: string;
    frequency: 'daily' | 'weekly' | 'monthly';
}

export interface Transaction {
    id: number;
    userId: number;
    amount: number;
    date: string;
    method: 'Cash' | 'M-Pesa' | 'Airtel Money' | 'Tigo Pesa' | 'Bank';
}
