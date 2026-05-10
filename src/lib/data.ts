export interface Unit {
  id: string;
  number: number;
  title: string;
  notesUrl: string;
  cheatsheetUrl: string;
}

export interface Subject {
  id: string;
  name: string;
  credits: number;
  weightage: number;
  units: Unit[];
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
}

export interface Semester {
  number: number;
  hasData: boolean;
  subjects: Subject[];
}

export const branches: Branch[] = [
  { id: "cs", name: "Computer Science", shortName: "CS" },
  { id: "ec", name: "Electronics & Communication", shortName: "EC" },
  { id: "me", name: "Mechanical Engineering", shortName: "ME" },
  { id: "ee", name: "Electrical Engineering", shortName: "EE" },
  { id: "ce", name: "Civil Engineering", shortName: "CE" },
];

export const semesters: Semester[] = [
  {
    number: 1,
    hasData: false,
    subjects: [],
  },
  {
    number: 2,
    hasData: false,
    subjects: [],
  },
  {
    number: 3,
    hasData: false,
    subjects: [],
  },
  {
    number: 4,
    hasData: true,
    subjects: [
      {
        id: "ds",
        name: "Data Structures",
        credits: 4,
        weightage: 70,
        units: [
          { id: "ds-u1", number: 1, title: "Arrays and Linked Lists", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "ds-u2", number: 2, title: "Stacks and Queues", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "ds-u3", number: 3, title: "Trees and Binary Search Trees", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "ds-u4", number: 4, title: "Graphs and Traversal Algorithms", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "ds-u5", number: 5, title: "Sorting and Searching Algorithms", notesUrl: "#", cheatsheetUrl: "#" },
        ],
      },
      {
        id: "dbms",
        name: "Database Management System",
        credits: 4,
        weightage: 75,
        units: [
          { id: "dbms-u1", number: 1, title: "Introduction to DBMS", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "dbms-u2", number: 2, title: "ER Model and Normalization", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "dbms-u3", number: 3, title: "SQL and Queries", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "dbms-u4", number: 4, title: "Transaction Management", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "dbms-u5", number: 5, title: "Concurrency Control", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "dbms-u6", number: 6, title: "Indexing and Hashing", notesUrl: "#", cheatsheetUrl: "#" },
        ],
      },
      {
        id: "os",
        name: "Operating Systems",
        credits: 3,
        weightage: 80,
        units: [
          { id: "os-u1", number: 1, title: "Introduction to OS", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "os-u2", number: 2, title: "Process Management", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "os-u3", number: 3, title: "Memory Management", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "os-u4", number: 4, title: "File Systems", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "os-u5", number: 5, title: "Deadlock and Synchronization", notesUrl: "#", cheatsheetUrl: "#" },
        ],
      },
      {
        id: "coa",
        name: "Computer Organization & Architecture",
        credits: 3,
        weightage: 65,
        units: [
          { id: "coa-u1", number: 1, title: "Number Systems and Codes", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "coa-u2", number: 2, title: "Boolean Algebra and Logic Gates", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "coa-u3", number: 3, title: "Combinational Circuits", notesUrl: "#", cheatsheetUrl: "#" },
          { id: "coa-u4", number: 4, title: "Sequential Circuits", notesUrl: "#", cheatsheetUrl: "#" },
        ],
      },
    ],
  },
  {
    number: 5,
    hasData: false,
    subjects: [],
  },
  {
    number: 6,
    hasData: false,
    subjects: [],
  },
  {
    number: 7,
    hasData: false,
    subjects: [],
  },
  {
    number: 8,
    hasData: false,
    subjects: [],
  },
];

export function getSemesterData(semesterNumber: number) {
  return semesters.find((s) => s.number === semesterNumber);
}

export function getSubject(semesterNumber: number, subjectId: string) {
  const sem = getSemesterData(semesterNumber);
  return sem?.subjects.find((s) => s.id === subjectId);
}