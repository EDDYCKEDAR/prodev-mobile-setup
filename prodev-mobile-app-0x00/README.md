# First Mobile App

## Objective
Set up the first mobile application using Expo Router template.

## Steps Followed
1. Navigated to project directory:
   ```bash
   cd prodev-mobile-setup
   npx create-expo-app@latest .
Opened app/(tabs)/index.tsx.

Changed text from Welcome! → First App Created.

Ran the app:

npx expo start


Scanned QR code in Expo Go app → app opened on physical device.

Reset Project

Ran:

npm run reset-project


Observation: Reset command cleared caches and restored project files to a clean initial state.


---

### ✅ `app/(tabs)/index.tsx`
```tsx
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>First App Created</Text>
    </View>
  );
}
