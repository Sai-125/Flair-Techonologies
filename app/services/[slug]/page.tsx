"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ConsultingAdditionalInfo,
  OutsourcingAdditionalInfo,
  servicesData,
  TrainingAdditionalInfo,
} from "@/app/constant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AboutPage from "@/app/about/page";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="heading">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <section className="background text-white py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-white text-sky-600">
              ✈️ Professional Services
            </Badge>
            <h1 className="heading">{service.title}</h1>
            <p className="description">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {service.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 rounded-full bg-green-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
            >
              <a href="/contact"> Contact Us</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="rounded-2xl shadow-2xl h-[350px] w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 text-xl">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {params.slug === "it-training" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Training
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Training Methodology
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .methodology
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality Standards
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .qualityStandards
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Courses Offered
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as TrainingAdditionalInfo
                  ).coursesOffered.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .innovation
                  }
                </p>
                <p className="text-gray-700">
                  {(service.additionalInfo as TrainingAdditionalInfo).contact}
                </p>
              </div>
            )}
            {params.slug === "it-consulting" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Consulting
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .benefits
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Our Consulting Portfolio
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as ConsultingAdditionalInfo
                  ).portfolio.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Permanent Hire Services
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .permanentHire
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Contract Staffing
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .contractStaffing
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Screening Process
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .screening
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Temporary Staffing
                </h3>
                <p className="text-gray-700">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .temporaryStaffing
                  }
                </p>
              </div>
            )}
            {params.slug === "it-outsourcing" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Outsourcing
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Services Offered
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as OutsourcingAdditionalInfo
                  ).services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Key Differentiators
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.totalOutsourcing
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.globalDelivery
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.flexibleDelivery
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .businessGrowth
                  }
                </p>
                <p className="text-gray-700">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .recruitingSupport
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-600 flex items-center gap-2">
                    <servicesData.missionVisionSection.mission.icon className="h-6 w-6" />
                    {servicesData.missionVisionSection.mission.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {servicesData.missionVisionSection.mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                    <servicesData.missionVisionSection.vision.icon className="h-6 w-6" />
                    {servicesData.missionVisionSection?.vision.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {servicesData.missionVisionSection.vision.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">
              {servicesData.uniqueFeaturesSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{
                __html: servicesData.uniqueFeaturesSection.title,
              }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {servicesData.uniqueFeaturesSection.description}
            </p>
          </motion.div>

          <div className="space-y-12">
            {servicesData.uniqueFeaturesSection.features.map(
              (feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white">
                            <feature.icon className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                            {feature.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-4 rounded-lg border-l-4 border-sky-500">
                            <p className="text-gray-800 font-medium italic">
                              {feature.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 background text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {servicesData.ctaSection.title}
            </h2>
            <p className="description mb-8 max-w-2xl mx-auto">
              {servicesData.ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {servicesData.ctaSection?.buttons?.map((button, index) => (
                <Link key={index} href={button.href}>
                  <Button
                    size="lg"
                    variant={"outline"}
                    className={button.className}
                  >
                    {button.text}{" "}
                    {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
