import { Timestamp } from "firebase/firestore";

export interface StudentModel {
    name: string;
    disabled_until?: Timestamp | null;
}