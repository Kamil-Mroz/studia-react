import { useContext } from "react";
import EditStudent from "./EditStudent";
import { StudentClass, StudentType } from "./types/Student";
import { StudentContext } from "./studentContext";
import { redirect, useNavigate } from "react-router";

const AddStudent = () => {
  const { studentList, updateList } = useContext(StudentContext);
  const navigate = useNavigate()

  const addNewStudent = (student: StudentType, _?: number) => {
    let students = [...studentList];

    const newStudent = new StudentClass(
      student.name,
      student.surname,
      student.index_nr,
      student.dataUrodzenia
    );

    students.push(newStudent);
    updateList(students);


    navigate("/")
  };

  return (
    <>
      <h1>Add new Student</h1>
      <EditStudent editFn={addNewStudent} />
    </>
  );
};
export default AddStudent;
