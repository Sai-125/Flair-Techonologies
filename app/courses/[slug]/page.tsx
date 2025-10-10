"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Star,
  Download,
  CheckCircle,
  User,
  Award,
  BookOpen,
  Target,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollDialog } from "@/components/EnrollDialog";
import Rating from "@/components/ui/Rating";
import ApplicationForm from "@/components/ui/Application-form";
import { coursePageApplication } from "@/app/constant";
import Accordion2 from "@/components/Accordion2";
import { ExpertsCarousel } from "@/components/ExpertsCarousel";

// Application form content
const { applicationFormSection } = coursePageApplication;

// This would typically come from a database or API
const courseData = {
  "python-fullstack": {
    title: "Python Full-Stack <span class='text-yellow-400'>Development</span>",
    description:
      "Master Python, Django and modern web development with hands-on projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    originalPrice: "₹60,000",
    category: "🧑‍💻 Development",
    students: "500+",
    rating: 4.7,
    reviews: 300,
    brochure: "PYTHON FULL STACK.pdf",
    outline: "Python Full-Stack.pdf",
    image: "/pyhton.png",
    highlights: [
      "Master Python programming fundamentals and advanced concepts.",
      "Build dynamic web applications using Django/Flask frameworks.",
      "Work with databases SQL for backend integration.",
      "Develop interactive front-end using HTML, CSS, and JavaScript.",
      "Learn REST APIs, authentication, and deployment practices.",
      "Learn version control and collaboration with Git & GitHub.",
      "Deploy apps on cloud and manage hosting.",
      "Get hands-on project experience.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Python Full-Stack program",
      testimonials: [
        {
          name: "Ananya",
          role: "Software Engineer",
          image: "/ananya.jpeg?height=80&width=80",
          content:
            "The Python Full-Stack course gave me a clear understanding of both front-end and back-end. The hands-on projects helped me gain confidence to build apps on my own.",
          rating: 5,
          course: "Software Engineer",
        },
        {
          name: "Rahul Chowdary",
          role: "Data Analyst at Wipro",
          image: "/rahul.jpg?height=80&width=80",
          content:
            "The trainers explained concepts in a simple way and guided me through real-time projects. This course boosted my skills and helped me secure my first developer job.",
          rating: 5,
          course: "Junior Developer",
        },
        {
          name: "Sneha Reddy",
          role: "DevOps Engineer at Infosys",
          image: "/sneha.png?height=80&width=80",
          content:
            "As a working professional, I needed flexible learning with practical exposure. This program not only fit my schedule but also gave me industry-ready skills in Python full-stack.",
          rating: 5,
          course: "Senior Developer",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT-Professionals",
    syllabus: [
      {
        module: "Core Python",
        duration: "3 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "History.",
              "Features.",
              "Setting up path.",
              "Working with Python Basic Syntax.",
            ],
          },
          {
            name: "Data Types Introduction",
            content: [
              "Words order, unordered, sequential, non-sequential, mutable and immutable.",
              "Introduction – List, Tuple, String, Dictionaries, Set, Frozenset.",
              "Accessing – List, Tuple, String, Dictionaries, Set, Frozense.",
              "Shallow and deep copy.",
            ],
          },
          {
            name: "Conditional Statements",
            content: ["If, If- else and Nested if-else."],
          },
          {
            name: "Looping",
            content: ["For, While and Nested loops, for-else."],
          },
          {
            name: "Control Statements",
            content: ["Break, Continue & Pass."],
          },
          {
            name: "Functions",
            content: [
              "Defining a function, Calling a function, Function Arguments, Global & local variables.",
            ],
          },
          {
            name: "Higher order function",
            content: [
              "List, Dict, Generator Expressions/Tuple Comprehension.",
              "Map, Filter, Reduce, Lambda (Anonymous functions).",
            ],
          },
          {
            name: "File Operation",
            content: [
              "Open and With open.",
              "Map, Filter, Reduce, Lambda (Anonymous functions).",
            ],
          },
          {
            name: "Input-Output",
            content: ["Printing on screen, Reading data from keyboard."],
          },
          {
            name: "Parsers",
            content: ["Json, Csv, xml, serialization."],
          },
        ],
      },
      {
        module: "Advance Python",
        duration: "3 weeks",
        topics: [
          {
            name: "OOPs Concept",
            content: [
              "Class.",
              "Object.",
              "Inheritance.",
              "Abstract.",
              "Polymorphism.",
              "Encapsulation.",
            ],
          },
          {
            name: "Liked Concepts",
            content: [
              "Types of Methods (Instance, Static, Class).",
              "MRO.",
              "Operator Overloading.",
              "Descriptors (Property – setter, getter).",
            ],
          },
          {
            name: "Modules",
            content: [
              "Module, package, Importing module.",
              "base64.",
              "OS, Sys, Path.",
              "Datetime.",
              "Collections.",
              "Argparse.",
              "Logging.",
              "Email sending.",
              "Pdb and ipdb.",
              "Subprocess.",
              "Async.",
              "Random.",
            ],
          },
          {
            name: "Exception Handling",
            content: [
              "Exceptions and Exceptions Handling.",
              "User Defined Exceptions.",
            ],
          },
          {
            name: "Concepts",
            content: ["Iterators, Generators, Closers, Decorators."],
          },
          {
            name: "Multithreading",
            content: [
              "Thread, Starting a thread, Threading module, Synchronizing threads, Multithreaded, Priority Queue.",
            ],
          },
          {
            name: "Regular expression",
            content: ["Match, Search, findall, split, sub and Patterns."],
          },
          {
            name: "Database",
            content: [
              "Introduction, Connections, Executing queries, Transactions, Handling error.",
            ],
          },
        ],
      },
      {
        module: "Django",
        duration: "4 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "What is Django",
              "Django and Python",
              "Django’s take on MVC",
              "How to get and install Django",
            ],
          },
          {
            name: "Getting started with Django (About core three files)",
            content: ["models.py", "views.py", "urls.py"],
          },
          {
            name: "Migrations",
            content: ["Introduction to Migrations", "Data Migrations"],
          },
          {
            name: "Django URL patterns and views",
            content: ["Designing a Good URL Scheme", "Generic Views"],
          },
          {
            name: "Django Forms",
            content: ["Form Classes", "Validations", "Authentication"],
          },
          {
            name: "Django and REST APIs",
            content: ["Django REST-API", "Django Piston"],
          },
          {
            name: "Unit Testing with Django",
            content: [
              "Overview of Unit Testing",
              "Using Python’s Unittest2 Library",
              "Test",
              "Test Databases",
              "Doctests and Debugging best practices",
            ],
          },
        ],
      },
      {
        module: "Linux",
        duration: "1 week",
        topics: [
          {
            name: "Getting Started with Linux",
            content: [
              "Installing Linux (Dual Boot and Virtual Machines)",
              "Basic Linux Terminology (Kernel, Shell, etc.)",
              "Navigating the Linux File System",
            ],
          },
          {
            name: "Basic Commands and Operations",
            content: [
              "Command Line Interface (CLI) Basics",
              "Common Commands (ls, cd, cp, rm, mv, etc.)",
              "File and Directory Operations",
            ],
          },
          {
            name: "File Permissions and Process Management",
            content: [
              "Understanding File Permissions and Ownership",
              "Changing Permissions and Ownership",
              "Basic Process Management (ps, top, kill)",
            ],
          },
          {
            name: "Package Management",
            content: [
              "Installing and Updating Software",
              "Using Package Managers (apt, yum, etc.)",
              "Understanding Repositories",
            ],
          },
          {
            name: "Text Editing and Shell Scripting",
            content: [
              "Basic Text Editing with Nano and Vi",
              "Introduction to Shell Scripting",
              "Writing and Executing Simple Scripts",
            ],
          },
          {
            name: "Networking Basics in Linux",
            content: [
              "Basic Networking Commands (ping, ifconfig, netstat)",
              "Configuring Network Interfaces",
              "Understanding Firewalls and SSH",
            ],
          },
          {
            name: "System Administration Basics",
            content: [
              "User and Group Management",
              "Disk and Storage Management",
              "System Monitoring and Logs",
            ],
          },
          {
            name: "Security in Linux",
            content: [
              "Basic Linux Security Concepts",
              "Secure Password Practices",
              "Introduction to SELinux/AppArmor",
            ],
          },
          {
            name: "Practical Exercises and Real-world Applications",
            content: [
              "Setting up a Simple Web Server",
              "Creating Basic Shell Scripts for Automation",
              "Troubleshooting Common Issues",
            ],
          },
          {
            name: "Course Review and Further Resources",
            content: [
              "Review of Key Concepts",
              "Pathways for Advanced Learning",
              "Community and Online Resources",
            ],
          },
        ],
      },
      {
        module: "Selenium",
        duration: "3 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "What is automation?",
              "What is software testing?",
              "What is Selenium?",
            ],
          },
          {
            name: "What is Webdriver",
            content: ["Webdriver components"],
          },
          {
            name: "Webdriver for different browsers",
            content: [
              "Configuring webdriver with different browsers",
              "Configuring with webdriver_manager",
            ],
          },
          {
            name: "What are Locators",
            content: [
              "Normal Locators",
              "Custom Locators",
              "Css Selector",
              "Xpaths",
              "Function in xpath",
              "Axes",
            ],
          },
          {
            name: "Forms",
            content: ["Textboxes", "Radio button", "Checkboxes", "File upload"],
          },
          {
            name: "Select class",
            content: ["Selecting dropdowns"],
          },
          {
            name: "Action chain",
            content: ["Drag and drop", "Keyboard actions", "Mouse actions"],
          },
          {
            name: "Tables",
            content: ["Data picker"],
          },
          {
            name: "Browser options",
            content: [
              "Headless browser",
              "Browser popups",
              "Developer options",
            ],
          },
          {
            name: "Pagination",
            content: [],
          },
          {
            name: "Window handling",
            content: ["Alert popups"],
          },
          {
            name: "Pytest",
            content: [],
          },
          {
            name: "Page Object model",
            content: [],
          },
        ],
      },
      {
        module: "GIT - Version Control",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Version Control",
            content: [
              "What is Version Control?",
              "Overview of Git History and Purpose",
              "Git vs Other Version Control Systems",
            ],
          },
          {
            name: "Setting Up and Configuring Git",
            content: [
              "Installing Git (Windows, Linux, macOS)",
              "Basic Configuration: Setting up User Name and Email",
              "Introduction to Git Interfaces (CLI, GUIs)",
            ],
          },
          {
            name: "Git Basics",
            content: [
              "Understanding Repositories",
              "The Three States: Modified, Staged, Committed",
              "Creating Your First Repository",
            ],
          },
          {
            name: "Git Operations and Commands",
            content: [
              "Basic Git Commands: init, add, commit, status, log",
              "Understanding Commits and Commit Messages",
              "Viewing Changes: diff and log",
            ],
          },
          {
            name: "Branching and Merging",
            content: [
              "What is a Branch?",
              "Creating and Switching Branches",
              "Basic Merging and Handling Merge Conflicts",
            ],
          },
          {
            name: "Working with Remotes",
            content: [
              "Understanding Remote Repositories",
              "Cloning a Repository",
              "Pushing and Pulling Changes",
            ],
          },
          {
            name: "Collaborating with Git",
            content: [
              "Working with Others: Fetch, Pull, Push",
              "Understanding Forks and Pull Requests",
              "Collaborative Workflow Patterns (e.g., Feature Branch Workflow)",
            ],
          },
          {
            name: "Advanced Git Features",
            content: ["Stashing Changes", "Tagging Releases", "Basic Rebasing"],
          },
          {
            name: "Undoing Changes",
            content: [
              "Reverting Commits",
              "Resetting and Cleaning",
              "Dealing with Mistakes",
            ],
          },
          {
            name: "Using Git with Hosting Services",
            content: [
              "Overview of Services like GitHub, GitLab, and Bitbucket",
              "Remote Repository Management",
              "Introduction to Basic CI/CD Concepts",
            ],
          },
          {
            name: "Best Practices and Tips",
            content: [
              "Writing Good Commit Messages",
              "Keeping a Clean History",
              "Branch Management Strategies",
            ],
          },
          {
            name: "Practical Exercises and Projects",
            content: [
              "Setting Up a Personal Project on Git",
              "Contributing to an Open Source Project",
              "Collaborative Simulation with Peers",
            ],
          },
          {
            name: "Course Review and Further Resources",
            content: [
              "Review of Key Concepts",
              "Advanced Topics in Git (Submodules, Hooks)",
              "Community and Online Resources",
            ],
          },
        ],
      },
      {
        module: "Database",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Databases",
            content: [
              "Why Database?",
              "Importance of Databases in Computing?",
              "Various types of data types?",
            ],
          },
          {
            name: "Relational Database Management System (RDBMS)",
            content: [
              "Introduction to Relational Databases",
              "Relational Algebra and Calculus",
              "Entity-Relationship Model (ER Model)",
              "Normalization and Denormalization",
            ],
          },
          {
            name: "SQL (Structured Query Language)",
            content: [
              "Basics of SQL (CREATE, SELECT, INSERT, UPDATE, DELETE)",
              "Advanced SQL (GROUP BY, HAVING, JOINS)",
              "Operators (IN, LIKE, ISNULL, UNION)",
              "Views, Indexes, and Triggers",
              "Sub Queries (Inner Query & Outer Query)",
              "Data Modeling using SQL",
              "Analytical Functions (Rank, Dense Rank, Partition By)",
            ],
          },
          {
            name: "Database Design",
            content: [
              "Database Design Process",
              "Functional Dependencies and Normalization",
              "Designing Tables and Relationships",
            ],
          },
          {
            name: "NoSQL Databases",
            content: [
              "Introduction to NoSQL Databases",
              "Types of NoSQL Databases (Document, Key-Value, Graph, Column-family)",
              "Comparison with Relational Databases",
            ],
          },
          {
            name: "Database Management and Transactions",
            content: [
              "ACID Properties",
              "Transaction Management",
              "Concurrency Control and Isolation Levels",
            ],
          },
        ],
      },
      {
        module: " Soft Skills ",
        duration: "1 week",
        topics: [
          {
            name: "Communication Skills",
            content: [
              "Improve verbal, written, and presentation abilities for workplace impact.",
            ],
          },
          {
            name: "Teamwork & Collaboration",
            content: [
              "Work effectively in groups and cross-functional environments.",
            ],
          },
          {
            name: "Time Management",
            content: [
              "Prioritize tasks, set goals, and manage deadlines efficiently.",
            ],
          },
          {
            name: "Problem-Solving & Critical Thinking",
            content: [
              "Approach challenges with logical and innovative solutions.",
            ],
          },
          {
            name: "Adaptability & Flexibility",
            content: ["Adjust quickly to changing tasks and environments."],
          },
          {
            name: "Professional Etiquette",
            content: [
              "Build confidence with workplace behavior, email writing, and meeting etiquette.",
            ],
          },
          {
            name: "Interview Preparation",
            content: [
              "Practice mock interviews, resume building, and self-introduction skills.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Rajesh Kumar",
      title: "Senior Full-Stack Developer at Google",
      experience: "8+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Rajesh is a seasoned full-stack developer with extensive experience in Python and React. He has worked on large-scale applications at Google and mentored 200+ students.",
    },
    projects: [
      "E-Commerce Web Application",
      "Social Media Platform",
      "Online Learning Portal",
      "Blogging & Content Management System (CMS)",
      "Job Portal Application",
    ],
    projectsDetails: [
      "Build a complete online store with product listings, cart, checkout, and payment integration.",
      "Develop a mini social network with user authentication, posts, likes, and comments.",
      "Create a course management system with video lessons, quizzes, and progress tracking.",
      "Design a platform for creating, editing, and publishing blogs with admin dashboards.",
      "Implement a job listing site where employers post jobs and users apply with profiles/resumes.",
    ],
  },
  "java-fullstack": {
    title: "Java <span class='text-yellow-400'>Fullstack</span>",
    description:
      "Master Core & Advanced Java for building robust enterprise applications.",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "🧑‍💻 Development",
    students: "400+",
    rating: 4.9,
    reviews: 250,
    brochure: "FRESHERS.pdf",
    outline: "Java Full Stack.pdf",
    image: "/java.jpg",
    highlights: [
      "Master object-oriented programming and advanced Java concepts.",
      "Build responsive UIs using HTML, CSS, JavaScript, and frameworks.",
      "Develop scalable applications using Spring Boot & Java EE.",
      "Work with MySQL, PostgreSQL, and NoSQL databases.",
      "Build seamless API integrations.",
      "Learn Git, GitHub, and deployment practices.",
      "Deploy applications on AWS, Azure, or other cloud platforms.",
      "Build end-to-end real-world applications to showcase your skills.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Java Full-Stack program",
      testimonials: [
        {
          name: "Keerthana",
          role: "Fresher",
          image: "/keer.png?height=80&width=80",
          content:
            "As a recent graduate, I had no prior industry exposure. The Java Full Stack program at Flair Technologies gave me the confidence to build real-world applications. The hands-on projects and mentorship helped me land my first job as a Full Stack Developer.",
          rating: 5,
          course: "Fresher",
        },
        {
          name: "Srinivas",
          role: "Data Analyst at Wipro",
          image: "/sri.png?height=80&width=80",
          content:
            "Coming from an IT background, I wanted to upgrade my skills to Full Stack. The structured curriculum, especially on Spring Boot and REST APIs, enhanced my expertise and helped me move into a higher role within my organization.",
          rating: 5,
          course: "IT Professional",
        },
        {
          name: "Divya",
          role: "DevOps Engineer at Infosys",
          image: "/divya.png?height=80&width=80",
          content:
            "I was from a non-IT background and initially hesitant about coding. Thanks to the trainers and their step by step guidance, I successfully transitioned into software development. Today, I work as a Java Full Stack Developer and feel confident in my career.",
          rating: 5,
          course: "Non-IT Professional",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT-Professionals",
    syllabus: [
      {
        module: "Database",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "What Is Database?",
              "What is Database Management System (DBMS)?",
              "What is Relational Model?",
              "Introduction to RDBMS.",
              "Brief on E.F CODD.",
            ],
          },
          {
            name: "Datatypes and Constraints",
            content: [
              "What are Datatypes?",
              "Types and Examples.",
              "How to use.",
              "What are Constraints?",
              "Types and Examples.",
              "How to use.",
            ],
          },
          {
            name: "Statements in SQL",
            content: [
              "Data Definition Language (DDL)",
              "Data Manipulation Language (DML)",
              "Transaction Control Language (TCL)",
              "Data Control Language (DCL)",
              "Data Query Language (DQL)",
            ],
          },
          {
            name: "Software installation",
            content: [
              "Installing and set up of software",
              "Working on Oracle 10g.",
            ],
          },
          {
            name: "Data Query Language (DQL)",
            content: [
              "Select",
              "From",
              "Where",
              "Group By",
              "Having",
              "Order By",
            ],
          },
          {
            name: "Operators",
            content: ["Types and Examples"],
          },
          {
            name: "Functions in SQL",
            content: [
              "Single Row Functions",
              "Multi Row Functions",
              "Max ()",
              "Min ()",
              "Sum ()",
              "Count ()",
            ],
          },
          {
            name: "Sub Query",
            content: [
              "Introduction to Sub Query",
              "Working of Sub Query",
              "Query Writing and Execution",
              "Types of Sub Query",
              "  - Single Row Sub Query",
              "  - Multi Row Sub Query",
              "Nested Sub Query",
            ],
          },
          {
            name: "Pseudo Columns",
            content: [
              "Introduction on Pseudo Columns",
              "ROWID",
              "ROWNUM",
              "Working and Usage",
            ],
          },
          {
            name: "JOINS",
            content: [
              "What Is Join?",
              "Types of Joins",
              "Cartesian Join",
              "Inner Join",
              "Outer Join",
              "Self-Join",
              "Queries and Examples",
            ],
          },
          {
            name: "Co-Related Sub Query",
            content: ["Working and Examples"],
          },
          {
            name: "Data Definition Language (DDL)",
            content: ["Create", "Rename", "Alter", "Truncate", "Drop"],
          },
          {
            name: "Data Manipulation Language (DML)",
            content: ["Insert", "Update", "Delete"],
          },
          {
            name: "Transaction Control Language (TCL)",
            content: ["Commit", "Save point", "Rollback"],
          },
          {
            name: "Data Control Language (DCL)",
            content: ["Grant", "Revoke"],
          },
          {
            name: "Normalization",
            content: [
              "Introduction to Normalization",
              "Types of Normal Forms",
              "Examples",
            ],
          },
          {
            name: "E R Diagrams",
            content: ["Introduction to ERD", "Examples"],
          },
        ],
      },
      {
        module: "Core Java",
        duration: "3 weeks",
        topics: [
          {
            name: "Introduction to programming",
            content: [
              "Introduction to java",
              "JDK installation",
              "Keywords, Identifiers, variables",
              "Operators",
              "Method/Functions",
              "Flow Control Statements",
              "Arrays",
              "Strings",
              "Interactive programs in java using Scanner",
            ],
          },
          {
            name: "Object Oriented Programming System",
            content: [
              "Classes and Objects",
              "Object creation",
              "Reference variable",
              "Global and local variables",
              "Constructors",
              "Aggregation",
              "Composition",
              "Inheritance",
              "Method Overloading",
              "Method Overriding",
              "Abstract classes",
              "Interfaces",
              "Typecasting",
              "JVM architecture",
              "Polymorphism",
              "Abstraction",
              "Java packages",
              "Access Specifies",
            ],
          },
          {
            name: "Java Built-in packages and API",
            content: [
              "Overview of java API",
              "Object class",
              "String, String Buffer and String Builder",
              "Exception Handling",
              "Threads and multithreading",
              "Wrapper Classes",
              "Data Structures",
              "Java Collection Frameworks",
              "File Handling",
              "Serialization",
              "Garbage Collector",
              "Encapsulation",
            ],
          },
        ],
      },
      {
        module: "J2EE",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to JAVA EE",
            content: [
              "What is computer?",
              "What is an application?",
              "Types of application?",
              "What is standalone application?",
              "What is web application?",
              "What is network?",
              "What is internet?",
              "What is intranet?",
              "What is server?",
              "What is database?",
              "What is an api?",
              "What is J2ee?",
              "Types of api’s",
              "JAVA EE 3-tier architecture",
              "JAVA EE 2-tier architecture",
            ],
          },
          {
            name: "JDBC",
            content: [
              "Introduction",
              "Steps to work with JDBC",
              "JDBC pre-requirements",
              "Installing MYSQL, DB server",
              "FIRST JDBC program",
            ],
          },
          {
            name: "Drivers",
            content: [
              "Introduction",
              "What is a JAR file?",
              "About driver class",
              "How to load the driver class into the program",
              "Types of Driver",
            ],
          },
          {
            name: "Db url",
            content: ["What is url?", "Structure of db url"],
          },
          {
            name: "Connection interface",
            content: [
              "Driver Manager class",
              "About the get connection method",
              "Connection object",
            ],
          },
          {
            name: "JDBC objects and methods",
            content: [
              "Introduction",
              "Dynamic and static sql queries",
              "Statement and prepared statement objects",
              "ExecuteQuery() and executeUpdate() methods",
            ],
          },
          {
            name: "Result Set",
            content: [
              "How to handle the result set object",
              "How to process the result set object",
            ],
          },
          {
            name: "Closing of JDBC objects",
            content: ["Why to close an object?", "How to close an object"],
          },
          {
            name: "SERVLET",
            content: [
              "Introduction",
              "What is web browser?",
              "What is web resources?",
              "Types of web resources",
              "What is web server?",
              "Installing of apache tomcat web server",
            ],
          },
          {
            name: "About servlet",
            content: [
              "Servlet introduction",
              "Creating the first servlet in web app",
              "Steps to create WAR file",
              "Build & Deployment process",
            ],
          },
          {
            name: "Web URL",
            content: [
              "Web url structure",
              "Query string",
              "HTTP & HTTPS protocols",
              "Key elements of HTTP request and HTTP response",
              "HTTP methods",
              "Difference between GET and POST",
            ],
          },
          {
            name: "Servlet Container",
            content: [
              "About servlet containers & its advantages",
              "Request and response objects",
              "GetParameter() and getParameters() methods",
              "About XML",
              "About deployment descriptor(web.xml)",
            ],
          },
          {
            name: "Servlet Hierarchy",
            content: [
              "Generic servlet",
              "HTTP Servlet",
              "Difference between Generic servlet and HTTP Servlet",
              "Servlet life cycle",
              "Single thread model servlets",
              "Servlet context and servlet config",
              "Redirect, Forward and Include",
            ],
          },
          {
            name: "Attributes",
            content: [
              "What is an attribute?",
              "Need of attributes",
              "Types of attributes",
            ],
          },
          {
            name: "Cookies",
            content: [
              "Introduction",
              "Steps to create a cookie in the servlet",
              "Types of cookies",
              "Life cycle of cookies",
              "Application of cookies",
            ],
          },
          {
            name: "Session",
            content: [
              "Introduction",
              "Steps to create a session in the webapp",
              "Types of session",
              "Life cycle of session",
              "Application of session",
            ],
          },
          {
            name: "JSP",
            content: [
              "Introduction",
              "How to create JSP",
              "Difference between Servlet and JSP",
            ],
          },
          {
            name: "JSP Scripting Elements",
            content: ["Scriptlet tag", "Expression tag", "Declaration tag"],
          },
          {
            name: "JSP implicit objects",
            content: [
              "Request object",
              "Response object",
              "Config object",
              "Application object",
              "Session object",
            ],
          },
          {
            name: "Exception handling in JSP",
            content: ["About is ErrorPage and errorPage"],
          },
          {
            name: "Jstl",
            content: ["Introduction", "JSTL core tags", "JSTL function tags"],
          },
        ],
      },
      {
        module: "Frameworks",
        duration: "3 weeks",
        topics: [
          {
            name: "Hibernate",
            content: [
              "Hibernate Overview",
              "Hibernate-ORM",
              "Hibernate Architecture",
              "Hibernate Environment Setup",
              "Hibernate Configuration",
              "Hibernate Session",
              "Hibernate Mapping Files",
              "Hibernate Mapping Types",
              "Hibernate Annotation",
              "Hibernate Query Language",
            ],
          },
          {
            name: "Springs",
            content: [
              "Introduction",
              "Why spring",
              "Spring modulus",
              "Spring application",
              "Spring in eclipse",
            ],
          },
          {
            name: "Spring IOC",
            content: [
              "IOC container",
              "Dependency injection",
              "Constructor injection",
              "Constructor injection dependent object",
              "Constructor injection with collection",
              "Constructor injection with collection 2",
              "Constructor injection with map",
              "Constructor injection in inheritance been",
              "Setter injection",
              "Setter injection dependent object",
              "Setter injection with collection",
              "Setter injection with collection 2",
              "Setter injection with map",
              "Injection with map 2",
              "Constructor injection versus setter injection",
              "Auto wiring",
              "Factory method",
            ],
          },
          {
            name: "Spring MVC",
            content: [
              "MVC introduction",
              "Multiple view pages",
              "Multiple controllers",
              "Model interface",
              "Request Param annotation",
              "Form tag library",
              "Form text field",
              "Form radio field",
              "Form checkbox",
              "Form drop-down list",
              "JDBC Template Example",
              "PreparedStatement",
              "ResultSetExtractor",
              "MVC CRUD Example",
              "SPEL Examples",
              "Variable in SPEL",
              "Spring MVC Validation",
            ],
          },
        ],
      },
      {
        module: "Web Services",
        duration: "1 week",
        topics: [
          {
            name: "Web Services",
            content: [
              "Webservices Introduction",
              "What is Webservices",
              "Why Webservices",
              "Real Time Examples of Webservices",
              "Different Webservices",
              "SOAP",
              "REST",
              "About HTTPS",
              "Understanding SOAP & REST Webservices",
              "Requirement of Webservices",
              "Advantage of Webservices",
              "Understanding XML & JSON",
              "JSON to Java Object and Vice-versa using GSON framework",
              "XML to Java Object and Vice-versa using JAXB framework",
              "Understanding Xpath",
              "SOAP Webservice using Spring & Apache CXF",
              "REST Webservice using Spring-REST & Apache Jersey",
            ],
          },
        ],
      },
      {
        module: "Web Technology",
        duration: "2 weeks",
        topics: [
          {
            name: "Web Technology",
            content: [
              "Introduction to Web-technology",
              "What is web?",
              "What is network?",
              "What is internet?",
              "What is web-development?",
              "What is browser?",
              "What is web-server?",
              "What is http?",
              "What is the use of http?",
              "What is html?",
              "What is website?",
              "What is web-page?",
              "Structure of Web",
              "Definition of all the points",
              "Install of Editors",
              "How to write program using editors",
            ],
          },
          {
            name: "HTML-5",
            content: [
              "Introduction",
              "Structure of html",
              "What is tags?",
              "Types of tags",
              "Attributes",
              "All tags attributes",
              "How to apply all the attributes in web-pages",
            ],
          },
          {
            name: "Table",
            content: [
              "How to create table in Html",
              "Attributes of table",
              "Example",
            ],
          },
          {
            name: "List",
            content: ["How to create list", "Attributes of list", "Example"],
          },
          {
            name: "Audio/Video",
            content: [
              "Attributes of audio/video tag",
              "How to create audio page",
              "How to create video page",
            ],
          },
          {
            name: "I-frame",
            content: [
              "What is nested web-page?",
              "How to create nested web-pages",
              "Attributes of nested web-pages",
            ],
          },
          {
            name: "SVG",
            content: ["How to define graphics in html", "Attributes of SVG"],
          },
          {
            name: "Form",
            content: [
              "What is form",
              "How to create forms using html",
              "How to create log-in page",
              "How to create registration page using form",
              "Attributes of form",
            ],
          },
          {
            name: "CSS-3",
            content: [
              "Introduction",
              "What is css?",
              "What is the use of css?",
              "Types of css",
              "How to call css inside html pages",
            ],
          },
          {
            name: "Background",
            content: [
              "How to set background properties",
              "Attributes for background",
            ],
          },
          {
            name: "Box-Model",
            content: ["What is box-model in css", "How to work with box-model"],
          },
          {
            name: "Selectors",
            content: [
              "What is selector?",
              "Types of selector",
              "How to apply selector",
            ],
          },
          {
            name: "Combinators",
            content: [
              "What is combinators?",
              "Types of combinators",
              "How it is related to selectors",
            ],
          },
          {
            name: "Pseudo-class & Pseudo-elements",
            content: [
              "What is pseudo-class?",
              "What is pseudo-elements",
              "Types of pseudo-class",
              "Types of pseudo-elements",
              "How to apply",
            ],
          },
          {
            name: "Transition, Transform & Animation in css",
            content: [
              "Applications of Transition, Transform & Animation",
              "Use of Transition, Transform & Animation",
              "Basic Project based on Transition, Transform & Animation.",
            ],
          },
          {
            name: "Javascript",
            content: [
              "Introduction",
              "What is javascript?",
              "What is the difference between java & javascript",
              "Application of javascript",
              "Advantages & Disadvantages of javascript",
              "Types of javascript",
              "Datatypes in javascript",
              "Looping Statement",
              "Conditional Statement",
            ],
          },
          {
            name: "Function & Arrays",
            content: [
              "What is function",
              "What is array",
              "Types of function",
              "Methods of array",
            ],
          },
          {
            name: "String & Object",
            content: [
              "What is string",
              "Methods of string",
              "What is object",
              "How to create object in js",
            ],
          },
          {
            name: "Date & Math",
            content: [
              "What is date method",
              "What is math method",
              "Methods of date & math",
            ],
          },
          {
            name: "Collection in js",
            content: ["What is collection", "Types of collection"],
          },
          {
            name: "Advanced array methods in js",
            content: [
              "Javascript Closure",
              "DOM elements in javascript",
              "Json in javascript",
              "Ajax in javascript",
              "Canvas using javascript",
            ],
          },
          {
            name: "Regular Expression in js",
            content: [
              "What is regular expression",
              "How to create dynamic form in js",
            ],
          },
          {
            name: "Bootstrap",
            content: [
              "Introduction",
              "What is bootstrap",
              "How to apply bootstrap in web-pages",
              "Benefits of using bootstrap",
              "Grid system in bootstrap",
              "Classes in bootstrap",
              "How to create table using bootstrap-class",
              "How to create forms using bootstrap-class",
              "What is carousel in bootstrap",
              "How to apply all of this create one project.",
            ],
          },
          {
            name: "Project Set-up",
            content: [
              "Responsive project using Html, Css, Javascript & bootstrap",
            ],
          },
        ],
      },
      {
        module: "Quantitative Aptitude",
        duration: "1 week",
        topics: [
          {
            name: "Numbers",
            content: [
              "Number system",
              "Divisibility rules",
              "Remainder theorem",
              "LCM and HCF (with modules)",
              "Unit place digits",
            ],
          },
          {
            name: "Arithmetic",
            content: [
              "Ratio and proportion",
              "Percentages",
              "Averages",
              "Time and work",
              "Time, speed and distance",
              "Alligation and mixtures",
              "Partnership",
              "Profit and loss",
              "Simple and Compound Interest",
              "Clocks",
            ],
          },
          {
            name: "Algebra",
            content: [
              "Fundamental equations",
              "Calendars",
              "Set theory",
              "Progressions",
              "Ages",
            ],
          },
          {
            name: "Geometry",
            content: ["Mensuration", "Basic Trigonometry"],
          },
        ],
      },
      {
        module: "Logical Reasoning",
        duration: "1 week",
        topics: [
          {
            name: "Logical Reasoning",
            content: [
              "Artificial language (Coding and decoding)",
              "Syllogisms",
              "Blood Relations",
              "Direction Sense",
              "Seating Arrangements (linear and circular)",
              "Visual Reasoning (two and three dimensional)",
              "Ranking",
            ],
          },
        ],
      },
      {
        module: "Verbal Ability",
        duration: "1 week",
        topics: [
          {
            name: "Verbal Ability",
            content: [
              "Tenses",
              "Subject Verb Agreement",
              "Active and Passive Voice",
              "Conditionals",
              "Prepositions",
              "Articles",
              "Direct and Indirect Speech",
              "Word Analogies",
              "Parajumbles",
              "Critical Reasoning",
              "Reading Comprehension",
              "Vocabulary Building",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "E-Commerce Web Application",
      "Hospital Management System",
      "Online Banking System",
      "Job Portal Application",
      "Learning Management System (LMS)",
    ],
    projectsDetails: [
      "Build a shopping platform with product catalog, cart, checkout, and payment gateway integration.",
      "Develop a system to manage patients, doctors, appointments, billing, and medical records.",
      "Create a secure platform for fund transfers, account management, and transaction history.",
      "Implement a platform where recruiters post jobs and candidates apply with profiles/resumes and schedule interviews seamlessly online.",
      "Design a portal with courses, student dashboards, quizzes, and progress tracking and personalized learning paths included.",
    ],
  },
  reactCourse: {
    title: "React<span class='text-yellow-400'>JS</span>",
    description:
      "Future-proof your career with ReactJS expertise by building production-ready projects and real-time web applications.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "🧑‍💻 Development",
    students: "700+",
    rating: 4.8,
    reviews: 500,
    brochure: "ReactJS.pdf",
    outline: "ReactJS.pdf",
    image: "/react.jpg",
    highlights: [
      "Understand ReactJS fundamentals, components, and JSX syntax.",
      "Manage state and props for dynamic UI development.",
      "Work with React Hooks for cleaner, functional code.",
      "Implement routing and navigation using React Router.",
      "Connect React apps with APIs for real-time data handling.",
      "Apply Redux or Context API for state management.",
      "Build responsive and interactive applications.",
      "Deploy React apps with best practices.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our ReactJS program",
      testimonials: [
        {
          name: "Priya",
          role: "Fresher",
          image: "/priya.png?height=80&width=80",
          content:
            "As a fresher, ReactJS training here gave me the confidence and skills to build real-world projects. Thanks to Flair for the guidance, I landed my first job as a React Developer.",
          rating: 5,
          course: "Fresher",
        },
        {
          name: "Shahini",
          role: "Data Analyst at Wipro",
          image: "/sha.png?height=80&width=80",
          content:
            "Coming from a non-IT background, I never imagined coding could be this simple. With step-by-step ReactJS training, I successfully transitioned into a Front-End Developer role.",
          rating: 5,
          course: "Non-IT Graduate",
        },
        {
          name: "Arjun",
          role: "DevOps Engineer at Infosys",
          image: "/arjun.png?height=80&width=80",
          content:
            "Already working in web development, I wanted to specialize in ReactJS. This course sharpened my skills, practical project skills, and helped me move into a higher-paying role.",
          rating: 5,
          course: "IT Professional",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT-Professionals",
    syllabus: [
      {
        module: "HTML",
        duration: "1 week",
        topics: [
          {
            name: "HTML 4 & Older Versions",
            content: [
              "HTML Fundamentals Introduction",
              "Headings",
              "Tags and Types",
              "Elements and Types",
              "Diff b/w inline and block",
              "White spaces",
              "Lists and types",
              "Tables and Examples",
              "Formatting Tables",
              "Spanning Columns and Rows",
              "Nested Elements",
              "Links & different ways of linking",
              "Images, absolute and relative paths",
            ],
          },
          {
            name: "HTML Forms Fundamentals",
            content: [
              "Basics of forms",
              "Form Attributes",
              "Form Elements/inputs and usage",
            ],
          },
          {
            name: "HTML 5 & Overview",
            content: [
              "Introduction To HTML5",
              "Limitations of HTML4 and older versions",
              "Overview and benefits of HTML5",
              "Importance of Doctype",
              "Details of new features of HTML 5",
              "Overview of semantic elements",
              "Page layout and structure",
              "Benefits of semantic elements",
              "Header & Footer",
              "Section and Articles",
              "Aside & Nav",
            ],
          },
        ],
      },
      {
        module: " Elements & Attributes ",
        duration: "1 week",
        topics: [
          {
            name: "Form Elements & Attributes",
            content: [
              "New Input Elements",
              "New Elements in Forms",
              "New Attributes in Form Elements",
            ],
          },
        ],
      },
      {
        module: " CSS2 & CSS3",
        duration: "1 week",
        topics: [
          {
            name: "CSS2 & CSS3",
            content: [
              "Introduction To CSS3",
              "Ways to apply CSS",
              "Selectors & Examples",
              "  - Global Selectors",
              "  - Tag/Element Selectors",
              "  - Class Selectors",
              "  - ID Selectors",
              "  - Attribute selectors & Types",
              "  - Child Selectors & Types",
              "  - Sibling Selectors & Types",
              "  - Pseudo Selectors & Types",
              "  - Latest Selectors",
              "All Properties",
            ],
          },
        ],
      },
      {
        module: "JavaScript",
        duration: "2 weeks",
        topics: [
          {
            name: "JavaScript",
            content: [
              "Introduction",
              "Data types and data structures in JS",
              "Control structures (if, if-else, while, for, switch case statements)",
              "Dynamic creation and manipulation of DOM elements using JS",
              "Adding dynamic event listeners to DOM elements",
              "Event capturing and event bubbling",
              "Validations using key char codes",
              "Strings and predefined methods",
              "Arrays",
              "Predefined methods in arrays",
              "Objects",
              "JSON",
            ],
          },
        ],
      },
      {
        module: " ES6 – ES9",
        duration: "1 week",
        topics: [
          {
            name: "ES6 – ES9",
            content: [
              "History of JavaScript",
              "What is ES6",
              "A word on babel",
              "Block scope, let & const",
              "Template literals",
              "Arrow functions",
              "Spread and Rest operators",
              "Object literal improvements",
              "Destructuring",
              "Classes",
              "Inheritance",
              "Static properties and methods",
              "Promises",
              "Iterators and Iterables",
              "Generators",
              "Modules",
            ],
          },
        ],
      },
      {
        module: "ReactJS",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to React",
            content: [
              "What is React?",
              "Why React?",
              "React version history",
              "React 16 vs React 15",
              "Just React – Hello World",
              "Using create-react-app",
              "Anatomy of react project",
              "Running the app",
              "Debugging first react app",
            ],
          },
          {
            name: "Templating using JSX",
            content: [
              "Working with React. createElement",
              "Expressions",
              "Using logical operators",
              "Specifying attributes",
              "Specifying children and Fragments",
            ],
          },
          {
            name: "It's all about components",
            content: [
              "Significance of component architecture",
              "Types of components",
              "Functional",
              "Class based",
              "Pure Component",
              "Component Composition",
            ],
          },
          {
            name: "Working with State & Props",
            content: [
              "What is state and its significance.",
              "Read state and set state.",
              "Passing data to component using props",
              "Validating props using prop Types",
              "Supplying default values to props using default Props",
            ],
          },
          {
            name: "Rendering Lists",
            content: [
              "Using react key prop.",
              "Using map function to iterate on arrays to generate elements.",
            ],
          },
          {
            name: "Event handling in React",
            content: [
              "Understanding React event system",
              "Understanding Synthetic event",
              "Passing arguments to event handlers",
            ],
          },
          {
            name: "Understanding component lifecycle and handling errors",
            content: [
              "Understand the lifecycle methods.",
              "Handle errors using error boundaries.",
            ],
          },
          {
            name: "Working with Forms",
            content: [
              "Controlled components",
              "Uncontrolled components",
              "Understand the significance to default Value prop.",
              "Using react ref prop to get access to DOM element.",
            ],
          },
          {
            name: "Context",
            content: [
              "What is context",
              "When to use context",
              "Create Context",
              "Context.Provider",
              "Context.Consumer",
              "Reading context in class",
            ],
          },
          {
            name: "Hooks",
            content: [
              "What are hooks",
              "Why do you need hooks",
              "Different types of hooks",
              "Using state and effect hooks",
              "Rules of hooks",
            ],
          },
          {
            name: "Routing with React Router",
            content: [
              "Setting up react router",
              "Understand routing in single page applications",
              "Working with Browser Router and Hash Router components",
              "Configuring route with Route component",
            ],
          },
          {
            name: "Just Redux",
            content: [
              "What is redux",
              "Why redux",
              "Redux principles",
              "Install and setup redux",
              "Creating actions, reducer and store",
            ],
          },
          {
            name: "React Redux",
            content: [
              "What is React Redux",
              "Why React Redux",
              "Install and setup",
              "Presentational vs Container components",
              "Understanding high order component",
              "Understanding mapStateToProps and mapDispatchToProps usage",
            ],
          },
        ],
      },
    ],

    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Todo List Application",
      "Weather App",
      "Student Management System",
      "Recipe Finder App",
      "Blog Posting Application",
    ],
    projectsDetails: [
      "Build a simple task manager to add, edit, mark complete, and delete tasks using React state.",
      "Create a weather forecasting app fetching real-time data from APIs and displaying detailed city weather reports.",
      "Develop a student records system to add, update, and manage student data with forms, tables, and state.",
      "Design an app to search and display recipes by ingredients using external APIs with React components.",
      "Build a blogging platform for creating, editing, deleting posts with React Router, forms, and CRUD operations.",
    ],
  },

  "power-bi": {
    title: "Microsoft  <span class='text-yellow-400'>Power BI</span>",
    description:
      "Master Microsoft Power BI to transform raw data into interactive dashboards, insightful reports, and business intelligence.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "📊 Analytics",
    students: "1500+",
    rating: 4.9,
    reviews: 750,
    brochure: "Power BI.pdf",
    outline: "Power BI.pdf",
    image: "/pbi.jpg",
    highlights: [
      "Learn Power BI essentials and environment setup for reporting.",
      "Import, clean, and transform data using Power Query.",
      "Build data models and create relationships between datasets.",
      "Design interactive dashboards and effective visual reports.",
      "Use DAX expressions for calculations and advanced analytics",
      "Publish, share, and collaborate on Power BI reports.",
      "Integrate Power BI with analytics tools.",
      "Apply SQL for queries and data analysis.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Microsoft Power BI program",
      testimonials: [
        {
          name: "Anjali Rao",
          role: "Fresher",
          image: "/anjalir.jpg?height=80&width=80",
          content:
            "Coming from a commerce background, I never imagined working with data tools. Flair Technologies’ Power BI training made it simple to clean, model, and visualize data. Within weeks, I was building dashboards for my team and adding real value to my role.",
          rating: 5,
          course: "Non-IT Professional",
        },
        {
          name: "Suresh Naidu",
          role: "Data Analyst at Wipro",
          image: "/sureshn.jpg?height=80&width=80",
          content:
            "As an HR professional, I struggled with Excel reports and manual tracking. Power BI at Flair Technologies gave me confidence to create automated dashboards. Now, I generate insightful reports for employee performance and hiring metrics in just a few clicks.",
          rating: 5,
          course: "Non-IT Professional",
        },
        {
          name: "Pratyusha",
          role: "DevOps Engineer at Infosys",
          image: "/prathusha.jpg?height=80&width=80",
          content:
            "Already working in analytics, I wanted to upgrade my skills. Flair Technologies’ Power BI course deepened my knowledge of DAX and advanced modeling. I now design interactive dashboards that tell clear business stories and support decision-making in my organization.",
          rating: 5,
          course: "Data Analyst",
        },
      ],
    },
    nextBatch: [{ starts: "Every Month", mode: "Online / Classroom-BLR/HYD" }],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Power BI Essentials & Environment Setup",
        duration: "0.5 week",
        topics: [
          {
            name: "Power BI Essentials & Environment Setup",
            content: [
              "What is Power BI - Overview of Desktop, Service, Mobile",
              "Installing Power BI Desktop & Initial Setup",
              "Understanding Power BI Components (Desktop, Service, Gateway)",
              "Power BI Licensing: Free, Pro, Premium, PPU",
            ],
          },
        ],
      },
      {
        module: "Data Loading and Transformation (Power Query / M Language)",
        duration: "1 week",
        topics: [
          {
            name: "Data Loading and Transformation (Power Query / M Language)",
            content: [
              "Connecting to Data Sources (flat files, RDBMS Databases, Semantic Models)",
              "Introduction to Power Query Editor",
              "Data Shaping & Cleaning (Remove, Filter, Replace, Split)",
              "Merge vs Append Queries",
              "Data Types and Formatting",
              "Understanding Query Folding",
              "Introduction to M Language (Functions & Custom Columns)",
            ],
          },
        ],
      },
      {
        module: "Data Modelling and Relationships",
        duration: "0.5 week",
        topics: [
          {
            name: "Data Modelling and Relationships",
            content: [
              "Star vs Snowflake Schema",
              "Creating and Managing Relationships",
              "Fact Tables vs Dimension Tables",
              "Best Practices for Model Design (Normalization/Denormalization)",
              "Using Date Tables and Auto Date/Time",
            ],
          },
        ],
      },
      {
        module: "Visualizations and Report Design",
        duration: "2 weeks",
        topics: [
          {
            name: "Visualizations and Report Design",
            content: [
              "Default & Common Visuals",
              "Slicers, Filters, Drill-downs",
              "Conditional Formatting & Interactions",
              "Bookmarks, Selections & Navigation",
              "Drillthrough Pages & Tooltip Pages",
              "Using Custom Visuals from AppSource",
              "Best Practices for Visual & UX Design",
            ],
          },
        ],
      },
      {
        module: "DAX (Data Analysis Expressions)",
        duration: "1.5 weeks",
        topics: [
          {
            name: "DAX (Data Analysis Expressions)",
            content: [
              "Calculated Columns vs Measures",
              "Aggregation & Math Functions ",
              "Logical Functions",
              "Date & Time Intelligence Functions",
              "Text or String Functions",
              "Filter & Row Context",
              "Advanced DAX Functions",
              "DAX Performance Tuning",
            ],
          },
        ],
      },
      {
        module: "Publishing, Sharing & Collaboration",
        duration: "1 week",
        topics: [
          {
            name: "Publishing, Sharing & Collaboration",
            content: [
              "Publishing Reports to Power BI Service",
              "Workspaces, Apps & Access Control",
              "Scheduled & Incremental Data Refresh",
              "Row-Level Security (RLS) & Object-Level Security (OLS)",
              "Report Sharing, Subscriptions, Alerts",
              "Gateway Installation & Management",
            ],
          },
        ],
      },
      {
        module: "Advanced Analytics & Integration",
        duration: "1 week",
        topics: [
          {
            name: "Advanced Analytics & Integration",
            content: [
              "Dataflows and Reusable ETL in Service",
              "Deployment Pipelines",
              "Self - Service BI Implementation",
              "Power Automate flows creation for datasets refresh",
              "Intake & Survey Power Apps Forms creation",
            ],
          },
        ],
      },
      {
        module: "SQL",
        duration: "1.5 weeks",
        topics: [
          {
            name: "SQL",
            content: [
              "Table Creation, Insert, Update, Delete data, Select",
              "Clause Operations (Where, Group by, Having, Order by)",
              "Operators (IN, LIKE, ISNULL, Union)",
              "Joins",
              "Sub Queries (Inner Query & Outer Query), CTE",
              "Data Modeling using SQL",
              "Views Creation",
              "Analytical Functions (Rank, Dense_Rank, Partition by)",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "E-commerce Sales Analysis",
      "Human Resources Dashboard",
      "Finance Dashboard",
      "360° Business Intelligence Dashboard",
      "Insurance Insights Dashboard",
    ],
    projectsDetails: [
      "Objective: Analyze customer behavior and order trends for an online store.",
      "Objective: Track employee performance, attrition, and demographics.",
      "Objective: Create a P&L statement with monthly and yearly comparisons.",
      "Objective: Build an end-to-end BI solution for a fictional company.",
      "Objective: Analyze and visualize insurance metrics for data-driven decisions.",
    ],
  },

  "power-apps": {
    title:
      "Microsoft Power Apps & <span class='text-yellow-400'>Automate</span>",
    description:
      "Master Power Apps, Automate Workflows, and SQL Integration with Complete Practical Training Program.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "📊 Analytics",
    students: "250+",
    rating: 4.6,
    reviews: 150,
    brochure: "PowerApps.pdf",
    outline: "PowerApps.pdf",
    image: "/PowerApps.jpg",
    highlights: [
      "Understand Power Apps and the Microsoft Power Platform ecosystem.",
      "Build and customize apps using Canvas and Model-Driven approaches.",
      "Work with PowerApps Studio, templates, environments, and security settings.",
      "Automate workflows with Power Automate using triggers, actions, and approvals.",
      "Create and manage Cloud Flows, Desktop Flows, and Business Process Flows.",
      "Integrate apps and flows with Microsoft Dataverse, SharePoint, Teams, and gateways.",
      "Customizations, insights & AI.",
      "SQL, modeling & analytics.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Microsoft Power Apps & Automate program",
      testimonials: [
        {
          name: "Neha Varma",
          role: "Fresher",
          image: "/nehav.jpg?height=80&width=80",
          content:
            "This course gave me the confidence to build business apps and automate workflows at my workplace. The SQL module helped me handle backend tasks more effectively.",
          rating: 5,
          course: "Software Engineer",
        },
        {
          name: "Kavya Reddy",
          role: "Data Analyst at Wipro",
          image: "/kavyare.jpg?height=80&width=80",
          content:
            "Learning Power Apps and Automate streamlined my daily reporting tasks. I can now design solutions independently without depending fully on IT teams.",
          rating: 5,
          course: "Business Analyst",
        },
        {
          name: "Rohit Kumar",
          role: "DevOps Engineer at Infosys",
          image: "/rohitre.jpg?height=80&width=80",
          content:
            "The hands-on training helped me understand how to connect apps, workflows, and data. I now lead automation projects that save time for my entire team.",
          rating: 5,
          course: "Project Manager",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " IT Professionals",
    eligibleLearners: "IT Professionals",
    syllabus: [
      {
        module: "Introduction to Power Apps & Power Platform",
        duration: "0.5 week",
        topics: [
          {
            name: "Introduction to Power Apps & Power Platform",
            content: [
              "Introduction to Power Apps",
              "What is Power Apps?",
              "Find and Run Apps (Browser, SharePoint Online, Microsoft Teams, AppSource)",
              "Use Model-Driven Apps",
              "Introduction to the O365 Power Platform",
              "The O365 Platform, Power Platform overview",
              "Purpose of PowerApps, Flow, and Power BI",
            ],
          },
        ],
      },
      {
        module: "Getting Started with Power Apps",
        duration: "0.5 week",
        topics: [
          {
            name: "Getting Started with Power Apps",
            content: [
              "Sign in to Power Apps",
              "Find with Unified Search",
              "PowerApps Studio Overview",
              "Understand app types, environments, and security",
              "Create app templates",
              "Create apps from scratch",
            ],
          },
        ],
      },
      {
        module: "Canvas Apps",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Canvas Apps",
            content: [
              "What are Canvas Apps?",
              "System Requirements, Limits, and Configuration",
              "Keyboard Shortcuts",
              "Use data services and connections",
              "Galleries, formulas, and variables",
            ],
          },
        ],
      },
      {
        module: "Model-Driven Apps",
        duration: "1 week",
        topics: [
          {
            name: "Model-Driven Apps",
            content: [
              "Design and Build an App",
              "Share and Manage an App",
              "Advanced App Making and Customisation",
              "Use Performance Insights",
              "Embed Power Apps and Power Automate in SharePoint and Teams",
            ],
          },
        ],
      },
      {
        module: "Power Automate Basics",
        duration: "1 week",
        topics: [
          {
            name: "Power Automate Basics",
            content: [
              "Who is Power Automate for?",
              "Types of Flow",
              "Flow Studio Overview",
              "Understand triggers, actions, and conditions",
              "Pull dynamic content from other flow actions",
              "Save, Check Flow, Test, and Run History",
              "Approval features in flows",
            ],
          },
        ],
      },
      {
        module: "Cloud & Desktop Flows",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Cloud Flows",
            content: [
              "Popular Cloud Flow Scenarios",
              "Use Flows with Microsoft Dataverse",
              "Solutions and AI Builder",
              "Troubleshooting flows",
            ],
          },
          {
            name: "Desktop Flows",
            content: [
              "Setup Power Automate for Desktop",
              "Architecture and Dataverse Database",
              "Create Desktop Flows",
              "Trigger a Desktop Flow from Another Flow",
            ],
          },
        ],
      },
      {
        module: "Business Process Flows & Data Connections",
        duration: "1 week",
        topics: [
          {
            name: "Business Process Flows & Data Connections",
            content: [
              "Create a Business Process Flow",
              "Instant Flows in Business Process Flows",
              "Enhance Business Process Flows with Branching",
              "Add Custom Controls to Business Process Flows",
              "Connect to Data",
              "Available Connections",
              "Manage Connections",
              "Manage and Understand Gateways",
            ],
          },
        ],
      },
      {
        module: "SQL for Power Platform",
        duration: "1 week",
        topics: [
          {
            name: "SQL for Power Platform",
            content: [
              "Table Creation, Insert, Update, Delete data, Select",
              "Clause Operations (Where, Group by, Having, Order by)",
              "Operators (IN, LIKE, ISNULL, Union)",
              "Joins",
              "Sub Queries (Inner Query & Outer Query)",
              "Data Modeling using SQL",
              "Views Creation",
              "Analytical Functions (Rank, Dense_Rank, Partition by)",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "Employee Leave Management System",
      "Expense Tracking Application",
      "Student Course Enrollment Portal",
      "Helpdesk Ticketing System",
      "Inventory Management Dashboard",
    ],
    projectsDetails: [
      "Manage leave requests with automated approvals and SQL-based record keeping.",
      "Track expenses with categorized entries and automated email summaries.",
      "Register students and automate enrollment confirmations with a SQL database backend.",
      "Raise, assign, and track IT support tickets with automated workflows.",
      "Monitor stock levels and trigger low-inventory alerts using Power Automate.",
    ],
  },

  "Azure-Data": {
    title: "Azure Data <span class='text-yellow-400'>Engineer</span>",
    description:
      "Master Advanced Azure Data Engineering with ADF, Databricks, Synapse, Security, Real-Time Processing, and Automation.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "📊 Analytics",
    students: "300+",
    rating: 4.9,
    reviews: 250,
    brochure: "ADE.pdf",
    outline: "ADE.pdf",
    image: "/ade.jpg",
    highlights: [
      "Design advanced Azure architectures with Data Lake and Lakehouse.",
      "Build and orchestrate complex pipelines in Azure Data Factory.",
      "Implement real-time ingestion using Event Hubs and Stream Analytics.",
      "Work with Databricks for Delta Lake and Spark optimization.",
      "Master Synapse for advanced modeling, queries, and analytics.",
      "Apply security and governance with Purview, Key Vault, RBAC.",
      "Optimize and automate pipelines.",
      "Capstone: enterprise Azure solution.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Azure Data Engineer program",
      testimonials: [
        {
          name: "Isha Sharma",
          role: "Fresher",
          image: "/ishas.jpg?height=80&width=80",
          content:
            "The Advanced Azure Data Engineer course helped me master Databricks, ADF, and Synapse in real-world scenarios. The practical approach and project-based learning made a huge difference. I now confidently design and optimize enterprise data pipelines, implement governance, and deliver insights faster, which has positively impacted my role at work.",
          rating: 5,
          course: "Data Engineer",
        },
        {
          name: "Arjun Khanna",
          role: "Data Analyst at Wipro",
          image: "/arjunkk.jpg?height=80&width=80",
          content:
            "I enrolled to upskill beyond Power BI and this course exceeded expectations. The advanced modules on ADF orchestration, Purview, and Synapse modeling were excellent. I applied these skills directly to automate data flows and ensure compliance in my projects. It has improved my efficiency and expanded my professional capabilities.",
          rating: 5,
          course: "Senior BI Developer",
        },
        {
          name: "Ritika Gupta",
          role: "DevOps Engineer at Infosys",
          image: "/ritikag.jpg?height=80&width=80",
          content:
            "As a student preparing for placements, I found this training extremely valuable. The hands-on capstone project helped me build my first end-to-end data solution using Azure services like Databricks, Synapse, and Event Hubs. It bridged the gap between classroom theory and industry practice, boosting my confidence for interviews and jobs.",
          rating: 5,
          course: "Graduate Student",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-BLR/HYD" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Advanced Data Architecture & Storage in Azure",
        duration: "1 week",
        topics: [
          {
            name: "Modern Data Architectures",
            content: [
              "Data Warehouse vs Data Lake vs Lakehouse",
              "When to use each in real-world scenarios",
              "Hybrid architectures & industry case studies",
            ],
          },
          {
            name: "Azure Data Lake Gen2 Advanced Features",
            content: [
              "Hierarchical Namespace for folder-based storage",
              "Lifecycle management policies",
              "Zone design (Raw, Curated, Trusted layers)",
            ],
          },
          {
            name: "Partitioning, Indexing & File Optimization",
            content: [
              "Partition strategy for large datasets",
              "Small file problem & compaction strategies",
              "Indexing data in Azure Synapse & Data Lake",
            ],
          },
          {
            name: "Access Control Lists & Security",
            content: [
              "Setting ACLs on ADLS Gen2 folders/files",
              "RBAC roles & granular security",
              "Managed identities for secure connections",
            ],
          },
          {
            name: "Data Security & Encryption",
            content: [
              "Encryption at rest with SSE & CMK",
              "Encryption in transit with TLS",
              "Key rotation policies",
            ],
          },
        ],
      },
      {
        module: "Azure Data Factory (ADF) - Advanced Orchestration",
        duration: "1 week",
        topics: [
          {
            name: "Designing Complex ETL/ELT Pipelines",
            content: [
              "Advanced pipeline orchestration patterns",
              "Reusable activities & templates",
            ],
          },
          {
            name: "Parameterization & Dynamic Content",
            content: [
              "Expressions & functions in pipelines",
              "Metadata-driven parameterization",
            ],
          },
          {
            name: "Metadata-Driven Pipelines",
            content: [
              "Config-driven ETL approach",
              "Dynamic source-to-target mapping",
            ],
          },
          {
            name: "Error Handling & Logging",
            content: [
              "Try-Catch implementation in ADF",
              "Custom logging using Azure Monitor",
            ],
          },
          {
            name: "Monitoring & Alerts",
            content: [
              "Built-in monitoring features",
              "Alerts with Azure Monitor & Log Analytics",
            ],
          },
          {
            name: "CI/CD with ADF",
            content: [
              "Git integration with ADF",
              "Dev, Test, Prod deployment strategy",
              "Automated release pipelines",
            ],
          },
        ],
      },
      {
        module: "Real-Time Data Processing with Event Hubs & Stream Analytics",
        duration: "1 week",
        topics: [
          {
            name: "Event Hubs & IoT Hub Advanced Ingestion",
            content: ["Partitioning in Event Hubs", "IoT telemetry streaming"],
          },
          {
            name: "Stream Analytics SQL - Aggregations & Joins",
            content: [
              "Joining streams & reference data",
              "Advanced aggregations",
            ],
          },
          {
            name: "Windows in Stream Processing",
            content: [
              "Tumbling, Sliding, Hopping windows",
              "Use cases like fraud detection & IoT monitoring",
            ],
          },
          {
            name: "Real-Time Dashboards",
            content: [
              "Stream output to Power BI",
              "Stream to Cosmos DB for real-time queries",
            ],
          },
          {
            name: "Performance Optimization",
            content: [
              "Scaling Stream Analytics jobs",
              "Query performance best practices",
            ],
          },
        ],
      },
      {
        module: "Azure Databricks for Data Engineering",
        duration: "1 week",
        topics: [
          {
            name: "Advanced Spark Optimization",
            content: [
              "Shuffle partitions & skew handling",
              "Caching strategies",
              "Adaptive query execution",
            ],
          },
          {
            name: "Delta Lake Advanced Features",
            content: [
              "ACID transactions",
              "Data versioning & rollback",
              "Schema enforcement & evolution",
            ],
          },
          {
            name: "Medallion Architecture",
            content: [
              "Bronze, Silver, Gold layers",
              "Best practices for data pipeline layering",
              "Incremental data loads",
            ],
          },
          {
            name: "Cluster Optimization",
            content: [
              "Autoscaling & job clusters",
              "Optimized runtime versions",
            ],
          },
          {
            name: "MLflow for Model Management",
            content: [
              "Tracking experiments",
              "Registering & deploying ML models",
            ],
          },
          {
            name: "Integration with ADF & Event Hubs",
            content: [
              "Orchestrating Databricks notebooks from ADF",
              "Streaming data ingestion from Event Hubs",
            ],
          },
        ],
      },
      {
        module: "Synapse Analytics - Advanced Data Modelling & Queries",
        duration: "1 week",
        topics: [
          {
            name: "Dedicated vs Serverless SQL Pools",
            content: ["When to use each", "Cost & performance comparison"],
          },
          {
            name: "Materialized Views & Caching",
            content: [
              "Performance boost with materialized views",
              "Managing cache refresh policies",
            ],
          },
          {
            name: "Workload Management",
            content: [
              "Resource classes & workload groups",
              "Isolating workloads for performance",
            ],
          },
          {
            name: "Query Optimization",
            content: [
              "Statistics & distribution strategies",
              "Best practices for large-scale queries",
            ],
          },
          {
            name: "PolyBase & External Tables",
            content: [
              "Loading external big data",
              "Querying from external sources",
            ],
          },
          {
            name: "Real-Time Analytics",
            content: [
              "Synapse + Power BI integration",
              "Near real-time pipelines with Synapse",
            ],
          },
        ],
      },
      {
        module: "Security, Governance & Compliance in Azure Data Solutions",
        duration: "1 week",
        topics: [
          {
            name: "Encryption & Key Management",
            content: [
              "Transparent Data Encryption",
              "Azure Key Vault integration",
            ],
          },
          {
            name: "Advanced Access Controls",
            content: ["RBAC vs ABAC", "Hierarchical security models"],
          },
          {
            name: "Data Masking & Row-Level Security",
            content: [
              "Dynamic data masking",
              "Row-level & column-level security",
            ],
          },
          {
            name: "Data Cataloging with Azure Purview",
            content: ["Data lineage", "Glossary & metadata management"],
          },
          {
            name: "Compliance Frameworks",
            content: [
              "GDPR, HIPAA, SOC 2 in Azure",
              "Implementing compliance controls",
            ],
          },
        ],
      },
      {
        module: "Monitoring, Optimization & Automation",
        duration: "1 week",
        topics: [
          {
            name: "Monitoring Data Workloads",
            content: ["Azure Monitor dashboards", "Log Analytics queries"],
          },
          {
            name: "Query Performance Tuning",
            content: [
              "Synapse queries optimization",
              "Spark jobs performance tuning",
            ],
          },
          {
            name: "Cost Optimization",
            content: [
              "Reserved instances vs pay-as-you-go",
              "Storage lifecycle management",
            ],
          },
          {
            name: "Infrastructure as Code",
            content: ["ARM templates", "Bicep deployment scripts"],
          },
          {
            name: "CI/CD for Data Pipelines",
            content: [
              "Azure DevOps pipelines",
              "Automated testing for data flows",
            ],
          },
          {
            name: "Automation of Deployments",
            content: [
              "Scheduling deployments",
              "Blue-green deployment strategies",
            ],
          },
        ],
      },
      {
        module: "Capstone Project - Enterprise Data Engineering Solution",
        duration: "1 week",
        topics: [
          {
            name: "Requirement Gathering & Design",
            content: [
              "Understand business use case",
              "Choose right architecture",
            ],
          },
          {
            name: "Data Ingestion (Batch + Real-Time)",
            content: [
              "Batch ingestion from SQL & APIs",
              "Real-time ingestion from IoT/Event Hubs",
            ],
          },
          {
            name: "Lakehouse Implementation",
            content: [
              "Using Databricks Delta Lake",
              "Building medallion layers",
            ],
          },
          {
            name: "Orchestrating with ADF",
            content: [
              "Pipeline for batch + real-time flows",
              "Monitoring & logging",
            ],
          },
          {
            name: "Security & Governance",
            content: ["Apply security policies", "Purview for data lineage"],
          },
          {
            name: "Real-Time Analytics",
            content: ["Synapse + Power BI dashboards", "Low latency reporting"],
          },
          {
            name: "CI/CD & Documentation",
            content: [
              "Automating deployments",
              "Creating architecture documentation",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "Real-Time IoT Data Pipeline",
      "Enterprise Data Lakehouse Implementation",
      "Customer 360 Analytics Platform",
      "Financial Fraud Detection System",
      "Retail Demand Forecasting Solution",
    ],
    projectsDetails: [
      "Build a streaming data pipeline using Event Hubs, Databricks, and Power BI dashboards.",
      "Design and implement a Lakehouse with ADLS Gen2, Delta Lake, and Databricks pipelines.",
      "Create a unified view of customer data across CRM, ERP, and web sources with Synapse.",
      "Stream and analyze transactions in real time to identify anomalies and trigger alerts.",
      "Process sales data, apply forecasting models with MLflow, and publish insights to Power BI.",
    ],
  },

  alteryx: {
    title: "Alteryx <span class='text-yellow-400'>Designer</span>",
    description:
      "Master Alteryx Designer to automate workflows, blend data, and create powerful analytics solutions with ease.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "📊 Analytics",
    students: "300+",
    rating: 4.9,
    reviews: 250,
    brochure: "Alteryx.pdf",
    outline: "Alteryx.pdf",
    image: "/alteryx.jpg",
    highlights: [
      "Understand Alteryx Designer interface, workflows, and file types.",
      "Import, clean, and output data from multiple sources.",
      "Prepare and transform data using formulas and cleansing tools.",
      "Apply filtering, sampling, and sorting techniques for analysis.",
      "Blend datasets with joins, unions, and fuzzy matching.",
      "Summarize, pivot, and restructure data with transformation tools.",
      "Use in-database tools and connectors.",
      "Build macros, apps, and reports.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Alteryx Designer program",
      testimonials: [
        {
          name: "Priya Reddy",
          role: "Fresher",
          image: "/priyari.jpg?height=80&width=80",
          content:
            "As a fresher, I was nervous about handling real datasets. Flair Technologies’ Alteryx Designer training helped me quickly grasp data preparation and reporting. The hands-on projects gave me confidence, and within months, I landed my first job.",
          rating: 5,
          course: "B.Tech Fresher",
        },
        {
          name: "Vandhana M",
          role: "Data Analyst at Wipro",
          image: "/Vandu.jpg?height=80&width=80",
          content:
            "Working in IT support, I wanted to move toward data analytics. The Alteryx course at Flair Technologies gave me practical skills in joins, transformations, and macros. I now automate workflows for my team, saving hours of manual effort.",
          rating: 5,
          course: "IT Professional",
        },
        {
          name: "Sneha Pillai",
          role: "DevOps Engineer at Infosys",
          image: "/snehap.jpg?height=80&width=80",
          content:
            "Coming from a finance role, I had no prior technical experience. Flair Technologies made Alteryx simple to learn. I can now clean and analyze financial data, create dashboards, and present reports effectively-skills that directly improved my job performance.",
          rating: 5,
          course: "Non-IT Professional",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Introduction to Alteryx",
        duration: "0.5 week",
        topics: [
          {
            name: "Introduction to Alteryx",
            content: [
              "What is ETL & ELT in Modern Data Pipelines",
              "Why Alteryx - Role in Analytics & Automation",
              "Understanding Alteryx Designer",
              "Designer Interface Tour (Canvas, Configuration Pane, Results)",
              "Workflow & User Settings",
              "Installation & License Configuration",
              "Alteryx File Types: .yxmd, .yxdb, .yxmc, .yxwz",
            ],
          },
        ],
      },
      {
        module: " Input & Output Tools",
        duration: "0.5 week",
        topics: [
          {
            name: "Input & Output Tools",
            content: [
              "Input Data (Local, Database, Cloud, APIs)",
              "Output Data (File formats, append/overwrite, Excel tab naming)",
              "Browse Tool (Inspection & Debugging)",
              "Manual Input",
              "Directory, Dynamic Input, Dynamic Rename",
              "Date & Time Formats and Parsing",
            ],
          },
        ],
      },
      {
        module: " Data Preparation Tools",
        duration: "1 week",
        topics: [
          {
            name: "Data Preparation Tools",
            content: [
              "Data Cleansing",
              "Auto Field",
              "Select (Field renaming, type conversion, metadata)",
              "Convert Date",
              "Record ID",
              "Formula (Basic to Nested Logic)",
              "Multi-Field Formula",
              "Multi-Row Formula (Lag/Lead calculations like SQL)",
              "Generate Rows (for looping/date expansion)",
            ],
          },
        ],
      },
      {
        module: " Filtering, Sorting & Sampling",
        duration: "0.5 week",
        topics: [
          {
            name: "Filtering, Sorting & Sampling",
            content: [
              "Sort",
              "Filter (Basic and Custom logic)",
              "Sample (First N, Every Nth, Random %)",
              "Unique",
              "Tile Tool (for binning/segmentation)",
              "Conditional Row Filtering (via Formula + Filter)",
            ],
          },
        ],
      },
      {
        module: " Joins and Data Blending",
        duration: "1 week",
        topics: [
          {
            name: "Joins and Data Blending",
            content: [
              "Join Tool (Inner/Left/Right Joins)",
              "Union Tool (Auto Config by Name/Position)",
              "Append Fields",
              "Find and Replace",
              "Fuzzy Match (Name/Address matching)",
              "Join Multiple Tool",
              "Make Group Tool (used in Fuzzy Matching)",
            ],
          },
        ],
      },
      {
        module: " Data Transformations",
        duration: "1 week",
        topics: [
          {
            name: "Data Transformations",
            content: [
              "Summarize Tool (Group By, Sum, Min/Max, Concatenate, Count)",
              "Cross Tab (Pivoting)",
              "Transpose (Unpivoting)",
              "Text to Columns",
              "RegEx Tool (Extract, Replace, Match)",
              "Field Info Tool (Metadata Exploration)",
            ],
          },
        ],
      },
      {
        module: " Data Engineering Tools (Important Additions)",
        duration: "1 week",
        topics: [
          {
            name: "Data Engineering Tools (Important Additions)",
            content: [
              "In-Database Tools (Connect In-DB, Data Stream In/Out, In-DB Filter, Join, Select)",
              "SQL Scripting Tool (for push-down optimization)",
              "Cache Dataset (for performance tuning)",
              "Block Until Done (for sequential logic)",
              "Run Command Tool (trigger external scripts or shell commands)",
              "Download Tool (API/REST integration)",
              "Publish to Database (Bulk Load)",
              "Data Connectors (Azure, AWS, Snowflake, Salesforce, SharePoint)",
            ],
          },
        ],
      },
      {
        module: " Macros, Analytic Apps & Reporting",
        duration: "0.5 week",
        topics: [
          {
            name: "Macros (Reusable Logic)",
            content: [
              "What is a Macro in Alteryx",
              "Standard Macro – Reusable logic",
              "Batch Macro – Runs once per control group",
              "Iterative Macro – Loops until condition is met",
              "Interface Tools: Macro Input/Output, Drop Down, Check Box, Control Parameter",
              "Macro Output Testing and Debugging",
              "Storing Macros in Gallery or Shared Repos",
            ],
          },

          {
            name: "Analytic Apps",
            content: [
              "What is an Analytic App",
              "Use Cases (Parameter-driven Reports, User-defined Filters)",
              "Interface Tools (Text Box, Radio Button, List Box, File Browse)",
              "Creating, Saving, and Running Apps (.yxwz)",
              "App chaining and validation",
              "Publishing to Alteryx Server/Gallery",
            ],
          },

          {
            name: "Reporting Tools (Alteryx Designer Reports)",
            content: [
              "Layout Tool",
              "Table Tool (Tabular formatting)",
              "Report Text Tool",
              "Charting Tool (Basic bar, pie, line charts)",
              "Image Tool",
              "Render Tool (to PDF, Excel, HTML)",
              "Email Tool (attach and send reports via SMTP)",
              "Report Footer/Header",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Automated Sales Data Pipeline",
      "Financial Reconciliation & Reporting Automation",
      "HR Data Cleansing & Employee Master File",
      "Customer Order Data Audit & SLA Monitoring",
      "Marketing Campaign Data Consolidation",
    ],
    projectsDetails: [
      "A fully automated workflow that outputs refreshed sales data in Excel and SQL for business dashboards.",
      "A workflow that generates exception reports and summary reconciliation results for finance teams.",
      "A clean, deduplicated employee master dataset ready for use in reporting and dashboards.",
      "An SLA compliance report highlighting violations and exceptions for operations teams.",
      "A unified, refreshed campaign dataset for marketing analytics and visualization.",
    ],
  },

  "excel-Vba": {
    title: "Microsoft <span class='text-yellow-400'>Excel & VBA</span>",
    description:
      "Master Microsoft Excel and VBA to automate tasks, analyze data, and build powerful business solutions.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "📊 Analytics",
    students: "1500+",
    rating: 4.9,
    reviews: 900,
    brochure: "Microsoft Excel.pdf",
    outline: "Microsoft Excel.pdf",
    image: "/excel.jpg",
    highlights: [
      "Master Excel formatting, shortcuts, and worksheet management.",
      "Create dynamic tables, charts, and pivot reports.",
      "Use advanced sorting, filtering, and data validation tools.",
      "Apply formulas for text, arithmetic, date, and logic functions.",
      "Perform lookups with VLOOKUP, HLOOKUP, INDEX, and MATCH.",
      "Automate tasks with VBA macros and programming.",
      "Create user forms with VBA.",
      "Automate Outlook, Word, and PowerPoint.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Microsoft Excel & VBA program",
      testimonials: [
        {
          name: "Sowmya R",
          role: "Fresher",
          image: "/sowmya.jpg?height=80&width=80",
          content:
            "As a fresh engineering graduate, I lacked practical skills to stand out in interviews. Flair Technologies’ Excel & VBA course gave me the confidence to automate reports, analyze data efficiently, and present insights clearly. Within 3 months of completing the course, I secured a role as a Business Analyst. This training truly bridged the gap between academics and industry.",
          rating: 5,
          course: "B.Tech Fresher",
        },
        {
          name: "Rithu Shahini",
          role: "Data Analyst at Wipro",
          image: "/rithu.jpg?height=80&width=80",
          content:
            "Coming from a commerce background, I wanted to enter the corporate world with strong technical skills. The Excel & VBA training at Flair Technologies was practical and project-oriented. I learned advanced formulas, pivot tables, and automation through macros. Just 3 months after finishing, I was placed as a Data Reporting Associate. The course transformed my career prospects.",
          rating: 5,
          course: "Degree Graduate",
        },
        {
          name: "Ramanathan Arjun",
          role: "DevOps Engineer at Infosys",
          image: "/raman.jpg?height=80&width=80",
          content:
            "I was working in operations with limited exposure to IT tools. Flair Technologies’ Excel & VBA course made it simple for me to understand automation and reporting. The hands-on approach and real-world projects helped me apply concepts directly at work. I transitioned into a Reporting Specialist role in my company. This program is career-changing for non-IT professionals like me.",
          rating: 5,
          course: "Non-IT Professional",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Excel Fundamentals & Formatting",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Excel",
            content: [
              "Short Keys",
              "Formatting (Applying Borders, Colors, and Font Styles)",
              "Conversion of Formats",
              "Merging and Wrapping the Text",
              "Conditional Formatting",
              "Format as Table",
              "Inserting and Deletion of Rows, Columns, and Sheets",
              "Row Height and Column Width Formula-Based",
              "Conditional Formatting",
            ],
          },
        ],
      },
      {
        module: " Tables, Charts & Proofing ",
        duration: "1 week",
        topics: [
          {
            name: "Tables, Illustrations and Charts",
            content: [
              "Hide and Unhide of Rows, Columns, and Sheet Protecting Sheet and Workbook",
              "Move or Copy, Rename Sheet and Tab Color",
              "Filling Series of Numbers and Dates",
              "Sorting and Filtering",
              "Pivot Tables",
              "Usage of Formulas in Pivot Tables",
              "Inserting Pictures, Clip Art, Text Box, Shapes, and Smart Art",
              "Usage of Charts (Column, Pie, Bar, Line)",
              "Usage of Dynamic Ranges in Charts",
            ],
          },
          {
            name: "Proofing, Comments and Changes",
            content: [
              "Inserting Hyperlinks",
              "Linking Sheets, Cells, Workbook, Range, and Mail",
              "Header-Footer, Word Art, and Signature Line",
              "Inserting Objects",
              "Protect Sheet",
              "Protect Workbook",
              "Hiding Formulas",
              "Sharing Workbook",
              "Track Changes (Highlight, Accept, and Reject Changes)",
              "Inserting and Editing Comments",
            ],
          },
        ],
      },
      {
        module: " Page Setup & Data Tools ",
        duration: "1 week",
        topics: [
          {
            name: "Page Setup, Scale to Fit and Arrange",
            content: [
              "Inserting Comments and Spell Check",
              "Freeze Panes (Rows and Columns)",
              "Save Workspace, Switch Windows, and Split Window",
              "Arranging the Window (Vertically and Horizontally)",
              "Page Layout, Gridlines, and Formula Bar",
              "Paper Margins, Gridlines, and Paper Size",
              "Page Breaks, Applying Background, and Print Titles Row",
              "Repeat at Top and Print Preview",
            ],
          },
          {
            name: "Connections and Data Tools",
            content: [
              "Data Importing (From Access, Web and Text)",
              "Other Sources (SQL server and XML)",
              "Advance Sorting and Filtering",
              "Text to Columns",
              "Removing Duplicates",
              "Data Validation",
              "List box, Formula based restrictions",
              "Customization of error alert and input box",
              "Types of Alerts (Stop, Warning and Information)",
              "Highlighting the Invalid data",
            ],
          },
        ],
      },
      {
        module: " Data Analysis, Functions & Power Query",
        duration: "1 week",
        topics: [
          {
            name: "Data Tools and Outline",
            content: [
              "Data Consolidation",
              "Scenario Manager",
              "Goal Seek",
              "Data Table",
              "Group and Ungroup",
              "Adding subtotals to the list",
              "Defining name to the range",
              "Name manager editing",
              "Trace precedents/Trace Dependents",
              "Evaluate Formulas",
            ],
          },
          {
            name: "Text, Arithmetical functions",
            content: [
              "UPPER, LOWER, PROPER, LEN, LEFT, RIGHT, MID",
              "FIND, TRIM, CLEAN, CHAR, CODE",
              "CONCATENATE, SUBSTITUTE, EXACT, REPT",
              "REPLACE, SEARCH, VALUE and TEXT",
              "ABS, ROUND, SUM, SUMIF, SUMIFS, SUMPRODUCT, SUBTOTAL and RANDBETWEEN",
              "Activities based on the above functions",
            ],
          },
          {
            name: "Date & Time and Logical Functions",
            content: [
              "DATEDIF, DATE, TODAY, NOW, WEEKDAY, MONTH, YEAR, YEARFRAC, NETWORKDAYS, DAYS360, MINUTE, HOUR, SECOND, WEEKNUM, EDATE and EOMONTH",
              "IF, AND, OR, NOT, TRUE, FALSE, IFERROR and Nested Functions. Activities based on the above functions",
            ],
          },
          {
            name: "Statistical and Information Functions",
            content: [
              "AVERAGE, AVERAGEIF, AVERAGEIFS, COUNT, COUNTA, COUNTBLANK, COUNTIF, COUNTIFS, LARGE, SMALL, MAX, MIN, RANK, ROWS, ROW, COLUMN and COLUMNS",
              "ISBLANK, ISERROR, ISNUMBER, ISTEXT and ISNA Activities based on the above functions",
            ],
          },
          {
            name: "Lookup and References",
            content: [
              "HLOOKUP, VLOOKUP, INDEX, MATCH, OFFSET, CHOOSE and INDIRECT",
              "VLOOKUP with MATCH, IFERROR, WILDCARD and CHOOSE",
              "Combination of Formulas",
              "Array Formulas",
              "VLOOKUP and COLUMN",
              "VLOOKUP with IF and VLOOKUP with AND Activities based on the above functions",
            ],
          },
          {
            name: "Power Query",
            content: [
              "Creating Front end Tables",
              "Data Cleansing (Replace, Trim, Clean, Split Columns, Merge Columns)",
              "Data Transformation (Pivot, Unpivot, Transpose, group by)",
              "Merge Queries",
              "Append Queries",
              "Creating the columns",
              "Applied Steps maintenance (Advanced Query Editor)",
            ],
          },
          {
            name: "Activities",
            content: [
              "SUM and CHOOSE",
              "Sorting the data using formula",
              "Multiple VLOOKUP",
              "Multiple INDEX",
              "Leave Tracker using conditional formatting",
              "Using Formula in conditional formatting to highlight second repeated value",
            ],
          },
          {
            name: "Summarizing of Excel",
            content: [
              "Activities based on Real Time",
              "Scenario Summarizing Of Excel",
            ],
          },
        ],
      },
      {
        module: "SQL Programming",
        duration: "1 week",
        topics: [
          {
            name: "SQL",
            content: [
              "Table Creation, Insert, Update, Delete data, Select",
              "Clause Operations (Where, Group by, Having, Order by)",
              "Operators (IN, LIKE, ISNULL, Union)",
              "Joins",
              "Sub Queries (Inner Query & Outer Query)",
              "Data Modeling using SQL",
              "Views Creation",
              "Analytical Functions (Rank, Dense Rank, Partition by)",
            ],
          },
        ],
      },
      {
        module: "VBA Basics & Programming",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Macros",
            content: [
              "Introduction to Macros",
              "Introduction to VBA",
              "Importance of Developer Tab and VB Window Path to Get into VB Window",
              "Introduction to different windows in VB Enabling the Macros to run the program Macro workbook",
              "Saving introduction to cell reference",
            ],
          },
          {
            name: "Introduction to Properties",
            content: [
              "Introduction to object model",
              "Introduction to property and methods",
              "Importance of arguments",
              "Usage of different property and methods with cells",
              "Introduction to sheet reference",
              "Usage of different property and methods with sheets",
            ],
          },
          {
            name: "Declaration of Variables",
            content: [
              "Introduction to workbook reference",
              "Usage of different property and methods with workbook",
              "Introduction to Variable Declaration",
              "Importance of Different Data Types",
              "Different Levels of Declaration of Variables",
              "Different Ways of Declaration of Variables",
            ],
          },
          {
            name: "Loop Statements",
            content: [
              "Introduction to Message Box",
              "Introduction to Input Box",
              "Introduction to Different Loop Statements",
              "FOR NEXTLOOP",
              "Activity of FOR NEXTLOOP",
            ],
          },
          {
            name: "Conditional Statements",
            content: [
              "Introduction to Conditional Statement",
              "Introduction to Different Conditional Statements",
              "Activity on Different Conditional Statements",
              "Activity on Different Conditional Statements with LOOP",
            ],
          },
          {
            name: "Go To Command",
            content: [
              "Select Case Decision Structure",
              "Activity on Select Case Structure",
              "Introduction to GOTO Label Command",
              "Activity on GOTO Label Command",
            ],
          },
          {
            name: "Loops",
            content: [
              "Introduction to TO_DOLOOP",
              "DO_WHILE LOOP",
              "Activity on DO_WHILE LOOP",
              "DO_UNTIL LOOP",
              "Activity on DO_UNTIL LOOP",
              "Introduction to FOR EACH NEXT LOOP",
              "Usage of SET statement",
              "Activity on FOR EACH NEXT LOOP",
            ],
          },
        ],
      },
      {
        module: " VBA Advanced Features ",
        duration: "1 week",
        topics: [
          {
            name: "Data Segregation",
            content: [
              "Segregation of Data in Static Way",
              "Introduction to Rows Count and Columns Count",
              "Count Segregation of data in dynamic way",
            ],
          },
          {
            name: "User Defined Functions",
            content: [
              "Introduction to USER DEFINED",
              "Function Activities on USER DEFINED",
              "Function Activity on File Browser",
            ],
          },
          {
            name: "Recording of Macros",
            content: [
              "Record Macro",
              "Running a Macro",
              "Running a Macro from the Macros Dialog Box",
              "Creating a Short Key to Run Macro Running a Macro with a Short Key",
              "Assigning a Macro to a menu or tool bar Editing a Macro with VB",
            ],
          },
          {
            name: "File System Objects and File Directories",
            content: [
              "Designing and Creating Objects (Files, Folders)",
              "Performing Different Operations on Objects (Insert, Update, Delete)",
              "Looping the Objects",
            ],
          },
          {
            name: "Active Directory Objects (ADO's)",
            content: [
              "Basic Active Directory Queries",
              "Working with Active Directory Objects",
              "Advanced Active Directory Queries",
              "Different Types of Connection Strings",
              "Working with Sql queries, joins",
              "Working with different sql and access db objects",
            ],
          },
        ],
      },
      {
        module: " VBA Forms, Error Handling & Automation ",
        duration: "1 week",
        topics: [
          {
            name: "User Forms",
            content: [
              "Designing and Creating Forms",
              "Working with Controls",
              "Creating Custom Dialog Boxes",
              "User Forms Properties, Methods, and Event",
            ],
          },
          {
            name: "Error Handling",
            content: [
              "On Error Go to Zero",
              "On Error Go to Resume",
              "On Error Go to Label",
            ],
          },
          {
            name: "User Defined Functions",
            content: [
              "UDF on Extracting Numbers",
              "UDF on Extracting Data",
              "UDF on Number to Word",
              "Segregation of data from one cell to different columns Real time activities",
            ],
          },
          {
            name: "Activities",
            content: [
              "Working on Dynamic Outlook Mails (Email Automation)",
              "Working on PPT Automation",
              "Working on Word Automation",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Automated Leave Tracker in Excel",
      "Sales Dashboard with Pivot Tables",
      "Expense Management Tool with VBA",
      "Automated Report Generator",
      "Outlook Email Automation Project",
    ],
    projectsDetails: [
      "Build a leave tracker using formulas, conditional formatting, and VBA macros to auto-update balances.",
      "Create an interactive sales performance dashboard using PivotTables, PivotCharts, and slicers for real-time insights.",
      "Design a personal/company expense tracker that categorizes expenses, generates summaries, and automates reporting.",
      "Use VBA to automate the generation of weekly/monthly reports, including charts, tables, and formatting.",
      "Write VBA scripts to send automated emails with attachments, reports, or reminders directly from Excel.",
    ],
  },

  tableau: {
    title: "Tableau <span class='text-yellow-400'>Developer</span>",
    description:
      "Master Tableau to connect data, build visualizations, design dashboards, and deploy impactful BI solutions.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "📊 Analytics",
    students: "700+",
    rating: 4.9,
    reviews: 500,
    brochure: "Tableau.pdf",
    outline: "Tableau.pdf",
    image: "/tableau.jpg",
    highlights: [
      "Understand Tableau basics and business intelligence concepts.",
      "Connect, transform, and prepare diverse datasets.",
      "Apply calculations, filters, and parameters effectively.",
      "Perform advanced calculations for deeper insights.",
      "Design interactive charts, maps, and visualizations.",
      "Build dynamic dashboards with user interactivity.",
      "Format and group data for clarity.",
      "Deploy and share with Tableau Server.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Tableau Developer program",
      testimonials: [
        {
          name: "Rohini Sharma",
          role: "Fresher",
          image: "/rohinis.jpg?height=80&width=80",
          content:
            "As a fresher from a management background, Flair Technologies’ Tableau training gave me highly practical BI skills. I can now create dashboards and visual reports that helped me secure my first role as a Business Analyst in MNC.",
          rating: 5,
          course: "MBA Graduate (Fresher)",
        },
        {
          name: "Vikas Reddy",
          role: "Data Analyst at Wipro",
          image: "/vikasr.jpg?height=80&width=80",
          content:
            "I had basic reporting experience but lacked visualization expertise. The Tableau course at Flair Technologies taught me how to design interactive dashboards and use advanced calculations. These skills helped me transition into a Data Visualization Specialist role.",
          rating: 5,
          course: "IT Professional",
        },
        {
          name: "Meena Nair",
          role: "DevOps Engineer at Infosys",
          image: "/meenan.jpg?height=80&width=80",
          content:
            "Coming from finance, I wanted to upgrade my analytics skills. Tableau training with Flair Technologies was hands-on and simple to follow. Now, I can analyze data faster and present insights through dashboards in my daily work.",
          rating: 5,
          course: "Non-IT Professional (Finance Domain)",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Introduction & Data Connections",
        duration: "0.5 week",
        topics: [
          {
            name: "Introduction to Business Intelligence",
            content: [
              "Overview of BI",
              "Overview of Tableau Environment",
              "Putting it all together",
            ],
          },
          {
            name: "Data Connections",
            content: [
              "Getting to data from Tableau Desktop",
              "Learning the basics of visualizing data",
              "Visualizing business needs",
            ],
          },
          {
            name: "Transforming Data",
            content: ["Why transform data?", "Data Blends", "Data Joins"],
          },
          {
            name: "Calculations in Tableau",
            content: [
              "Data Aggregates",
              "Calculation Wizards",
              "Table Calculations",
              "Customized Calculations",
            ],
          },
        ],
      },
      {
        module: " Core Calculations in Tableau",
        duration: "1 week",
        topics: [
          {
            name: "Advanced Calculations",
            content: ["Strings", "Floor and Ceiling", "Dates"],
          },
        ],
      },
      {
        module: " Filters & Parameters",
        duration: "0.5 week",
        topics: [
          {
            name: "Parameters and Filters",
            content: [
              "Basics of Filtering",
              "Basics of Parameters",
              "Putting it all together",
            ],
          },
          {
            name: "Sorting",
            content: [
              "Ascending and Descending Order manually",
              "Computes and Sorting",
              "Nested Sorting",
            ],
          },
        ],
      },
      {
        module: " Grouping & Formatting",
        duration: "0.5 week",
        topics: [
          {
            name: "Grouping Techniques",
            content: ["Sets", "Combining Fields"],
          },
          {
            name: "Formatting",
            content: ["Colours", "Custom Colours", "Highlighters"],
          },
        ],
      },
      {
        module: " Maps & Geographic Analysis",
        duration: "0.5 week",
        topics: [
          {
            name: "Map Basics",
            content: ["Layers", "Editing", "Customizing"],
          },
        ],
      },
      {
        module: " Visualizations",
        duration: "1 week",
        topics: [
          {
            name: "Visualizations",
            content: [
              "Understanding Charts",
              "Text Charts",
              "Visual Charts",
              "Time Charts",
              "Trend Charts",
            ],
          },
        ],
      },
      {
        module: " Dashboards",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Dashboards",
            content: ["Designing", "Actions", "Stories"],
          },
        ],
      },
      {
        module: " Server & Deployment",
        duration: "1 week",
        topics: [
          {
            name: "Server Deployment",
            content: [
              "What is Tableau Server?",
              "Install / Configure",
              "Working with Users",
              "Working with Projects",
              "Working with Groups",
              "Publishing the reports and data sources in server",
              "Create Sites, Projects, Users, and Groups",
              "Securing Projects",
              "Assigning the permissions and licenses to the users",
              "Server Performance improvement and Tableau Server recording",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "E-commerce Sales Analysis",
      "Human Resources Dashboard",
      "Finance Dashboard",
      "360° Business Intelligence Dashboard",
      "Insurance Insights Dashboard",
    ],
    projectsDetails: [
      "Objective: Analyze customer behavior and order trends for an online store.",
      "Objective: Track employee performance, attrition, and demographics.",
      "Objective: Create a P&L statement with monthly and yearly comparisons.",
      "Objective: Build an end-to-end BI solution for a fictional company.",
      "Objective: Analyze and visualize insurance metrics for data-driven decisions.",
    ],
  },
  sqlCourse: {
    title: "SQL <span class='text-yellow-400'>Developer</span>",
    description:
      "Master SQL fundamentals to advanced analytics with hands-on projects, building strong skills for data-driven careers.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "📊 Analytics",
    students: "600+",
    rating: 4.6,
    reviews: 350,
    brochure: "SQL.pdf",
    outline: "SQL.pdf",
    image: "/sql.jpg",
    highlights: [
      "Learn SQL fundamentals, commands, and query structures.",
      "Apply clauses, operators, filters, and constraints.",
      "Use functions, subqueries, and joins effectively.",
      "Master advanced window and analytical SQL functions.",
      "Build data models, views, and indexes.",
      "Work with CTEs and advanced use cases.",
      "Implement stored procedures and triggers efficiently.",
      "Perform real-world reporting and analysis tasks.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our SQL Developer program",
      testimonials: [
        {
          name: "Aishwarya Menon",
          role: "Fresher",
          image: "/aish.jpg?height=80&width=80",
          content:
            "As a fresher from a non-IT background, I was nervous about learning SQL. Flair Technologies made it simple with step-by-step guidance. The practical projects like student performance tracking boosted my confidence, and I landed my first internship as an Analyst.",
          rating: 5,
          course: "B.S.C. Mathematics Graduate",
        },
        {
          name: "Karthik Reddy",
          role: "Data Analyst at Wipro",
          image: "/karthik.jpg?height=80&width=80",
          content:
            "Coming from a commerce background, I never thought I could work with databases. The SQL training at Flair Technologies gave me real-world exposure with sales and reporting projects. Within 3 months, I secured a role as a Business Data Associate.",
          rating: 5,
          course: "B.Com Graduate",
        },
        {
          name: "Harsha Jain",
          role: "DevOps Engineer at Infosys",
          image: "/jain.jpg?height=80&width=80",
          content:
            "As a B.Tech fresher, I needed strong technical skills to stand out. The SQL course at Flair Technologies helped me master joins, queries, and reporting. Thanks to the capstone projects, I cracked interviews and started my career as a Junior SQL Developer.",
          rating: 5,
          course: "B.Tech Graduate",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "SQL Fundamentals",
        duration: "one week",
        topics: [
          {
            name: "Introduction to SQL",
            content: [
              "Flat Files vs RDBMS (Why SQL over Excel/CSV)",
              "Introduction to Structured Query Language",
              "Importance of SQL in Data Analysis & BI",
              "Data Types (INT, VARCHAR, DATE, FLOAT, etc)",
              "Tables, Attributes, and Records",
              "Installation & Configuration of SQL Server / PostgreSQL / MySQL",
            ],
          },
          {
            name: "SQL Command Categories",
            content: [
              "DDL - Data Definition Language: Create, Alter, Drop, Truncate",
              "DML - Data Manipulation Language: Insert, Update, Delete, Merge",
              "DQL - Data Query Language: Select and its variations",
              "TCL - Transaction Control Language: Commit, Rollback, Savepoint",
              "DCL - Data Control Language (Optional for Analysts): Grant, Revoke",
            ],
          },
          {
            name: "Clauses, Operators & Filters",
            content: [
              "WHERE, GROUP BY, HAVING, ORDER BY, TOP / LIMIT",
              "Logical Operators: AND, OR, NOT",
              "Comparison Operators: =, <>, >, <, >=, <=",
              "Range Filters: BETWEEN, IN, IS NULL, LIKE",
              "Wildcards in LIKE: %, _",
              "DISTINCT, CASE, COALESCE, NULLIF",
              "Set Operators: UNION, UNION ALL, INTERSECT, EXCEPT",
            ],
          },
        ],
      },
      {
        module: " SQL Constraints & Data Handling ",
        duration: "one week",
        topics: [
          {
            name: "SQL Constraints",
            content: [
              "Primary Key",
              "Unique",
              "Not Null",
              "Default",
              "Check",
              "Composite Keys",
            ],
          },
          {
            name: "Functions in SQL",
            content: [
              "Aggregate Functions: SUM(), AVG(), MIN(), MAX(), COUNT()",
              "String Functions: LEN(), UPPER(), LOWER(), TRIM(), LTRIM(), RTRIM(), SUBSTRING(), REPLACE(), CHARINDEX()",
              "Date and Time Functions: GETDATE(), DATEDIFF(), DATEADD(), YEAR(), MONTH(), DAY(), FORMAT()",
              "Conversion Functions: CAST(), CONVERT()",
            ],
          },
          {
            name: "Subqueries",
            content: [
              "Introduction to Subqueries",
              "Single-row and Multi-row Subqueries",
              "Correlated vs Non-Correlated Subqueries",
              "Scalar Subqueries in SELECT/WHERE",
            ],
          },
        ],
      },
      {
        module: " Joins & Relationships ",
        duration: "one week",
        topics: [
          {
            name: "Joins in SQL",
            content: [
              "Why Joins are Needed",
              "Inner Join",
              "Left Join",
              "Right Join",
              "Full Outer Join",
              "Cross Join",
              "Self Join",
              "Anti Join (NOT EXISTS, EXCEPT, LEFT JOIN WHERE NULL)",
              "Real-world Join Scenarios",
            ],
          },
          {
            name: "Window & Analytical Functions",
            content: [
              "OVER() Clause",
              "PARTITION BY, ORDER BY inside window",
              "ROW_NUMBER()",
              "RANK(), DENSE_RANK()",
              "NTILE()",
              "LEAD(), LAG()",
              "Running Totals, Moving Averages",
            ],
          },
        ],
      },
      {
        module: " Data Modeling & Best Practices ",
        duration: "one week",
        topics: [
          {
            name: "Data Modeling & Best Practices",
            content: [
              "Star vs Snowflake Schema",
              "Fact and Dimension Tables",
              "Surrogate Keys and Natural Keys",
              "Normalization & Denormalization",
              "Naming Conventions and Standards",
            ],
          },
          {
            name: "Views and Indexes",
            content: [
              "Creating and Using Views",
              "Updatable vs Non-Updatable Views",
              "Materialized Views (if supported)",
              "Clustered vs Non-Clustered",
              "Composite Indexes",
              "When and Why to Use Indexes",
              "Index Impact on Performance",
            ],
          },
        ],
      },
      {
        module: " Procedural SQL ",
        duration: "0.5 week",
        topics: [
          {
            name: "Stored Procedures and Triggers",
            content: [
              "Stored Procedures",
              "CREATE, EXEC, Parameters",
              "Use in Data Pipelines / Reporting",
              "Pros and Best Practices",
              "Triggers",
              "After INSERT/UPDATE/DELETE",
              "Use Cases in Auditing or Data Validations",
            ],
          },
        ],
      },
      {
        module: " Advanced SQL Concepts ",
        duration: "0.5 week",
        topics: [
          {
            name: "Common Table Expressions (CTEs)",
            content: [
              "Syntax and Structure",
              "Recursive CTEs",
              "CTE vs Subquery Performance",
              "Multi-CTE with Joins and Aggregations",
            ],
          },
          {
            name: "Advanced & Analytical Use Cases",
            content: [
              "Using SQL for KPI Analysis",
              "Cohort Analysis",
              "Funnel Analysis",
              "Customer Segmentation Queries",
              "Market Basket Analysis (via Joins/Subqueries)",
              "Error Handling using TRY...CATCH (SQL Server)",
            ],
          },
        ],
      },
      {
        module: " Analytical SQL ",
        duration: "0.5 week",
        topics: [
          {
            name: "Analysis Tasks",
            content: [
              "Monthly, Quarterly, Yearly Trends",
              "YoY, MoM Growth Analysis",
              "Top N/Bottom N Products or Regions",
              "Contribution % Analysis (Subtotals)",
              "Data Cleansing with SQL",
              "SQL for Power BI/Tableau Backends",
            ],
          },
        ],
      },
      {
        module: " Real-World Applications ",
        duration: "0.5 week",
        topics: [
          {
            name: "Real-World Applications",
            content: [
              "Real-World Reporting Tasks",
              "Real-World Analysis Projects",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Employee Database Management System",
      "Sales Data Analysis",
      "Library Management System",
      "Student Performance Tracker",
      "E-commerce Order Reporting",
    ],
    projectsDetails: [
      "Design and query a database to manage employee details, departments, and salaries.",
      "Use SQL to analyze sales transactions, apply filters, joins, and generate monthly revenue reports.",
      "Create tables for books, members, and loans, then implement queries for borrowing and returns.",
      "Build a database to track student scores, use functions to calculate averages and rankings.",
      "Develop queries for customer orders, product details, and shipment tracking with real-time reporting.",
    ],
  },

  python: {
    title: "Analytics with <span class='text-yellow-400'>Python</span> ",
    description:
      "Master Python for data analysis, visualization, and real-world reporting with hands-on projects and practical skills.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "📊 Analytics",
    students: "500+",
    rating: 4.7,
    reviews: 300,
    brochure: "Python Analytics.pdf",
    outline: "Python Analytics.pdf",
    image: "/pythi.jpg",
    highlights: [
      "Get started with Python setup and essential programming basics.",
      "Work with data files and manage different data formats.",
      "Use Pandas for structured data analysis and manipulation.",
      "Perform data aggregation, grouping, merging, and combining tasks.",
      "Handle dates, times, and time-series data efficiently.",
      "Conduct exploratory data analysis (EDA) to uncover insights.",
      "Visualize data with Matplotlib and Seaborn.",
      "Apply NumPy for real-world reporting.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Professionals</span> to Analytics Experts',
      description:
        "Hear from our successful graduates who transformed their careers with our Python Analytics program",
      testimonials: [
        {
          name: "Megha Sharma",
          role: "Fresher",
          image: "/meghas.jpg?height=80&width=80",
          content:
            "I already worked with Excel and SQL, but Flair Technologies’ Python course gave me the edge I needed. Learning Pandas and visualization with Seaborn helped me automate reports and present data in a much clearer way to stakeholders.",
          rating: 5,
          course: "Data Analyst (IT Services)",
        },
        {
          name: "Anita Krishnan",
          role: "Data Analyst at Wipro",
          image: "/anitak.jpg?height=80&width=80",
          content:
            "As a BI professional, I wanted to add Python to my toolkit. Flair Technologies structured the course beautifully with real-world reporting tasks. Now, I use Python daily for advanced analysis and data integration with Microsoft Power BI.",
          rating: 5,
          course: "BI Specialist (Retail Sector)",
        },
        {
          name: "Vamshi Krishna",
          role: "DevOps Engineer at Infosys",
          image: "/vamsik.jpg?height=80&width=80",
          content:
            "Coming from a systems background, I wanted to transition into data. The Python training at Flair Technologies gave me practical skills in EDA, NumPy, and automation. It has boosted my confidence and opened new project opportunities in my organization.",
          rating: 5,
          course: "System Engineer (Telecom)",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " IT Professionals",
    eligibleLearners: "IT Professionals",
    syllabus: [
      {
        module: "Python Foundations",
        duration: "One week",
        topics: [
          {
            name: "Python Setup & Getting Started",
            content: [
              "Installing Jupyter / VS Code",
              "Introduction to Python in data workflows",
              "Working in Jupyter Notebooks: Cells, Markdown, Shortcuts",
              "Python file types: .ipynb, .py",
              "Best practices for writing readable, clean analysis code",
            ],
          },
          {
            name: "Python Essentials for Analysts",
            content: [
              "Variables, Data Types (int, float, str, bool, list, tuple, dict, set)",
              "Type conversion, type checking",
              "Control Flow: if, elif, else, nested conditions",
              "Loops: for, while, break, continue, range()",
              "Functions, Lambda expressions",
              "Basic Exception Handling: try, except, finally",
            ],
          },
        ],
      },
      {
        module: " Data Handling in Python ",
        duration: "One week",
        topics: [
          {
            name: "Working with Data Files",
            content: [
              "Reading/writing CSV, Excel, and JSON files",
              "File paths and directories using os and pathlib",
              "Handling encoding issues and bad headers",
              "Reading large files in chunks",
              "File clean-up automation",
            ],
          },
          {
            name: "Date And Time Handling",
            content: [
              "Parsing date columns with pd.to_datetime()",
              "Extracting year, month, day, weekday",
              "Filtering by date ranges",
              "Creating date features (e.g., quarter, month name)",
              "Time-based grouping (monthly, weekly, daily)",
            ],
          },
        ],
      },
      {
        module: " Core Data Analysis with Pandas ",
        duration: "One week",
        topics: [
          {
            name: "Core Pandas for Data Analysis",
            content: [
              "Creating DataFrames from CSV, dicts, lists",
              "Indexing & slicing: loc[], iloc[], []",
              "Adding/removing columns/rows",
              "Renaming columns, setting index",
              "Basic data inspection: .head(), .info(), .describe()",
              "Handling missing data: .isnull(), .fillna(), .dropna()",
              "Removing duplicates",
              "Replacing and mapping values",
              "String operations: .str.lower(), .str.replace(), .str.extract()",
              "Creating new calculated columns",
              "Applying functions row-wise (.apply())",
              "Binning data using cut() and qcut()",
              "Using map(), replace(), and np.where() for classification logic",
              "Changing column data types with .astype()",
            ],
          },
        ],
      },
      {
        module: " Data Aggregation & Transformation ",
        duration: "One week",
        topics: [
          {
            name: "Data Aggregation & Grouping",
            content: [
              "Using .groupby() for summaries",
              "Multiple aggregations using .agg()",
              "Counting unique values",
              "Row-wise calculations",
              "Calculating percentages within groups",
              "Creating pivot tables with .pivot_table()",
              "Crosstab analysis",
            ],
          },
          {
            name: "Merging & Combining Data",
            content: [
              "pd.merge() - inner, left, right, outer joins",
              "pd.concat() - appending rows/columns",
              "Joining on index vs column",
              "Handling column conflicts during merge",
              "Use case: Merging sales with region/category/master data",
            ],
          },
        ],
      },
      {
        module: " Exploratory Data Analysis (EDA) ",
        duration: "0.5 week",
        topics: [
          {
            name: "Exploratory Data Analysis (EDA)",
            content: [
              "Identifying outliers using IQR",
              "Frequency counts, value distributions",
              "Feature correlation analysis (.corr())",
              "Skewness, kurtosis, and data shape",
              "Detecting patterns before visualization",
            ],
          },
        ],
      },
      {
        module: " Visualization Techniques ",
        duration: "0.5 week",
        topics: [
          {
            name: "Visualization With Matplotlib & Seaborn",
            content: [
              "Matplotlib Basics",
              "Bar charts, line charts, pie charts",
              "Customizing axes, titles, legends",
              "Saving plots as images",
              "Seaborn Essentials",
              "Countplot, barplot, boxplot, histplot, heatmap",
              "Distribution & scatter plots",
              "Grouped plots with hue and col",
              "Plot styling with themes and palettes",
            ],
          },
        ],
      },
      {
        module: " Numerical Computations ",
        duration: "0.5 week",
        topics: [
          {
            name: "Numpy For Numeric Operations",
            content: [
              "Creating arrays, array indexing",
              "Element-wise operations",
              "Aggregation functions (sum, mean, std)",
              "Boolean indexing",
              "Reshaping and flattening",
              "Use in performance optimization with Pandas",
            ],
          },
        ],
      },
      {
        module: " Applied Reporting & Projects ",
        duration: "0.5 week",
        topics: [
          {
            name: "Real-World Reporting Tasks",
            content: [
              "Exporting cleaned data to Excel",
              "Writing multiple sheets to Excel using ExcelWriter",
              "Adding dynamic filenames with timestamps",
              "Generating summary tables",
              "Automating a simple monthly reporting task",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Sales Data Analysis with Pandas",
      "Student Performance Tracker",
      "Weather Data Reporting",
      "E-commerce Customer Insights Dashboard",
      "Financial Transactions Reporting Tool",
    ],
    projectsDetails: [
      "Use Pandas to clean, group, and analyze a retail sales dataset, generating monthly revenue insights.",
      "Manage CSV data files of student marks, apply aggregation, and create reports with Excel-like summaries.",
      "Work with date and time handling to analyze weather datasets, track trends, and create daily reports.",
      "Perform Exploratory Data Analysis (EDA) on customer data, visualize purchase trends using Matplotlib and Seaborn.",
      "Use NumPy for calculations and build a reporting script that summarizes expenses, income, and balances.",
    ],
  },
  "aws-devops": {
    title: "AWS <span class='text-yellow-400'>DevOps</span>",
    description:
      "Master AWS DevOps by learning automation, CI/CD, monitoring, and cloud deployment with real-world projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "⛈️ Cloud",
    students: "1500+",
    rating: 4.9,
    reviews: 750,
    brochure: "AWS.pdf",
    outline: "AWS.pdf",
    image: "/DevOps.png",
    highlights: [
      "Learn to design and deploy AWS infrastructure with Terraform automation.",
      "Build CI/CD pipelines to automate microservices deployment on Kubernetes.",
      "Understand microservices architecture with Spring Boot, React, Kafka, and API Gateway.",
      "Configure centralized logging using Elasticsearch, Kibana, and Fluentd.",
      "Set up real-time monitoring with Grafana, Prometheus, and Istio.",
      "Manage source code and artifacts with GitLab, DockerHub, and ECR.",
      "Automate provisioning with Ansible.",
      "Explore observability using Istio.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our SRE with Modern DevOps program",
      testimonials: [
        {
          name: "Praveen Reddy",
          role: "Fresher",
          image: "/pravin.png?height=80&width=80",
          content:
            "Flair Technologies’ SRE with Modern DevOps course helped me master Terraform and AWS automation. The hands-on labs made me confident in building real-world infrastructure",
          rating: 5,
          course: "Cloud Engineer",
        },
        {
          name: "Megha Varsha",
          role: "Data Analyst at Wipro",
          image: "/megha.jpg?height=80&width=80",
          content:
            "The course was very practical. I learned Kubernetes, CI/CD, and monitoring with Grafana, which I now use in my projects daily. The instructors were very supportive.",
          rating: 5,
          course: "Software Developer",
        },
        {
          name: "Hima Bindu",
          role: "DevOps Engineer at Infosys",
          image: "/hima.jpg?height=80&width=80",
          content:
            "Flair Technologies provided excellent training on microservices and Istio. The projects gave me the skills to handle production systems effectively.",
          rating: 5,
          course: "DevOps Specialist",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Introduction, Linux Fundamentals & Networking",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to DevOps & AWS",
            content: [
              "Understanding DevOps principles and its importance.",
              "Overview of AWS services and their role in DevOps.",
            ],
          },

          {
            name: "Linux Fundamentals & Networking",
            content: [
              "Introduction to Linux operating system.",
              "Basic Linux commands and file system navigation.",
              "Networking concepts: IP addressing, DNS, DHCP, etc.",
              "Managing Linux networking configurations.",
            ],
          },
        ],
      },
      {
        module: " Shell Scripting & AWS Services Overview ",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Shell Scripting",
            content: [
              "Introduction to shell scripting.",
              "Writing and executing shell scripts.",
              "Scripting for automation and task scheduling.",
            ],
          },

          {
            name: "AWS Services Overview",
            content: [
              "Amazon EC2: Creating and managing instances.",
              "Amazon S3: Object storage and bucket management.",
              "Amazon RDS: Managed relational databases.",
              "Amazon Route 53: DNS management.",
              "Amazon AMI and Snapshot: Creating and managing images.",
              "AWS Identity and Access Management (IAM): Users, groups, policies.",
              "Amazon SQS and SNS: Messaging and notification services.",
              "Autoscaling: Scaling instances based on demand.",
              "AWS Lambda: Serverless compute service.",
              "Creating and managing AWS Lambda functions.",
            ],
          },
        ],
      },
      {
        module: " Terraform & CI/CD ",
        duration: "1.5 weeks",
        topics: [
          {
            name: "AWS CLI and Infrastructure as Code with Terraform",
            content: [
              "Using AWS CLI to manage resources.",
              "Introduction to Infrastructure as Code (IaC).",
              "Terraform fundamentals and installation.",
              "Creating and managing AWS resources using Terraform.",
            ],
          },

          {
            name: "Continuous Integration and Continuous Deployment (CI/CD)",
            content: [
              "Introduction to CI/CD principles.",
              "Version control with Git: Repositories, branches, commits.",
              "Building projects with Maven.",
              "Jenkins: Installation, configuration & job setup.",
              "Building CI/CD pipelines for application deployment.",
            ],
          },
        ],
      },
      {
        module: " Ansible ",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Automation with Ansible",
            content: [
              "Introduction to Ansible for automation.",
              "Writing Ansible playbooks: Tasks, modules & variables.",
              "Managing configurations with Ansible roles.",
              "Automating infrastructure provisioning and application deployment.",
            ],
          },
        ],
      },
      {
        module: " Docker ",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Containerization with Docker",
            content: [
              "Understanding containerization concepts.",
              "Docker basics: Images, containers, Dockerfile.",
              "Building and running Docker containers.",
              "Docker Compose for multi-container applications.",
            ],
          },
        ],
      },
      {
        module: " Monitoring Tools ",
        duration: "1 week",
        topics: [
          {
            name: "Monitoring Tools",
            content: [
              "Introduction to Monitoring in DevOps",
              "Popular Monitoring Tools",
              "Introduction to widely used monitoring tools in the DevOps landscape.",
              " - Prometheus",
              " - Grafana",
              " - Nagios",
              " - ELK Stack (Elasticsearch, Logstash, Kibana)",
              " - New Relic",
              " - Datadog",
              "Setting Up Prometheus and Grafana",
              "Nagios Configuration",
              "ELK Stack for Log Monitoring",
              "Application Performance Monitoring (APM) with New Relic",
              "Alerting and Notification Strategies",
            ],
          },
        ],
      },
      {
        module: " Kubernetes & Projects ",
        duration: "1 week",
        topics: [
          {
            name: "Kubernetes and Container Orchestration (Optional)",
            content: [
              "Introduction to Kubernetes and container orchestration.",
              "Kubernetes architecture: Nodes, pods, services, deployments.",
              "Deploying and managing applications on Kubernetes clusters.",
            ],
          },

          {
            name: "Course Project and Hands-On Labs",
            content: [
              "Putting it all together: Building a DevOps pipeline on AWS.",
              "Real-world scenarios and hands-on labs for each module.",
              "Troubleshooting common issues in DevOps practices.",
            ],
          },
          {
            name: "Best Practices and Advanced Topics",
            content: [
              "Security best practices in AWS DevOps.",
              "Performance optimization strategies.",
              "Monitoring and logging for AWS applications.",
              "Advanced AWS services for specialized use cases.",
            ],
          },
          {
            name: "Final Assessment and Certification",
            content: [
              "Course recap and review.",
              "Final assessment to evaluate knowledge and skills.",
              "Certification for completing the AWS DevOps course.",
            ],
          },
        ],
      },
      {
        module: "Kubernetes & Container Orchestration (Optional)",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to Kubernetes and Container Orchestration",
            content: [
              "Understanding the need for container orchestration.",
              "Introduction to Kubernetes: History and purpose.",
              "Key Kubernetes concepts: Nodes, pods, services, deployments, namespaces, etc.",
              "Advantages of using Kubernetes for application deployment and management.",
            ],
          },
          {
            name: "Setting Up Kubernetes Cluster",
            content: [
              "Different ways to deploy Kubernetes: Self-hosted, managed services (EKS, GKE, AKS).",
              "Installing and configuring Kubernetes using kubeadm (on-premises cluster).",
              "Introduction to managed Kubernetes services: AWS Elastic Kubernetes Service (EKS).",
              "Creating and managing Kubernetes clusters on AWS EKS.",
            ],
          },
          {
            name: "Kubernetes Architecture and Components",
            content: [
              "Understanding the architecture of a Kubernetes cluster.",
              "Master node components: API server, controller manager, etcd, scheduler.",
              "Worker node components: Kubelet, Kube Proxy, container runtime (Docker, containerd).",
              "Networking in Kubernetes: Pods, services, ingress controllers.",
            ],
          },
          {
            name: "Deploying Applications on Kubernetes",
            content: [
              "Creating and managing pods: Pod specifications, multi-container pods.",
              "Deployments: Managing replica sets, rolling updates, and rollbacks.",
              "Services: Exposing applications within the cluster and externally.",
              "ConfigMaps and Secrets: Managing configuration data and sensitive information.",
            ],
          },
          {
            name: "Scaling and Load Balancing",
            content: [
              "Horizontal Pod Autoscaling (HPA): Automatically adjusting the number of pods.",
              "Cluster scaling: Adding and removing nodes based on demand.",
              "Load balancing within the cluster: Service types and load balancer controllers.",
            ],
          },
          {
            name: "Persistent Storage and Volumes",
            content: [
              "Understanding Kubernetes volumes and persistent storage options.",
              "Configuring Persistent Volume (PV) and Persistent Volume Claim (PVC).",
              "StatefulSets: Managing stateful applications with ordered scaling and network identity.",
            ],
          },
          {
            name: "Managing Application Configuration",
            content: [
              "Introduction to ConfigMap and Secret resources.",
              "Managing application configurations using ConfigMaps.",
              "Storing sensitive information using Kubernetes Secrets.",
            ],
          },
          {
            name: "Monitoring, Logging, and Troubleshooting",
            content: [
              "Monitoring Kubernetes applications using built-in tools and Prometheus.",
              "Centralized logging with Fluentd and Elasticsearch.",
              "Troubleshooting common issues: Pod failures, network problems, resource constraints.",
            ],
          },
          {
            name: "Managing Application Updates and Rollbacks",
            content: [
              "Strategies for updating applications: Blue-Green deployments, Canary deployments.",
              "Performing application updates with zero downtime.",
              "Rolling back deployments in case of issues.",
            ],
          },
          {
            name: "Security and RBAC (Role-Based Access Control)",
            content: [
              "Introduction to Kubernetes security best practices.",
              "Implementing RBAC to control access to Kubernetes resources.",
              "Network policies: Controlling communication between pods and namespaces.",
            ],
          },
          {
            name: "Advanced Kubernetes Concepts (Optional)",
            content: [
              "DaemonSets: Running a single pod on each node.",
              "CronJobs: Scheduling periodic tasks in Kubernetes.",
              "Custom Resource Definitions (CRDs): Extending Kubernetes with custom resources.",
              "Helm: Package manager for Kubernetes applications.",
            ],
          },
          {
            name: "Multi-Cluster and Hybrid Deployments (Optional)",
            content: [
              "Introduction to Multi-Cluster Deployments.",
              "Overview of Istio Service Mesh.",
              "Setting Up Multiple Clusters.",
              "Installing Istio Across Clusters.",
              "Multi-Cluster Service Discovery and Load Balancing.",
              "Securing Multi-Cluster Communication.",
              "Traffic Management Across Clusters.",
            ],
          },
          {
            name: "Kubernetes Best Practices and Future Trends (Optional)",
            content: [
              "Best practices for optimizing Kubernetes resources and performance.",
              "Kubernetes ecosystem trends and emerging technologies.",
              "Exploring serverless concepts with Kubernetes (Knative).",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "AWS Infrastructure & Automation - AWS(EC2, RDS, S3, ELB, ASG etc..), Ansible, Terraform",
      "CI/CD Pipeline Automation - GitLab, Kubernetes, ArgoCD, AWS ECR",
      "Microservices Architecture - Kubernetes, Spring boot, ReactJs, API Gateway",
      "Centralised Application Logging - Elasticsearch, Kibana, Fluentd",
      "Real-Time Application Monitoring - Grafana, Prometheus, Istio",
    ],
    projectsDetails: [
      "Setup AWS 3-Tier Architecture using Terraform Automation.",
      "Build and Deploy Microservices into Kubernetes cluster.",
      "Planning, Design, Deployment of Microservices Architecture. - Eureka Registry, MySQL, Kafka, S3 etc..",
      "Deploy Centralised Application Logging for Microservices",
      "Deploy application monitoring and graphing.",
    ],
  },
  "azure-devops": {
    title: "Azure <span class='text-yellow-400'>DevOps</span>",
    description:
      "Master Azure DevOps by learning CI/CD pipelines, infrastructure automation, monitoring, and collaboration with real projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "⛈️ Cloud",
    students: "700+",
    rating: 4.7,
    reviews: 350,
    brochure: "AZURE.pdf",
    outline: "AZURE.pdf",
    image: "/azure.jpg",
    highlights: [
      "Learn core Azure administration including VMs, storage, networking, and security.",
      "Manage Azure Active Directory, RBAC, MFA, and identity protection.",
      "Configure governance, compliance, monitoring, and cost management in Azure.",
      "Implement disaster recovery, backup, and migration solutions.",
      "Master Infrastructure as Code with ARM templates and Terraform.",
      "Use Azure DevOps services for boards, repos, pipelines, and CI/CD.",
      "Build and deploy apps with Docker.",
      "Manage applications on Azure Kubernetes.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Azure DevOps program",
      testimonials: [
        {
          name: "Ravi Kumar",
          role: "Fresher",
          image: "/ravi.jpg?height=80&width=80",
          content:
            "Flair Azure DevOps course helped me strengthen my skills in cloud infrastructure and automation. The projects on Terraform and CI/CD pipelines gave me practical exposure, and I now feel confident managing Azure deployments in real-world scenarios.",
          rating: 5,
          course: "Cloud Engineer",
        },
        {
          name: "Sneha Iyer",
          role: "Data Analyst at Wipro",
          image: "/sneha1.jpg?height=80&width=80",
          content:
            "Coming from an IT support background, this course made cloud and DevOps concepts easy to understand. I especially liked the hands-on sessions with Docker and AKS, which gave me the confidence to work on containerized applications.",
          rating: 5,
          course: "IT Support Specialist",
        },
        {
          name: "Nandhini Nanchar",
          role: "DevOps Engineer at Infosys",
          image: "/NANDHINI.png?height=80&width=80",
          content:
            "The training was very well structured and practical. Learning about monitoring, automation, and disaster recovery in Azure has been very useful in my current role. Flair Technologies made complex topics simple and job-oriented.",
          rating: 5,
          course: "System Administrator",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Hyderabad" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Azure Fundamentals & Governance",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Microsoft Azure",
            content: [
              "What is Cloud computing?",
              "What are the different Cloud service models?",
              "What are Cloud deployment models?",
              "What is Azure PowerShell and CLI?",
              "What is Azure Resource Manager (ARM)?",
              "What is the difference between ASM and ARM Deployment model?",
              "How can I create an Azure free trial subscription?",
            ],
          },
          {
            name: "Governance and Compliance",
            content: [
              "What is Azure Hierarchy?",
              "What is Azure RBAC (Role-Based Access Control)?",
              "How do I manage Users and Groups in Azure?",
              "What are Azure Policies?",
              "How can I manage Azure subscription costs?",
              "What is Azure Defender?",
            ],
          },
        ],
      },
      {
        module: " Azure Compute & Storage ",
        duration: "2 weeks",
        topics: [
          {
            name: "Azure Virtual Machines and Scale set",
            content: [
              "What should I consider when planning Virtual Machines?",
              "How do I create Windows and Linux Virtual Machines in Azure?",
              "What are Virtual Machine Availability options?",
              "How do I use Virtual Machine Extensions?",
              "What can I do for Virtual Machine troubleshooting?",
              "How can I add additional Data disks to a Virtual Machine?",
              "What are Virtual Machine Scale sets?",
            ],
          },
          {
            name: "Azure Storage",
            content: [
              "What are Azure Storage Account types?",
              "What are Azure Storage service types?",
              "How do I work with Azure Blobs?",
              "What is Azure Files?",
              "What are Azure Queues?",
              "How does Azure Table work?",
              "How can I ensure Storage Security?",
              "What is Azure Storage Explorer?",
              "How do I use AzCopy?",
              "What is Azure CDN (Content Delivery Network)?",
            ],
          },
        ],
      },
      {
        module: " Networking & Connectivity ",
        duration: "1 week",
        topics: [
          {
            name: "Virtual Networking",
            content: [
              "What is Basic Networking in Azure?",
              "What are Azure Virtual Networks (VNet)?",
              "How do I work with Azure Subnets?",
              "What are Service Endpoints and Private Endpoints?",
              "How does IP Addressing and Endpoints work?",
              "What is Azure DNS?",
              "How do I use Network Security Groups and NIC?",
              "How can I calculate CIDR?",
              "What is Public IP and Private IP in Azure?",
            ],
          },

          {
            name: "InterSite Connectivity",
            content: [
              "What is VNet Peering?",
              "How do VNet-to-VNet Connections work?",
              "What are ExpressRoute Connections?",
              "How can I set up Site-to-Site connections?",
              "What is Point-to-Site connection?",
            ],
          },
        ],
      },
      {
        module: " Monitoring, Backup & Recovery ",
        duration: "1 week",
        topics: [
          {
            name: "Monitoring",
            content: [
              "What is Azure Monitor?",
              "How do Azure Alerts work?",
              "What is Log Analytics workspace?",
              "What is Network Watcher?",
              "How can I use Application Insights?",
            ],
          },

          {
            name: "Data Protection",
            content: [
              "What is Data Replication?",
              "How can I perform File and Folder Backups in Azure?",
              "How do I back up Virtual Machines in Azure?",
              "What about SQL DB in Azure VM Backup?",
              "How can I perform Azure File share Backup?",
            ],
          },

          {
            name: "Network Traffic Management",
            content: [
              "How does Network Routing work in Azure?",
              "What is Azure Load Balancer?",
              "How do I use Application Gateway in Azure?",
              "What is Azure Traffic Manager?",
              "What is Azure Front Door?",
            ],
          },
        ],
      },
      {
        module: " Identity & Application Services ",
        duration: "1 week",
        topics: [
          {
            name: "Azure Active Directory",
            content: [
              "What is Azure Active Directory?",
              "How do I manage Azure AD users?",
              "How do I manage Azure AD groups?",
              "What is Multi-Factor Authentication (MFA)?",
              "How does Azure AD Identity Protection work?",
              "What is Self Service Password Reset (SSPR)?",
              "What are app registrations in Azure?",
              "How does Single Sign-On (SSO) work in Azure AD?",
              "How can I use Azure AD Connect to migrate On-prem AD users to Azure AD?",
            ],
          },
          {
            name: "Azure App Service (Web Apps)",
            content: [
              "What are App Service Environments (ASE)?",
              "What are App Service Plans?",
              "How can I integrate Virtual Networks with Azure App Service?",
              "What are Hybrid connections?",
              "How do I create an App Service Web App?",
            ],
          },

          {
            name: "Authentication and Data Security",
            content: [
              "Managed Identity (MI)",
              "System managed identity vs User managed identity",
              "Key Vault",
              "Azure Disk Encryption",
            ],
          },

          {
            name: "Azure Automation",
            content: [
              "Automation Account",
              "RunBooks",
              "Update Management",
              "Scheduling patching",
            ],
          },

          {
            name: "Azure Site Recovery",
            content: [
              "Business Continuity and Disaster Recovery (BCDR)",
              "Replication of Azure VMs to different Regions",
              "Failover of Azure VMs",
              "Disaster Recovery for Apps",
            ],
          },

          {
            name: "Migration (using ASR and Azure migrate)",
            content: [
              "Onprem physical VM migration to Azure",
              "Onprem Hyper-V VM migration to Azure",
              "AWS to Azure",
            ],
          },
        ],
      },
      {
        module: "Infrastructure as Code (IaC)",
        duration: "1 week",
        topics: [
          {
            name: "ARM Template (IaC in Azure)",
            content: [
              "JSON Basics",
              "How to write JSON file",
              "ARMTemplates (Azure Resource Manager), what and why",
              "What is Infrastructure as Code (IaC) and why it is important for you as infrastructure engineer?",
              "Some other IaC examples other than arm template.",
              "When to use arm template and when it is good to rely on other infra as code options.",
              "Arm template structure and schema",
              "Arm template structure in detail",
              "Arm template parameters and variables, when to use what?",
              "Arm template parameter file.",
              "How to start writing arm template from scratch",
              "Debugging and troubleshooting arm template",
              "What are the tools and tips to get started from beginner to intermediate level arm template editing",
              "Arm template architectural considerations when designing arm template for complex infrastructure.",
              "Deployment options for arm template. (PowerShell in detail, other options introduction and basic.)",
              "How to deploy multiple resources on Azure using ARM Templates",
            ],
          },
          {
            name: "Terraform (IaC Azure)",
            content: [
              "Introduction to Terraform",
              "Download, Install and Configure Terraform",
              "Terraform Constructs and Execution",
              "Terraform commands /workflow",
              "Terraform file structure",
              "Terraform providers (Azure, AWS, GCP)",
              "Authenticating Terraform with Azure",
              "Deploy an Azure VM with Terraform",
              "Terraform Backend state",
              "Terraform data sources",
              "Terraform variable types",
              "Terraform multiple resource deployment",
              "Terraform Modules",
              "Multiple Azure Services Deployment",
              "Deploy the terraform files to azure using azure pipelines",
              "Terraform target",
              "Terraform Provisions",
            ],
          },
        ],
      },
      {
        module: " Azure DevOps Services ",
        duration: "2 weeks",
        topics: [
          {
            name: "Azure DevOps Services (VSTS)",
            content: [
              "Is it a tool for DevOps?",
              "What is Azure DevOps services?",
              "Why you should know CI CD as an infrastructure engineer/developer",
              "Services in Azure DevOps services.",
              "Azure DevOps organization settings in detail.",
              "Free MS agents, Private agents, Agent Pools in Azure DevOps.",
              "Create an agent pool and private agent.",
              "What should you know before creating a Project",
              "Create a project in Azure DevOps.",
              "How to create Azure wiki",
            ],
          },

          {
            name: "Azure Boards",
            content: [
              "What is Azure Board?",
              "Introduction to Agile.",
              "Following agile in Azure DevOps.",
              "Quick Start creating Iteration, Sprint, User Stories and Task.",
              "How Azure board help your agile team.",
              "Some basic integrations with Azure Board and other Azure DevOps services",
            ],
          },

          {
            name: "Azure Repos",
            content: [
              "What is a version control and why use it?",
              "What type of version control repository supported in Azure Repos?",
              "Most common is git, some basic things you should know about git.",
              "Create a git repo in Azure Repos.",
              "Git basic commands",
              "Git branching strategy, a practical approach towards Gitflow",
              "What is pull request",
              "What are the different merge options",
              "What is git cherry-pick",
            ],
          },
          {
            name: "Azure Pipeline",
            content: [
              "What is build?",
              "What is Azure Pipelines",
              "What is CI(Continuous integration) CD(Continuous deployment)",
              "What is build and release pipeline and why I should know it as infrastructure engineer",
              "Creating build definition from Visual editor and YAML. What are task in build definitions",
              "Build Agent, Variables, Task groups and other settings in Pipeline.",
              "Release tasks creating a release pipeline, what are stages and how to use it in release pipeline.",
              "Build and release pipeline variables",
              "Service endpoints, Azure DevOps extension market place and other integrations.",
              "Create a basic build and release pipeline with a Infra as code example (ARM templates and terraform)",
              "Azure Pipeline service connection",
              "Deploy ARM Templates using classic editor pipeline",
              "Deploy Terraform templates using classic editor pipeline",
              "How to setup CI & CD pipeline for JAVA application using Classic editor pipeline",
              "How to setup CI & CD pipeline for .NET application using Classic editor pipeline",
              "YAML Basics",
              "How to convert classic editor pipeline to YAML pipeline",
              "Azure Pipeline Library",
              "Azure Pipeline deployment groups",
            ],
          },
        ],
      },
      {
        module: " Containers & Orchestration ",
        duration: "1 week",
        topics: [
          {
            name: "Docker",
            content: [
              "Introduction to Containers",
              "Introduction to Docker",
              "Downloading and Installing Docker",
              "Docker Essential Commands",
              "Docker Engine",
              "Understanding Docker Images",
              "Building Docker Images",
              "Storing and Retrieving Docker Images from Docker Hub",
              "Private Registry",
              "Building Containers from Images",
              "Understand Storage Methods",
              "How to push the Docker Image to ACR (Azure container registry)",
              "How to Create the ACI (Azure Container Instance) to run the container application",
            ],
          },

          {
            name: "AKS (Azure Kubernetes Service)",
            content: [
              "Overview of Container Orchestration",
              "Introduction to Kubernetes",
              "Kubernetes Architecture",
              "Creating POD’s and managing them",
              "Managing Networking",
              "Overview of Deployment",
              "Managing Resources",
              "Kubernetes Authentication",
              "Understand how to Monitor Applications",
              "Viewing Container logs",
              "Manage Application Logs",
              "How to deploy container application to AKS using Azure Pipelines (CI & CD)",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Handling Infrastructure Solutions For Azurecloud",
      "Monitoring Azure Cloud for a BPO",
      "Containerizing Various Frameworks & Nginx Application Using Docker",
      "Implementing CI/CD Pipelines with Azure DevOps",
    ],
    projectsDetails: [
      "The project allows learners to handle infrastructure solutions for the organization’s Azure cloud. Learners also get hands-on experience with Azure infrastructure architecture and optimizing Windows Server workloads.",
      "The learners get real-world insights into monitoring Azure cloud for a BPO. Theymanage Azure infrastructure for an outsourcing company and configure, deployand manage storage solutions and work with Azure Virtual Machines.",
      "Use Docker to successfully integrate the software projects deployed in diverseenvironments. Get hands-on learning experience in setting up Node.Js on Dockercontainers along with pulling NGINX images from Docker Hub, etc.",
      "Learners design and automate CI/CD pipelines using Azure DevOps, configuring repos, build pipelines, and deploying applications seamlessly to Azure.",
    ],
  },
  "azure-admin": {
    title: "Azure <span class='text-yellow-400'>Admin</span>",
    description:
      "Master Azure administration, security, networking, automation, and disaster recovery with real-world cloud projects.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "⛈️ Cloud",
    students: "300+",
    rating: 4.7,
    reviews: 160,
    brochure: "AZURE.pdf",
    outline: "Azure Admin.pdf",
    image: "/azurec.jpg",
    highlights: [
      "Understand Microsoft Azure fundamentals, governance, and compliance essentials.",
      "Deploy and manage virtual machines, scale sets, and app services.",
      "Configure Azure storage solutions with backup and recovery options.",
      "Design and secure virtual networking with intersite connectivity.",
      "Implement traffic management and optimize network performance.",
      "Manage Azure Active Directory, authentication, and data security.",
      "Monitor resources, automate workflows.",
      "Handle recovery, migrate with ASR.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Azure Administration program",
      testimonials: [
        {
          name: "Sneha Menon",
          role: "Fresher",
          image: "/snehame.jpg?height=80&width=80",
          content:
            "Flair Technologies’ Azure Admin training gave me strong fundamentals in VMs, storage, and networking. The practical, hands-on labs made concepts easy to understand and apply in my daily work.”",
          rating: 5,
          course: "Cloud Administrator",
        },
        {
          name: "Nikitha Chowdary",
          role: "Data Analyst at Wipro",
          image: "/nikitha.jpg?height=80&width=80",
          content:
            "I wanted to move into cloud roles. The Azure Admin course at Flair Technologies covered Active Directory, security, and monitoring thoroughly. It helped me land my first cloud job.",
          rating: 5,
          course: "IT Support Specialist",
        },
        {
          name: "Kayini Naidu",
          role: "DevOps Engineer at Infosys",
          image: "/kayini.jpg?height=80&width=80",
          content:
            "This program by Flair Technologies was practical and well-structured. Learning backup, recovery, and Azure migration boosted my confidence and career growth as an Azure Administrator.",
          rating: 5,
          course: "System Engineer",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Hyderabad" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Azure Fundamentals",
        duration: "One week",
        topics: [
          {
            name: "Introduction to Microsoft Azure",
            content: [
              "What is Cloud computing?",
              "What are the different Cloud service models?",
              "What are Cloud deployment models?",
              "What is Azure PowerShell and CLI?",
              "What is Azure Resource Manager (ARM)?",
              "What is the difference between ASM and ARM Deployment model?",
              "How can I create an Azure free trial subscription?",
            ],
          },
          {
            name: "Governance and Compliance",
            content: [
              "What is Azure Hierarchy?",
              "What is Azure RBAC (Role-Based Access Control)?",
              "How do I manage Users and Groups in Azure?",
              "What are Azure Policies?",
              "How can I manage Azure subscription costs?",
              "What is Azure Defender?",
            ],
          },
        ],
      },
      {
        module: " Compute Services ",
        duration: "One week",
        topics: [
          {
            name: "Azure Virtual Machines and Scale set",
            content: [
              "What should I consider when planning Virtual Machines?",
              "How do I create Windows and Linux Virtual Machines in Azure?",
              "What are Virtual Machine Availability options?",
              "How do I use Virtual Machine Extensions?",
              "What can I do for Virtual Machine troubleshooting?",
              "How can I add additional Data disks to a Virtual Machine?",
              "What are Virtual Machine Scale sets?",
            ],
          },
          {
            name: "Azure App Service (Web Apps)",
            content: [
              "What are App Service Environments (ASE)?",
              "What are App Service Plans?",
              "How can I integrate Virtual Networks with Azure App Service?",
              "What are Hybrid connections?",
              "How do I create an App Service Web App?",
            ],
          },
        ],
      },
      {
        module: " Storage & Backup ",
        duration: "One week",
        topics: [
          {
            name: "Azure Storage",
            content: [
              "What are Azure Storage Account types?",
              "What are Azure Storage service types?",
              "How do I work with Azure Blobs?",
              "What is Azure Files?",
              "What are Azure Queues?",
              "How does Azure Table work?",
              "How can I ensure Storage Security?",
              "What is Azure Storage Explorer?",
              "How do I use AzCopy?",
              "What is Azure CDN (Content Delivery Network)?",
            ],
          },
          {
            name: "Azure Site Recovery",
            content: [
              "Business Continuity and Disaster Recovery (BCDR)",
              "Replication of Azure VMs to different Regions",
              "Failover of Azure VMs",
              "Disaster Recovery for Apps",
            ],
          },

          {
            name: "Migration (using ASR and Azure migrate)",
            content: [
              "Onprem physical VM migration to Azure",
              "Onprem Hyper-V VM migration to Azure",
              "AWS to Azure",
            ],
          },
        ],
      },
      {
        module: " Networking Essentials ",
        duration: "One week",
        topics: [
          {
            name: "Virtual Networking",
            content: [
              "What is Basic Networking in Azure?",
              "What are Azure Virtual Networks (VNet)?",
              "How do I work with Azure Subnets?",
              "What are Service Endpoints and Private Endpoints?",
              "How does IP Addressing and Endpoints work?",
              "What is Azure DNS?",
              "How do I use Network Security Groups and NIC?",
              "How can I calculate CIDR?",
              "What is Public IP and Private IP in Azure?",
            ],
          },

          {
            name: "InterSite Connectivity",
            content: [
              "What is VNet Peering?",
              "How do VNet-to-VNet Connections work?",
              "What are ExpressRoute Connections?",
              "How can I set up Site-to-Site connections?",
              "What is Point-to-Site connection?",
            ],
          },
          {
            name: "Network Traffic Management",
            content: [
              "How does Network Routing work in Azure?",
              "What is Azure Load Balancer?",
              "How do I use Application Gateway in Azure?",
              "What is Azure Traffic Manager?",
              "What is Azure Front Door?",
            ],
          },
        ],
      },
      {
        module: " Security & Identity ",
        duration: "One week",
        topics: [
          {
            name: "Azure Active Directory",
            content: [
              "What is Azure Active Directory?",
              "How do I manage Azure AD users?",
              "How do I manage Azure AD groups?",
              "What is Multi-Factor Authentication (MFA)?",
              "How does Azure AD Identity Protection work?",
              "What is Self Service Password Reset (SSPR)?",
              "What are app registrations in Azure?",
              "How does Single Sign-On (SSO) work in Azure AD?",
              "How can I use Azure AD Connect to migrate On-prem AD users to Azure AD?",
            ],
          },

          {
            name: "Authentication and Data Security",
            content: [
              "Managed Identity (MI)",
              "System managed identity vs User managed identity",
              "Key Vault",
              "Azure Disk Encryption",
            ],
          },
        ],
      },
      {
        module: " Monitoring & Management ",
        duration: "One week",
        topics: [
          {
            name: "Monitoring",
            content: [
              "What is Azure Monitor?",
              "How do Azure Alerts work?",
              "What is Log Analytics workspace?",
              "What is Network Watcher?",
              "How can I use Application Insights?",
            ],
          },
          {
            name: "Azure Automation",
            content: [
              "Automation Account",
              "RunBooks",
              "Update Management",
              "Scheduling patching",
            ],
          },
        ],
      },
      {
        module: " Data Protection ",
        duration: "One week",
        topics: [
          {
            name: "Data Protection",
            content: [
              "What is Data Replication?",
              "How can I perform File and Folder Backups in Azure?",
              "How do I back up Virtual Machines in Azure?",
              "What about SQL DB in Azure VM Backup?",
              "How can I perform Azure File share Backup?",
            ],
          },
        ],
      },
      {
        module: " Real-World Implementation & Hands-On ",
        duration: "One week",
        topics: [
          {
            name: "Real-World Implementation & Hands-On",
            content: [
              "Integrating services across modules",
              "End-to-end project on Azure setup",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Deploy Virtual Machines & Scale Sets",
      "Secure Azure Storage Solutions",
      "Active Directory & Authentication",
      "Automated Monitoring Dashboard",
      "Disaster Recovery & Migration",
    ],
    projectsDetails: [
      "Create, configure, and manage VMs with scaling in Azure.",
      "Implement blob, file, and table storage with access policies and encryption.",
      "Set up Azure AD with users, groups, MFA, and role-based access control.",
      "Use Azure Monitor and Automation to track performance and send alerts.",
      "Configure Azure Site Recovery and migrate workloads using Azure Migrate.",
    ],
  },
  "oracle-fusion-cloud-scm": {
    title: "Oracle Fusion Cloud <span class='text-yellow-400'>SCM</span>",
    description:
      "Master procurement, inventory, and order management with Oracle Fusion Cloud SCM training.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "⛈️ Cloud",
    students: "400+",
    rating: 4.6,
    reviews: 150,
    brochure: "Oracle SCM.pdf",
    outline: "Oracle SCM.pdf",
    image: "/scm.jpg",
    highlights: [
      "Gain a solid foundation in Oracle Fusion SCM Cloud concepts and navigation.",
      "Learn to configure and manage inventory, warehouses, and stock movement.",
      "Implement procurement processes from requisitions to supplier management.",
      "Execute order management workflows including sales orders and fulfillment.",
      "Understand manufacturing operations with work orders and production tracking.",
      "Manage costing processes for accurate financial and supply chain reporting.",
      "Streamline asset and equipment maintenance.",
      "Hands-on SCM technical training.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Oracle Fusion Cloud SCM program",
      testimonials: [
        {
          name: "Kanishka",
          role: "Fresher",
          image: "/kanishka.jpg?height=80&width=80",
          content:
            "Flair Technologies’ SCM training gave me practical knowledge of procurement and inventory management. The real-time exercises helped me apply concepts directly to my work.",
          rating: 5,
          course: "B.Tech Fresher",
        },
        {
          name: "Usha Kumari",
          role: "Data Analyst at Wipro",
          image: "/usha.jpg?height=80&width=80",
          content:
            "The Oracle Fusion SCM course at Flair Technologies simplified complex modules like order management and cost control. The hands-on sessions made learning easy and effective.",
          rating: 5,
          course: "MBA Supply Chain",
        },
        {
          name: "Praneeth",
          role: "DevOps Engineer at Infosys",
          image: "/praneeth.jpg?height=80&width=80",
          content:
            "I benefited greatly from the manufacturing and maintenance modules. Flair Technologies provided the right mix of theory and practice, making me confident in using Fusion SCM at work.",
          rating: 5,
          course: "Manufacturing Executive",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Two Months", mode: "Online / Classroom-Hyderabad" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT-Professionals",
    syllabus: [
      {
        module: "Oracle Fusion SCM Cloud",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Introduction to Oracle Fusion SCM Cloud",
            content: [
              "Introduction to Oracle SCM Cloud",
              "Oracle Cloud Application Product Families",
              "SaaS, PaaS and IaaS overview",
              "Oracle SCM Cloud Capabilities: Overview",
              "Technical Components Overview",
              "Explain Course Content in Detail",
            ],
          },
          {
            name: "Navigation in ERP Cloud",
            content: [
              "Navigation in Oracle Cloud applications",
              "News Feed home page layout",
              "Banner Layout",
              "How to switch between layouts with sandbox",
            ],
          },
          {
            name: "Dashboards, Work Areas and Infotiles",
            content: [
              "Dashboards in Oracle Cloud applications",
              "Work Areas and Infotiles",
              "Tasks Panel – Access tasks, perform searches, run reports",
              "Infolets – Summary View, facilitates drilldown, Personalize",
              "Set User Preferences, save custom searches, Configure table columns",
            ],
          },
          {
            name: "Security in Fusion Cloud Application - RBAC",
            content: [
              "Role based access control - RBAC",
              "Configure security framework using Privileges, Duty roles, Job Roles, Abstract roles",
              "Assigning job roles to user and see the changes in application UI",
              "Create a custom role and compare it to standard role",
              "Explain other options available in IT Security Console",
              "Grant Data Access to user",
            ],
          },
          {
            name: "Functional Set Up Manager",
            content: [
              "Implementation Project Planning",
              "Roles and Responsibilities",
              "Offerings",
              "Implementation Considerations",
              "SCM Simplified Setup: Overview",
              "Automated Setup of SCM Common Components",
              "Simplified Setup: Time Savings",
              "Best Practices",
            ],
          },
          {
            name: "Value Sets, Flexfields & Lookups",
            content: [
              "Explain Value Sets, Flexfields and Lookups on a high level",
              "Create 5 different types of Value Sets and use them in Flexfields configuration",
              "Configure Descriptive Flexfields (DFF), deploy and test it in application",
              "Configure Extensible Flexfields (EFF), deploy and test it in application",
              "Configure Key Flexfields (KFF), deploy and test it in application",
              "Explain configuration levels of lookups",
            ],
          },
          {
            name: "Enterprise Structure in Fusion Cloud",
            content: [
              "Enterprise Structure Walkthrough",
              "EBS vs Fusion Cloud Org Structure",
              "COA Overview",
              "Ledger Creation",
              "Legal Entity",
              "Business Unit Creation",
              "Inventory Org Creation",
            ],
          },
        ],
      },
      {
        module: "Inventory Management Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Inventory Overview",
            content: [
              "How Inventory Fits into Oracle’s SCM Cloud Offering",
              "Oracle’s SCM Cloud Progress",
              "Oracle Inventory Management Cloud Capabilities: Overview",
            ],
          },
          {
            name: "Inventory Transaction Setup",
            content: [
              "Create Item Classifications & setting up security",
              "Define UOM",
              "Item Life Cycle Phases",
              "Item Attribute Groups",
              "Item Classes",
              "Item Statuses",
              "Item Types",
              "Inventory Transaction Uses",
              "Inventory Transaction Sources and Types",
              "System- and User-defined Inventory Transaction Types",
              "Inventory Transaction Setup Tasks",
            ],
          },
          {
            name: "Lot and Serial Number Control",
            content: [
              "Lot Control: Overview",
              "Lot Control Organization Parameters",
              "Lot Control Item Attributes",
              "Lot Management",
              "Serial Number Control",
              "Lot and Serial Number Control Profile Options",
            ],
          },
          {
            name: "Inventory on Hand and Availability",
            content: [
              "On-Hand Quantity and Availability",
              "Manage Item Quantities Page",
              "Reservations",
            ],
          },
          {
            name: "Issue and Transfer Material",
            content: [
              "Inventory Transactions: Overview",
              "Miscellaneous Transactions",
              "Subinventory Transfers",
              "Direct and In-Transit Interorganization Transfers",
              "Transfer Orders",
            ],
          },
          {
            name: "Warehouse Receiving",
            content: [
              "Receiving: Overview",
              "Receipt Routing",
              "Receipt Processing Methods",
              "Expected Receipts",
              "Receipt Structure",
              "Returns and Corrections",
              "Additional Receiving Features",
              "Receiving Parameters",
            ],
          },
          {
            name: "Inventory Replenishments",
            content: [
              "Explain Min-Max Planning",
              "Min-Max Planning Report Parameters: Points to Consider",
              "Min-Max Planning Replenishment Quantities: How They Are Calculated",
            ],
          },
          {
            name: "Inventory Accuracy",
            content: [
              "Cycle Counting: Explained with ABC Analysis",
              "Create and Manage Cycle Counts",
              "Generate Count Schedules and Sequences",
              "Analyze Materials Management and Logistics Performance",
              "Monitor Warehouse Operations Dashboard",
            ],
          },
        ],
      },
      {
        module: "Procurement Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Procurement Application Overview",
            content: [
              "Explain Procurement architecture and components",
              "Explain simplified Procure to Pay flow",
              "Explain Procurement applications integration",
            ],
          },
          {
            name: "Set Up the Procurement Common Functions",
            content: [
              "Identify common procurement tasks",
              "Configure required common procurement tasks",
              "Define Common Payables and Procurement Options",
              "Procurement Document Numbering",
              "Define Common Purchasing Configuration",
              "Procurement Agents",
            ],
          },
          {
            name: "Approvals Management",
            content: [
              "Understand the approval management workflow",
              "Set up approval management",
              "Understand approval policy configuration",
              "Describe steps for defining approval groups",
              "Manage, edit, and deploy approval rules",
              "Create approval rule conditions",
            ],
          },
          {
            name: "Transaction Account Builder",
            content: [
              "Understand the transaction account builder for Procurement",
              "Set up Mapping Set",
              "Set up account rules",
              "Set up TAD",
              "Assign the TAD to Procurement",
            ],
          },
          {
            name: "Define and Manage Suppliers",
            content: [
              "Explain purpose and use of Supplier Model within Fusion Procurement",
              "List the benefits provided to suppliers by Fusion Supplier Portal",
              "Explain the methods available for registering suppliers",
              "Identify the job roles available to the supplier self-service administrator to provision",
              "Implement Supplier Model and Supplier Portal",
            ],
          },
          {
            name: "Administer Procurement Catalogs",
            content: [
              "Identify Self Service Procurement setup tasks and profile options",
              "Manage value sets and descriptive flexfields for information templates",
              "Create, manage, and secure catalogs",
              "Understand Supplier Content Map Sets",
              "Create local and informational catalogs",
              "Create and manage public shopping lists",
              "Create and manage smart forms",
              "Understand content zones",
            ],
          },
          {
            name: "Manage Requisitions",
            content: [
              "Understand the basics of requisition management",
              "Manage requisitions",
              "Create and modify approved orders",
              "Set up charge, variance and accrual accounts",
            ],
          },
          {
            name: "Manage Purchase Orders",
            content: [
              "Understand the components and use of purchase orders",
              "Create and Manage purchase orders",
              "Understand setup options related to purchase orders",
            ],
          },
          {
            name: "Oracle Fusion Sourcing",
            content: [
              "Create Negotiation Styles",
              "Create Negotiation Templates",
              "Setup Attribute Lists",
              "Define Cost Factors",
              "Create Cost Factor Lists",
              "Manage Sourcing Value sets",
              "Create Sourcing Descriptive Flexfields",
              "RFI Creation",
              "RFQ Creation",
              "Award Process",
              "Sourcing Approvals",
              "Surrogate Responses",
              "Online Messages",
            ],
          },
        ],
      },
      {
        module: "Order Management Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Order Management Overview",
            content: [
              "Create and Submit Order",
              "View Fulfillment Lines and Orchestration Plan",
              "Order Business Flow",
              "Order Management Integrations",
            ],
          },
          {
            name: "Pricing",
            content: [
              "Setup Pricing Strategy",
              "Pricing segment",
              "Manage Price List",
              "Manage Discount List",
              "Manage Simple Discount",
              "Manage Tier Based Discounts",
              "Manage Shipping Charges List",
              "Assignment pricing strategy",
              "Define Global Price List",
            ],
          },
          {
            name: "Global Order Promising (GOP)",
            content: [
              "Architecture and Components",
              "Key functionalities of Global Order Promising",
              "Global Sourcing Rules",
              "Local Sourcing Rules",
              "ATP Rules",
              "Data Collection",
              "Global Order Promising Engine Restart",
              "Real-Time Supply Updates",
            ],
          },
          {
            name: "Shipping Setups",
            content: [
              "Manage Shipping Value Sets",
              "Manage Shipping Lookups",
              "Manage Release Sequence Rules",
              "Manage Pick Slip Grouping Rules",
              "Manage Picking Rules",
              "Manage Shipping Parameters",
              "Manage Ship Confirm Rules",
            ],
          },
          {
            name: "Manage Order Holds, Processing Constraints",
            content: [
              "Create Custom Hold Type and Reasons",
              "Apply and Release Holds",
              "Verify Hold Details",
              "Create Record Set",
              "Create Validation Rule Set",
              "Create Constraints",
            ],
          },
          {
            name: "Order Orchestration Definition, Transformation Rules",
            content: [
              "Review Order Orchestration",
              "Create custom orchestration rules",
              "Assign orchestration rules to sales order",
              "Custom order transformation rules",
            ],
          },
        ],
      },
      {
        module: "Manufacturing Management Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Manage Manufacturing Plant",
            content: [
              "Work Areas",
              "Resources",
              "Work Centers",
              "Standard Operations",
            ],
          },
          {
            name: "Production Process Design",
            content: [
              "Overview of the Work Definition Work Area",
              "Work Definition Names",
              "Overview of Work Definitions",
              "How You Manage Work Definitions in the User Interface",
              "How You Create Work Definitions",
              "Create a Work Definition for Discrete Manufacturing that Includes a Supplier Operation",
              "How You Edit Work Definitions",
              "How You Create an Assemble to Order (ATO) Model Work Definition",
              "How You Create a Configured Item Work Definition",
              "Work Definitions for Contract Manufacturing",
              "How You Process Item Structure Changes to Work Definitions",
              "Synchronize Item Structure Changes to Work Definitions",
              "How You Manage Work Definition Versions",
              "Automatic Work Definitions",
            ],
          },
          {
            name: "Execute Production",
            content: [
              "Overview of Production Execution Tasks",
              "How You Review a Dispatch List",
              "How You Resequencing Work Order Operations",
              "Use the Quick Complete Action to Execute a Standard Discrete Manufacturing Work Order",
              "Exceptions",
              "Operation Transactions",
              "Inspections",
              "Production Transactions",
              "How You Pick Materials for Work Orders",
              "Considerations for Picking Materials",
              "FAQs for Picking Materials",
              "How You Pick Reserved Assemblies for Rework Work Orders",
              "Reservation of Materials",
              "Overview of Reservation of Materials for Work Orders",
              "How You Reserve Materials for Work Orders in Manufacturing",
              "How You Manage Reservations for Work Order Materials in Manufacturing",
              "Transfer Transactions from Production to Costing",
              "How You Import Production Transactions",
              "Overview of Data Collections for Supply Chain Planning",
              "Global Entities",
              "Data Collection Types for Supply Chain Planning",
              "Manage Planning Source Systems for Data Collections",
              "How the Order Orchestration and Order Promising Processes Use the Collected Planning Data",
              "How You Enable Cross-References of Entities by Data Collections",
              "How Planning Processes Collect Different Work Definitions and Item Structures",
              "Enable External Data Collection for the Oracle Fusion Source System",
              "Collect Planning Data from the Oracle Fusion Source System",
            ],
          },
        ],
      },
      {
        module: "Oracle Cost Management Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "Overview of Cost Management",
              "Supported Cost Methods",
              "Time Zones and Dates",
              "Overview of Importing Cost Data",
              "Web Services You Can Use to Integrate Cost Management",
            ],
          },
          {
            name: "Receipt Accounting",
            content: [
              "Overview of Receipt Accounting",
              "Receipt Accounting Infolets",
              "Considerations for Accrual Settings",
              "Receipt Accounting Tasks and Accounting Events",
              "Receipt Accrual, Reconciliation, and Clearing",
              "Receipt Accrual Clearing Rules",
              "Receipt Accounting Cutoff Dates",
              "Overview of Accrual Reversal",
              "Period End Uninvoiced Receipt Accrual",
              "How You Close a Receipt Accounting Period",
              "Cost Management for Internal Material Transfers",
            ],
          },
          {
            name: "Cost Planning",
            content: [
              "Cost Planning Process",
              "Cost Scenario",
              "Standard Costs",
              "Resource Rates",
              "Overhead Rates",
              "Roll Up Costs",
              "Cost Rollup Examples",
              "Cost Analysis",
              "Publish Costs",
            ],
          },
          {
            name: "Cost Accounting",
            content: [
              "Overview of Cost Accounting",
              "Cost Accounting Infolets",
              "Scheduled Processes for Cost Accounting",
              "Cost Accounting Process",
              "Cost Accounting Periods",
              "Cost Processing",
              "Internal Material Transfers",
              "Lot Transactions",
              "Cost of Goods Sold and Gross Margin",
              "Global Procurement",
              "Cost Accounting Examples",
            ],
          },
        ],
      },
      {
        module: "Oracle Maintenance Management Cloud Implementation",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Introduction",
            content: [
              "Overview of Maintenance Organization",
              "How You Manage Maintenance Work Areas",
              "How You Manage Maintenance Resources",
              "How You Manage Maintenance Resource Instances",
              "How You Manage Maintenance Work Centers",
            ],
          },
          {
            name: "Assets",
            content: [
              "Overview of Assets",
              "How You Manage Assets in the User Interface",
              "How You Create an Asset",
            ],
          },
          {
            name: "Maintenance Work Definition",
            content: [
              "Overview of Maintenance Work Definitions",
              "Maintenance Work Definition Structure",
              "How You Model Maintenance Work Definitions",
              "How You Manage Maintenance Work Definitions in the User Interface",
              "How You Create a Maintenance Work Definition",
              "How You Edit a Maintenance Work Definition",
            ],
          },
          {
            name: "Manage Maintenance Work",
            content: [
              "Overview of Maintenance Work Management",
              "Overview of Maintenance Work Orders",
              "How You Manage Maintenance Work Orders in the User Interface",
              "How You Create a Maintenance Work Order",
              "How Maintenance Work Orders are Scheduled",
              "Example of Work Order Scheduling",
              "Edit Maintenance Work Orders",
            ],
          },
          {
            name: "Execute Maintenance Work",
            content: [
              "Overview of Maintenance Work Execution",
              "How You Track Receiving Details of Procured Items in Maintenance",
              "How You Review a Maintenance Dispatch List",
              "How You Restrict Lot Numbers LOV to Issued Lot Numbers on the Maintenance Dispatch List Page",
              "How You Resequence a Maintenance Work Order Operation",
              "How You Search for Work Order Operations by Resource Instance and Work Order Description in the Maintenance Dispatch List",
            ],
          },
        ],
      },
      {
        module: "SCM Technical Training",
        duration: "1.5 weeks",
        topics: [
          {
            name: "SCM Technical Training Overview",
            content: [
              "Build SQL Queries and Creating Data Model",
              "Design report layout using RTF",
              "Register and execute BIP report as ESS Job",
              "Test and explore ESS Job Submission options from scheduled processes",
            ],
          },
          {
            name: "OTBI Reports & Dashboards",
            content: [
              "Build OTBI Detail Report",
              "Build OTBI Summary Report",
              "OTBI Dashboards",
            ],
          },
          {
            name: "File Based Data Import (FBDI)",
            content: [
              "FBDI Overview",
              "Data file preparation in FBDI format",
              "Execute File Based Data Import (FBDI) process",
              "Error handling and reconciliation",
            ],
          },
          {
            name: "Spreadsheet Data Loader (SDL)",
            content: [
              "SDL Overview",
              "Data file preparation in SDL format",
              "Execute Spreadsheet Data Loader (SDL) process",
              "Error handling and reconciliation",
            ],
          },
          {
            name: "Sandbox and UI Customizations",
            content: [
              "Introduction to Sandboxes",
              "Make changes in UI with sandbox – Ex: Make fields required/read only/hidden",
              "Use expression language to write complex conditional logic",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Procurement Lifecycle Simulation",
      "Inventory Management",
      "Order-to-Cash (O2C) Flow",
      "Supply Chain Planning Basics",
      "Procurement & Inventory Integration",
    ],
    projectsDetails: [
      "Practice the complete cycle from purchase requisition to supplier performance reporting.",
      "Manage stock, transfers, and cycle counting with real-time inventory tracking.",
      "Execute sales orders through shipments and invoicing for customer fulfillment.",
      "Create forecasts and run supply planning to balance demand with supply.",
      "Integrate purchasing with inventory to streamline replenishment and stock updates.",
    ],
  },
  "data-analytics": {
    title: "Data <span class='text-yellow-400'>Analytics</span>",
    description:
      "Master Excel, Power BI, Tableau, Alteryx, SQL, Python, and Soft Skills with real-world projects.",
    duration: "4 months",
    mode: "Offline",
    level: "Beginner to Advanced",
    price: "₹35,000",
    originalPrice: "₹45,000",
    category: "📊 Analytics",
    students: "700+",
    rating: 4.9,
    reviews: 500,
    brochure: "Data Analytics.pdf",
    outline: "Data Analytics.pdf",
    image: "/DAA.jpg",
    highlights: [
      "Master Excel essentials, formulas, charts, and data analysis tools.",
      "Build interactive dashboards and reports with Microsoft Power BI.",
      "Learn Tableau visualizations and advanced dashboard design.",
      "Automate workflows and perform data blending using Alteryx Designer.",
      "Write and optimize SQL queries for databases and reporting.",
      "Use Python for analytics in data processing and visualization.",
      "Improve communication and teamwork.",
      "Apply skills in real projects.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Data Analytics program",
      testimonials: [
        {
          name: "Sravya Reddy",
          role: "Fresher",
          image: "/Sravyare.jpg?height=80&width=80",
          content:
            "As a B.Tech fresher, I was struggling to break into the analytics field without real-world tools on my resume. This course changed everything! I learned Excel, Power BI, SQL, and even Python with real applications. The hands-on projects made my portfolio stand out. I recently landed an entry-level Data Analyst role and was even complimented on my Tableau dashboard in the interview! What really helped me was the logical flow-from basic Excel to Python-which built my confidence week by week. Highly recommended for any fresher!",
          rating: 5,
          course: "B.Tech Fresher",
        },
        {
          name: "Harini Ch",
          role: "Data Analyst at Wipro",
          image: "/Harinic.jpg?height=80&width=80",
          content:
            "Coming from an MIS Executive background, I wanted to move beyond Excel reports and level up my skills. This course was a game-changer! I mastered Power BI, Alteryx, and SQL-tools that are now core to my daily work. I particularly appreciated how each module built on the previous one. Python seemed intimidating at first, but the structured training made it manageable. I’m now leading automation initiatives at work, and my insights are making a real business impact. This course empowered me to grow into a Business Analyst role.",
          rating: 5,
          course: "MIS Executive",
        },
        {
          name: "Vamsi Krishna",
          role: "DevOps Engineer at Infosys",
          image: "/Vansik.jpg?height=80&width=80",
          content:
            "With a BPO background and no tech experience, I never imagined I could transition into analytics. But this course made it possible. It started with Excel, which I was already familiar with, and gradually introduced me to Power BI, SQL, and even Python. I loved the real-world projects-they gave me something solid to show recruiters. Within 3 months of completing the course, I got hired as a Junior Data Analyst. The instructors made complex tools like Tableau and Alteryx easy to grasp. If you're from a non-IT field and want to switch careers, this course is the perfect launchpad.",
          rating: 5,
          course: "BPO (Non-IT) Background",
        },
      ],
    },
    nextBatch: [{ starts: "Every Two Months", mode: "Classroom-Bangalore" }],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Microsoft Excel",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to Excel",
            content: [
              "Short Keys",
              "Formatting (Applying Borders, Colors, and Font Styles)",
              "Conversion of Formats",
              "Merging and Wrapping the Text",
              "Conditional Formatting",
              "Format as Table",
              "Inserting and Deletion of Rows, Columns, and Sheets",
              "Row Height and Column Width Formula-Based",
              "Conditional Formatting",
            ],
          },
          {
            name: "Tables, Illustrations and Charts",
            content: [
              "Hide and Unhide of Rows, Columns, and Sheet Protecting Sheet and Workbook",
              "Move or Copy, Rename Sheet and Tab Color",
              "Filling Series of Numbers and Dates",
              "Sorting and Filtering",
              "Pivot Tables",
              "Usage of Formulas in Pivot Tables",
              "Inserting Pictures, Clip Art, Text Box, Shapes, and Smart Art",
              "Usage of Charts (Column, Pie, Bar, Line)",
              "Usage of Dynamic Ranges in Charts",
            ],
          },
          {
            name: "Proofing, Comments and Changes",
            content: [
              "Inserting Hyperlinks",
              "Linking Sheets, Cells, Workbook, Range, and Mail",
              "Header-Footer, Word Art, and Signature Line",
              "Inserting Objects",
              "Protect Sheet",
              "Protect Workbook",
              "Hiding Formulas",
              "Sharing Workbook",
              "Track Changes (Highlight, Accept, and Reject Changes)",
              "Inserting and Editing Comments",
            ],
          },
          {
            name: "Page Setup, Scale to Fit and Arrange",
            content: [
              "Inserting Comments and Spell Check",
              "Freeze Panes (Rows and Columns)",
              "Save Workspace, Switch Windows, and Split Window",
              "Arranging the Window (Vertically and Horizontally)",
              "Page Layout, Gridlines, and Formula Bar",
              "Paper Margins, Gridlines, and Paper Size",
              "Page Breaks, Applying Background, and Print Titles Row",
              "Repeat at Top and Print Preview",
            ],
          },
          {
            name: "Connections and Data Tools",
            content: [
              "Data Importing (From Access, Web and Text)",
              "Other Sources (SQL server and XML)",
              "Advance Sorting and Filtering",
              "Text to Columns",
              "Removing Duplicates",
              "Data Validation",
              "List box, Formula based restrictions",
              "Customization of error alert and input box",
              "Types of Alerts (Stop, Warning and Information)",
              "Highlighting the Invalid data",
            ],
          },
          {
            name: "Data Tools and Outline",
            content: [
              "Data Consolidation",
              "Scenario Manager",
              "Goal Seek",
              "Data Table",
              "Group and Ungroup",
              "Adding subtotals to the list",
              "Defining name to the range",
              "Name manager editing",
              "Trace precedents/Trace Dependents",
              "Evaluate Formulas",
            ],
          },
          {
            name: "Text, Arithmetical functions",
            content: [
              "UPPER, LOWER, PROPER, LEN, LEFT, RIGHT, MID",
              "FIND, TRIM, CLEAN, CHAR, CODE",
              "CONCATENATE, SUBSTITUTE, EXACT, REPT",
              "REPLACE, SEARCH, VALUE and TEXT",
              "ABS, ROUND, SUM, SUMIF, SUMIFS, SUMPRODUCT, SUBTOTAL and RANDBETWEEN",
              "Activities based on the above functions",
            ],
          },
          {
            name: "Date & Time and Logical Functions",
            content: [
              "DATEDIF, DATE, TODAY, NOW, WEEKDAY, MONTH, YEAR, YEARFRAC, NETWORKDAYS, DAYS360, MINUTE, HOUR, SECOND, WEEKNUM, EDATE and EOMONTH",
              "IF, AND, OR, NOT, TRUE, FALSE, IFERROR and Nested Functions. Activities based on the above functions",
            ],
          },
          {
            name: "Statistical and Information Functions",
            content: [
              "AVERAGE, AVERAGEIF, AVERAGEIFS, COUNT, COUNTA, COUNTBLANK, COUNTIF, COUNTIFS, LARGE, SMALL, MAX, MIN, RANK, ROWS, ROW, COLUMN and COLUMNS",
              "ISBLANK, ISERROR, ISNUMBER, ISTEXT and ISNA Activities based on the above functions",
            ],
          },
          {
            name: "Lookup and References",
            content: [
              "HLOOKUP, VLOOKUP, INDEX, MATCH, OFFSET, CHOOSE and INDIRECT",
              "VLOOKUP with MATCH, IFERROR, WILDCARD and CHOOSE",
              "Combination of Formulas",
              "Array Formulas",
              "VLOOKUP and COLUMN",
              "VLOOKUP with IF and VLOOKUP with AND Activities based on the above functions",
            ],
          },
          {
            name: "Activities",
            content: [
              "SUM and CHOOSE",
              "Sorting the data using formula",
              "Multiple VLOOKUP",
              "Multiple INDEX",
              "Leave Tracker using conditional formatting",
              "Using Formula in conditional formatting to highlight second repeated value",
            ],
          },
          {
            name: "Summarizing of Excel",
            content: [
              "Activities based on Real Time",
              "Scenario Summarizing Of Excel",
            ],
          },
        ],
      },
      {
        module: "Microsoft Power BI",
        duration: "4 weeks",
        topics: [
          {
            name: "Power BI Essentials & Environment Setup",
            content: [
              "What is Power BI - Overview of Desktop, Service, Mobile",
              "Installing Power BI Desktop & Initial Setup",
              "Understanding Power BI Components (Desktop, Service, Gateway)",
              "Power BI Licensing: Free, Pro, Premium, PPU",
            ],
          },
          {
            name: "Data Loading and Transformation (Power Query / M Language)",
            content: [
              "Connecting to Data Sources (flat files, RDBMS Databases, Semantic Models)",
              "Introduction to Power Query Editor",
              "Data Shaping & Cleaning (Remove, Filter, Replace, Split)",
              "Merge vs Append Queries",
              "Data Types and Formatting",
              "Understanding Query Folding",
              "Introduction to M Language (Functions & Custom Columns)",
            ],
          },
          {
            name: "Data Modelling and Relationships",
            content: [
              "Star vs Snowflake Schema",
              "Creating and Managing Relationships",
              "Fact Tables vs Dimension Tables",
              "Best Practices for Model Design (Normalization/Denormalization)",
              "Using Date Tables and Auto Date/Time",
            ],
          },
          {
            name: "Visualizations and Report Design",
            content: [
              "Default & Common Visuals",
              "Slicers, Filters, Drill-downs, Tooltips",
              "Conditional Formatting & Interactions",
              "Bookmarks, Selections & Navigation",
              "Drillthrough Pages & Tooltip Pages",
              "Using Custom Visuals from AppSource",
              "Best Practices for Visual & UX Design",
            ],
          },
          {
            name: "DAX (Data Analysis Expressions)",
            content: [
              "Calculated Columns vs Measures",
              "Aggregation & Math Functions ",
              "Logical Functions",
              "Date & Time Intelligence Functions",
              "Text or String Functions",
              "Filter & Row Context",
              "Advanced DAX Functions",
              "DAX Performance Tuning",
            ],
          },
          {
            name: "Publishing, Sharing & Collaboration",
            content: [
              "Publishing Reports to Power BI Service",
              "Workspaces, Apps & Access Control",
              "Scheduled & Incremental Data Refresh",
              "Row-Level Security (RLS) & Object-Level Security (OLS)",
              "Report Sharing, Subscriptions, Alerts",
              "Gateway Installation & Management",
            ],
          },
        ],
      },
      {
        module: "Tableau",
        duration: "3 weeks",
        topics: [
          {
            name: "Introduction to Business Intelligence",
            content: [
              "Overview of BI",
              "Overview of Tableau Environment",
              "Putting it all together",
            ],
          },
          {
            name: "Data Connections",
            content: [
              "Getting to data from Tableau Desktop",
              "Learning the basics of visualizing data",
              "Visualizing business needs",
            ],
          },
          {
            name: "Transforming Data",
            content: ["Why transform data?", "Data Blends", "Data Joins"],
          },
          {
            name: "Calculations in Tableau",
            content: [
              "Data Aggregates",
              "Calculation Wizards",
              "Table Calculations",
              "Customized Calculations",
            ],
          },
          {
            name: "Advanced Calculations",
            content: ["Strings", "Floor and Ceiling", "Dates"],
          },
          {
            name: "Parameters and Filters",
            content: [
              "Basics of Filtering",
              "Basics of Parameters",
              "Putting it all together",
            ],
          },
          {
            name: "Sorting",
            content: [
              "Ascending and Descending Order manually",
              "Computes and Sorting",
              "Nested Sorting",
            ],
          },
          {
            name: "Grouping Techniques",
            content: ["Sets", "Combining Fields"],
          },
          {
            name: "Formatting",
            content: ["Colours", "Custom Colours", "Highlighters"],
          },
          {
            name: "Map Basics",
            content: ["Layers", "Editing", "Customizing"],
          },
          {
            name: "Visualizations",
            content: [
              "Understanding Charts",
              "Text Charts",
              "Visual Charts",
              "Time Charts",
              "Trend Charts",
            ],
          },
          {
            name: "Introduction to Dashboards",
            content: ["Designing", "Actions", "Stories"],
          },
          {
            name: "Server Deployment",
            content: [
              "What is Tableau Server?",
              "Install / Configure",
              "Working with Users",
              "Working with Projects",
              "Working with Groups",
              "Publishing the reports and data sources in server",
              "Create Sites, Projects, Users, and Groups",
              "Securing Projects",
              "Assigning the permissions and licenses to the users",
              "Server Performance improvement and Tableau Server recording",
            ],
          },
        ],
      },
      {
        module: "Alteryx Designer",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to Alteryx",
            content: [
              "What is ETL & ELT in Modern Data Pipelines",
              "Why Alteryx - Role in Analytics & Automation",
              "Understanding Alteryx Designer",
              "Designer Interface Tour (Canvas, Configuration Pane, Results)",
              "Workflow & User Settings",
              "Installation & License Configuration",
              "Alteryx File Types: .yxmd, .yxdb, .yxmc, .yxwz",
            ],
          },
          {
            name: "Input & Output Tools",
            content: [
              "Input Data (Local, Database, Cloud, APIs)",
              "Output Data (File formats, append/overwrite, Excel tab naming)",
              "Browse Tool (Inspection & Debugging)",
              "Manual Input",
              "Directory, Dynamic Input, Dynamic Rename",
              "Date & Time Formats and Parsing",
            ],
          },
          {
            name: "Data Preparation Tools",
            content: [
              "Data Cleansing",
              "Auto Field",
              "Select (Field renaming, type conversion, metadata)",
              "Convert Date",
              "Record ID",
              "Formula (Basic to Nested Logic)",
              "Multi-Field Formula",
              "Multi-Row Formula (Lag/Lead calculations like SQL)",
              "Generate Rows (for looping/date expansion)",
            ],
          },
          {
            name: "Filtering, Sorting & Sampling",
            content: [
              "Sort",
              "Filter (Basic and Custom logic)",
              "Sample (First N, Every Nth, Random %)",
              "Unique",
              "Tile Tool (for binning/segmentation)",
              "Conditional Row Filtering (via Formula + Filter)",
            ],
          },
          {
            name: "Joins and Data Blending",
            content: [
              "Join Tool (Inner/Left/Right Joins)",
              "Union Tool (Auto Config by Name/Position)",
              "Append Fields",
              "Find and Replace",
              "Fuzzy Match (Name/Address matching)",
              "Join Multiple Tool",
              "Make Group Tool (used in Fuzzy Matching)",
            ],
          },

          {
            name: "Data Transformations",
            content: [
              "Summarize Tool (Group By, Sum, Min/Max, Concatenate, Count)",
              "Cross Tab (Pivoting)",
              "Transpose (Unpivoting)",
              "Text to Columns",
              "RegEx Tool (Extract, Replace, Match)",
              "Field Info Tool (Metadata Exploration)",
            ],
          },
          {
            name: "Data Engineering Tools (Important Additions)",
            content: [
              "In-Database Tools (Connect In-DB, Data Stream In/Out, In-DB Filter, Join, Select)",
              "SQL Scripting Tool (for push-down optimization)",
              "Cache Dataset (for performance tuning)",
              "Block Until Done (for sequential logic)",
              "Run Command Tool (trigger external scripts or shell commands)",
              "Download Tool (API/REST integration)",
              "Publish to Database (Bulk Load)",
              "Data Connectors (Azure, AWS, Snowflake, Salesforce, SharePoint)",
            ],
          },

          {
            name: "Macros (Reusable Logic)",
            content: [
              "What is a Macro in Alteryx",
              "Standard Macro – Reusable logic",
              "Batch Macro – Runs once per control group",
              "Iterative Macro – Loops until condition is met",
              "Interface Tools: Macro Input/Output, Drop Down, Check Box, Control Parameter",
              "Macro Output Testing and Debugging",
              "Storing Macros in Gallery or Shared Repos",
            ],
          },

          {
            name: "Analytic Apps",
            content: [
              "What is an Analytic App",
              "Use Cases (Parameter-driven Reports, User-defined Filters)",
              "Interface Tools (Text Box, Radio Button, List Box, File Browse)",
              "Creating, Saving, and Running Apps (.yxwz)",
              "App chaining and validation",
              "Publishing to Alteryx Server/Gallery",
            ],
          },

          {
            name: "Reporting Tools (Alteryx Designer Reports)",
            content: [
              "Layout Tool",
              "Table Tool (Tabular formatting)",
              "Report Text Tool",
              "Charting Tool (Basic bar, pie, line charts)",
              "Image Tool",
              "Render Tool (to PDF, Excel, HTML)",
              "Email Tool (attach and send reports via SMTP)",
              "Report Footer/Header",
            ],
          },
        ],
      },
      {
        module: "SQL (Structured Query Language)",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to SQL",
            content: [
              "Flat Files vs RDBMS (Why SQL over Excel/CSV)",
              "Introduction to Structured Query Language",
              "Importance of SQL in Data Analysis & BI",
              "Data Types (INT, VARCHAR, DATE, FLOAT, etc)",
              "Tables, Attributes, and Records",
              "Installation & Configuration of SQL Server / PostgreSQL / MySQL",
            ],
          },
          {
            name: "SQL Command Categories",
            content: [
              "DDL - Data Definition Language: Create, Alter, Drop, Truncate",
              "DML - Data Manipulation Language: Insert, Update, Delete, Merge",
              "DQL - Data Query Language: Select and its variations",
              "TCL - Transaction Control Language: Commit, Rollback, Savepoint",
              "DCL - Data Control Language (Optional for Analysts): Grant, Revoke",
            ],
          },
          {
            name: "Clauses, Operators & Filters",
            content: [
              "WHERE, GROUP BY, HAVING, ORDER BY, TOP / LIMIT",
              "Logical Operators: AND, OR, NOT",
              "Comparison Operators: =, <>, >, <, >=, <=",
              "Range Filters: BETWEEN, IN, IS NULL, LIKE",
              "Wildcards in LIKE: %, _",
              "DISTINCT, CASE, COALESCE, NULLIF",
              "Set Operators: UNION, UNION ALL, INTERSECT, EXCEPT",
            ],
          },
          {
            name: "SQL Constraints",
            content: [
              "Primary Key",
              "Unique",
              "Not Null",
              "Default",
              "Check",
              "Composite Keys",
            ],
          },
          {
            name: "Functions in SQL",
            content: [
              "Aggregate Functions: SUM(), AVG(), MIN(), MAX(), COUNT()",
              "String Functions: LEN(), UPPER(), LOWER(), TRIM(), LTRIM(), RTRIM(), SUBSTRING(), REPLACE(), CHARINDEX()",
              "Date and Time Functions: GETDATE(), DATEDIFF(), DATEADD(), YEAR(), MONTH(), DAY(), FORMAT()",
              "Conversion Functions: CAST(), CONVERT()",
            ],
          },
          {
            name: "Subqueries",
            content: [
              "Introduction to Subqueries",
              "Single-row and Multi-row Subqueries",
              "Correlated vs Non-Correlated Subqueries",
              "Scalar Subqueries in SELECT/WHERE",
            ],
          },
          {
            name: "Joins in SQL",
            content: [
              "Why Joins are Needed",
              "Inner Join",
              "Left Join",
              "Right Join",
              "Full Outer Join",
              "Cross Join",
              "Self Join",
              "Anti Join (NOT EXISTS, EXCEPT, LEFT JOIN WHERE NULL)",
              "Real-world Join Scenarios",
            ],
          },
          {
            name: "Window & Analytical Functions",
            content: [
              "OVER() Clause",
              "PARTITION BY, ORDER BY inside window",
              "ROW_NUMBER()",
              "RANK(), DENSE_RANK()",
              "NTILE()",
              "LEAD(), LAG()",
              "Running Totals, Moving Averages",
            ],
          },
          {
            name: "Data Modeling & Best Practices",
            content: [
              "Star vs Snowflake Schema",
              "Fact and Dimension Tables",
              "Surrogate Keys and Natural Keys",
              "Normalization & Denormalization",
              "Naming Conventions and Standards",
            ],
          },
          {
            name: "Views and Indexes",
            content: [
              "Creating and Using Views",
              "Updatable vs Non-Updatable Views",
              "Materialized Views (if supported)",
              "Clustered vs Non-Clustered",
              "Composite Indexes",
              "When and Why to Use Indexes",
              "Index Impact on Performance",
            ],
          },
          {
            name: "Stored Procedures and Triggers",
            content: [
              "Stored Procedures",
              "CREATE, EXEC, Parameters",
              "Use in Data Pipelines / Reporting",
              "Pros and Best Practices",
              "Triggers",
              "After INSERT/UPDATE/DELETE",
              "Use Cases in Auditing or Data Validations",
            ],
          },
          {
            name: "Common Table Expressions (CTEs)",
            content: [
              "Syntax and Structure",
              "Recursive CTEs",
              "CTE vs Subquery Performance",
              "Multi-CTE with Joins and Aggregations",
            ],
          },
          {
            name: "Advanced & Analytical Use Cases",
            content: [
              "Using SQL for KPI Analysis",
              "Cohort Analysis",
              "Funnel Analysis",
              "Customer Segmentation Queries",
              "Market Basket Analysis (via Joins/Subqueries)",
              "Error Handling using TRY...CATCH (SQL Server)",
            ],
          },
          {
            name: "Real-World Reporting & Analysis Tasks",
            content: [
              "Monthly, Quarterly, Yearly Trends",
              "YoY, MoM Growth Analysis",
              "Top N/Bottom N Products or Regions",
              "Contribution % Analysis (Subtotals)",
              "Data Cleansing with SQL",
              "SQL for Power BI/Tableau Backends",
            ],
          },
        ],
      },
      {
        module: "Python (Analytics with Python)",
        duration: "3 weeks",
        topics: [
          {
            name: "Python Setup & Getting Started",
            content: [
              "Installing Jupyter / VS Code",
              "Introduction to Python in data workflows",
              "Working in Jupyter Notebooks: Cells, Markdown, Shortcuts",
              "Python file types: .ipynb, .py",
              "Best practices for writing readable, clean analysis code",
            ],
          },
          {
            name: "Python Essentials for Analysts",
            content: [
              "Variables, Data Types (int, float, str, bool, list, tuple, dict, set)",
              "Type conversion, type checking",
              "Control Flow: if, elif, else, nested conditions",
              "Loops: for, while, break, continue, range()",
              "Functions, Lambda expressions",
              "Basic Exception Handling: try, except, finally",
            ],
          },
          {
            name: "Working with Data Files",
            content: [
              "Reading/writing CSV, Excel, and JSON files",
              "File paths and directories using os and pathlib",
              "Handling encoding issues and bad headers",
              "Reading large files in chunks",
              "File clean-up automation",
            ],
          },
          {
            name: "Core Pandas for Data Analysis",
            content: [
              "Creating DataFrames from CSV, dicts, lists",
              "Indexing & slicing: loc[], iloc[], []",
              "Adding/removing columns/rows",
              "Renaming columns, setting index",
              "Basic data inspection: .head(), .info(), .describe()",
              "Handling missing data: .isnull(), .fillna(), .dropna()",
              "Removing duplicates",
              "Replacing and mapping values",
              "String operations: .str.lower(), .str.replace(), .str.extract()",
              "Creating new calculated columns",
              "Applying functions row-wise (.apply())",
              "Binning data using cut() and qcut()",
              "Using map(), replace(), and np.where() for classification logic",
              "Changing column data types with .astype()",
            ],
          },
          {
            name: "Data Aggregation & Grouping",
            content: [
              "Using .groupby() for summaries",
              "Multiple aggregations using .agg()",
              "Counting unique values",
              "Row-wise calculations",
              "Calculating percentages within groups",
              "Creating pivot tables with .pivot_table()",
              "Crosstab analysis",
            ],
          },
          {
            name: "Merging & Combining Data",
            content: [
              "pd.merge() - inner, left, right, outer joins",
              "pd.concat() - appending rows/columns",
              "Joining on index vs column",
              "Handling column conflicts during merge",
              "Use case: Merging sales with region/category/master data",
            ],
          },
          {
            name: "Date And Time Handling",
            content: [
              "Parsing date columns with pd.to_datetime()",
              "Extracting year, month, day, weekday",
              "Filtering by date ranges",
              "Creating date features (e.g., quarter, month name)",
              "Time-based grouping (monthly, weekly, daily)",
            ],
          },
          {
            name: "Exploratory Data Analysis (EDA)",
            content: [
              "Identifying outliers using IQR",
              "Frequency counts, value distributions",
              "Feature correlation analysis (.corr())",
              "Skewness, kurtosis, and data shape",
              "Detecting patterns before visualization",
            ],
          },
          {
            name: "Visualization With Matplotlib & Seaborn",
            content: [
              "Matplotlib Basics",
              "Bar charts, line charts, pie charts",
              "Customizing axes, titles, legends",
              "Saving plots as images",
              "Seaborn Essentials",
              "Countplot, barplot, boxplot, histplot, heatmap",
              "Distribution & scatter plots",
              "Grouped plots with hue and col",
              "Plot styling with themes and palettes",
            ],
          },
          {
            name: "Numpy For Numeric Operations",
            content: [
              "Creating arrays, array indexing",
              "Element-wise operations",
              "Aggregation functions (sum, mean, std)",
              "Boolean indexing",
              "Reshaping and flattening",
              "Use in performance optimization with Pandas",
            ],
          },
          {
            name: "Real-World Reporting Tasks",
            content: [
              "Exporting cleaned data to Excel",
              "Writing multiple sheets to Excel using ExcelWriter",
              "Adding dynamic filenames with timestamps",
              "Generating summary tables",
              "Automating a simple monthly reporting task",
            ],
          },
        ],
      },
      {
        module: " Soft Skills ",
        duration: "1 week",
        topics: [
          {
            name: "Communication Skills",
            content: [
              "Improve verbal, written, and presentation abilities for workplace impact.",
            ],
          },
          {
            name: "Teamwork & Collaboration",
            content: [
              "Work effectively in groups and cross-functional environments.",
            ],
          },
          {
            name: "Time Management",
            content: [
              "Prioritize tasks, set goals, and manage deadlines efficiently.",
            ],
          },
          {
            name: "Problem-Solving & Critical Thinking",
            content: [
              "Approach challenges with logical and innovative solutions.",
            ],
          },
          {
            name: "Adaptability & Flexibility",
            content: ["Adjust quickly to changing tasks and environments."],
          },
          {
            name: "Professional Etiquette",
            content: [
              "Build confidence with workplace behavior, email writing, and meeting etiquette.",
            ],
          },
          {
            name: "Interview Preparation",
            content: [
              "Practice mock interviews, resume building, and self-introduction skills.",
            ],
          },
        ],
      },
      {
        module: " Real-World Projects ",
        duration: "1 week",
        topics: [
          {
            name: "Real-World Applications",
            content: [
              "Real-World Reporting Tasks",
              "Real-World Analysis Projects",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Sneha Gupta",
      title: "Data Scientist at IBM",
      experience: "9+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Sneha has expertise in data analytics and has contributed to numerous data-driven projects at IBM.",
    },
    projects: [
      "Financial Analytics - Budget vs Actuals",
      "Human Resources Dashboard",
      "E-commerce Sales Analysis",
      "Automated Sales Data Pipeline",
      "Retail Sales Analysis",
    ],
    projectsDetails: [
      "Dashboard showing revenue, expenses, and variance analysis.",
      "Track employee performance, attrition, and demographics.",
      "Analyze customer behavior and order trends for an online store.",
      "A fully automated workflow that outputs refreshed sales data in Excel and SQL for business dashboards.",
      "Clean dataset, summary statistics, and visualizations of sales by product, category, and month.",
    ],
  },
  Tableau: {
    title: "Tableau <span class='text-yellow-400'>Developer</span>",
    description:
      "Master data visualization and business intelligence with Tableau",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹28,000",
    originalPrice: "₹38,000",
    category: "Data Analytics",
    students: "350+",
    rating: 4.7,
    reviews: 95,
    brochure: "FRESHERS.pdf",
    outline: "Data Analytics - Outline.pdf",
    image: "/react.jpg",
    highlights: [
      "Understand ReactJS fundamentals, components, and JSX syntax.",
      "Manage state and props for dynamic UI development.",
      "Work with React Hooks for cleaner, functional code.",
      "Implement routing and navigation using React Router.",
      "Connect React apps with APIs for real-time data handling.",
      "Apply Redux or Context API for state management.",
      "Build responsive and interactive applications.",
      "Deploy React apps with best practices.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our ReactJS program",
      testimonials: [
        {
          name: "Priya",
          role: "Fresher",
          image: "/priya.png?height=80&width=80",
          content:
            "As a fresher, ReactJS training here gave me the confidence and skills to build real-world projects. Thanks to Flair for the guidance, I landed my first job as a React Developer.",
          rating: 5,
          course: "Fresher",
        },
        {
          name: "Shahini",
          role: "Data Analyst at Wipro",
          image: "/sha.png?height=80&width=80",
          content:
            "Coming from a non-IT background, I never imagined coding could be this simple. With step-by-step ReactJS training, I successfully transitioned into a Front-End Developer role.",
          rating: 5,
          course: "Non-IT Graduate",
        },
        {
          name: "Arjun",
          role: "DevOps Engineer at Infosys",
          image: "/arjun.png?height=80&width=80",
          content:
            "Already working in web development, I wanted to specialize in ReactJS. This course sharpened my skills, practical project skills, and helped me move into a higher-paying role.",
          rating: 5,
          course: "IT Professional",
        },
      ],
    },
    nextBatch: [
      { starts: "Every Month", mode: "Online / Classroom-Bangalore" },
    ],
    qualification: " B.TECH/B.COM/BSC/MSC/MCA",
    eligibleLearners: "Freshers / IT-Professionals",
    syllabus: [
      {
        module: "Tableau Basics",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to Tableau",
            content: [
              "Understand Tableau's interface and capabilities.",
              "Navigate Tableau Desktop and Public.",
              "Set up a Tableau workspace.",
            ],
          },
          {
            name: "Data Connection",
            content: [
              "Connect Tableau to various data sources.",
              "Import data from Excel, SQL, and cloud services.",
              "Manage data source connections.",
            ],
          },
          {
            name: "Basic Charts",
            content: [
              "Create basic charts like bar and line charts.",
              "Customize chart properties and styles.",
              "Add annotations to charts.",
            ],
          },
          {
            name: "Filters",
            content: [
              "Apply filters for interactive data exploration.",
              "Create quick filters and context filters.",
              "Use filter hierarchies.",
            ],
          },
        ],
      },
      {
        module: "Data Visualization",
        duration: "3 weeks",
        topics: [
          {
            name: "Advanced Visuals",
            content: [
              "Create complex visualizations like heatmaps.",
              "Design treemaps and scatter plots.",
              "Customize visual interactions.",
            ],
          },
          {
            name: "Calculations",
            content: [
              "Use calculated fields for custom metrics.",
              "Write Tableau calculations for analytics.",
              "Apply table calculations.",
            ],
          },
          {
            name: "Parameters",
            content: [
              "Implement parameters for dynamic visuals.",
              "Create interactive controls with parameters.",
              "Use parameters in calculations.",
            ],
          },
          {
            name: "Dashboards",
            content: [
              "Build interactive dashboards for insights.",
              "Design responsive dashboard layouts.",
              "Add actions for interactivity.",
            ],
          },
        ],
      },
      {
        module: "Advanced Features",
        duration: "2 weeks",
        topics: [
          {
            name: "Data Blending",
            content: [
              "Blend data from multiple sources.",
              "Understand primary and secondary data sources.",
              "Resolve data blending issues.",
            ],
          },
          {
            name: "Level of Detail (LOD)",
            content: [
              "Use LOD expressions for detailed analysis.",
              "Implement FIXED, INCLUDE, and EXCLUDE LODs.",
              "Optimize LOD calculations.",
            ],
          },
          {
            name: "Storytelling",
            content: [
              "Create data stories for presentations.",
              "Design story points for narrative flow.",
              "Use annotations in stories.",
            ],
          },
          {
            name: "Publishing",
            content: [
              "Publish dashboards to Tableau Server.",
              "Manage permissions and user access.",
              "Schedule data refreshes.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Vikram Singh",
      title: "BI Specialist at Deloitte",
      experience: "11+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Vikram is an expert in Tableau with a strong background in business intelligence.",
    },
    projects: [
      "Todo List Application",
      "Weather App",
      "Student Management System",
      "Recipe Finder App",
      "Blog Posting Application",
    ],
    projectsDetails: [
      "Build a simple task manager to add, edit, mark complete, and delete tasks using React state.",
      "Create a weather forecasting app fetching real-time data from APIs and displaying detailed city weather reports.",
      "Develop a student records system to add, update, and manage student data with forms, tables, and state.",
      "Design an app to search and display recipes by ingredients using external APIs with React components.",
      "Build a blogging platform for creating, editing, deleting posts with React Router, forms, and CRUD operations.",
    ],
  },
  Cybersecurity: {
    title: "Cyber<span class='text-yellow-400'>Security</span>",
    description:
      "Master web, network, and API security with hands-on tools, vulnerability testing, and real-world defense strategies.",
    duration: "2 months",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "🛜 Networking",
    students: "700+",
    rating: 4.9,
    reviews: 350,
    brochure: "CyberSecurity.pdf",
    outline: "CyberSecurity.pdf",
    image: "/cyber.jpg",
    highlights: [
      "Learn core concepts of web application security testing.",
      "Understand HTTP, SSL/TLS, and cryptography basics.",
      "Detect and prevent OWASP Top 10 vulnerabilities.",
      "Test authentication, authorization, and session security.",
      "CExplore secure coding and configuration practices.",
      "Use tools like BurpSuite, Acunetix, and Sqlmap.",
      "Network testing with Nmap & Nessus",
      "Securing web services & APIs",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our CyberSecurity program",
      testimonials: [
        {
          name: "Jahnavi",
          role: "Fresher",
          image: "/Jahnavi.png?height=80&width=80",
          content:
            "As a fresher, I had no idea about cybersecurity. This course gave me a clear understanding of web vulnerabilities and hands-on practice with BurpSuite and Nmap. It made me confident to apply for security roles.",
          rating: 5,
          course: "Fresher",
        },
        {
          name: "Neha Sharma",
          role: "Data Analyst at Wipro",
          image: "/neha.jpg?height=80&width=80",
          content:
            "Coming from a testing background, I wanted to shift into security. The modules on OWASP Top 10 and authentication testing were very practical. Now I can identify and report security flaws with confidence.",
          rating: 5,
          course: "QA Engineer",
        },
        {
          name: "Rakesh Kumar",
          role: "DevOps Engineer at Infosys",
          image: "/rakesh.png?height=80&width=80",
          content:
            "The network security and API testing sections were the most valuable for me. Learning Nessus and Sqlmap helped me strengthen my skills and secure applications in my current role.",
          rating: 5,
          course: "System Administrator",
        },
      ],
    },
    nextBatch: [{ starts: "Every Two Months", mode: "Online " }],
    qualification: " B.TECH/BSC/BCA/MSC/MCA",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Web Application Security Testing",
        duration: "2 weeks",
        topics: [
          {
            name: "Web Application Security Testing",
            content: [
              "Introduction to Security Testing and its importance",
              "Basic concepts of Security Testing",
              "CIA Triad",
              "HTTP Methods",
              "HTTP Response Code",
              "HTTP Headers",
              "Cookie vs Session",
              "Cryptography - Encryption, Encoding, Hashing",
              "Symmetric Key Algorithm",
              "Asymmetric Key Algorithm",
              "Input Validation",
              "Output Encoding",
              "Blacklist Validation",
              "Whitelist Validation",
              "Client-Side Validation",
              "Server-Side Validation",
              "SDLC and Threat Modelling",
              "Security Testing Process / Methodology",
              "SSL Handshaking Process",
              "SSL vs TLS",
              "SSL/TLS Versions",
              "OWASP Top 10 Vulnerabilities",
            ],
          },
        ],
      },
      {
        module: " Web Application Security Risks & Vulnerability Checks",
        duration: "1 week",
        topics: [
          {
            name: "Web Application Security Risks & Vulnerability Checks",
            content: [
              "SQL Injection",
              "Cross Site Scripting (XSS)",
              "Cross Site Request Forgery (CSRF)",
              "Insecure Direct Object Reference",
              "Failure to Restrict URL Access",
              "Security Misconfiguration",
              "Unvalidated Redirects and Forwards",
              "Broken Authentication and Session Management",
              "Using Components with Known Vulnerabilities",
              "Sensitive Data Exposure",
              "XML External Entity (XXE)",
              "Server-Side Request Forgery (SSRF)",
              "Insecure Logging and Storage",
              "Insecure Communication",
              "Vulnerable SSL/TLS Versions",
              "Authentication-Related Tests",
              "Credentials Transport Over Unencrypted Channels",
            ],
          },
        ],
      },
      {
        module: " Authentication & Authorization Security Testing ",
        duration: "1 week",
        topics: [
          {
            name: "Authentication & Authorization Security Testing",
            content: [
              "Testing for User Enumeration",
              "Default or Guessable (Dictionary) User Accounts",
              "Testing for Brute Force",
              "Testing for Bypassing Authentication Schema",
              "Testing for Vulnerable Remember Password and Password Reset",
              "Testing for Logout and Browser Cache Management",
              "Testing for CAPTCHA",
              "Insufficient Password Policy",
              "Insufficient Password Change Policy",
              "Passwords Stored in Plain Text",
              "Password History",
              "Authorization-Related Tests",
              "Path Traversals",
              "Bypassing Authorization Schema",
              "Privilege Escalation",
            ],
          },
        ],
      },
      {
        module: " Web Application Security Testing Modules ",
        duration: "1 week",
        topics: [
          {
            name: "Web Application Security Testing Modules",
            content: [
              "Session Management Testing",
              "Session Hijacking",
              "Session Fixation",
              "Session Timeout",
              "Session Replay",
              "Session Invalidation",
              "Exposed Session Variables",
              "Configuration-Related Tests",
              "Missing HttpOnly and Secure Flags",
              "Clickjacking",
              "HTTP Strict Transport Security Header",
              "Unsafe CORS Policy (HTML5)",
              "Cookie Scoped to Parent Domain",
              "Improper Error Messages",
              "Malicious File Upload",
              "Introduction to Various Vulnerability Scanners",
              "Scanning Application Using BurpSuite and Eliminating False Positives",
              "Bypassing Client-Side Validations",
              "Risk Rating and Report Preparation",
            ],
          },
        ],
      },
      {
        module: " Tools Covered ",
        duration: "1 week",
        topics: [
          {
            name: "Tools Covered",
            content: [
              "BurpSuite",
              "Acunetix",
              "Sslyze",
              "Sqlmap",
              "Kali Linux - Introduction",
            ],
          },
        ],
      },
      {
        module: " Network Security Testing ",
        duration: "1 week",
        topics: [
          {
            name: "Network Security Testing",
            content: [
              "Basic Concepts of Networking",
              "TCP vs UDP",
              "What is an IP",
              "IP Address Classes",
              "IPv4 vs IPv6",
              "Different Ports",
              "Different Protocols",
              "Hubs, Switches, Routers, Firewalls",
              "DMZ",
              "Network Security Testing Methodology",
              "Scanning a Network Using Nessus",
              "Scanning and Evidence Gathering Using Nmap",
              "Internal vs External Network Security Testing",
              "Report Preparation",
              "Network Security Testing Tools: Nmap, Nessus, SSLScan/Sslyze",
            ],
          },
        ],
      },
      {
        module: " Web Services Security Testing ",
        duration: "1 week",
        topics: [
          {
            name: "Web Services Security Testing",
            content: [],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Web Vulnerability Assessment Lab",
      "Secure Login System Implementation",
      "Web Application Firewall Rules",
      "Secure Code Review",
      "HTTPS & TLS Configuration",
    ],
    projectsDetails: [
      "Identify and fix common web app vulnerabilities like SQLi, XSS, and CSRF.",
      "Build and test a secure authentication system with password hashing and session control.",
      "Configure WAF rules to detect and block web-based attacks.",
      "Analyze application code to find and fix insecure coding practices.",
      "Deploy and secure a web app with SSL/TLS for encrypted communication.",
    ],
  },
  "network-protocol-development": {
    title: "Network Protocol <span class='text-yellow-400'>Development</span>",
    description:
      "Master C, Linux, and network programming to design, implement, and test protocols with real-time projects.",
    duration: "2 months",
    mode: "Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "🛜 Networking",
    students: "1000+",
    rating: 4.7,
    reviews: 550,
    brochure: "Network Protocol.pdf",
    outline: "Network Protocol.pdf",
    image: "/network.jpg",
    highlights: [
      "Advanced C programming essentials and memory management.",
      "Linux system programming basics with process control.",
      "File handling in C with practical examples.",
      "Core data structures: stacks, queues.",
      "Socket and network programming for client-server communication.",
      "TCP/IP stack fundamentals and protocol operations.",
      "Protocol-based applications like HTTP, SMTP, TFTP.",
      "Real-time major project on networking protocols.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Network Protocol Development program",
      testimonials: [
        {
          name: "Srinivas Rao",
          role: "Fresher",
          image: "/srinivas.jpg?height=80&width=80",
          content:
            "Flair Technologies gave me strong hands-on training in C and network programming. The mini-projects and socket programming practice helped me build confidence to work on real-time applications.",
          rating: 5,
          course: "Fresher",
        },
        {
          name: "Anjali",
          role: "Data Analyst at Wipro",
          image: "/Anjali.jpg?height=80&width=80",
          content:
            "I joined Flair Technologies to upskill in protocol development. The structured modules on Linux system programming and TCP/IP stack made complex topics easy to learn. This training was a real career boost.",
          rating: 5,
          course: "B.Tech Graduate",
        },
        {
          name: "Harshitha",
          role: "DevOps Engineer at Infosys",
          image: "/harshi.jpg?height=80&width=80",
          content:
            "The Network Protocol Development course at Flair Technologies was highly practical. From IPC to socket programming, every concept was taught with real-world examples. It truly enhanced my technical expertise.",
          rating: 5,
          course: "Network Engineer",
        },
      ],
    },
    nextBatch: [{ starts: "Every Month", mode: "Classroom-Bangalore" }],
    qualification: " B.TECH",
    eligibleLearners: "Freshers / Network Administrators",
    syllabus: [
      {
        module: "Advanced C Programming",
        duration: "1 week",
        topics: [
          {
            name: "Architecture of Simple Computer",
            content: [
              "CPU",
              "Memory",
              "I/O controllers",
              "Executable Image contents",
              "Text/Code",
              "Data (Initialized and uninitialized)",
              "Heap",
              "Stack",
            ],
          },
          {
            name: "Development Tools and Environment",
            content: [],
          },
          {
            name: "Compiler",
            content: ["Compilation Stages", "Object file format"],
          },
          {
            name: "Linker",
            content: [
              "Function of Linker",
              "Executable file format",
              "Executable file vs Executable Image in memory",
            ],
          },
          {
            name: "Archive or Library Utility",
            content: [],
          },

          {
            name: "Make utility",
            content: [],
          },

          {
            name: "Debugger",
            content: [],
          },

          {
            name: "Source Code Control System (SCCS)",
            content: [],
          },

          {
            name: "Project Environment Development",
            content: [
              "Module concept",
              "Interface functions",
              "Unit testing of module",
              "Test Driver",
              "Test Stub",
            ],
          },

          {
            name: "Functions",
            content: [
              "Definition, Declaration/prototype, Invocation",
              "Function type and return value",
              "Output parameters",
              "Pass by value and pass by reference",
              "Local variables",
              "Static variables",
              "Thread of execution (stack frames)",
              "Stdio functions",
              "Passing parameters to a C function from assembly language",
              "Accessing the parameters from the C function from assembly language",
            ],
          },
          {
            name: "Pointers",
            content: [
              "Pointers Vs Integers",
              "Pointer type",
              "Pointer de-reference",
              "Pointers and arrays",
              "Pointer arithmetic",
              "Array of pointers",
              "Pointers and Dynamic memory",
              "Function pointers",
            ],
          },
        ],
      },
      {
        module: " Data Structures & Algorithms ",
        duration: "1 week",
        topics: [
          {
            name: "Arrays",
            content: [
              "Valid Indexes to array",
              "Addresses of elements of array",
              "Initialization",
              "Using pointer as an array",
              "Strings",
              "Passing an array to a function",
              "Two-dimensional array initialization",
              "Two-dimensional arrays and pointers",
            ],
          },

          {
            name: "User Defined Datatypes",
            content: ["Structures", "Unions", "Typedef", "Enums"],
          },
          {
            name: "Structures",
            content: [
              "Compound type",
              "Packing of elements within a structure",
              "Alignment and hole in the structure",
              "Structure pointers",
              "Accessing elements of a structure using structure pointers",
              "Dynamic allocation of memory for structures",
              "Self-referential structures",
              "Passing structure parameters to functions",
              "Returning a structure or struct pointer by a function",
            ],
          },

          {
            name: "Unions",
            content: [
              "Differences between union and structure",
              "Uses of unions",
            ],
          },

          {
            name: "Bit Operations",
            content: [
              "Binary, Decimal, and Hex conversions",
              "Logical versus Bitwise operations",
              "Masking a bit",
              "Testing a bit",
              "Setting a bit",
              "Testing a set of bits",
              "Setting a set of bits",
            ],
          },

          {
            name: "Miscellaneous",
            content: [
              "Big Endian and Little endian",
              "ASCII codes and file formats",
              "Interpreting the contents of a file",
              "As a text",
              "As a numbers(int, short, float or combination)",
              "As a image",
              "As a sound",
              "As CPU instructions",
            ],
          },
          {
            name: "File Operations",
            content: [
              "Storing structures in binary format",
              "Storing structures in ASCII format",
            ],
          },

          {
            name: "Essential Data Structures",
            content: [],
          },

          {
            name: "Arrays",
            content: ["Operations on arrays", "Strings"],
          },

          {
            name: "Linked Lists",
            content: [
              "Single linked lists",
              "Operations on linked lists",
              "Double linked lists",
            ],
          },

          {
            name: "Stacks",
            content: [],
          },

          {
            name: "Queues",
            content: ["Linear queues", "Circular queues"],
          },

          {
            name: "Search Techniques",
            content: ["Linear search", "Binary search", "Hash-based search"],
          },

          {
            name: "Packets or Messages",
            content: ["Framing of messages", "Parsing of messages"],
          },

          {
            name: "File Formats",
            content: [],
          },
        ],
      },

      {
        module: "Linux System Programming",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Linux",
            content: [
              "Process Management",
              "File Management",
              "Memory Management",
              "I/O management",
            ],
          },
          {
            name: "Unix File I/O System Calls",
            content: [
              "File descriptors",
              "File types",
              "Stdin, Stdout and Stderr File descriptors",
              "Link or Relationship between File Descriptor and File or device",
              "File descriptors of same file but from multiple processes",
              "Unix File I/O calls (unbuffered i/o)",
              "open, create, close, lseek, read, write, dup, dup2",
              "fcntl, ioctl",
              "File types, IDs and Access permissions",
            ],
          },
          {
            name: "Standard I/O Library Functions",
            content: [
              "fopen, fread, fwrite, fclose & fseek",
              "Relationship between file descriptor and FILE pointer",
              "Character at a time I/O",
              "Line at a time I/O",
              "Formatted I/O",
            ],
          },
          {
            name: "Reading and Writing Structures to Files",
            content: [
              "In ascii format",
              "In Binary format",
              "Modifying a structure in the file",
            ],
          },
        ],
      },
      {
        module: "Processes, Signals & IPC",
        duration: "1 week",
        topics: [
          {
            name: "The Environment of a Unix Process",
            content: [
              "How C program starts and terminates as process",
              "Memory layout of a C Program",
              "Main function, Command line arguments, Environment variables",
              "exit(), _exit() and atexit() functions",
            ],
          },
          {
            name: "Process System Calls",
            content: [
              "Process Identifiers",
              "fork, vfork, exit, wait, waitpid, execv",
            ],
          },

          {
            name: "Initial Process Relationships",
            content: ["Terminal Logins"],
          },

          {
            name: "Signals",
            content: [
              "Signal Concepts",
              "Signal(), kill(), raise(), alarm() and pause()",
            ],
          },

          {
            name: "Inter Process Communication",
            content: [
              "Pipes",
              "FIFO (Named pipes)",
              "Message Queues",
              "Semaphores",
              "Shared Memory",
            ],
          },

          {
            name: "Threads",
            content: [
              "Multi-threaded programming",
              "Synchronization and Mutual exclusion for threads",
              "POSIX Semaphores",
            ],
          },
        ],
      },
      {
        module: "Networking Fundamentals",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Networking",
            content: [
              "Need/Uses of Networking",
              "Network topologies",
              "LAN, MAN, WAN",
              "Typical media used in each",
              "Typical protocols used in each",
              "LAN Standards",
              "Ethernet, Token Ring, Token Bus, FDDI",
              "Ethernet Media (Thick, Thin, Twisted pair)",
              "WAN Standards",
              "Dial-up, Leased Line",
              "ISDN, DSL",
              "ATM",
              "Wireless",
            ],
          },
          {
            name: "Network Protocol Layers",
            content: [
              "Use of Layers",
              "OSI Protocol layers",
              "TCP/IP protocol layers",
            ],
          },
        ],
      },
      {
        module: "Socket Programming",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Socket Programming",
            content: [
              "Concept of socket / socket pair",
              "Concept of Client and Server",
              "Concept of connectionless and connection-oriented protocols (UDP/TCP)",
              "Socket calls for UDP server and client",
              "Socket calls for TCP server and client",
              "Algorithms and Issues in Client software design",
              "Algorithms and Issues in Server software design",
              "Iterative, Connectionless Servers",
              "Iterative, Connection-Oriented servers",
              "Concurrent, Connection-Oriented servers",
              "Serving multiple clients with a single process",
              "Serving multiple clients with one thread per client",
            ],
          },
        ],
      },
      {
        module: "TCP/IP Protocol Internals",
        duration: "2 weeks",
        topics: [
          {
            name: "UDP/TCP Applications",
            content: ["TFTP", "SMTP", "HTTP", "Mixed techniques"],
          },

          {
            name: "TCP/IP Stack Internals",
            content: [],
          },

          {
            name: "Internet Addresses",
            content: [
              "IP Address",
              "Hardware Addresses",
              "Unicast, Broadcast, Multicast in IP and HW addresses",
              "Ethernet Frame format",
              "ARP",
            ],
          },

          {
            name: "Internet Protocol",
            content: [
              "Packet format",
              "Fragmentation and Re-assembly",
              "Routing",
            ],
          },

          {
            name: "UDP",
            content: [],
          },

          {
            name: "ICMP",
            content: [],
          },

          {
            name: "TCP",
            content: [
              "Timeout and Retransmission",
              "Flow control",
              "State machine",
              "Congestion control",
              "Silly window syndrome",
              "Socket API Interface",
            ],
          },

          {
            name: "Software Engineering",
            content: [
              "Software Development Life Cycle",
              "Requirement Specification",
              "Design (High level and Detailed)",
              "Coding, Coding standards",
              "Unit testing, Unit test plan, Test drivers, test stubs",
              "Integration and System testing and their test plans",
              "Acceptance test plan",
            ],
          },
        ],
      },
      {
        module: " Major Project ",
        duration: "0.5 week",
        topics: [
          {
            name: "Major Project",
            content: [
              "Finally, the student will do a major project on network, wireless, or telecom protocols using VxWorks or VxWorks-like RTOS.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Chat Application using TCP Sockets",
      "File Transfer Protocol (Mini-FTP)",
      "Packet Sniffer Tool",
      "HTTP Request-Response Simulator",
      "DNS Lookup Utility",
    ],
    projectsDetails: [
      "Build a simple client-server chat system using TCP socket programming.",
      "Implement file upload/download between client and server using TCP or UDP.",
      "Create a basic packet capture tool to analyze incoming/outgoing network traffic.",
      "Develop a simple web server that handles GET/POST requests and returns responses.",
      "Design a program to resolve domain names to IP addresses using socket programming.",
    ],
  },
  "record-to-report-r2r": {
    title: "Record to Report <span class='text-yellow-400'>(R2R)</span>",
    description:
      "Comprehensive Record to Report training covering accounting, reconciliations, ERP tools, and real-time financial reporting skills.",
    duration: "1 month",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "🪙 Finance",
    students: "1000+",
    rating: 4.9,
    reviews: 700,
    brochure: "R2R.pdf",
    outline: "R2R.pdf",
    image: "/R2R.jpg",
    highlights: [
      "Core accounting & journals.",
      "Accruals, depreciation & assets.",
      "Handle intercompany accounting and FX revaluation.",
      "Perform bank, balance sheet, and payroll reconciliations.",
      "Close books with tax provisions and month-end processes.",
      "Build skills in cash flow, budgeting, and analysis.",
      "Get hands-on with SAP, Oracle, Tally & Zoho Books.",
      "Prepare for jobs with interviews and resume guidance.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Record to Report (R2R) program",
      testimonials: [
        {
          name: "Sai Manoj",
          role: "Fresher",
          image: "/monoj.png?height=80&width=80",
          content:
            "As a commerce fresher, I was nervous about entering corporate finance. Flair Tech’s R2R training gave me step-by-step knowledge of accounting, reconciliations, and ERP tools. I now feel confident and job-ready.",
          rating: 5,
          course: "B.Com Graduate (Fresher)",
        },
        {
          name: "Sneha Reddy",
          role: "Data Analyst at Wipro",
          image: "/sneha.jpg?height=80&width=80",
          content:
            "Coming from a non-IT background, I thought ERP tools would be difficult. But the trainers explained everything clearly with practical examples. The R2R program made complex topics simple and easy to apply.",
          rating: 5,
          course: "MBA Finance (Non-IT Background)",
        },
        {
          name: "Vijtha",
          role: "DevOps Engineer at Infosys",
          image: "/viji.png?height=80&width=80",
          content:
            "The hands-on projects in bank reconciliation and month-end closing gave me real-world exposure. Flair Tech not only taught me accounting processes but also helped me prepare for interviews and career growth.",
          rating: 5,
          course: "Fresher",
        },
      ],
    },
    nextBatch: [{ starts: "Every Month", mode: "Online" }],
    qualification: " B. Com / MBA Finance",
    eligibleLearners: "Freshers / Non IT-Professionals",
    syllabus: [
      {
        module: "Core Accounting Model",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Core Accounting Model",
            content: [
              "Accounting Concepts",
              "Accounting Principles",
              "Accounting Errors",
              "Basic Journal Entries",
              "Real Time Journal Entries, Preparation & Posting",
              "Accrual",
              "Prepayments",
              "Outstanding's",
              "Depreciation",
              "Fixed Asset Cycle",
              "Intercompany Accounting",
              "FX Revaluation",
              "Round off Adjustments",
              "Contingent Liability",
              "Bad Debts",
              "Bank Clearings etc.",
            ],
          },
        ],
      },
      {
        module: "R2R (Record to Report)",
        duration: "1.5 weeks",
        topics: [
          {
            name: "R2R (Record to Report)",
            content: [
              "P2P Life Cycle",
              "O2C Life Cycle",
              "R2R Life Cycle",
              "Work Day Model",
              "Bank Reconciliation",
              "Balance Sheet Reconciliation",
              "Fixed Assets Recon",
              "Intercompany Recon",
              "Payroll Recon",
              "Balance Sheet Comparative Analysis",
              "Open Item Clearance",
              "Month End Checklist",
              "Tax Provision",
              "Cash Flow Budgeting & Forecasting",
              "GL Close & Open",
              "MS EXCEL - Basic to Advanced Excel",
            ],
          },
        ],
      },
      {
        module: "Real Time Scenarios",
        duration: "0.5 week",
        topics: [
          {
            name: "Real Time Scenarios",
            content: [
              "Basic Questions & Answers?",
              "How to install a ERP Application?",
              "How to Create a Company?",
              "How to Create a Ledger Account?",
              "How to Create a Stock Item?",
              "How to Create a Unit of Measure?",
              "How to create a Tax Ledger?",
              "How to Post Purchases?",
              "How to Post Sales?",
              "How to Post Receipts?",
              "How to Post Payments?",
              "How to View the Balance Sheet, Profit, Loss & Cash?",
              "How to Perform Bank & Balance Sheet Recon?",
            ],
          },
        ],
      },
      {
        module: "Resume Preparation & Interview Guidance",
        duration: "0.5 week",
        topics: [
          {
            name: "Naukri",
            content: [
              "How to create a resume?",
              "How to upload in naukri.com?",
              "How to schedule the calls?",
              "How to attend the interview",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun <span class='text-yellow-400'>Patel</span>",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Month-End Closing Process Simulation",
      "Bank Reconciliation",
      "Fixed Asset Accounting",
      "Intercompany Reconciliation",
      "Trial Balance to Financial Statement",
    ],
    projectsDetails: [
      "Learn how to prepare journals, reconcile accounts, and close books like a pro.",
      "Hands-on practice in reconciling cash books with bank statements.",
      "From acquisition to depreciation, manage the complete asset lifecycle.",
      "Simulate group company transactions and achieve perfect reconciliations.",
      "Transform trial balances into clear P&L and Balance Sheet outputs.",
    ],
  },
  "ai-and-ml": {
    title: "AI & <span class='text-yellow-400'>ML</span>",
    description:
      "AI & ML Practitioner Training - Empowering the Next Generation of AI Engineers.",
    duration: "3 months",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "✈️ AI & ML",
    students: "150+",
    rating: 4.9,
    reviews: 50,
    brochure: "AI&ML.pdf",
    outline: "AI&ML.pdf",
    image: "/aiml.jpg",
    highlights: [
      "Python foundations.",
      "AI & ML model building and packaging.",
      "Deployment with Kubeflow, MLflow, SageMaker.",
      "CI/CD, Git, monitoring with Prometheus + Grafana.",
      "Kubeflow for pipeline orchestration, scalability, automation, efficiency.",
      "Real-world ML projects (loan, sales, CI/CD, monitoring, deployment, optimization).",
      "MLflow for model tracking and lifecycle management.",
      "Amazon SageMaker for cloud-native model deployment.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Professionals</span> to AI Leaders',
      description:
        "Hear from our successful graduates who transformed their careers with Flair Tech AI & ML Practitioner Training program",
      testimonials: [
        {
          name: "Sandeep Verma",
          role: "Fresher",
          image: "/sandeep.png?height=80&width=80",
          content:
            "As a DevOps professional, I wanted to upskill in MLOps. The modules on CI/CD pipelines, SageMaker, and monitoring with Prometheus + Grafana were exactly what I needed. The instructors were very supportive, and the capstone projects gave me real deployment experience. Flair Technologies truly bridges the gap between IT and AI/ML.",
          rating: 5,
          course: "DevOps Specialist",
        },
        {
          name: "Ananya Reddy",
          role: "Data Analyst at Wipro",
          image: "/ananya.png?height=80&width=80",
          content:
            "Before joining Flair Technologies, I worked as a data analyst in IT. I knew Python and Pandas but lacked exposure to full ML model deployment. This training not only strengthened my coding skills but also taught me how to build, package, and monitor models in production. Thanks to this course, I’ve transitioned into an AI Engineer role.",
          rating: 5,
          course: "Data Analyst",
        },
        {
          name: "Vikram",
          role: "DevOps Engineer at Infosys",
          image: "/vikram.png?height=80&width=80",
          content:
            "Coming from a development background, I always struggled to connect coding with real-world AI/ML workflows. Flair Technologies’ AMPT program made it crystal clear. The hands-on projects with FastAPI, MLflow, and Kubernetes gave me the confidence to deploy models at scale. Today, I’m leading ML integration in my automation projects.",
          rating: 5,
          course: "Software Engineer",
        },
      ],
    },
    nextBatch: [{ starts: "Every Two Months", mode: "Online" }],
    qualification: " IT-Professionals",
    eligibleLearners: " IT-Professionals",
    syllabus: [
      {
        module: "Python Basics",
        duration: "1 week",
        topics: [
          {
            name: "Introduction",
            content: [
              "What is Python?",
              "Installing Python",
              "Python IDEs and Code Editors - PyCharm, VSCode, and Jupyter Notebook, IntelliJ",
              "Scripting vs. Programming",
              "Interpreters vs. Compilers",
            ],
          },
          {
            name: "Data Types",
            content: ["String", "Integer", "Floating", "Bool"],
          },
          {
            name: "Variables",
            content: [
              "Local Variables",
              "Global Variables",
              "Input Variables",
              "Output Variables",
            ],
          },
          {
            name: "Operators",
            content: [
              "Arithmetic operators",
              "Assignment operators",
              "Comparison operators",
              "Logical operators",
              "Identity operators",
              "Membership operators",
              "Bitwise operators",
            ],
          },
        ],
      },
      {
        module: "Python Data Structures",
        duration: "1 week",
        topics: [
          {
            name: "Data Structures",
            content: ["List", "Tuple", "Dictionary", "Sets"],
          },
        ],
      },
      {
        module: "Python Advanced",
        duration: "1 week",
        topics: [
          {
            name: "Objects & Classes",
            content: [
              "Learn advanced object-oriented programming concepts - classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
            ],
          },
          {
            name: "File & Data Processor",
            content: [
              "File Handling - csv, xml, json, xlsx",
              "Learn how to read/write the files - csv, xml, json, xlsx",
              "Data transform methods in Data Pipelines",
            ],
          },
          {
            name: "Control Flow",
            content: [
              "If",
              "If-else",
              "If-elif-else",
              "Nested-if",
              "for",
              "while",
              "Nested loops",
              "Break",
              "Continue",
            ],
          },
          {
            name: "Functions",
            content: [
              "Built-in Functions",
              "User Defined Functions",
              "Function Arguments",
              "Function Return Values",
            ],
          },

          {
            name: "Exception Handling",
            content: [
              "Learn how to handle Python exceptions and raise exceptions.",
              "Understand Try, except, else, finally, and creating custom exceptions.",
            ],
          },

          {
            name: "Modules & Packages",
            content: [
              "Module Introduction",
              "Package Management",
              "Create Python Packages",
              "Understand how you can write modular code building blocks to reuse functional units of code.",
            ],
          },
        ],
      },
      {
        module: "Python Libraries",
        duration: "1 week",
        topics: [
          {
            name: "Pandas",
            content: [
              "Learn how to import Pandas library",
              "Modularize programming to deal with data manipulation and analysis",
            ],
          },
          {
            name: "Numpy",
            content: [
              "Learn multidimensional data arrays",
              "Import numpy library for numerical computing",
            ],
          },
        ],
      },
      {
        module: "Python Web Framework",
        duration: "1 week",
        topics: [
          {
            name: "FastAPI Framework",
            content: [
              "FastAPI fundamentals and asynchronous web applications.",
            ],
          },
          {
            name: "Flask Framework",
            content: ["Flask application deployments"],
          },
          {
            name: "RESTful APIs",
            content: ["Creating and consuming RESTful APIs."],
          },
        ],
      },
      {
        module: "Python API Testing & Debugging",
        duration: "0.5 week",
        topics: [
          {
            name: "Testing & Debugging",
            content: [
              "Postman",
              "Swagger UI",
              "Common debugging techniques and tools",
              "Writing and running unit tests with unittest and pytest",
              "Jupyter Notebook",
            ],
          },
          {
            name: "Logging",
            content: [
              "Enhance Logging in Python Development",
              "Learn how to program using logging module",
            ],
          },
        ],
      },
      {
        module: "AI & ML Basics",
        duration: "0.5 week",
        topics: [
          {
            name: "AI & ML Basics",
            content: [
              "What is Machine Learning",
              "Why ML",
              "ML vs. DL vs. DS vs. DE",
              "ML Terminologies",
              "Steps involved in an ML model",
              "Role of LLM",
            ],
          },
        ],
      },
      {
        module: "Python Libraries & Frameworks",
        duration: "1 week",
        topics: [
          {
            name: "Streamlit",
            content: [
              "Create Streamlit App",
              "Deploy Streamlit App",
              "Integrate Streamlit App with ML models",
            ],
          },
        ],
      },
      {
        module: "AI/ML Frameworks",
        duration: "1.5 weeks",
        topics: [
          {
            name: "Kubeflow",
            content: ["Kubeflow introduction", "Kubeflow pipelines"],
          },
          {
            name: "MLflow",
            content: [
              "MLflow Introduction",
              "How to Track ML Models life cycle",
              "Model Packaging and Deployment using MLflow",
            ],
          },
          {
            name: "Amazon SageMaker",
            content: [
              "SageMaker Introduction",
              "Model Registration",
              "Experiments in SageMaker",
            ],
          },
          {
            name: "TensorFlow",
            content: [
              "TensorFlow Introduction",
              "TensorFlow use cases and Model management of Deep learning Models",
            ],
          },
          {
            name: "Pytorch",
            content: [
              "Pytorch Model build and deployments",
              "Pytorch Use cases",
            ],
          },
          {
            name: "LLMs",
            content: ["OpenAI GPT-4", "HuggingFace Transformers"],
          },
          {
            name: "NLP",
            content: ["LangChain"],
          },
        ],
      },
      {
        module: "Model Packaging",
        duration: "0.5 week",
        topics: [
          {
            name: "scikit-learn",
            content: [
              "Scikit-learn ML library",
              "ML Model Training",
              "Tracking the Model",
              "Packing the Model",
              "Deploy the Model",
            ],
          },
        ],
      },
      {
        module: "Data Versioning",
        duration: "0.5 week",
        topics: [
          {
            name: "Git and DVC",
            content: [
              "Data Version control",
              "What is the Version Control System?",
              "What is Git?",
              "Git Architecture",
              "Git Installation and Configuration",
              "DVC Architecture",
              "DVC repository management",
              "Git Commands",
            ],
          },
        ],
      },
      {
        module: "ML CI/CD Pipeline",
        duration: "1 week",
        topics: [
          {
            name: "ML CI/CD Pipeline",
            content: [
              "AWS Code Commit",
              "AWS Code Build",
              "AWS CodePipeline",
              "Jenkins Pipelines",
            ],
          },
          {
            name: "ML Life Cycle",
            content: [
              "Model Life Cycle",
              "Model Training",
              "Model Validation",
              "Model Testing",
            ],
          },
        ],
      },
      {
        module: "Model Deployment",
        duration: "1 week",
        topics: [
          {
            name: "Model Deployment",
            content: [
              "Deploy ML Models",
              "Model Inference",
              "Model Serving into Kubernetes Clusters",
            ],
          },
        ],
      },
      {
        module: "Model Monitoring",
        duration: "1 week",
        topics: [
          {
            name: "Grafana Stack",
            content: [
              "Design Model Monitoring stack",
              "Deploy Grafana stack",
              "Monitor Model Inference",
              "Prometheus Setup",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "Loan Application Model Deployment with FastAPI integration",
      "Sales application with Streamlit integration",
      "CI/CD for ML Models",
      "CI/CD for ML Models",
      "AI ChatBoat using GPT LLMs",
    ],
    projectsDetails: [
      "Learn how to manage the AI/ML Models flow and API integration architecture with scale.",
      "Learn how to run Streamlit applications and Model integration and Deployments.",
      "Setup CICD Pipeline for the AI/ML Model predicting the sales inventory.",
      "Learn how to continuously train the model using the given dataset, package the model and deploy the model.",
      "Build an AI-powered chatbot using GPT LLMs to interact with users, answer loan-related queries, and provide personalized financial assistance in real time.",
    ],
  },
  "Automotive-Testing": {
    title: "Automotive  <span class='text-yellow-400'>Testing</span>",
    description:
      "Hands-on Automotive ECU Testing Projects: Master CAN, LIN, UDS, CAPL, and JIRA for Industry Readiness.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "👩‍💻 Testing",
    students: "500+",
    rating: 4.5,
    reviews: 300,
    brochure: "Automotive Testing.pdf",
    outline: "Automotive Testing.pdf",
    image: "/automotive.jpg",
    highlights: [
      "Learn the complete SDLC and V-Model process followed in automotive projects.",
      "Master CAN and LIN communication protocols used for ECU-to-ECU data exchange.",
      "Gain practical knowledge in real-time test bench setup and ECU validation techniques.",
      "Explore Infotainment and ADAS testing with real-world automotive requirements.",
      "Write and execute effective test cases using industry-accepted methods.",
      "Work with Vector tools like CANoe and CANalyzer for simulation and debugging.",
      "Master defect tracking with JIRA.",
      "Learn CAPL scripting and automation.",
    ],
    testimonialsSection: {
      badge: "Success Stories",
      title:
        'From <span className="text-sky-600">Freshers</span> to Professionals',
      description:
        "Hear from our successful graduates who transformed their careers with our Automotive Testing program",
      testimonials: [
        {
          name: "Riya Mehta",
          role: "Fresher",
          image: "/RiyaMehta.jpg?height=80&width=80",
          content:
            "Before joining the course with Flair, I struggled with real-time ECU testing. This course gave me clarity on CAN, LIN, and UDS protocols. After completing the capstone project, I secured a role at a leading automotive company where I now handle infotainment ECU validation with confidence.",
          rating: 5,
          course: "Embedded Test Engineer",
        },
        {
          name: "Aditya Sharma",
          role: "Data Analyst at Wipro",
          image: "/AdityaSharma.jpg?height=80&width=80",
          content:
            "I had basic testing experience but lacked industry-specific tools knowledge. The hands-on training with CANoe, CANalyzer, and CAPL scripting helped me automate testing processes. Within three months, I was promoted to lead testing in my team, improving project delivery and quality.",
          rating: 5,
          course: "Senior QA Specialist",
        },
        {
          name: "Neha Gupta",
          role: "DevOps Engineer at Infosys",
          image: "/NehaGupta.jpg?height=80&width=80",
          content:
            "As a fresher, I wanted to enter the automotive domain but had limited exposure. This course bridged the gap with practical sessions on diagnostics and defect lifecycle management. I cracked my first interview at a Tier-1 automotive supplier and started my career successfully.",
          rating: 5,
          course: "Graduate Trainee (Fresher)",
        },
      ],
    },
    nextBatch: [{ starts: "Every Month", mode: "Online / Classroom-BLR" }],
    qualification: " B.TECH",
    eligibleLearners: "Freshers / IT & Non-IT Professionals",
    syllabus: [
      {
        module: "Software Development Life Cycle & V-Model",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to SDLC",
            content: [
              "Importance of structured development in automotive industry.",
              "Stages in SDLC and their deliverables.",
            ],
          },
          {
            name: "Understanding the V-Model",
            content: [
              "Definition and overview of V-Model.",
              "Why V-Model is widely used in automotive projects.",
            ],
          },
          {
            name: "Mapping Development & Testing",
            content: [
              "Requirement gathering vs Requirement validation.",
              "Coding vs Unit Testing.",
              "Integration vs System Testing.",
            ],
          },
          {
            name: "Case Study",
            content: [
              "V-Model implementation in real-time automotive projects.",
            ],
          },
        ],
      },

      {
        module: "Automotive Communication Protocols",
        duration: "1 week",
        topics: [
          {
            name: "Overview of Automotive Protocols",
            content: [
              "Introduction to in-vehicle communication.",
              "Importance of communication protocols.",
            ],
          },
          {
            name: "CAN Protocol",
            content: [
              "CAN Architecture and Frame Structure.",
              "Applications of CAN in real-time.",
            ],
          },
          {
            name: "LIN Protocol",
            content: [
              "LIN communication basics.",
              "Use cases in body electronics.",
            ],
          },
          {
            name: "Practical Use Cases",
            content: [
              "Real-time implementation of CAN and LIN.",
              "Hands-on with communication signals.",
            ],
          },
        ],
      },

      {
        module: "Test Bench & Real-Time Testing",
        duration: "1 week",
        topics: [
          {
            name: "Test Bench Setup",
            content: [
              "Overview of Hardware-in-Loop (HIL).",
              "Setting up test bench components.",
            ],
          },
          {
            name: "Real-Time Testing",
            content: [
              "Simulating real-time ECU requirements.",
              "Hands-on testing Infotainment and ADAS ECU.",
            ],
          },
          {
            name: "Communication Establishment",
            content: [
              "Internal communication between ECUs.",
              "Signal monitoring & validation.",
            ],
          },
        ],
      },

      {
        module: "Diagnostics & UDS Protocol",
        duration: "1 week",
        topics: [
          {
            name: "Introduction to Diagnostics",
            content: [
              "Need of diagnostics in automotive systems.",
              "Overview of fault detection and handling.",
            ],
          },
          {
            name: "UDS Protocol",
            content: [
              "Introduction to Unified Diagnostic Services (UDS).",
              "Service identifiers and functions.",
            ],
          },
          {
            name: "Practical Usage",
            content: [
              "Working with diagnostics tools.",
              "Real-time implementation of UDS protocol.",
            ],
          },
        ],
      },

      {
        module: "Test Case Design & Execution",
        duration: "1 week",
        topics: [
          {
            name: "Test Case Writing",
            content: [
              "Understanding requirements for test design.",
              "Step-by-step writing practice.",
            ],
          },
          {
            name: "Testing Methods",
            content: [
              "Black box vs White box testing.",
              "Functional and Regression testing.",
            ],
          },
          {
            name: "Hands-on Practice",
            content: ["Real-time practice on tools like CANoe & CANalyzer."],
          },
        ],
      },

      {
        module: "Requirement & Defect Management",
        duration: "1 week",
        topics: [
          {
            name: "Requirement Management",
            content: [
              "Introduction to requirement management tools.",
              "Tracking requirements in projects.",
            ],
          },
          {
            name: "Defect Life Cycle",
            content: [
              "Phases of defect life cycle.",
              "Bug reporting process using JIRA.",
            ],
          },
          {
            name: "Practical Workshop",
            content: ["Raising, tracking and resolving bugs in JIRA."],
          },
        ],
      },

      {
        module: "Project Handling & Mock Sessions",
        duration: "0.5 week",
        topics: [
          {
            name: "Real-Time Project Handling",
            content: [
              "How to approach industry-level projects.",
              "Best practices in project execution.",
            ],
          },
          {
            name: "Mock Sessions",
            content: [
              "Demo project walkthroughs.",
              "Mock interviews and Q&A sessions.",
            ],
          },
        ],
      },

      {
        module: "CAPL Scripting Basics",
        duration: "0.5 week",
        topics: [
          {
            name: "Introduction to CAPL",
            content: [
              "Basics of CAPL scripting.",
              "Importance in automotive testing.",
            ],
          },
          {
            name: "Practical Usage",
            content: [
              "Writing simple CAPL scripts.",
              "Debugging and executing CAPL programs.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "CAN Bus Based Infotainment Testing",
      "LIN Protocol - Body Electronics Testing",
      "UDS Diagnostics & Fault Simulation",
      "Defect Lifecycle Management Using JIRA",
      "End-to-End ECU Testing Automation with CAPL",
    ],
    projectsDetails: [
      "Validate CAN communication between infotainment ECU and instrument cluster.",
      "Test LIN communication in body control modules (e.g., power windows, mirrors).",
      "Perform diagnostics testing on ECU using UDS services.",
      "Manage complete defect lifecycle during ECU testing.",
      "Automate real-time ECU validation using CAPL scripting in Canoe.",
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="heading">Course Not Found</h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <Link href="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">
                  {course.category} Course
                </Badge>
                <h1
                  className="heading"
                  dangerouslySetInnerHTML={{ __html: course.title }}
                />
                <p className="description">{course.description}</p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EnrollDialog
                  formHeading="Enroll in Course"
                  buttonText={`Enroll Now`}
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                  size="lg"
                />

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                  onClick={() =>
                    window.open(`/${(course as any)?.brochure ?? ""}`, "_blank")
                  }
                >
                  View Brochure <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={course.image || "/placeholder.svg"}
                width={"750px"}
                max-height={"500px"}
                alt={course.title}
                className="rounded-2xl shadow-2xl h-[350px]"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-sky-600">
                  {course.price}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {course.originalPrice}
                </div>
                <div className="text-sm text-green-600">
                  25% OFF Limited Time
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  {/* <TabsTrigger value="instructor">Instructor</TabsTrigger> */}
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-sky-600" />
                        What You'll Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">
                              Industry Certification
                            </h4>
                            <p className="text-sm text-gray-600">
                              Get certified upon completion
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Expert Mentorship</h4>
                            <p className="text-sm text-gray-600">
                              Learn from industry professionals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Lifetime Access</h4>
                            <p className="text-sm text-gray-600">
                              Access materials anytime
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">100% Placement</h4>
                            <p className="text-sm text-gray-600">
                              Guaranteed job assistance
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Hands-on Projects</h4>
                            <p className="text-sm text-gray-600">
                              Apply concepts with real-world practice
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Career Guidance</h4>
                            <p className="text-sm text-gray-600">
                              Get expert support for your career growth
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="syllabus" className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    {course.syllabus.map((module, index) => (
                      <AccordionItem
                        key={index}
                        value={`module-${index}`}
                        className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-white"
                      >
                        <AccordionTrigger className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100 transition-all duration-300 rounded-lg">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-lg font-bold text-gray-900">
                              Module {index + 1}: {module.module}
                            </span>
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="outline"
                                className="border-sky-600 text-sky-600"
                              >
                                {module.duration}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              {module.topics.map((topic, topicIndex) => (
                                <AccordionItem
                                  key={topicIndex}
                                  value={`topic-${index}-${topicIndex}`}
                                  className="border-b border-gray-200"
                                >
                                  <AccordionTrigger className="py-2 px-4 hover:bg-gray-50">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-sm font-semibold text-gray-700">
                                        {topic.name}
                                      </span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 py-2">
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                      {topic.content.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-6">
                        <img
                          src={course.instructor.image || "/placeholder.svg"}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {course.instructor.name}
                          </h3>
                          <p className="text-sky-600 font-semibold mb-2">
                            {course.instructor.title}
                          </p>
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {course.instructor.experience} experience
                            </div>
                          </div>
                          <p className="text-gray-700">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real-World Projects</CardTitle>
                      <CardDescription>
                        Build these industry-relevant projects to showcase your
                        skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {course.projects.map((project, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {project}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {(course as any)?.projectsDetails?.[index] ??
                                  ""}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </div>
                    </div>
                  </div> */}

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mode</span>
                    <span className="font-semibold">{course.mode}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <EnrollDialog
                      formHeading="Enroll in Course"
                      buttonText="Enroll Now"
                      className="w-full icon-button-color hover:from-sky-600 hover:to-blue-700"
                    />
                    <EnrollDialog
                      buttonText="Book Free Demo"
                      variant="ghost"
                      className="w-full bg-transparent text-black border border-sky-500"
                    />
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={() =>
                        window.open(
                          `/${(course as any)?.outline ?? ""}`,
                          "_blank"
                        )
                      }
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Outline
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Batches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">
                      Next Batch
                    </div>
                    <div className="text-sm text-blue-700">
                      Frequency: {(course as any)?.nextBatch?.[0]?.starts ?? ""}
                    </div>
                    <div className="text-sm text-blue-700">
                      Mode: {(course as any)?.nextBatch?.[0]?.mode ?? ""}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">
                      Eligible Learners
                    </div>
                    <div className="text-sm text-gray-700">
                      Learners: {(course as any)?.eligibleLearners}
                    </div>
                    <div className="text-sm text-gray-700">
                      Qualification:{(course as any)?.qualification}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section */}

      <Rating testimonialsSection={(course as any)?.testimonialsSection} />

      <Accordion2 />

      <ExpertsCarousel />

      {/* Application form section */}

      <ApplicationForm
        applicationFormSection={{
          ...applicationFormSection,
          form: {
            ...applicationFormSection.form,
            submitButton: {
              ...applicationFormSection.form.submitButton,
              icon:
                typeof applicationFormSection.form.submitButton.icon ===
                "string"
                  ? undefined
                  : applicationFormSection.form.submitButton.icon,
            },
          },
        }}
      />

      <Footer />
    </div>
  );
}
