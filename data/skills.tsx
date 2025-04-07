export const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    skills: [
      { name: "SQL", level: "Advanced" },
      { name: "Python (Pandas, NumPy)", level: "Advanced" },
      { name: "R", level: "Intermediate" },
      { name: "Excel (PivotTables, VLOOKUP)", level: "Advanced" },
      { name: "VBA", level: "Intermediate" },
    ],
  },
  {
    title: "Data Engineering",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M2 22h20" />
        <path d="M10 6h4v16h-4z" />
        <path d="M2 13h4v9H2z" />
        <path d="M18 10h4v12h-4z" />
        <path d="M10 2h4v4h-4z" />
      </svg>
    ),
    skills: [
      { name: "Airflow", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
      { name: "AWS", level: "Basic" },
      { name: "Apache Spark", level: "Intermediate" },
    ],
  },
  {
    title: "Analytics & BI",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    skills: [
      { name: "Tableau", level: "Advanced" },
      { name: "Power BI", level: "Advanced" },
      { name: "Excel (Charts, Macros)", level: "Advanced" },
      { name: "Data Cleaning", level: "Expert" },
      { name: "KPI Monitoring", level: "Advanced" },
    ],
  },
  {
    title: "ML & AI",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    skills: [
      { name: "Scikit-Learn", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Basic" },
      { name: "A/B Testing", level: "Advanced" },
      { name: "Anomaly Detection", level: "Intermediate" },
    ],
  },
]

