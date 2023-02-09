import { getFirestore as firebaseGetFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { env } from "../env/env";

export function getFirestore() {
    const db = firebaseGetFirestore();
    if(env().ENV === 'development') connectFirestoreEmulator(db, 'localhost', 8080);
    return db;
}