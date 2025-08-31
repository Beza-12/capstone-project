// src/data/examsData.js
import logicMid1 from "../assets/exams/Logic_midterm_1.pdf";
import logicMid2 from "../assets/exams/Logic_midterm_2.pdf";
import logicFinal from "../assets/exams/Logic_final.pdf";

import psyMid1 from "../assets/exams/Psychology_midterm_1.pdf";
import psyMid2 from "../assets/exams/Psychology_midterm_2.pdf";
import psyFinal from "../assets/exams/Psychology_final.pdf";

import mathMid9 from "../assets/exams/Applied_Midterm_Exam_9.pdf";
import mathMid1 from "../assets/exams/Applied_Midterm_Exam_8.pdf";
import mathMid2 from "../assets/exams/Applied_Midterm_Exam_7.pdf";

import mathMid4 from "../assets/exams/Applied_Midterm_Exam_4.pdf";
import mathMid5 from "../assets/exams/Applied_Midterm_Exam_5.pdf";
import mathMid6 from "../assets/exams/Applied_Midterm_Exam_6.pdf";

const examsData = [
  {
    subject: "Logic",
    exams: [
      { title: "Midterm Exam 1", file: logicMid1 },
      { title: "Midterm Exam 2", file: logicMid2 },
      { title: "Final Exam", file: logicFinal },
    ],
  },
  {
    subject: "Psychology",
    exams: [
      { title: "Midterm Exam 1", file: psyMid1 },
      { title: "Midterm Exam 2", file: psyMid2 },
      { title: "Final Exam", file: psyFinal },
    ],
  },
  {
    subject: "Mathematics",
    exams: [
      { title: "Midterm Exam 1", file: mathMid1 },
      { title: "Midterm Exam 2", file: mathMid2 },
      { title: "Midterm Exam 4", file: mathMid4 },
      { title: "Midterm Exam 5", file: mathMid5 },
      { title: "Midterm Exam 6", file: mathMid6 },
    ],
  },
];

export default examsData;