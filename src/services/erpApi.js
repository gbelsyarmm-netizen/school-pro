import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { db, isFirebaseReady } from './firebase'

function ensureDb() {
  if (!isFirebaseReady || !db) {
    throw new Error('Firebase is not configured. Add .env values first.')
  }
}

export async function createAdmission(formData) {
  ensureDb()
  const ref = await addDoc(collection(db, 'admissions'), {
    ...formData,
    createdAt: serverTimestamp(),
    status: 'Pending',
  })
  return ref.id
}

export async function fetchNotices() {
  ensureDb()
  const snapshot = await getDocs(query(collection(db, 'notices'), orderBy('createdAt', 'desc')))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function fetchTopAchievers(year, className) {
  ensureDb()
  const q = query(
    collection(db, 'results'),
    where('year', '==', year),
    where('className', '==', className),
    orderBy('position', 'asc'),
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}
