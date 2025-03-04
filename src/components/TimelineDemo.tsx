import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Aug 2024 - Dec 2024",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/asu-logo.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <br/>
          <h1><b>
          Graduate Teaching Assistant
          </b>
          </h1>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <i>Arizona State University</i>
          </h2>
          <ul>
            <li>Contributed to and managed administration of ASU CSE 578, creating and evaluating complex assignments for 170+ students</li>
            <li>Crafted assignments using D3js, assisting students with achieving proficiency in Visualization topics</li>
            <li>Provided technical support and troubleshooting for students, ensuring effective learning outcomes and maintaining high academic standards in data visualization coursework</li>
          </ul>
        </div>
      ),
    },
    {
        title: "May 2024 - Jul 2024",
        content: (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/resilience.jpeg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <br/>
            <h1><b>
            Software Development Intern
            </b>
            </h1>
            <h2 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <i>Resilience, Inc</i>
            </h2>
            <br/>
            <ol>
              <li>Independently championed user-centric design principles in Figma to effectively develop modern, intuitive interfaces for mobile and web applications, enhancing user engagement</li>
              <li>Demonstrated expertise in architecting and implementing reusable React components and streamlined state management solutions, reducing code complexity and boosting performance by 20%</li>
              <li>Gained exposure to modern UI optimization techniques, boosting application performance by 25% through rigorous usability testing and data-driven refinements</li>
            </ol>
          </div>
        ),
    },
    {
        title: "Jun 2021 - Feb 2023",
        content: (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/jio.jpeg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <br/>
            <h1><b>
            Software Engineer
            </b>
            </h1>
            <h2 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <i>Jio Platforms Ltd.</i>
            </h2>
            <br/>
            <ol>
              <li>Utilized Node.js, MySQL, and Postman to streamline development workflows, troubleshoot issues, and maintain code quality, improving overall efficiency</li>
              <li>Aligned with project managers to set and achieve coding goals, implementing best practices that enhanced legacy codebases and reduced bug reports by 35%</li>
              <li>Collaborated with diverse teams to support end-users, troubleshoot challenges, and deliver prompt, high-quality solutions, improving user satisfaction</li>
            </ol>
          </div>
        ),
    },
    {
        title: "Jan 2021 - May 2021",
        content: (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/cognizant.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <br/>
            <h1><b>
            Application Development Intern
            </b>
            </h1>
            <h2 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <i>Cognizant</i>
            </h2>
            <br/>
            <ol>
              <li>Led a team of 12 interns, achieving 25% higher efficiency compared to other teams, contributing to overall project success</li>
              <li>Applied a diverse set of technologies, encompassing HTML5, CSS3, JavaScript, Java, and SQL to ensure seamless execution of projects</li>
              <li>Put in application dynamic data analysis techniques to enhance customer engagement metrics by 10%, delivering actionable insights to optimize product adoption</li>
            </ol>
          </div>
        ),
    },
    {
        title: "Jun 2019 - Jul 2019",
        content: (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/drdo.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <br/>
            <h1><b>
            Software Engineer Intern
            </b>
            </h1>
            <h2 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <i>Defence Research and Development Organisation (DRDO)</i>
            </h2>
            <br/>
            <ol>
              <li>Conducted thorough research on emerging trends in data visualization and contributed insights to optimize D3's functionality</li>
              <li>Collaborated with UX designers to implement visually appealing and intuitive data visualizations, focusing on delivering a seamless end-user experience.</li>
            </ol>
          </div>
        ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
