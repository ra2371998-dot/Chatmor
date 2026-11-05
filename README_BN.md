# Chatmor Voice Room Starter

এটি একটি **প্রাথমিক MVP starter project**, সম্পূর্ণ production-ready voice room app নয়। এতে Expo/React Native Android UI, Firestore-ভিত্তিক remote design settings এবং responsive Admin Panel-এর ভিত্তি আছে। Admin Panel থেকে App Name, রং, banner text, room background, seat style ও profile frame বদলানো যাবে; অ্যাপ Firestore listener দিয়ে নতুন সেটিংস পাবে।

## ফোন দিয়ে শুরু
1. ZIP Extract করুন।
2. `mobile` ফোল্ডারের ফাইল GitHub repository-তে আপলোড করুন।
3. https://expo.dev এ account খুলুন এবং EAS Build ব্যবহার করুন।
4. APK build-এর জন্য `eas.json`-এ `preview` profile দেওয়া আছে। Expo cloud build চালু করতে GitHub/Expo workflow বা cloud terminal লাগবে।

## Firebase সংযোগ
1. https://console.firebase.google.com এ project তৈরি করে Firestore চালু করুন।
2. Firebase project settings থেকে Web App config কপি করুন।
3. `mobile/firebaseConfig.js` ও `admin/admin.js`-এ একই config বসান।
4. Firestore document তৈরি করুন: collection `appConfig`, document `design`।
5. নমুনা fields: `appName`, `primaryColor`, `accentColor`, `bannerText`, `roomBackground`, `seatStyle`, `profileFrame`।

## Admin Panel
`admin/index.html` ও `admin/admin.js` একসঙ্গে কোনো static hosting-এ দিন, যেমন Firebase Hosting। ফোনের Chrome থেকেও panel খোলা যাবে। **এখনো admin login/role protection নেই—public internet-এ নিরাপদভাবে প্রকাশ করবেন না।** Firestore rules-এ authenticated admin ছাড়া write বন্ধ করতে হবে।

## APK build (cloud)
Expo EAS Build দিয়ে Android `preview` build করলে APK পাওয়া যাবে। `app.json`-এর package name এবং `extra.eas.projectId` নিজের project অনুযায়ী বদলাতে হবে। CLI ব্যবহার করতে পারলে:
```bash
npm install
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

## Production-এর আগে আবশ্যক
- লাইভ অডিওর জন্য Agora/অন্য voice SDK এবং secure backend token server
- seat occupancy, mute/unmute, lock/kick, host/moderator permissions
- coin/gift/wallet transactions-এর trusted backend; client থেকে balance পরিবর্তন নয়
- Firebase Authentication, admin role, Firestore security rules
- report/block/moderation, privacy policy, terms, push notifications, payment integration ও Play Store testing

এই starter-এ room seat ও profile কেবল UI preview; বাস্তব voice call বা payment এখনো চালু নয়।
