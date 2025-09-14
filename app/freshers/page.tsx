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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { freshersPage } from "@/app/constant";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Star,
  Clock,
  Monitor,
  Users,
} from "lucide-react";
import { EnrollDialog } from "@/components/EnrollDialog"; // Assuming EnrollDialog is imported
import Link from "next/link";
import Rating from "@/components/ui/Rating";
import ApplicationForm from "@/components/ui/Application-form";

export default function FreshersPage() {
  const {
    heroSection,
    statsSection,
    programsSection,
    testimonialsSection,
    applicationFormSection,
  } = freshersPage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">
                  {heroSection.badge}
                </Badge>
                <h1
                  className="heading"
                  dangerouslySetInnerHTML={{ __html: heroSection.title }}
                />
                <p className="description max-w-lg">
                  {heroSection.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {heroSection.buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    className={button.className}
                    onClick={() => {
                      if (button.text === "Download Brochure") {
                        const link = document.createElement("a");
                        link.href = "/my-course.pdf";
                        link.target = "_blank";
                        // link.download = "my-course.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else if (button.text === "Apply Now") {
                        const formSection =
                          document.getElementById("application-form");
                        if (formSection) {
                          formSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {button.text}
                    {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:w-full md:w-1/2 pt-4">
                {heroSection.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroSection.image}
                alt={heroSection.imageAlt}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsSection.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 icon-button-color rounded-full text-white mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              {programsSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: programsSection.title }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {programsSection.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsSection.programs.map((program, index) => (
              <motion.div
                key={program.id || program.title} // Use id if available, fallback to title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sky-500 text-white">
                        {program.category || "IT Training"}{" "}
                        {/* Default category */}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        ★ {program.rating || "4.5"} {/* Default rating */}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Monitor className="h-4 w-4" />
                        {program.mode || "Online"} {/* Default mode */}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.students || "100+ Students"}{" "}
                        {/* Default students */}
                      </div>
                      <div className="text-sm">
                        {program.level || "Beginner to Advanced"}{" "}
                        {/* Default level */}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <EnrollDialog
                        formHeading="Enroll Now"
                        buttonText="Enroll Now"
                        className="icon-button-color hover:from-sky-600 hover:to-blue-700 hover:bg-sky-600 hover:text-white text-sm font-medium px-4 py-2"
                        size="lg"
                      />
                      <Link
                        href={`/courses/${
                          program.id ||
                          program.title.toLowerCase().replace(/\s+/g, "-")
                        }`}
                      >
                        <Button
                          className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent text-sm font-medium px-4 py-2"
                          size="lg"
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
        </div>
      </section>

      {/* Testimonials Section */}
      <Rating testimonialsSection={testimonialsSection} />

      {/* Application Form Section */}
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
