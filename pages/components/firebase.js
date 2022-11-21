import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlPbwemlv3Y1WL_O6jHtjywVs7oOLpffg",
  authDomain: "scholax-ab401.firebaseapp.com",
  projectId: "scholax-ab401",
  storageBucket: "scholax-ab401.appspot.com",
  messagingSenderId: "697871805190",
  appId: "1:697871805190:web:10ecbea5d6114053304c87",
  measurementId: "G-1WZQ6GQ8KN"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
