import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLstStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  // return lastStudent?.id ? lastStudent.id.substring(6) : undefined; // skip first 6 digit using substring
  return lastStudent?.id ? lastStudent.id : undefined;
};

// year + semesterCode + 4 digit number -> 2030 01 0001
export const generatedStudentId = async (semesterData: TAcademicSemester) => {
  let currentId = (0).toString(); // by default

  const lastStudentId = await findLstStudentId();

  const lastStudentSemesterYear = lastStudentId?.substring(0, 4); // 2030
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01

  const currentSemesterYear = semesterData.year;
  const currentSemesterCode = semesterData.code;

  if (
    lastStudentId &&
    lastStudentSemesterYear === currentSemesterYear &&
    lastStudentSemesterCode === currentSemesterCode
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${semesterData.year}${semesterData.code}${incrementId}`;
  return incrementId;
};
