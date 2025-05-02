import { Platform } from "react-native";

export const SERVER_URI = Platform.OS === 'android' ? 'http://10.0.2.2:8000' : 'http://localhost:8000';