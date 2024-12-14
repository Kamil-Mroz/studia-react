import React, { createContext, ReactNode, useState } from "react";
import { StudentClass } from "./types/Student";

type StudentContextType = {
  studentList: StudentClass[];
  updateList: React.Dispatch<React.SetStateAction<StudentClass[]>>;
};

export const StudentContext = createContext<StudentContextType>({
  studentList: [],
  updateList: () => {},
});

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentList, updateList] = useState([
    new StudentClass("Ala", "Makota", 123485, new Date("2000-01-21")),
    new StudentClass("Jan", "Kowlaski", 2345, new Date("1999-10-23")),
    new StudentClass("Adrian", "Duda", 156789, new Date("2001-04-01")),
  ]);

  return (
    <StudentContext.Provider value={{ studentList, updateList }}>
      {children}
    </StudentContext.Provider>
  );
};
