import React, { useState } from "react";
import "./Accordion.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  type AccordionItem = {
    id: number;
    title: string;
    content1: string;
    content2?: string;
  };

  const items: AccordionItem[] = [
    {
      id: 1,
      title: "What courses are offered by Flair Technologies?",
      content1:
        "Flair Technologies offers diverse courses across Development, Analytics, Cloud, Networking, Finance, AI & ML, and Testing. Learners can master tools and technologies like Python Full-Stack, Data Analytics, Power BI, AWS DevOps, and Azure DevOps etc. Each program is designed to build industry-ready skills for a successful tech career.",
    },
    {
      id: 2,
      title: "Are the courses at Flair Technologies suitable for beginners?",
      content1:
        "Yes, Flair Technologies courses are designed to cater to all levels of learners, from beginners to advanced professionals. They provide foundational courses for those new to the field as well as advanced courses for experienced professionals looking to upskill.",
    },
    {
      id: 3,
      title:
        "What is the duration of the courses offered by Flair Technologies?",
      content1:
        "The duration of courses varies depending on the specific course and the level of depth it covers. Typically, courses can range from 4 weeks to 4 months. Some advanced or specialized courses may take longer. It’s best to check the specific course details for accurate duration information.",
    },
    {
      id: 4,
      title: "Does Flair Technologies offer any job placement assistance?",
      content1:
        "Yes, Flair Technologies provides job placement assistance to its students. We have tie-ups with various companies and conduct regular placement drives to help students secure jobs in the software industry.",
    },
    {
      id: 5,
      title:
        "What are the prerequisites for enrolling in a course at Flair Technologies?",
      content1:
        "There are no strict prerequisites for most courses. However, a basic understanding of programming concepts and software development can be beneficial. Some advanced courses may require prior knowledge in specific areas, which is described under eligible learners Section.",
    },
    {
      id: 6,
      title:
        "Are there any real-time projects we will work on during the course?",
      content1:
        "Yes, we cover two-five complete real-time projects during the course. The course is project-oriented, ensuring you gain practical, hands-on experience working on real projects.",
    },
  ];

  return (
    <div style={{ padding: "64px" }}>
      <div className="" style={{ marginBottom: "15px", padding: "" }}>
        <div className="hm_accor">
          <div className="Accor_head">
            <h6>FREQUENTLY ASKED QUESTIONS</h6>
            <h1>MOSTLY ASKED</h1>
          </div>
        </div>
      </div>

      {items.map((item, index) => (
        <div className="accordion" key={item.title}>
          <div className="accor_ques" onClick={() => handleClick(index)}>
            <h1>
              <span className="question d-flex align-items-center gap-2">
                <i className="fa-sharp fa-solid fa-horse-head"></i> {item.title}
              </span>
              <span className="plus">
                {index !== activeIndex && <IoIosArrowDown />}
                {index === activeIndex && <IoIosArrowUp />}
              </span>
            </h1>
          </div>
          <div className="accor_ans">
            {index === activeIndex && (
              <div className="ans_open">
                <p>{item.content1}</p>{" "}
                {item?.content2 ? <p>{item?.content2}</p> : <div></div>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion2;
