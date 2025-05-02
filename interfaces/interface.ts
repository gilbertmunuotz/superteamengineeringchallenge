export interface Saving {
    userId: number;
    goalAmount: number;
    dueDate: string;
    targetDate: string;
    frequency: 'monthly';
}

export interface Transaction {
    id: number;
    userId: number;
    amount: number;
    date: string;
    method: 'Cash' | 'M-Pesa' | 'Airtel Money' | 'Tigo Pesa' | 'Bank';
}
