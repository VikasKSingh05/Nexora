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
  code: string;
  credits: number;
  units: Unit[];
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
}

export interface Semester {
  number: number;
  branches: {
    [branchId: string]: Subject[];
  };
}

export const branches: Branch[] = [
  { id: "aiml", name: "Artificial Intelligence & Machine Learning", shortName: "AIML" },
  { id: "cs", name: "Computer Science", shortName: "CS" },
  { id: "ec", name: "Electronics & Communication", shortName: "EC" },
  { id: "me", name: "Mechanical Engineering", shortName: "ME" },
  { id: "ee", name: "Electrical Engineering", shortName: "EE" },
  { id: "ce", name: "Civil Engineering", shortName: "CE" },
];

export const semesters: Semester[] = [
  {
    number: 1,
    branches: {
      aiml: [
        { id: "ap-chem", name: "Applied Chemistry", code: "BS-103/104", credits: 3, units: [] },
        { id: "ap-math", name: "Applied Mathematics I", code: "BS-111", credits: 4, units: [] },
        { id: "ap-phys", name: "Applied Physics I", code: "BS-105", credits: 3, units: [] },
        { id: "comm-skills", name: "Communication Skills", code: "HS-113/114", credits: 3, units: [] },
        { id: "electrical", name: "Electrical Science", code: "ES-107/108", credits: 3, units: [] },
        { id: "eng-mech", name: "Engineering Mechanics", code: "ES-114", credits: 3, units: [] },
        { id: "env-science", name: "Environmental Science", code: "BS-109/110", credits: 3, units: [] },
        { id: "mfg-proc", name: "Manufacturing Processes", code: "ES-119", credits: 4, units: [] },
        { id: "prog-c", name: "Programming in C", code: "ES-101/102", credits: 3, units: [] },
      ],
      cs: [
        { id: "ap-chem-cs", name: "Applied Chemistry", code: "BS-103/104", credits: 3, units: [] },
        { id: "ap-math-cs", name: "Applied Mathematics I", code: "BS-111", credits: 4, units: [] },
        { id: "ap-phys-cs", name: "Applied Physics I", code: "BS-105", credits: 3, units: [] },
        { id: "comm-skills-cs", name: "Communication Skills", code: "HS-113/114", credits: 3, units: [] },
        { id: "electrical-cs", name: "Electrical Science", code: "ES-107/108", credits: 3, units: [] },
        { id: "eng-mech-cs", name: "Engineering Mechanics", code: "ES-114", credits: 3, units: [] },
        { id: "env-science-cs", name: "Environmental Science", code: "BS-109/110", credits: 3, units: [] },
        { id: "mfg-proc-cs", name: "Manufacturing Processes", code: "ES-119", credits: 4, units: [] },
        { id: "prog-c-cs", name: "Programming in C", code: "ES-101/102", credits: 3, units: [] },
      ],
    },
  },
  {
    number: 2,
    branches: {
      aiml: [
        { id: "ap-math2", name: "Applied Mathematics II", code: "BS-201", credits: 4, units: [] },
        { id: "ap-phys2", name: "Applied Physics II", code: "BS-205", credits: 3, units: [] },
        { id: "data-structures", name: "Data Structures", code: "ES-202", credits: 4, units: [] },
        { id: "digital-electronics", name: "Digital Electronics", code: "ES-203", credits: 3, units: [] },
        { id: "engg-graphics", name: "Engineering Graphics", code: "ES-204", credits: 3, units: [] },
        { id: "soft-skills", name: "Soft Skills", code: "HS-206", credits: 2, units: [] },
      ],
    },
  },
  {
    number: 3,
    branches: {},
  },
  {
    number: 4,
    branches: {
      cs: [
        { id: "ds", name: "Data Structures", code: "PC-301", credits: 4, units: [] },
        { id: "dbms", name: "Database Management System", code: "PC-302", credits: 4, units: [] },
        { id: "os", name: "Operating Systems", code: "PC-303", credits: 3, units: [] },
        { id: "coa", name: "Computer Organization & Architecture", code: "PC-304", credits: 3, units: [] },
      ],
    },
  },
  {
    number: 5,
    branches: {},
  },
  {
    number: 6,
    branches: {},
  },
  {
    number: 7,
    branches: {},
  },
  {
    number: 8,
    branches: {},
  },
];

export function getSubjects(branch: string, semester: number): Subject[] {
  const sem = semesters.find((s) => s.number === semester);
  if (!sem) return [];
  return sem.branches[branch] || [];
}

export function getBranch(branchId: string): Branch | undefined {
  return branches.find((b) => b.id === branchId);
}

export function getSubject(branch: string, semester: number, subjectId: string): Subject | undefined {
  const subjects = getSubjects(branch, semester);
  return subjects.find((s) => s.id === subjectId);
}