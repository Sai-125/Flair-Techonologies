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

// This would typically come from a database or API
const courseData = {
  "python-fullstack": {
    title: "Python Full-Stack Development",
    description:
      "Master Django, React, and modern web development with hands-on projects",
    duration: "6 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    originalPrice: "₹60,000",
    category: "Development",
    students: "500+",
    rating: 4.8,
    reviews: 156,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
    highlights: [
      "Learn Python, Django, React, and PostgreSQL",
      "Build 5+ real-world projects",
      "Get mentorship from industry experts",
      "100% placement assistance",
      "Lifetime access to course materials",
    ],
    syllabus: [
      {
        module: "Core Python",
        duration: "4 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
    ],
    instructor: {
      name: "Rajesh Kumar",
      title: "Senior Full-Stack Developer at Google",
      experience: "8+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Rajesh is a seasoned full-stack developer with extensive experience in Python and React. He has worked on large-scale applications at Google and mentored 200+ students.",
    },
    projects: [
      "E-commerce Platform with Payment Integration",
      "Social Media Dashboard",
      "Task Management System",
      "Real-time Chat Application",
      "Portfolio Website with CMS",
    ],
  },
  "java-fullstack": {
    title: "Java Fullstack",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Database",
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
        duration: "6 weeks",
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
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },
  reactCourse: {
    title: "ReactJS",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Web Development Course Outline",
        duration: "6 weeks",
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
          {
            name: "Form Elements & Attributes",
            content: [
              "New Input Elements",
              "New Elements in Forms",
              "New Attributes in Form Elements",
            ],
          },
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
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },

  "power-bi": {
    title: "Microsoft Power BI",
    description:
      "Learn to create interactive data visualizations and business intelligence reports",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "Data Analytics",
    students: "300+",
    rating: 4.7,
    reviews: 89,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240726121444/Data-Analytics-Training-now.webp",
    highlights: [
      "Master Power BI Desktop and Service",
      "Create dashboards and reports",
      "Data modeling and DAX fundamentals",
      "Real-world case studies",
      "Certification preparation",
    ],
    syllabus: [
      {
        module: "Microsoft Power BI Course Outline",
        duration: "6 weeks",
        topics: [
          {
            name: "Configuration and Connections",
            content: [
              "Introduction of Power BI",
              "Installation Steps",
              "Power BI Working Architecture",
              "Connecting to Different Databases (SQL Server, Excel, One Drive)",
              "Comparison with other BI Tools",
              "Direct Vs Import Connections",
            ],
          },
          {
            name: "Visualizations",
            content: [
              "Tiles, Page, Report, Dashboard",
              "Different types of charts and Usage",
              "Create visuals",
              "Format visuals",
              "Custom Visuals from the Gallery",
              "Format Page",
            ],
          },
          {
            name: "Components",
            content: [
              "Filters",
              "Interactions",
              "Groups",
              "Hierarchy",
              "Drill up and Drill down",
              "Drill through",
              "Parameters",
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
            name: "Power Pivot",
            content: [
              "Dimension Tables",
              "Fact Tables",
              "Cardinality Relationships",
              "Star Schema Creation",
              "Active Relationship & Inactive Relationships",
            ],
          },
          {
            name: "Navigations",
            content: [
              "Page Navigations",
              "Book Marks",
              "Sync Slicers",
              "Custom Tooltips",
              "Q&A",
            ],
          },
          {
            name: "DAX",
            content: [
              "Create Column",
              "Create Measure",
              "Date and time functions",
              "Filter functions",
              "Logical functions",
              "Aggregate functions",
              "Text functions",
              "Variable usage in DAX",
              "Role-based Security",
            ],
          },
          {
            name: "Power BI Service",
            content: [
              "Power BI License Types",
              "Workspace Creation",
              "Report Publish",
              "Gateway Installation & Configuration",
              "Schedule Refresh",
              "Sharing Reports & Providing access to Business Users",
              "Dashboard Creation",
              "Power BI Apps Creation",
            ],
          },
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
      "Sales Performance Dashboard",
      "Customer Segmentation Report",
      "Financial Analysis Dashboard",
      "Inventory Management Report",
    ],
  },

  alteryx: {
    title: "Alteryx",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Alteryx Designer Course Outline",
        duration: "3 weeks",
        topics: [
          {
            name: "Alteryx Designer - Introduction",
            content: [
              "Understanding Alteryx Designer",
              "Alteryx Designer Interface",
              "User and Workflow Settings",
            ],
          },
          {
            name: "Alteryx Designer",
            content: [
              "Tool Palettes",
              "Configuration",
              "Favorite Palettes",
              "Workflow Canvas",
            ],
          },
          {
            name: "Restructuring the Data / Data Processing",
            content: [
              "Split data",
              "Skip records",
              "Use a record as field headings",
              "Input and output data",
              "Split fields",
              "Input Data",
              "Dynamic Rename",
              "Text to Columns",
              "Transpose",
            ],
          },
          {
            name: "Join Data from Different Sources",
            content: [
              "Filter",
              "Summarize",
              "Browse",
              "Union",
              "Join Multiple",
              "Input Data",
              "Formula",
              "Join",
              "Output Data",
              "Generate Row",
            ],
          },
          {
            name: "Join and Data Blend",
            content: [
              "Input Data",
              "Unique",
              "Union",
              "Browse",
              "Fuzzy Match",
              "Filter",
              "Auto Field",
            ],
          },
          {
            name: "Handling Data",
            content: [
              "Impute Values",
              "Data Cleansing",
              "Formula",
              "Append Field",
              "Random Sample",
              "Unique",
              "Running tool",
            ],
          },
          {
            name: "Parse Data with Regex",
            content: ["Regex tool"],
          },
          {
            name: "Database Connections",
            content: [
              "Join In-DB",
              "Data Stream In",
              "Data Stream Out",
              "Select In-DB",
              "Connect In-DB",
              "Filter In-DB",
              "Formula In-DB",
              "Summarize In-DB",
            ],
          },
          {
            name: "Analytical App",
            content: [
              "List Box",
              "Numeric Up/Down",
              "Check Box",
              "Control Parameter",
              "Action",
              "Image",
              "File Browse",
              "Radio Button",
            ],
          },
          {
            name: "Macros",
            content: [
              "Create standard macro",
              "Batch macro",
              "Macro Input",
              "Macro Output",
              "Dynamic Rename",
              "Dynamic Input",
              "Control Parameter",
              "Action",
            ],
          },
          {
            name: "Create Static Reporting",
            content: [
              "Table",
              "Charts",
              "Layout",
              "Datetime Now",
              "Sort",
              "Render",
              "Report map",
              "Report Text",
              "Image",
            ],
          },
          {
            name: "Spatial Analysis",
            content: [
              "Create Points",
              "Spatial Match",
              "Find Nearest",
              "Trade Area",
              "Distance",
              "Special info",
            ],
          },
          {
            name: "Alteryx Gallery",
            content: [
              "Publish workflows to Alteryx Gallery from Designer",
              "Make workflows public",
              "Update or replace the workflows",
              "Create collections",
              "Share workflows and collections",
              "Run workflows / apps from the gallery",
            ],
          },
          {
            name: "Schedule Workflows on Gallery",
            content: [
              "Understanding the scheduler on gallery",
              "Configure the workflows schedules and maintain the workflows",
              "Change the frequency of workflow schedules",
            ],
          },
          {
            name: "Error Handling and Optimization",
            content: [
              "Understanding the runtime Logs",
              "Understanding the Performance profiling",
            ],
          },
          {
            name: "Case Study and Challenges",
            content: [],
          },
          {
            name: "Alteryx Designer Core Certification",
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
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },

  "excel-Vba": {
    title: "Microsoft Excel & VBA",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Microsoft Excel",
        duration: "3 weeks",
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
        module: "SQL",
        duration: "3 weeks",
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
        module: "VBA Macros",
        duration: "3 weeks",
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
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },

  tableau: {
    title: "Tableau",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Tableau Course Outline",
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
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },
  sqlCourse: {
    title: "SQL",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "SQL Outline",
        duration: "3 weeks",
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
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },

  python: {
    title: "Python",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "Analytics",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Python",
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
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },

  "azure-devops": {
    title: "Azure DevOps",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "DevOps",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Azure DevOps Basics",
        duration: "3 weeks",
        topics: [
          {
            name: "Azure Boards",
            content: [
              "Manage work items and track project progress.",
              "Create and customize Kanban boards.",
              "Track tasks using Agile methodologies.",
            ],
          },
          {
            name: "Repos",
            content: [
              "Use Azure Repos for version control.",
              "Manage Git repositories and branches.",
              "Implement pull requests and code reviews.",
            ],
          },
          {
            name: "Pipelines",
            content: [
              "Set up build and release pipelines.",
              "Configure YAML-based pipelines.",
              "Automate build processes.",
            ],
          },
          {
            name: "Artifacts",
            content: [
              "Manage and share packages with Azure Artifacts.",
              "Publish and consume NuGet packages.",
              "Integrate artifacts with pipelines.",
            ],
          },
        ],
      },
      {
        module: "CI/CD Implementation",
        duration: "5 weeks",
        topics: [
          {
            name: "Build Pipelines",
            content: [
              "Create and optimize build pipelines for automation.",
              "Configure triggers for continuous integration.",
              "Integrate testing in build pipelines.",
              "Optimize build performance.",
            ],
          },
          {
            name: "Release Pipelines",
            content: [
              "Configure release pipelines for deployment.",
              "Set up multi-stage deployments.",
              "Implement approval gates.",
              "Automate release processes.",
            ],
          },
          {
            name: "Testing",
            content: [
              "Integrate automated testing in pipelines.",
              "Use unit and integration tests.",
              "Analyze test results and coverage.",
            ],
          },
          {
            name: "Deployment Strategies",
            content: [
              "Implement blue-green and canary deployments.",
              "Understand deployment rollback strategies.",
              "Monitor deployment health.",
            ],
          },
        ],
      },
      {
        module: "Advanced Tools",
        duration: "3 weeks",
        topics: [
          {
            name: "IaC with Terraform",
            content: [
              "Use Terraform for infrastructure as code.",
              "Write Terraform scripts for Azure resources.",
              "Manage infrastructure versioning.",
            ],
          },
          {
            name: "Monitoring",
            content: [
              "Set up monitoring with Azure Monitor.",
              "Configure alerts and dashboards.",
              "Analyze application performance metrics.",
            ],
          },
          {
            name: "Security",
            content: [
              "Implement security practices in DevOps.",
              "Secure pipelines with role-based access.",
              "Scan code for vulnerabilities.",
            ],
          },
          {
            name: "Azure Test Plans",
            content: [
              "Plan and execute tests with Azure Test Plans.",
              "Create test cases and suites.",
              "Track test results and defects.",
            ],
          },
        ],
      },
      {
        module: "Capstone Project",
        duration: "3 weeks",
        topics: [
          {
            name: "End-to-End DevOps Workflow",
            content: [
              "Build a complete DevOps workflow.",
              "Integrate all Azure DevOps services.",
              "Deploy a sample application.",
            ],
          },
          {
            name: "Optimization",
            content: [
              "Optimize pipelines for performance.",
              "Reduce build and deployment times.",
              "Implement caching strategies.",
            ],
          },
          {
            name: "Documentation",
            content: [
              "Document the DevOps processes and tools.",
              "Create runbooks for operations.",
              "Document pipeline configurations.",
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
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description:
      "Gain skills in data analysis using Python, R, and advanced analytics tools",
    duration: "5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹35,000",
    originalPrice: "₹45,000",
    category: "Data Analytics",
    students: "450+",
    rating: 4.6,
    reviews: 110,
    image:
      "https://www.bismilsoft.com/admin/images/blog/DATA%20ANALYTICS_WEB%20IMAGE-01-01.jpg",
    highlights: [
      "Learn Python, R, and SQL for analytics",
      "Hands-on with real datasets",
      "Predictive modeling techniques",
      "Industry-relevant case studies",
      "Career guidance",
    ],
    syllabus: [
      {
        module: "Data Analysis Basics",
        duration: "4 weeks",
        topics: [
          {
            name: "Data Collection",
            content: [
              "Gather data from various sources for analysis.",
              "Work with APIs and web scraping.",
              "Handle structured and unstructured data.",
            ],
          },
          {
            name: "Cleaning",
            content: [
              "Clean and preprocess data for accuracy.",
              "Handle missing values and duplicates.",
              "Standardize data formats.",
            ],
          },
          {
            name: "Exploratory Data Analysis",
            content: [
              "Perform EDA to uncover patterns and insights.",
              "Use statistical summaries and visualizations.",
              "Identify correlations and trends.",
            ],
          },
          {
            name: "Visualization",
            content: [
              "Create visualizations using Matplotlib and Seaborn.",
              "Design interactive plots with Plotly.",
              "Customize charts for presentations.",
            ],
          },
        ],
      },
      {
        module: "Programming for Analytics",
        duration: "6 weeks",
        topics: [
          {
            name: "Python for Data",
            content: [
              "Use Python libraries like Pandas and NumPy.",
              "Perform data manipulation with Pandas.",
              "Optimize numerical computations with NumPy.",
            ],
          },
          {
            name: "R Programming",
            content: [
              "Learn R for statistical analysis.",
              "Use R packages like dplyr and ggplot2.",
              "Write efficient R scripts.",
            ],
          },
          {
            name: "SQL Queries",
            content: [
              "Write SQL queries for data extraction.",
              "Perform joins and aggregations.",
              "Optimize SQL queries for performance.",
            ],
          },
          {
            name: "Libraries",
            content: [
              "Explore data analysis libraries like Scikit-learn.",
              "Implement basic machine learning models.",
              "Use libraries for data visualization.",
            ],
          },
        ],
      },
      {
        module: "Advanced Analytics",
        duration: "4 weeks",
        topics: [
          {
            name: "Machine Learning Basics",
            content: [
              "Introduction to machine learning algorithms.",
              "Understand supervised and unsupervised learning.",
              "Implement simple models like linear regression.",
            ],
          },
          {
            name: "Statistical Methods",
            content: [
              "Apply statistical techniques for data analysis.",
              "Perform hypothesis testing.",
              "Use statistical distributions for modeling.",
            ],
          },
          {
            name: "Predictive Models",
            content: [
              "Build predictive models for forecasting.",
              "Evaluate model performance metrics.",
              "Tune model hyperparameters.",
            ],
          },
        ],
      },
      {
        module: "Project & Deployment",
        duration: "3 weeks",
        topics: [
          {
            name: "Analytics Project",
            content: [
              "Execute a complete data analytics project.",
              "Define project scope and objectives.",
              "Analyze real-world datasets.",
            ],
          },
          {
            name: "Presentation",
            content: [
              "Present findings to stakeholders.",
              "Create compelling data stories.",
              "Use visualizations in presentations.",
            ],
          },
          {
            name: "Tools Integration",
            content: [
              "Integrate analytics tools for deployment.",
              "Automate data pipelines.",
              "Deploy models to production environments.",
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
      "Customer Behavior Analysis",
      "Sales Forecasting Model",
      "Market Trend Analysis",
      "Data Visualization Dashboard",
    ],
  },
  Tableau: {
    title: "Tableau",
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
    image:
      "https://solutionsreview.com/business-intelligence/files/2021/08/Tableau-Courses-for-Beginners.jpg",
    highlights: [
      "Create interactive dashboards",
      "Data blending and preparation",
      "Advanced visualization techniques",
      "Tableau Server integration",
      "Certification preparation",
    ],
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
      "Sales Performance Dashboard",
      "HR Analytics Report",
      "Marketing Campaign Analysis",
      "Financial Summary Dashboard",
    ],
  },
  "network-protocol": {
    title: "Network Protocol",
    description:
      "Understand and implement network protocols for robust IT infrastructure",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹30,000",
    originalPrice: "₹40,000",
    category: "Networking",
    students: "250+",
    rating: 4.5,
    reviews: 70,
    image:
      "https://cdn-fainj.nitrocdn.com/HMhNvtGdkXCThiYKondeUNdKlFRQtHkp/assets/images/optimized/rev-2573752/www.auvik.com/wp-content/uploads/2024/06/common-network-protocols3.jpg",
    highlights: [
      "Learn TCP/IP, HTTP, FTP, and more",
      "Hands-on network configuration",
      "Security protocols and troubleshooting",
      "Industry-standard certifications",
      "Practical lab sessions",
    ],
    syllabus: [
      {
        module: "Network Fundamentals",
        duration: "3 weeks",
        topics: [
          {
            name: "OSI Model",
            content: [
              "Understand the OSI model and its layers.",
              "Explore each layer's functions and protocols.",
              "Compare OSI with TCP/IP model.",
            ],
          },
          {
            name: "TCP/IP Basics",
            content: [
              "Learn the fundamentals of TCP/IP protocols.",
              "Understand packet structure and headers.",
              "Analyze TCP/IP communication flow.",
            ],
          },
          {
            name: "IP Addressing",
            content: [
              "Configure IP addresses and subnets.",
              "Understand IPv4 and IPv6 addressing.",
              "Implement static and dynamic addressing.",
            ],
          },
          {
            name: "Subnetting",
            content: [
              "Master subnetting for network design.",
              "Calculate subnet masks and ranges.",
              "Design efficient subnet architectures.",
            ],
          },
        ],
      },
      {
        module: "Core Protocols",
        duration: "5 weeks",
        topics: [
          {
            name: "HTTP/HTTPS",
            content: [
              "Explore HTTP and HTTPS for web communication.",
              "Understand request-response cycles.",
              "Implement secure communication with HTTPS.",
              "Analyze HTTP headers and status codes.",
            ],
          },
          {
            name: "FTP",
            content: [
              "Understand File Transfer Protocol operations.",
              "Set up FTP servers and clients.",
              "Secure FTP with SFTP and FTPS.",
            ],
          },
          {
            name: "SMTP",
            content: [
              "Learn email transmission with SMTP.",
              "Configure SMTP servers for email delivery.",
              "Troubleshoot email delivery issues.",
            ],
          },
          {
            name: "DNS",
            content: [
              "Configure and troubleshoot DNS services.",
              "Understand DNS resolution process.",
              "Set up DNS records like A, CNAME, and MX.",
            ],
          },
          {
            name: "DHCP",
            content: [
              "Implement DHCP for automatic IP allocation.",
              "Configure DHCP scopes and options.",
              "Troubleshoot DHCP-related issues.",
            ],
          },
        ],
      },
      {
        module: "Security & Troubleshooting",
        duration: "3 weeks",
        topics: [
          {
            name: "Network Security",
            content: [
              "Implement security measures for networks.",
              "Configure firewalls and intrusion detection.",
              "Understand encryption protocols.",
            ],
          },
          {
            name: "Protocol Analysis",
            content: [
              "Analyze network traffic with tools like Wireshark.",
              "Capture and interpret packets.",
              "Identify network anomalies.",
            ],
          },
          {
            name: "Troubleshooting Tools",
            content: [
              "Use tools for network diagnostics.",
              "Perform ping, traceroute, and netstat analysis.",
              "Diagnose connectivity issues.",
            ],
          },
          {
            name: "VPNs",
            content: [
              "Set up virtual private networks for security.",
              "Configure site-to-site and remote-access VPNs.",
              "Troubleshoot VPN connectivity.",
            ],
          },
        ],
      },
      {
        module: "Advanced Networking",
        duration: "3 weeks",
        topics: [
          {
            name: "VoIP",
            content: [
              "Implement Voice over IP protocols.",
              "Configure VoIP systems like SIP.",
              "Optimize VoIP call quality.",
            ],
          },
          {
            name: "Wireless Protocols",
            content: [
              "Configure wireless network protocols.",
              "Understand Wi-Fi standards like 802.11.",
              "Secure wireless networks.",
            ],
          },
          {
            name: "Network Optimization",
            content: [
              "Optimize network performance and latency.",
              "Implement QoS policies.",
              "Monitor network bandwidth usage.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Anil Mehta",
      title: "Network Engineer at Cisco",
      experience: "13+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Anil has extensive experience in network protocols and has trained numerous IT professionals.",
    },
    projects: [
      "Network Configuration Setup",
      "Protocol Simulation",
      "Security Audit Project",
      "Wireless Network Deployment",
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
                <h1 className="heading">{course.title}</h1>
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
                  onClick={() => window.open("/my-course.pdf", "_blank")}
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
                                A comprehensive project that demonstrates
                                real-world application of the skills learned
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
                      onClick={() => window.open("/my-course.pdf", "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Brochure
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
                      Starts: March 15, 2024
                    </div>
                    <div className="text-sm text-blue-700">Mode: Online</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">
                      Weekend Batch
                    </div>
                    <div className="text-sm text-gray-700">
                      Starts: March 20, 2024
                    </div>
                    <div className="text-sm text-gray-700">
                      Mode: Offline (Bangalore)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
