// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCnLHgr0iKdXPfSOoBJJb4WeuLjnTkMWGs',

  authDomain: 'fir-react-tailwind-2bfd6.firebaseapp.com',

  projectId: 'fir-react-tailwind-2bfd6',

  storageBucket: 'fir-react-tailwind-2bfd6.appspot.com',

  messagingSenderId: '809739797656',

  appId: '1:809739797656:web:2e387a247a3db393573ced',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

export const auth = getAuth(app)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export default app
