import AllcontextI from "./storeInterface";
import { v4 as uuidv4 } from 'uuid';
export const dummyData: AllcontextI = {
    users: [
        { academicid: "U001", password: "password123" },
        { academicid: "U002", password: "password456" },
    ],
    student: [
        {
            id: "S001",
            primage: "student1.jpg",
            academicid: "U001",
            fname: "John",
            lname: "Doe",
            email: "johndoe@example.com",
            password: "password123",
            dob: "2000-01-15",
            nationality: "American",
            address: "123 Elm Street",
            guardiansname: "Jane Doe",
            guardiansemail: "janedoe@example.com",
            guardianscontact: "123-456-7890",
            relationship: "Mother",
            facaulty: "Engineering",
            department: "Computer Science",
            year: 2,
        },
        {
            id: "S002",
            primage: "student2.jpg",
            academicid: "U002",
            fname: "Alice",
            lname: "Smith",
            email: "alicesmith@example.com",
            password: "password456",
            dob: "1999-05-22",
            nationality: "Canadian",
            address: "456 Maple Avenue",
            guardiansname: "Robert Smith",
            guardiansemail: "robertsmith@example.com",
            guardianscontact: "987-654-3210",
            relationship: "Father",
            facaulty: "Business",
            department: "Finance",
            year: 3,
        },
    ],
    lecturer: [
        {
            id: "L001",
            primage: "lecturer1.jpg",
            academicid: "U003",
            fname: "Dr. Emily",
            lname: "Johnson",
            email: "emilyjohnson@example.com",
            password: "lecturerpass1",
            dob: "1980-11-10",
            nationality: "British",
            address: "789 Oak Drive",
            emergencycontact: "Michael Johnson",
            relationship: "Spouse",
            facaulty: "Engineering",
            department: "Electrical Engineering",
            courses: ["C101", "C102"],
        },
        {
            id: "L002",
            primage: "lecturer2.jpg",
            academicid: "U004",
            fname: "Dr. Mark",
            lname: "Brown",
            email: "markbrown@example.com",
            password: "lecturerpass2",
            dob: "1975-03-18",
            nationality: "Australian",
            address: "101 Birch Lane",
            emergencycontact: "Sarah Brown",
            relationship: "Spouse",
            facaulty: "Business",
            department: "Marketing",
            courses: ["C201"],
        },
    ],
    courses: [
        {
            id: "C101", facultyid: "F001", departmentid: "D001", crscod: "CS101",
            value: "",
            label: ""
        },
        {
            id: "C102", facultyid: "F001", departmentid: "D001", crscod: "CS102",
            value: "",
            label: ""
        },
        {
            id: "C201", facultyid: "F002", departmentid: "D002", crscod: "MK201",
            value: "",
            label: ""
        },
    ],
    faculty: [
        {
            id: "F001", name: "Engineering",
            value: "",
            label: "Engineering"
        },
        {
            id: "F002", name: "Business",
            value: "",
            label: "Business"
        },
    ],
    department: [
        {
            id: "D001", facultyid: "F001", name: "Computer Science",
            value: "",
            label:  "Computer Science"
        },
        {
            id: "D002", facultyid: "F002", name: "Finance",
            value: "",
            label: "Computer Science"
        },
  ],
    

};

