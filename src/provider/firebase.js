// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA1yu1Q0YaCJrnxUQKqAY2E5Ec4B_z-U6Q',

  authDomain: 'seance-react.firebaseapp.com',

  projectId: 'seance-react',

  storageBucket: 'seance-react.appspot.com',

  messagingSenderId: '341764290051',

  appId: '1:341764290051:web:3edda27eff59245d680036',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
