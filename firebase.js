
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAmMSld4edg9ujFeLm173QDGPf5SHwfv0",
  authDomain: "sweetpie-e9d6a.firebaseapp.com",
  projectId: "sweetpie-e9d6a",
  storageBucket: "sweetpie-e9d6a.appspot.com",
  messagingSenderId: "15590763040",
  appId: "1:15590763040:web:2e7a5b13e19757b73aaa45",
  measurementId: "G-PB6R0DTGCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;