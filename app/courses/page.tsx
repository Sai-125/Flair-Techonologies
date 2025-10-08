"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Monitor,
  Users,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnrollDialog } from "@/components/EnrollDialog";

const allCourses = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Master Excel, Power BI, Tableau, Alteryx, SQL, Python, and Soft Skills with real-world projects.",
    duration: "4 months",
    mode: "Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    category: "📊 Analytics",
    students: "700+",
    rating: 4.9,
    image: "/dataaaan.png?height=200&width=300",
  },
  {
    id: "excel-Vba",
    title: "Microsoft Excel & VBA",
    description:
      "Master Microsoft Excel and VBA to automate tasks, analyze data, and build powerful business solutions.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    category: "📊 Analytics",
    students: "1500+",
    rating: 4.9,
    image: "/microsoft-excel-microsoft-excel.jpg?height=200&width=300",
  },
  {
    id: "record-to-report-r2r",
    title: "Record to Report (R2R)",
    description:
      "Comprehensive Record to Report training in ERP, accounting, reconciliations & real-time reporting.",
    duration: "1 month",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹45,000",
    category: "🪙 Finance",
    students: "1000+",
    rating: 4.9,
    image: "/R@RRR.png?height=200&width=300",
  },
  {
    id: "power-bi",
    title: "Microsoft Power BI",
    description:
      "Master Power BI to turn raw data into dashboards, reports, and actionable business insights.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹25,000",
    category: "📊 Analytics",
    students: "1500+",
    rating: 4.9,
    image: "/pbi.jpg?height=200&width=300",
  },
  {
    id: "python-fullstack",
    title: "Python Full-Stack",
    description:
      "Master Python, Django and modern web development with hands-on projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹35,000",
    category: "🧑‍💻 Development",
    students: "500+",
    rating: 4.7,
    image: "/pythonw.webp?height=200&width=300",
  },
  {
    id: "reactCourse",
    title: "ReactJS",
    description:
      "Future-proof your career with ReactJS by building real-time, production-ready web apps.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    category: "🧑‍💻 Development",
    students: "700+",
    rating: 4.8,
    image: "/reactCourse.png?height=200&width=300",
  },
  {
    id: "java-fullstack",
    title: "Java Full-Stack",
    description:
      "Master Core & Advanced Java for building robust enterprise applications.",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹20,000",
    category: "🧑‍💻 Development",
    students: "400+",
    rating: 4.9,
    image: "/fullStackJava.png?height=200&width=300",
  },
  {
    id: "ai-and-ml",
    title: "AI & ML",
    description:
      "AI & ML Practitioner Training - Empowering the Next Generation of AI Engineers.",
    duration: "3 months",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "✈️ AI & ML",
    students: "150+",
    rating: 4.9,
    image: "/ai&ML.jpg?height=200&width=300",
  },
  {
    id: "aws-devops",
    title: "AWS DevOps",
    description:
      "Master AWS DevOps by learning automation, CI/CD, monitoring, and cloud deployment through projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "⛈️ Cloud",
    students: "1500+",
    rating: 4.9,
    image: "/AWSDevOps.png?height=200&width=300",
  },
   {
    id: "azure-devops",
    title: "Azure DevOps",
    description:
      "Master Azure DevOps by learning CI/CD, automation, monitoring, and collaboration with real projects.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "⛈️ Cloud",
    students: "700+",
    rating: 4.7,
    image: "/azureDevOps.jpg?height=200&width=300",
  },
  {
    id: "oracle-fusion-cloud-scm",
    title: "Oracle Fusion Cloud SCM",
    description:
      "Master procurement, inventory & order management with Oracle Fusion Cloud SCM training.",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "⛈️ Cloud",
    students: "400+",
    rating: 4.6,
    image: "/scm.jpg?height=200&width=300",
  },
  {
    id: "power-apps",
    title: "Power Apps & Automate",
    description:
      "Master Power Apps, Automate Workflows, and SQL Integration with Complete Practical Training Program.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "250+",
    rating: 4.6,
    image: "/powerapps1.jpg?height=200&width=300",
  },
   {
    id: "Azure-Data",
    title: "Azure Data Engineer",
    description:
      "Master Advanced Azure Data Engineering with ADF, Databricks, Synapse, and real-time processing.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "300+",
    rating: 4.9,
    image: "/ade.jpg?height=200&width=300",
  },
  {
    id: "tableau",
    title: "Tableau Developer",
    description:
      "Master Tableau to connect data, build visualizations, design dashboards & deploy impactful BI solutions.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "700+",
    rating: 4.9,
    image: "/tableau.jpg?height=200&width=300",
  },
  {
    id: "alteryx",
    title: "Alteryx Designer",
    description:
      "Master Alteryx Designer to automate workflows, blend data, and create analytics solutions efficiently.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "300+",
    rating: 4.9,
    image: "/alteryx.jpg?height=200&width=300",
  },
  {
    id: "azure-admin",
    title: "Azure Admin",
    description:
      "Master Azure administration, security, networking, automation, and disaster recovery with real projects.",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "⛈️ Cloud",
    students: "300+",
    rating: 4.7,
    image: "/azurec.jpg?height=200&width=300",
  },
  {
    id: "Cybersecurity",
    title: "Cyber Security",
    description:
      "Master web, network, and API security with tools, vulnerability testing, and defense strategies.",
    duration: "2 months",
    mode: "Online",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "🛜 Networking",
    students: "700+",
    rating: 4.9,
    image: "/cyber.jpg?height=200&width=300",
  },
  {
    id: "network-protocol-development",
    title: "Network Protocol Development",
    description:
      "Master C, Linux, and network programming to design, implement & test protocols with real-time projects.",
    duration: "2 months",
    mode: "Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "🛜 Networking",
    students: "1000+",
    rating: 4.7,
    image: "/network.jpg?height=200&width=300",
  },
  {
    id: "sqlCourse",
    title: "SQL Developer",
    description:
      "Master SQL fundamentals to advanced analytics with projects, building strong skills for data careers.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "600+",
    rating: 4.6,
    image: "/sql.jpg?height=200&width=300",
  },
  {
    id: "python",
    title: "Analytics with Python",
    description:
      "Master Python for data analysis, visualization, and reporting with hands-on projects and practical skills.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "📊 Analytics",
    students: "300+",
    rating: 4.7,
    image: "/pythi.jpg?height=200&width=300",
  },
   {
    id: "Automotive-Testing",
    title: "Automotive Testing",
    description:
      "Hands-on Automotive ECU Testing: Master CAN, LIN, UDS, CAPL, and JIRA for industry readiness.",
    duration: "1.5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹30,000",
    category: "👩‍💻 Testing",
    students: "300+",
    rating: 4.5,
    image: "/automotive.jpg?height=200&width=300",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");

  const categories = [
    "all",
    "🧑‍💻 Development",
    "📊 Analytics",
    "⛈️ Cloud",
    "🛜 Networking",
    "🪙 Finance",
    "✈️ AI & ML",
    "👩‍💻 Testing",
  ];
  const modes = ["all", "Online", "Offline", "Online/Offline"];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesMode =
      selectedMode === "all" || course.mode.includes(selectedMode);

    return matchesSearch && matchesCategory && matchesMode;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white text-sky-600">
              🎓 Industry-Aligned Courses
            </Badge>
            <h1 className="heading">
              Master <span className="text-cyan-300">In-Demand</span> Tech
              Skills
            </h1>
            <p className="description max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed by
              industry experts and delivered by professionals from top MNCs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Filter by:</span>
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMode} onValueChange={setSelectedMode}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>
                  {modes.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {mode === "all" ? "All Modes" : mode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {allCourses.length} courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sky-500 text-white">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        ★ {course.rating}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Monitor className="h-4 w-4" />
                        {course.mode}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </div>
                      <div className="text-sm">{course.level}</div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      {/* <div className="text-2xl font-bold text-sky-600">{course.price}</div> */}
                      <EnrollDialog
                        formHeading="Enroll Now"
                        buttonText={`Enroll Now `}
                        className="icon-button-color hover:from-sky-600 hover:to-blue-700 hover:bg-sky-600 hover:text-white text-sm font-medium px-4 py-2"
                        size="lg"
                      />
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent text-sm font-medium px-4 py-2"
                          size={"lg"}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No courses found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedMode("all");
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
