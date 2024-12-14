import { useNavigate, useParams } from "react-router";
import { StudentType } from "./types/Student";
import EditStudent from "./EditStudent";
import { StudentContext } from "./studentContext";
import { useContext } from "react";

const EditStudentComponent = () => {
  const { index_nr } = useParams();
  const { studentList, updateList } = useContext(StudentContext);
  const navigate = useNavigate();

  const editStudent = (editedStudent: StudentType, index?: number) => {
    updateList((prev) =>
      prev.map((student) => {
        if (student.Index_nr === index) {
          student.Index_nr = editedStudent.index_nr;
          student.Name = editedStudent.name;
          student.Surname = editedStudent.surname;
          student.dataUrodzenia = editedStudent.dataUrodzenia;

          return student;
        } else return student;
      })
    );

    navigate("/");
  };

  const student = studentList
    .find((student) => student.Index_nr === parseInt(index_nr || "", 10))
    ?.getAsType();

  if (!student) {
    return <p>Student not found.</p>;
  }

  return (
    <>
      <h1>Edit student ({index_nr})</h1>
      <EditStudent editFn={editStudent} student={student} />
    </>
  );
};
export default EditStudentComponent;
