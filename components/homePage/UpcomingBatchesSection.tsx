"use client";
import { motion } from "framer-motion";
import { homePage } from "@/app/constant";
import { EnrollDialog } from "../EnrollDialog";
import {
  Calendar,
  Clock,
  Timer,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function UpcomingBatchesTable() {
  const techLogos: Record<string, string> = {
    "Microsoft Excel & VBA": "/microsoft-excel-logo-transparent-free-png.webp",
    "Tableau Developer": "/tableau-software-logo-png_seeklogo-386611.png",
    "Data Analytics": "/811-8114798_labor-analytics-icon-jio-sim-logo.png",
    "Record to Report (R2R)": "/R2R-Blue-Circle.png",
    "React JS": "/reactjs-inners.svg",
    "AWS DevOps": "/machine-lDev.webp",
    "Python Full-Stack": "/pythisns.png",
    "Microsoft Power BI": "/powerbi.jpg",
    "Power Apps & Automate": "/powerbi.jpg",
    "Java Fullstack": "/Javavav.jpg",
    "Azure Data Engineer": "/az365m210-azure-logo-microsoft.png",
    "Azure DevOps": "/az365m210-azure-logo-microsoft.png",
    "Alteryx Designer": "/alteryxx.jpg",
    "SRE Modern DevOps": "/machine-lDev.webp",
    "Oracle Fusion Cloud SCM": "/scm11.png",
    "AI & ML": "/aialakal.webp",
    "DevOps Workshop": "/machine-lDev.webp",
    "Network Protocol Development": "/The-Evolution-of-Internet-Protocol.png",
    CyberSecurity: "/shield_78370-5821.jpg",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-sky-600">
            {homePage.upcomingBatchesSection.title}
          </h2>
        </motion.div>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full text-lg text-left text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold text-center w-72">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {homePage.upcomingBatchesSection.batches.map((batch, index) => (
                <tr
                  key={batch.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-white"}
                >
                  <td className="px-4 py-3 flex items-center gap-2 font-medium">
                    {techLogos[batch.name] && (
                      <img
                        src={techLogos[batch.name]}
                        alt={`${batch.name} logo`}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    {batch.name}
                  </td>
                  <td className="px-4 py-3">{batch.mode}</td>
                  <td className="px-4 py-3">{batch.date}</td>
                  <td className="px-4 py-3">{batch.duration}</td>

                  <td className="flex gap-2 justify-between items-center px-4  py-2">
                    <Link href={`${batch?.brochure as any}`} target="_blank">
                      <Button
                        className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent text-sm font-medium px-3 py-2"
                        size="lg"
                      >
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <EnrollDialog
                      formHeading="Enroll Now"
                      buttonText={`Enroll Now`}
                      className="icon-button-color hover:from-sky-600 hover:to-blue-700 hover:bg-sky-600 hover:text-white text-sm font-medium px-4 py-2"
                      size="lg"
                    />
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
