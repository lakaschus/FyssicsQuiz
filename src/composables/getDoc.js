import { db, mainCollectionName } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export async function getDocById (id) {
  /**
   * @name getDocById Returns document matching the given id
   */
  const docRef = doc(db, mainCollectionName, id)
  let docSnap = null
  let docData = null
  try {
    docSnap = await getDoc(docRef)
    docData = docSnap.data()
  } catch (error) {
    console.log('🚀 ~ file: getDoc.js ~ line 16 ~ getDocById ~ error', error)
  }
  return docData
}
