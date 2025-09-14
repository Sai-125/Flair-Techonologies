import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import PropTypes from "prop-types";

interface Testimonial {
  name: string;
  rating: number;
  content: string;
  image?: string;
  role?: string;
  course?: string;
}

interface TestimonialsSection {
  badge: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
}

interface RatingProps {
  testimonialsSection: TestimonialsSection;
}

const Rating: React.FC<RatingProps> = ({ testimonialsSection }) => {
  return (
    testimonialsSection && (
      <div>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                {testimonialsSection?.badge}
              </Badge>
              <h2
                className="text-4xl font-bold text-gray-900 mb-4"
                dangerouslySetInnerHTML={{ __html: testimonialsSection?.title }}
              />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {testimonialsSection?.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsSection?.testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial?.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial?.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic">
                        "{testimonial?.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial?.image || "/placeholder.svg"}
                          alt={testimonial?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial?.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {testimonial?.course}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Rating;
