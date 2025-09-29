export const placeHolderImage = "/placeholder.png";

import softwareEngineerImage from "../../assets/images/it-staffing-subServices/software-developers-engineers.png"
import mobileAppDevImage from "../../assets/images/it-staffing-subServices/mobile-developers.png";
import dataScientistImage from "../../assets/images/it-staffing-subServices/data-scientists.png";
import qaEngineersImage from "../../assets/images/it-staffing-subServices/qa-engineers.png";
import devopsImage from "../../assets/images/it-staffing-subServices/devops-cloud-engineers.png";
import infraEngineerImage from "../../assets/images/it-staffing-subServices/it-infrastructure.png"


import maintainanceEngineerImage from "../../assets/images/non-it-staffing-subServices/maintainance-engineer.png";
import mechanicalEngineerImage from "../../assets/images/non-it-staffing-subServices/mechanical-engineers.png";
import oilEngineerImage from "../../assets/images/non-it-staffing-subServices/oil-engineers.png";
import plantOperatorImage from "../../assets/images/non-it-staffing-subServices/plant-operator-image.png";
import siteEngineerImage from "../../assets/images/non-it-staffing-subServices/site-engineers.png";


import contactStaffingImage from "../../assets/images/staffing-models/contract-staffing.png";
import permanentStaffingImage from "../../assets/images/staffing-models/permanent-staffing.png";



export interface SubService {
  title: string;
  description: string;
  image: string;
}

export interface ServiceSection {
  title: string; // Section title e.g., "IT Staffing Solutions"
  slug: string;
  image: string;
  subservices: SubService[]; // Array of subservices for that section
}

export const services: ServiceSection[] = [
  {
    title: 'IT Staffing Solutions',
    slug: 'it-staffing',
    image: "/images/services/it-staffing-services.png",
    subservices: [
      {
        title: 'Software Developers & Engineers',
        description: `Our software developers and engineers bring extensive expertise in creating scalable and reliable applications.
They work across multiple technologies and frameworks to deliver high-quality software solutions.
The team follows industry best practices for coding, testing, and deployment.
They adapt to your project requirements and business goals efficiently.
Their proactive approach ensures timely delivery and maintainable solutions.`,
        image: softwareEngineerImage,
      },
      {
        title: 'Web & Mobile App Developers',
        description: `Specialized in building responsive web and mobile applications, our developers focus on user experience and performance.
They work with modern frameworks and tools to deliver intuitive and visually appealing apps.
Whether it's frontend, backend, or full-stack, they ensure seamless integration.
Continuous testing and optimization are part of the development process.
They aim to provide scalable and maintainable solutions for your digital products.`,
        image: mobileAppDevImage,
      },
      {
        title: 'Data Scientists & BI Analysts',
        description: `Our data scientists and BI analysts turn complex data into actionable insights.
They analyze datasets to identify trends, patterns, and opportunities for your business.
Using advanced analytical tools, they provide predictive models and reports.
They work closely with stakeholders to make data-driven decisions.
Their expertise helps optimize processes, reduce costs, and increase efficiency.`,
        image: dataScientistImage,
      },
      {
        title: 'QA/Test Engineers',
        description: `QA and test engineers ensure that your software is reliable and bug-free.
They design comprehensive test plans and conduct rigorous testing at every stage.
Automation and manual testing are combined for thorough coverage.
They report and track issues effectively, collaborating with developers to fix them.
Their goal is to deliver high-quality products that meet user expectations.`,
        image: qaEngineersImage,
      },
      {
        title: 'IT Infrastructure & Support Staff',
        description: `Our IT infrastructure and support staff maintain smooth operations of your technology systems.
They handle networks, servers, and end-user support efficiently.
Monitoring, troubleshooting, and maintenance tasks are performed proactively.
They ensure uptime, security, and compliance for all IT resources.
Their support allows your team to focus on core business objectives.`,
        image: infraEngineerImage,
      },
      {
        title: 'DevOps, Cloud, and Network Engineers',
        description: `Specialists in DevOps, cloud computing, and networking, they ensure reliable deployment and operations.
They automate processes for faster and more efficient delivery.
Cloud infrastructure is designed for scalability, performance, and security.
Network engineers optimize connectivity and maintain system integrity.
Their expertise bridges development and operations to improve productivity.`,
        image: devopsImage,
      },
    ],
  },
  {
    title: 'Non-IT Staffing (Oil & Gas & Core Industries)',
    slug: 'non-it-staffing',
    image: "/images/services/non-it-staffing-services.png",
    subservices: [
      {
        title: 'Mechanical, Electrical & Instrumentation Engineers',
        description: `Our engineers specialize in mechanical, electrical, and instrumentation projects across various industries.
They design, implement, and maintain equipment and systems to meet operational standards.
They ensure efficiency, safety, and reliability in all processes.
Collaboration with project teams guarantees timely delivery of objectives.
Their expertise supports complex industrial operations with precision and quality.`,
        image: mechanicalEngineerImage,
      },
      {
        title: 'Oil & Gas Field Engineers',
        description: `Field engineers in oil and gas manage on-site operations with expertise and safety focus.
They oversee drilling, extraction, and maintenance activities.
They coordinate with technical teams to ensure smooth workflow.
Risk assessments and preventive measures are part of their daily routine.
Their goal is to maintain operational efficiency while ensuring compliance with safety regulations.`,
        image: oilEngineerImage,
      },
      {
        title: 'Site Engineers & Project Managers',
        description: `Site engineers and project managers supervise construction and industrial projects from start to finish.
They plan, coordinate, and monitor resources to meet deadlines.
Their leadership ensures quality standards and project goals are achieved.
They manage teams, schedules, and budgets effectively.
Problem-solving and proactive decision-making are integral to their roles.`,
        image: siteEngineerImage,
      },
      {
        title: 'Maintenance Technicians',
        description: `Maintenance technicians perform routine and corrective maintenance to ensure equipment reliability.
They diagnose and repair issues promptly to minimize downtime.
They follow standard procedures and safety protocols meticulously.
Regular inspections and preventive maintenance are key responsibilities.
Their work keeps operations running smoothly and efficiently.`,
        image: maintainanceEngineerImage,
      },
      {
        title: 'HSE Officers & Plant Operators',
        description: `HSE officers and plant operators focus on safety, health, and environmental compliance.
They monitor plant operations to prevent hazards and accidents.
They conduct safety training and enforce regulations rigorously.
Their oversight ensures safe working conditions for all personnel.
By maintaining high safety standards, they protect people, equipment, and the environment.`,
        image: plantOperatorImage,
      },
    ],
  },
  {
    title: 'Staffing Models',
    slug: 'staffing-models',
    image: "public/images/services/staffing-models-services.png",
    subservices: [
      {
        title: 'Contract Staffing',
        description: `Contract staffing provides flexible professionals for project-based or temporary roles.
This model allows organizations to scale their workforce according to demand.
Contract employees bring specific expertise for short-term objectives.
It reduces hiring overhead and provides rapid deployment of skilled talent.
Our team ensures that contractors integrate smoothly into your workflow for maximum productivity.`,
        image: contactStaffingImage,
      },
      {
        title: 'Permanent Staffing',
        description: `Permanent staffing focuses on long-term hires who grow with your organization.
These employees contribute to company culture, stability, and ongoing projects.
Our recruitment process identifies candidates who align with your values and goals.
Continuous support and onboarding ensure smooth integration.
Permanent hires provide lasting value, knowledge retention, and team cohesion.`,
        image: permanentStaffingImage,
      },
    ],
  },
];
