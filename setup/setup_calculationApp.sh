npx create-expo-app CalculationApp


# - cd CalculationApp
# - npm run android
# - npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
# - npm run web

cd CalculationApp
npx expo start


# web support
npx expo install react-native-web react-dom @expo/metro-runtime


npm install -g eas-cli

# login expo account
eas build:configure
# wsuan15@gmail.com
# Aa7878@98989

# √ Which platforms would you like to configure for EAS Build? » All

# √ Generated eas.json. Learn more: https://docs.expo.dev/build-reference/eas-json/

# 🎉 Your project is ready to build.

# - Run eas build when you are ready to create your first build.
# - Once the build is completed, run eas submit to upload the app to app stores.
# - Learn more about other capabilities of EAS Build: https://docs.expo.dev/build/introduction



eas build -p android
# https://docs.expo.dev/build-reference/apk/   eas.json need change something for apk file
# https://www.youtube.com/watch?v=V52RteeXLrI&t=124s&ab_channel=AlgoPrepMaster tutorial


# this is build apk install to phone
eas build -p android --profile preview

# npm install -g expo-cli

# expo --version

# # For Android:
# expo build:android -t apk
# # For an AAB (Android App Bundle, recommended for Google Play Store):
# expo build:android -t app-bundle




# ✅ Your project is ready!

# To run your project, navigate to the directory and run one of the following npm commands.

# - cd CalculationApp
# - npm run android
# - npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
# - npm run web
