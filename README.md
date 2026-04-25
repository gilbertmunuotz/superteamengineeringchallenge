# Welcome to Tunza App 👋

# 💰 Tunzaa - Installment Savings App (React Native Challenge)

Tunzaa is a mobile savings tracker that allows users to manage their installment savings, track progress toward goals, and view insightful feedback on their financial journey. This app is built with **React Native (Expo)** and uses **Redux Toolkit** to simulate API calls with dummy data.

---

## 📱 Features

- 📊 **Track Installment Savings**  
  View your current savings and contributions in a clean, responsive dashboard.

- ➕ **Add Savings**  
  Use a floating action button (FAB) to add new savings through an intuitive form with support for amount, date, and payment method.

- 📈 **Progress Toward Goal**  
  Visualize your financial progress with an animated bar chart.

---

PS: This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 🧠 Assumptions

- A single user is interacting with the app.
- The app uses mock transaction data from local state via RTK Query simulation.
- The savings goal is set statically and progress is calculated based on total contributions.
- Insights are generated heuristically based on saved amount and date gaps.

---

## Getting started 🚀

## Step 1: Clone This Repository To Your Local Machine

You could either choose HTTPS, SSH or Github CLI.

## Step 2: Install dependencies

```bash
npm install
```

## Step 3: Start Metro

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

```bash
npm expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

🟣 for Android Devices

Start app by running

```bash
npm run android
```

or using Yarn

```bash
yarn android
```

🟡 for IOS Devices

Start app by running

```bash
npm run ios
```

or using Yarn

```bash
yarn ios
```

## Step 4: Make sure JSON Server is up and Running

If not start by running

```bash
npm run serve
```

or using Yarn

```bash
yarn run serve
```

# 🎨 Design & Architecture

- UI/UX: Built with nativewind for Tailwind-like utility styling. Layouts are responsive and follow mobile-first principles. <br>
- Data Management: Uses Redux Toolkit Query to simulate API fetching, including loading and error states.<br>
- Charts & Animations: Uses react-native-chart-kit and react-native-svg to render smooth animated graphs.<br>
- Modularity: Components are broken down by responsibility (FAB, Home, Form, Chart, etc.) for scalability and readability.<br><br>

# 🧑‍💻 Developed By

Gilbert Munuo <br>
📱 +255 745 123 607 <br>
🌐 https://gilbertmunuotz.com