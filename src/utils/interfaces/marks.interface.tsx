export interface IStudentResult {
  studentid: number;
  firstname: string;
  lastname: string;
  classname: string;
  academicYears: {
    [year: string]: ISubjectResult[];
  };
}

export interface ISubjectResult {
  subjectname: string;
  marksobtained: number;
  fullmarks: number;
  passmarks: number;
  result: "PASS" | "FAIL";
}

export interface IPostMarks {
  student_id: number;
  subjectName: string;
  classId: number;
  academicYear: string;
  marksObtained: number;
}
