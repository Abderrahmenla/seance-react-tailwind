// Importez les fonctions dont vous avez besoin depuis les SDKs Firebase
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// TODO: Ajouter les SDKs pour les produits Firebase que vous souhaitez utiliser
// Consultez https://firebase.google.com/docs/web/setup#available-libraries pour plus d'informations

// Configuration de votre application web Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialisation de Firebase avec la configuration spécifiée
const app = initializeApp(firebaseConfig)

// Création d'un fournisseur d'authentification Google
const provider = new GoogleAuthProvider()

// Exportation de l'instance d'authentification Firebase
export const auth = getAuth(app)

// Fonction pour se connecter avec Google en utilisant une fenêtre popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// Fonction pour se connecter avec un email et un mot de passe
export const login = async (email, password) => {
  try {
    // Tentative de connexion avec email et mot de passe
    const res = await auth.signInWithEmailAndPassword(email, password)

    // Vérification si la connexion a échoué
    if (!res) {
      throw new Error('Email ou mot de passe incorrect, réessayez !')
    }
    return res
  } catch (err) {
    // Affichage de l'erreur dans la console
    console.log(err.message)
  }
}

// Fonction pour se déconnecter de Firebase
export const logout = async () => {
  try {
    // Tentative de déconnexion
    const res = await auth.signOut()
    return res
  } catch (err) {
    // Affichage de l'erreur dans la console
    console.error(err.message)
  }
}

// Fonction pour s'inscrire avec un email et un mot de passe
export const signUp = async (email, password) => {
  try {
    // Inscription avec email et mot de passe
    const res = await auth.createUserWithEmailAndPassword(email, password)

    // Vérification si l'inscription a échoué
    if (!res) {
      throw new Error('Une erreur est survenue, réessayez !')
    }

    // Affichage des informations de l'utilisateur inscrit
    console.log(res.user)
    return res
  } catch (err) {
    // Affichage de l'erreur dans la console
    console.error(err.message)
  }
}

// Exportation de l'application Firebase initialisée
export default app
