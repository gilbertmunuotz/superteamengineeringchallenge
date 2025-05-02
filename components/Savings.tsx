import { View, Text, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import DropDownPicker from 'react-native-dropdown-picker';
import { usePostTransactionsMutation } from '@/api/transactions';
import { Transaction } from "@/interfaces/interface";

interface SavingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SavingsModal({ visible, onClose }: SavingsModalProps) {

  // Destructure rtk hook
  const [newTransaction, { isLoading }] = usePostTransactionsMutation();

  const [userId, setuserId] = useState('1');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [date, setDate] = useState('');

  // State for DropDownPicker open/close
  const [open, setOpen] = useState(false);

  // Categories for the dropdown
  const categories = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Bank', value: 'Bank' },
    { label: 'M-Pesa', value: 'M-Pesa' },
    { label: 'Airtel Money', value: 'Airtel Money' },
    { label: 'Tigo Pesa', value: 'Tigo Pesa' },
  ];

  // Handle form submission
  async function handleSave() {

    const formData: Transaction = {
      userId,
      amount: Number(amount),
      date,
      method: method as Transaction['method'], // 👈 Type Casting done here
    };

    // Prevent API request if fields are empty
    if (!amount || !date || !method) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required!',
        text1Style: { fontSize: 15 },
        position: 'top'
      });

      return; // Stops function execution here!
    }

    try {
      const data = await newTransaction(formData).unwrap();

      Toast.show({
        type: 'success',
        text1: 'Transaction Added Successfully',
        text1Style: { fontSize: 15 },
        position: 'top',
      })
      setAmount('');
      setDate('');
      setMethod('');
      // close modal
      onClose();
    } catch (error) {
      console.error("An error occured", error);

      // Show error toast with extracted message
      Toast.show({
        type: "error",
        text1: "Error Occured!",
        text1Style: { fontSize: 15 },
        position: "top",
      })
      // close modal
      onClose();
    }
  }


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black/30 h-1/2">
        <View className="bg-white p-6 rounded-t-3xl">
          <Text className="text-xl font-bold mb-4">Add Savings</Text>

          {/* Form Fields */}
          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-1">Amount (Tsh)</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-2 text-black"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="Enter amount"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-1">Method</Text>
            <DropDownPicker
              open={open}
              value={method}
              items={categories}
              setOpen={setOpen}
              setValue={setMethod}
              placeholder="Select Method"
              style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 8 }}
              dropDownContainerStyle={{ borderColor: '#ccc', borderWidth: 1 }}
              textStyle={{ fontSize: 16 }}
              placeholderStyle={{ color: '#999' }}
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-1">Date</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-2 text-black"
              value={date}
              onChangeText={setDate}
              keyboardType="numeric"
              placeholder="YYYY-MM-DD"
            />
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between mt-4">
            <Pressable onPress={handleSave} className="bg-green-500 rounded-full p-3 flex-1 mr-2 items-center">
              {isLoading ? <ActivityIndicator color="white" /> : <Text className="text-white font-semibold">Save</Text>}
            </Pressable>
            <Pressable onPress={onClose} className="bg-blue-500 rounded-full p-3 flex-1 ml-2 items-center">
              <Text className="text-white font-semibold">Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}