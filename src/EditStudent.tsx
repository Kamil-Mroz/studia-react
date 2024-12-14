import { FormEvent, useEffect, useState } from "react";
import { StudentType } from "./types/Student";

type EditStudentProps = {
  editFn: (student: StudentType, index?: number) => void;
  student?: StudentType;
};

const EditStudent = ({ editFn, student }: EditStudentProps) => {
  const [editableStudent, setEditableStudent] = useState<
    StudentType | undefined
  >(undefined);

  useEffect(() => {
    setEditableStudent(student);
  }, [student]);



  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let updatedStudent: StudentType;
    const formData = new FormData(event.currentTarget);

    updatedStudent = {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      index_nr: +(formData.get("index_nr") as string),
      dataUrodzenia: new Date(formData.get("dataUrodzenia") as string),
      adres: editableStudent?.adres ?? "",
      grupa: editableStudent?.grupa ?? "",
      stypendium: editableStudent?.stypendium ?? 0,
      marks: editableStudent?.marks ?? [],
    };

    editFn(updatedStudent, editableStudent?.index_nr);
  };

  return (
    <form onSubmit={formSubmit}>
      Name:{" "}
      <input type="text" name="name" defaultValue={editableStudent?.name} />
      Surname:{" "}
      <input
        type="text"
        name="surname"
        defaultValue={editableStudent?.surname}
      />
      Index:{" "}
      <input
        type="number"
        name="index_nr"
        defaultValue={editableStudent?.index_nr}
      />
      Date of birth:{" "}
      <input
        type="date"
        name="dataUrodzenia"
        defaultValue={
          editableStudent?.dataUrodzenia.toISOString().split("T")[0]
        }
      />
      <button type="submit">Save</button>
    </form>
  );
};
export default EditStudent;
