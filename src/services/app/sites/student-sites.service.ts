import { collection, deleteDoc, doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { AssignedStudentModel } from "../../../models/students/assigned-student.model";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";

export class StudentSitesService {
    static updateStudentSite = async (student: FirebaseDocModel<StudentModel>, siteId: number) => {
        await setDoc(doc(getFirestore(), "sites", siteId.toString()), {
            studentId: student.id, 
        });
    }

    static onStudentsSitesChange = (onChange: (data: FirebaseDocModel<AssignedStudentModel>[]) => void) => {
        onSnapshot(collection(getFirestore(), 'sites'), (collection) => {
            const d = collection.docs.map((d) => ({ id: d.id, data: ({
                position: parseInt(d.id),
                studentId: (d.data() as {studentId: string}).studentId,
            }) }));
            onChange(d);
        });
    }

    static deleteSiteAssignment = async (siteId: number) => {
        await deleteDoc(doc(getFirestore(), "sites", siteId.toString()));
    }
}