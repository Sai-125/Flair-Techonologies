import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sravya Reddy",
    image:
      "/Sravyare.jpg", // Replace with real images if you have
    content:
      "The instructors at Flair Technologies are truly exceptional. Their hands-on approach and real-world projects helped me gain the confidence I needed to transition into a DevOps role. Within just a month of completing the course, I landed a fantastic job offer. The support from mentors and placement assistance was top-notch throughout my journey. I highly recommend Flair Technologies to anyone serious about building a career in tech.",
  },
  {
    name: "Harini Ch",
    image:
      "/Harinic.jpg",
    content:
      "Flair Technologies provided me with practical training that was directly applicable in my job. The curriculum is industry-focused and taught by professionals who are currently working in the field. The small batch sizes ensured personalized attention, and the instructors were always ready to help. I especially appreciated the real-world projects that allowed me to build a strong portfolio, which played a crucial role in landing my dream job. Truly a game-changer!",
  },
  {
    name: "Ananya",
    image:
      "/ananya.jpeg",
    content:
      "Joining Flair Technologies was the best decision I made for my career. The course on Data Analytics was comprehensive and well-structured, covering all the essential tools and techniques. The faculty were knowledgeable and approachable, helping me clear all my doubts promptly. The placement team was very proactive, arranging multiple interviews and guiding me through resume building and interview preparation. I am now happily employed at a reputed MNC thanks to their dedicated efforts.",
  },
  {
    name: "Keerthana",
    image:
      "/keer.png", // Replace with real images if you have
    content:
            "As a recent graduate, I had no prior industry exposure. The Java Full Stack program at Flair Technologies gave me the confidence to build real-world applications. The hands-on projects and mentorship helped me land my first job as a Full Stack Developer.",
          },
  {
    name: "Priya",
    image:
      "/priya.png",
    content:
            "As a fresher, ReactJS training here gave me the confidence and skills to build real-world projects. Thanks to Flair for the guidance, I landed my first job as a React Developer.",
           },
  {
    name: "Anjali Rao",
    image:
      "/anjalir.jpg",
    content:
            "Coming from a commerce background, I never imagined working with data tools. Flair Technologies’ Power BI training made it simple to clean, model, and visualize data. Within weeks, I was building dashboards for my team and adding real value to my role.",
          },
{
    name: "Neha Varma",
    image:
      "/nehav.jpg",
    content:
            "This course gave me the confidence to build business apps and automate workflows at my workplace. The SQL module helped me handle backend tasks more effectively.",
         },
  {
    name: "Isha Sharma",
    image:
      "/ishas.jpg",
   content:
            "The Advanced Azure Data Engineer course helped me master Databricks, ADF, and Synapse in real-world scenarios. The practical approach and project-based learning made a huge difference. I now confidently design and optimize enterprise data pipelines, implement governance, and deliver insights faster, which has positively impacted my role at work.",
           },



             {
    name: "Priya Reddy",
    image:
      "/priyari.jpg",
    content:
            "As a fresher, I was nervous about handling real datasets. Flair Technologies’ Alteryx Designer training helped me quickly grasp data preparation and reporting. The hands-on projects gave me confidence, and within months, I landed my first job.",
         },
  {
    name: "Sowmya R",
    image:
      "/sowmya.jpg",
    content:
            "As a fresh engineering graduate, I lacked practical skills to stand out in interviews. Flair Technologies’ Excel & VBA course gave me the confidence to automate reports, analyze data efficiently, and present insights clearly. Within 3 months of completing the course, I secured a role as a Business Analyst. This training truly bridged the gap between academics and industry.",
          },
{
    name: "Rithu Shahini",
    image:
      "/rithu.jpg",
     content:
            "Coming from a commerce background, I wanted to enter the corporate world with strong technical skills. The Excel & VBA training at Flair Technologies was practical and project-oriented. I learned advanced formulas, pivot tables, and automation through macros. Just 3 months after finishing, I was placed as a Data Reporting Associate. The course transformed my career prospects.",
          },
  {
    name: "Meena Nair",
    image:
      "/meenan.jpg",
   content:
            "Coming from finance, I wanted to upgrade my analytics skills. Tableau training with Flair Technologies was hands-on and simple to follow. Now, I can analyze data faster and present insights through dashboards in my daily work.",
          },


          {
    name: "Harsha Jain",
    image:
      "/jain.jpg",
    content:
            "As a B.Tech fresher, I needed strong technical skills to stand out. The SQL course at Flair Technologies helped me master joins, queries, and reporting. Thanks to the capstone projects, I cracked interviews and started my career as a Junior SQL Developer.",
          },
  {
    name: "Megha Sharma",
    image:
      "/meghas.jpg",
    content:
            "I already worked with Excel and SQL, but Flair Technologies’ Python course gave me the edge I needed. Learning Pandas and visualization with Seaborn helped me automate reports and present data in a much clearer way to stakeholders.",
          },
{
    name: "Megha Varsha",
    image:
      "/megha.jpg",
     content:
            "The course was very practical. I learned Kubernetes, CI/CD, and monitoring with Grafana, which I now use in my projects daily. The instructors were very supportive.",
           },
  {
    name: "Sneha Iyer",
    image:
      "/sneha1.jpg",
  content:
            "Coming from an IT support background, this course made cloud and DevOps concepts easy to understand. I especially liked the hands-on sessions with Docker and AKS, which gave me the confidence to work on containerized applications.",
           },

           

           {
    name: "Nikitha Chowdary",
    image:
      "/nikitha.jpg",
    content:
            "I wanted to move into cloud roles. The Azure Admin course at Flair Technologies covered Active Directory, security, and monitoring thoroughly. It helped me land my first cloud job.",
          },
  {
    name: "Kanishka",
    image:
      "/kanishka.jpg",
    content:
            "Flair Technologies’ SCM training gave me practical knowledge of procurement and inventory management. The real-time exercises helped me apply concepts directly to my work.",
           },
{
    name: "Vamsi Krishna",
    image:
      "/Vansik.jpg",
     content:
            "With a BPO background and no tech experience, I never imagined I could transition into analytics. But this course made it possible. It started with Excel, which I was already familiar with, and gradually introduced me to Power BI, SQL, and even Python. I loved the real-world projects-they gave me something solid to show recruiters. Within 3 months of completing the course, I got hired as a Junior Data Analyst. The instructors made complex tools like Tableau and Alteryx easy to grasp. If you're from a non-IT field and want to switch careers, this course is the perfect launchpad.",
          },
  {
    name: "Shahini",
    image:
      "/sha.png",
  content:
            "Coming from a non-IT background, I never imagined coding could be this simple. With step-by-step ReactJS training, I successfully transitioned into a Front-End Developer role.",
           },



           {
    name: "Neha Sharma",
    image:
      "/neha.jpg",
   content:
            "Coming from a testing background, I wanted to shift into security. The modules on OWASP Top 10 and authentication testing were very practical. Now I can identify and report security flaws with confidence.",
          },
  {
    name: "Anjali",
    image:
      "/Anjali.jpg",
    content:
            "I joined Flair Technologies to upskill in protocol development. The structured modules on Linux system programming and TCP/IP stack made complex topics easy to learn. This training was a real career boost.",
           },
{
    name: "Sneha Reddy",
    image:
      "/sneha.jpg",
     content:
            "Coming from a non-IT background, I thought ERP tools would be difficult. But the trainers explained everything clearly with practical examples. The R2R program made complex topics simple and easy to apply.",
          },
  {
    name: "Ananya Reddy",
    image:
      "/ananya.png",
  content:
            "Before joining Flair Technologies, I worked as a data analyst in IT. I knew Python and Pandas but lacked exposure to full ML model deployment. This training not only strengthened my coding skills but also taught me how to build, package, and monitor models in production. Thanks to this course, I’ve transitioned into an AI Engineer role.",
           },

           {
    name: "Neha Gupta",
    image:
      "/NehaGupta.jpg",
  content:
            "As a fresher, I wanted to enter the automotive domain but had limited exposure. This course bridged the gap with practical sessions on diagnostics and defect lifecycle management. I cracked my first interview at a Tier-1 automotive supplier and started my career successfully.",
           },


          


];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full lg:w-1/2 space-y-6 relative">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        What Our Students Say
      </h3>

      <div >
        {/* Circular reviewer image */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={testimonials[current].name}
            src={testimonials[current].image}
            alt={testimonials[current].name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-4 border-sky-400 shadow-md"
          />
        </AnimatePresence>

        {/* Testimonial content with big quote */}
        <div className="relative flex-1">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 text-sky-100 text-[6rem] font-serif select-none pointer-events-none -z-10 leading-none"
            style={{ lineHeight: 1 }}
          >
            “
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 text-lg italic leading-relaxed"
            >
              {testimonials[current].content}
              <div className="mt-6 text-sm font-semibold text-sky-600">
                — {testimonials[current].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
