import React from "react";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  align: "start" | "end";
}

const entries: TimelineEntry[] = [
  {
    date: "Jun 2022 – On Hold",
    title: "Florida Atlantic University – B.S. Computer Science",
    description:
      "Pursuing a B.S. in Computer Science, developing a strong foundation in programming and computer science principles.",
    align: "start",
  },
  {
    date: "Jun 2023 – Aug 2023",
    title: "Boca Code – Software Engineering Bootcamp",
    description:
      "Completed an intensive software engineering bootcamp, gaining hands-on experience with full-stack development, including React, Node.js, and other industry-standard technologies.",
    align: "end",
  },
  {
    date: "Aug 2023 – Dec 2023",
    title: "Camlann Games – Software Engineering Internship",
    description:
      "Contributed to the development of a dashboard application, collaborating on both frontend and backend tasks, and ensuring seamless integration for studios, publishers, and stakeholders.",
    align: "start",
  },
  {
    date: "Nov 2023 – Jun 2024",
    title: "Venancio USA – Freelance Software Developer",
    description:
      "Developed custom software solutions to optimize warehouse management, improving inventory tracking and order fulfillment, while providing technical support and training to staff for smooth software adoption.",
    align: "end",
  },
  {
    date: "Jun 2024 – Sep 2024",
    title: "Site Impact – Software Engineer",
    description:
      "Collaborated on the development of a B2B marketing application for managing and placing marketing campaigns. Implemented custom integrations with services like Facebook and Google, and contributed to in-house library development.",
    align: "start",
  },
  {
    date: "Dec 2023 – Present",
    title: "Insite Web – Software Engineer",
    description:
      "Currently leading the development of client-facing applications, optimizing UI/UX integration, and collaborating with stakeholders to ensure the successful delivery of software solutions.",
    align: "end",
  },
  {
    date: "Aug 2025 – Present",
    title: "Foundation Finance – Full Stack Developer",
    description:
      "Developing and maintaining a dealer portal for contract management and processing, while building and optimizing RESTful APIs for third-party integrations. Managing full-stack development of internal tools to streamline dealer operations and improve workflow efficiency.",
    align: "start",
  },
];

const TimelineIcon: React.FC = () => (
  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-[#164e63] to-[#4f46e5]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-white">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd" />
    </svg>
  </div>
);

const TimelineCard: React.FC<{ entry: TimelineEntry }> = ({ entry }) => (
  <div className="rounded-xl bg-[#0e1522] px-5 py-4 transition-transform duration-300 hover:-translate-y-1">
    <time className="font-mono italic text-sm opacity-80">{entry.date}</time>
    <div className="text-lg font-black mt-1">{entry.title}</div>
    <p className="mt-2 opacity-90">{entry.description}</p>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="mx-auto max-w-[1024px] p-[16px]">
      <h2 className="text-4xl font-bold text-center mt-20">Experience</h2>
      <ul className="mt-8 mx-0 md:mx-20 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {entries.map((entry, index) => (
          <li key={entry.title}>
            {index > 0 && <hr className="!bg-gradient-to-b !from-[#164e63] !to-[#4f46e5]" />}
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={`${entry.align === "start" ? "timeline-start md:text-end" : "timeline-end"} mb-10 md:mb-10 w-full max-w-md`}>
              <TimelineCard entry={entry} />
            </div>
            {index < entries.length - 1 && <hr className="!bg-gradient-to-b !from-[#164e63] !to-[#4f46e5]" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
