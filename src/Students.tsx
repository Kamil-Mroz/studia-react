import { useContext } from "react";
import Student from "./Student";
import { Link } from "react-router";
import { StudentContext } from "./studentContext";

export default function Students() {
  const listTitle = "Students list";
  const { studentList, updateList } = useContext(StudentContext);

  const deleteStudent = (index: number) => {
    updateList((prev) => prev.filter((student) => student.Index_nr !== index));
  };
  return (
    <>
      {listTitle}
      {studentList.length > 0 && (
        <ul>
          {studentList.map((el) => {
            return (
              <li key={el.Index_nr}>
                <Link to={{ pathname: `/student/${el.Index_nr}` }}>
                  <Student student={el} />
                </Link>
                <button
                  onClick={() => deleteStudent(el.Index_nr)}
                  style={{
                    marginLeft: "2rem",
                    border: "none",
                    color: "white",
                    backgroundColor: "#C32F27",
                    padding: "4px",
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {studentList.length === 0 && <p>No students stored</p>}
      <Link to={{ pathname: "/student/add" }}>Add student</Link>
    </>
  );
}