/*export const dummyData2: AllcontextI = {
  faculty: [
    {
      id: uuidv4(),
      name: "Faculty of Arts & Humanities",
      value: "Faculty of Arts & Humanities",
      label: "Faculty of Arts & Humanities",
    },
    {
      id: uuidv4(),
      name: "Faculty of Science",
      value: "Faculty of Science",
      label: "Faculty of Science",
    },
    {
      id: uuidv4(),
      name: "Faculty of Engineering & Technology",
      value: "Faculty of Engineering & Technology",
      label: "Faculty of Engineering & Technology",
    },
    {
      id: uuidv4(),
      name: "Faculty of Medicine & Health Sciences",
      value: "Faculty of Medicine & Health Sciences",
      label: "Faculty of Medicine & Health Sciences",
    },
    {
      id: uuidv4(),
      name: "Faculty of Commerce & Business Administration",
      value: "Faculty of Commerce & Business Administration",
      label: "Faculty of Commerce & Business Administration",
    },
    {
      id: uuidv4(),
      name: "Faculty of Social Sciences",
      value: "Faculty of Social Sciences",
      label: "Faculty of Social Sciences",
    },
    {
      id: uuidv4(),
      name: "Faculty of Law",
      value: "Faculty of Law",
      label: "Faculty of Law",
    },
    {
      id: uuidv4(),
      name: "Faculty of Education",
      value: "Faculty of Education",
      label: "Faculty of Education",
    },
    {
      id: uuidv4(),
      name: "Faculty of Fine Arts & Design",
      value: "Faculty of Fine Arts & Design",
      label: "Faculty of Fine Arts & Design",
    },
    {
      id: uuidv4(),
      name: "Faculty of Computer Science & Information Technology",
      value: "Faculty of Computer Science & Information Technology",
      label: "Faculty of Computer Science & Information Technology",
    },
    {
      id: uuidv4(),
      name: "Faculty of Agriculture & Environmental Sciences",
      value: "Faculty of Agriculture & Environmental Sciences",
      label: "Faculty of Agriculture & Environmental Sciences",
    },
    {
      id: uuidv4(),
      name: "Faculty of Architecture & Urban Planning",
      value: "Faculty of Architecture & Urban Planning",
      label: "Faculty of Architecture & Urban Planning",
    },
    {
      id: uuidv4(),
      name: "Faculty of Media & Communication",
      value: "Faculty of Media & Communication",
      label: "Faculty of Media & Communication",
    },
    {
      id: uuidv4(),
      name: "Faculty of Hospitality & Tourism Management",
      value: "Faculty of Hospitality & Tourism Management",
      label: "Faculty of Hospitality & Tourism Management",
    },
    {
      id: uuidv4(),
      name: "Faculty of Marine & Oceanic Studies",
      value: "Faculty of Marine & Oceanic Studies",
      label: "Faculty of Marine & Oceanic Studies",
    },
    {
      id: uuidv4(),
      name: "Faculty of Aviation & Aerospace Studies",
      value: "Faculty of Aviation & Aerospace Studies",
      label: "Faculty of Aviation & Aerospace Studies",
    },
    {
      id: uuidv4(),
      name: "Faculty of Veterinary Medicine",
      value: "Faculty of Veterinary Medicine",
      label: "Faculty of Veterinary Medicine",
    },
    {
      id: uuidv4(),
      name: "Faculty of Sports & Physical Education",
      value: "Faculty of Sports & Physical Education",
      label: "Faculty of Sports & Physical Education",
    },
    {
      id: uuidv4(),
      name: "Faculty of Energy & Environmental Sciences",
      value: "Faculty of Energy & Environmental Sciences",
      label: "Faculty of Energy & Environmental Sciences",
    },
    {
      id: uuidv4(),
      name: "Faculty of Transportation & Logistics Management",
      value: "Faculty of Transportation & Logistics Management",
      label: "Faculty of Transportation & Logistics Management",
    },
    {
      id: uuidv4(),
      name: "Faculty of Military & Security Studies",
      value: "Faculty of Military & Security Studies",
      label: "Faculty of Military & Security Studies",
    }
  ],
  department: [
    {
      id: uuidv4(),
      facultyid: "Faculty of Arts & Humanities",
      name: "Department of English",
      value: "Department of English",
      label: "Department of English",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Arts & Humanities",
      name: "Department of History",
      value: "Department of History",
      label: "Department of History",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Arts & Humanities",
      name: "Department of Philosophy",
      value: "Department of Philosophy",
      label: "Department of Philosophy",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Arts & Humanities",
      name: "Department of Religion",
      value: "Department of Religion",
      label: "Department of Religion",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Arts & Humanities",
      name: "Department of Visual Arts",
      value: "Department of Visual Arts",
      label: "Department of Visual Arts",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Science",
      name: "Department of Biology",
      value: "Department of Biology",
      label: "Department of Biology",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Science",
      name: "Department of Chemistry",
      value: "Department of Chemistry",
      label: "Department of Chemistry",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Science",
      name: "Department of Mathematics",
      value: "Department of Mathematics",
      label: "Department of Mathematics",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Science",
      name: "Department of Physics",
      value: "Department of Physics",
      label: "Department of Physics",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Engineering & Technology",
      name: "Department of Civil Engineering",
      value: "Department of Civil Engineering",
      label: "Department of Civil Engineering",
    },
    {
      id: uuidv4(),
      facultyid: "Faculty of Engineering & Technology",
      name: "Department of Electrical Engineering",
      value: "Department of Electrical Engineering",
      label: "Department
    }
  
  
  ],
}*/



