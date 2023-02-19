import { isAfter } from "date-fns";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";

export class StudentsService {
    static onStudentsChange = (onChange: (data: FirebaseDocModel<StudentModel>[]) => void, returnDisabled = false) => {
        onSnapshot(collection(getFirestore(), 'students'), (collection) => {
            const d = collection.docs.map((d) => ({ id: d.id, data: d.data() as StudentModel }))
            .filter((student) => returnDisabled || !student.data.disabled_until || !this.isStudentDisabled(student.data))
            .sort((a) => this.isStudentDisabled(a.data) ? 1 : 0);
            onChange(d);
        });
    }

    static isStudentDisabled = (student: StudentModel) => {
        if(!student.disabled_until) return false;
        return isAfter(student.disabled_until.toDate(), new Date(Date.now()));
    }
}