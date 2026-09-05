// status: "completed" (a score/grade is reported on the résumé) or
// "in-progress" (listed as coursework but no grade/score reported yet).

export const coursework = [
  {
    subject: "Computer Science & Engineering",
    courses: [
      { name: "AP Computer Science A", detail: "Score: 5", status: "completed" },
      { name: "AP Computer Science Principles", detail: "Score: 4", status: "completed" },
      { name: "Honors Computer Science", detail: "Grade: A", status: "completed" },
      { name: "Honors Introduction to Engineering Design", detail: "Grade: A", status: "completed" },
      { name: "Honors Principles of Engineering", detail: "Grade: A", status: "completed" },
      { name: "Honors Principles of Sustainability", detail: "Grade: A", status: "completed" },
      { name: "Honors Civil Engineering & Architecture", detail: null, status: "in-progress" },
    ],
  },
  {
    subject: "Mathematics",
    courses: [
      { name: "AP Precalculus", detail: "Score: 5", status: "completed" },
      { name: "AP Calculus AB", detail: "Score: 5", status: "completed" },
      { name: "AP Calculus BC", detail: "Score: 5", status: "completed" },
      { name: "Calculus III", detail: "Paradise Valley Community College", status: "completed" },
      { name: "Vector Calculus", detail: "Paradise Valley Community College", status: "completed" },
      { name: "AP Statistics", detail: null, status: "in-progress" },
    ],
  },
  {
    subject: "Physics & Science",
    courses: [
      { name: "AP Physics 1", detail: "Score: 4", status: "completed" },
      { name: "AP Physics C: Mechanics", detail: "Score: 5", status: "completed" },
      { name: "AP Chemistry", detail: null, status: "in-progress" },
    ],
  },
  {
    subject: "Humanities & Social Sciences",
    courses: [
      { name: "AP Psychology", detail: "Score: 4", status: "completed" },
      { name: "AP European History", detail: "Score: 4", status: "completed" },
      { name: "AP Seminar", detail: "Score: 4", status: "completed" },
      { name: "AP Human Geography", detail: null, status: "in-progress" },
      { name: "AP US History", detail: null, status: "in-progress" },
      { name: "AP Research", detail: null, status: "in-progress" },
      { name: "AP English Language & Composition", detail: null, status: "in-progress" },
    ],
  },
  {
    subject: "Languages",
    courses: [
      { name: "Elementary Spanish I & II", detail: "Paradise Valley Community College · SPA 101 & 102", status: "completed" },
    ],
  },
];

export const education = [
  {
    school: "Paradise Valley High School",
    program: "CREST Computer Science & CREST Engineering",
    dateRange: "August 2024 – Present",
    detail: "Class of 2028",
    stats: [
      { label: "Weighted GPA", value: "5.0" },
      { label: "Unweighted GPA", value: "4.0" },
      { label: "PSAT", value: "1460" },
      { label: "SAT", value: "1520" },
    ],
  },
  {
    school: "Paradise Valley Community College",
    program: "Dual-enrollment coursework",
    dateRange: "August 2024 – Present",
    detail: null,
    stats: [{ label: "GPA", value: "4.0" }],
  },
];