/*// initialStoreData.ts

import { v4 as uuidv4 } from 'uuid';
import { StoreI, FacultyI, DeptI, CourseI, StudentI, LecturerI, AttendanceI } from './Store.interface';

const faculties: FacultyI[] = [
  { id: uuidv4(), name: "Engineering" },
  { id: uuidv4(), name: "Arts" },
  { id: uuidv4(), name: "Science" }
];

const departments: DeptI[] = [
  { id: uuidv4(), name: "Computer Science", facultyId: faculties[0].id },
  { id: uuidv4(), name: "Mechanical Engineering", facultyId: faculties[0].id },
  { id: uuidv4(), name: "Physics", facultyId: faculties[2].id }
];

const courses: CourseI[] = [
  { id: uuidv4(), name: "Algorithms", deptI: departments[0].id, facultyId: faculties[0].id },
  { id: uuidv4(), name: "Thermodynamics", deptI: departments[1].id, facultyId: faculties[0].id },
  { id: uuidv4(), name: "Quantum Mechanics", deptI: departments[2].id, facultyId: faculties[2].id }
];

const students: StudentI[] = [
  {
    id: uuidv4(),
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    dob: "2000-01-01",
    matrixcode: "M1234",
    guardiansname: "Jane Doe",
    guardiansemail: "jane.doe@example.com",
    guardianscontact: "1234567890",
    relationship: "Mother",
    address: "123 Main St",
    facultyId: faculties[0].id,
    deptId: departments[0].id,
    yearId: "year1",
    courses: [courses[0].id, courses[1].id],
    imagefile: "john_doe.jpg"
  },
  {
    id: uuidv4(),
    firstname: "Alice",
    lastname: "Smith",
    email: "alice.smith@example.com",
    dob: "1999-05-15",
    matrixcode: "M5678",
    guardiansname: "Robert Smith",
    guardiansemail: "robert.smith@example.com",
    guardianscontact: "0987654321",
    relationship: "Father",
    address: "456 Elm St",
    facultyId: faculties[2].id,
    deptId: departments[2].id,
    yearId: "year2",
    courses: [courses[2].id],
    imagefile: "alice_smith.jpg"
  }
];

const lecturers: LecturerI[] = [
  {
    id: uuidv4(),
    firstname: "Dr. Emily",
    lastname: "Johnson",
    email: "emily.johnson@example.com",
    password: "securepassword",
    address: "789 Oak St",
    facultyId: faculties[0].id,
    deptId: departments[0].id,
    courseId: courses[0].id,
    imagefile: "emily_johnson.jpg"
  },
  {
    id: uuidv4(),
    firstname: "Dr. Michael",
    lastname: "Brown",
    email: "michael.brown@example.com",
    password: "securepassword",
    address: "321 Pine St",
    facultyId: faculties[2].id,
    deptId: departments[2].id,
    courseId: courses[2].id,
    imagefile: "michael_brown.jpg"
  }
];

const attendance: AttendanceI[] = [
  {
    id: uuidv4(),
    facultyId: faculties[0].id,
    deptId: departments[0].id,
    courseId: courses[0].id,
    lecturerId: lecturers[0].id,
    imagefile: "attendance1.jpg"
  },
  {
    id: uuidv4(),
    facultyId: faculties[2].id,
    deptId: departments[2].id,
    courseId: courses[2].id,
    lecturerId: lecturers[1].id,
    imagefile: "attendance2.jpg"
  }
];

const storeData: StoreI = {
  faculties,
  departments,
  courses,
  students,
  lecturers,
  attendance
};

export default storeData;
*/
