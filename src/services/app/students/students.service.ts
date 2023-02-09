import { collection, onSnapshot } from "firebase/firestore";
import { StudentModel } from "../../../models/students/student.model";
import { getFirestore } from "../../firebase/firestore";

export class StudentsService {
    static onStudentsChange = (onChange: (data: StudentModel[]) => void) => {
        onSnapshot(collection(getFirestore(), 'students'), (collection) => onChange(collection.docs.map((d) => d.data() as StudentModel)));
    }
}