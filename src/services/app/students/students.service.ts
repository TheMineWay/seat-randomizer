import { doc, onSnapshot } from "firebase/firestore";
import { StudentsModel } from "../../../models/students/students.model";
import { getFirestore } from "../../firebase/firestore";

export class StudentsService {
    static onStudentsChange = (onChange: (data: StudentsModel) => void) => {
        onSnapshot(doc(getFirestore(), 'class', 'students'), (doc) => onChange(doc.data() as StudentsModel));
    }
}