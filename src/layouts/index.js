import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { auth } from '../providers/firebase'

/**
 * Composant de disposition des routes privées.
 * Affiche les enfants uniquement si l'utilisateur est authentifié,
 * sinon redirige vers la page de connexion.
 */
const PrivateRoutesLayout = () => {
  // Récupère l'emplacement actuel de l'utilisateur dans l'application
  const location = useLocation()

  // Vérifie si l'utilisateur est authentifié
  return auth.currentUser ? (
    // Affiche les enfants des routes imbriquées si l'utilisateur est authentifié
    <Outlet />
  ) : (
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    // Le paramètre 'state' permet de conserver l'emplacement actuel pour une redirection après la connexion
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default PrivateRoutesLayout
