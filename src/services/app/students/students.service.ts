import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";

export class StudentsService {
    static onStudentsChange = (onChange: (data: FirebaseDocModel<StudentModel>[]) => void) => {
        onSnapshot(collection(getFirestore(), 'students'), (collection) => {
            const d = collection.docs.map((d) => ({ id: d.id, data: d.data() as StudentModel })).sort((a) => a.data.disabled_until ? 1 : 0);
            onChange(d);
        });
    }
}