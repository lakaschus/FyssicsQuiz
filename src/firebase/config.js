import { firebaseConfig } from './firebaseEnv'
// Define firebaseConfig here or import it from another file

/* const firebaseConfig = {
/ ...
/ };
*/

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

initializeApp(firebaseConfig);

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }