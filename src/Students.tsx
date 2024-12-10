import { useState } from "react";
import Student from "./Student";
import { StudentClass, StudentType } from "./types/Student";
import EditStudent from "./EditStudent";

export default function Students() {
  const listTitle = "Students list";
  const [studentList, updateList] = useState([
    new StudentClass("Ala", "Makota", 123485, new Date("2000-01-21")),
    new StudentClass("Jan", "Kowlaski", 2345, new Date("1999-10-23")),
    new StudentClass("Adrian", "Duda", 156789, new Date("2001-04-01")),
  ]);
  const [showAddForm, changeValue] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );

  const addNewStudent = (student: StudentType, _?:number) => {
    changeValue(false);
  
    let students = [...studentList];

    const newStudent = new StudentClass(
      student.name,
      student.surname,
      student.index_nr,
      student.dataUrodzenia
    );

    students.push(newStudent);
    updateList(students);
  };

  const editStudent = (editedStudent: StudentType, index?:number) => {
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

    setSelectedStudent(null);
  };

  return (
    <>
      {listTitle}
      {studentList.length > 0 && (
        <ul>
          {studentList.map((el) => {
            return (
              <li
                key={el.Index_nr}
                onClick={() => {
                  setSelectedStudent(el.getAsType());
                  changeValue(false);
                }}
              >
                <Student student={el} />
              </li>
            );
          })}
        </ul>
      )}
      {studentList.length === 0 && <p>No students stored</p>}
      {!showAddForm && (
        <button
          onClick={() => {
            changeValue(true);
            setSelectedStudent(null);
          }}
        >
          Add student
        </button>
      )}
      {showAddForm && <EditStudent editFn={addNewStudent} />}

      {selectedStudent && (
        <EditStudent editFn={editStudent} student={selectedStudent} />
      )}
    </>
  );
}
