
export default interface AllcontextI{
    users: UserI[];
    student: StudentI[];
    lecturer: LecturerI[];
    courses: CoursesI[];
    faculty: FacultyI[];
    department: DeparmentI[];
}
interface UserI{
    academicid: string;
    password: string;
};
interface FacultyI{
    id: string;
    name: string;
    value: string;
    label: string;
}
interface DeparmentI{
    id: string;
    facultyid: string;
    name: string;
    value: string;
    label: string;
};
interface CoursesI{
    id: string;
    facultyid: string;
    departmentid: string;
    crscod: string;
     value: string;
    label: string;
};
interface LecturerI{
    id: string;
    primage: string;
    academicid: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    dob: string;
    nationality: string;
    address: string;
    emergencycontact: string;
    relationship: string;
    facaulty: string;
    department: string;
    courses: string[];
};

interface StudentI {
    id: string;
    primage: string;
    academicid: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    dob: string;
    nationality: string;
    address: string;
    guardiansname: string;
    guardiansemail: string;
    guardianscontact: string;
    relationship: string;
    facaulty: string;
    department: string;
    year: number;
};
