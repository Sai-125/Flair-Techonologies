// components/ExpertsCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const experts = [
  {
    image:
      "/hcl.png", // Place these images in public/experts/
  },
  {
    
    image:
      "/capgemini.png",
  },
  {
   
    image:
      "/virtusa.jpg",
  },
  {
   
    image:
      "/wipro.png",
  },
  {
    
    image:
      "/tcs.png", // Place these images in public/experts/
  },
  {
    
    image:
      "/HSBC-logo.jpg",
  },
  {
    
    image:
      "/acce.png",
  },
  {
   
    image:
      "/cts.png",
  },
  {
   
    image:
      "/oracle.png",
  },
  {
   
    image:
      "/sap.png",
  },
  {
   
    image:
      "/Microsoft.jpg",
  },
  {
    
    image:
      "/infosys.png",
  },
  {
   
    image:
      "/Deloitte.jpg",
  },
  {
   
    image:
      "/LTIMindtree.jpg",
  },
  {
   
    image:
      "/google.png",
  },
  {
   
    image:
      "/TCM.png",
  },
  {
   
    image:
      "/yahoo.jpg",
  },
  {
    
    image:
      "/Cisco.png",
  },
  {
   
    image:
      "/CGI.jpeg",
  },
  {
   
    image:
      "/Juniper.jpg",
  },
  {
   
    image:
      "/netapp.png",
  },
  {
   
    image:
      "/Dell.png",
  },
  {
    
    image:
      "/KPMG.png",
  },
  {
   
    image:
      "/EY.png",
  },
  {
   
    image:
      "/HP.png",
  },
  {
   
    image:
      "/S3X-logo.png",
  },
  {
   
    image:
      "/syn.png",
  },
{
    
    image:
      "/Mphasis.jpg",
  },
  {
   
    image:
      "/ibm.png",
  },
  {
   
    image:
      "/eclerx.png",
  },
  {
   
    image:
      "/adp.png",
  },
  {
   
    image:
      "/ITC_Infotech.jpg",
  },

  {
    
    image:
      "/3i.png",
  },
  {
   
    image:
      "/ntt.png",
  },
  {
   
    image:
      "/cdac.png",
  },
  {
   
    image:
      "/Coforge.png",
  },
  {
   
    image:
      "/collab.jpg",
  },

  {
    
    image:
      "/dxc.png",
  },
  {
   
    image:
      "/cyient.jpg",
  },
  {
   
    image:
      "/Honeywell.jpg",
  },
  {
   
    image:
      "/Microland.jpg",
  },
  {
   
    image:
      "/presis.jpeg",
  },


  {
    
    image:
      "/Samsung.png",
  },
  {
   
    image:
      "/Sasken.jpg",
  },
  {
   
    image:
      "/sonata.png",
  },
  {
   
    image:
      "/WNS.jpg",
  },
  {
   
    image:
      "/Zensar.png",
  },


];

export function ExpertsCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Esteemed  <span className="text-sky-600">Clients</span>
        </h2>
        <p>Some of the Companies we've helped recurit excellent applicants over the years.</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          // pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full shadow-xl overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.skill}</p>
                {/* <div className="text-yellow-500 mt-2 text-sm">★★★★★</div> */}
                <p className="text-sm text-gray-500 mt-1">
                  {expert.experience}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
