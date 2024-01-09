import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsCPwr9NIHe6R-LXTIHna0pnRIAasgbNw",
  authDomain: "chatapp-d97b4.firebaseapp.com",
  projectId: "chatapp-d97b4",
  storageBucket: "chatapp-d97b4.appspot.com",
  messagingSenderId: "954569176777",
  appId: "1:954569176777:web:66301d7cc0cbbae00abf18"
};

export const app = initializeApp(firebaseConfig);