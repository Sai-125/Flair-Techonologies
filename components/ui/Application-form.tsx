import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface ApplicationFormSection {
  badge: string;
  title: string;
  features: string[];
  form: {
    title: string;
    description: string;
    fields: Array<{
      placeholder: string;
      type: string;
      grid?: string;
      options?: Array<{ value: string; label: string }>;
    }>;
    submitButton: {
      text: string;
      className?: string;
      icon?: React.ComponentType;
    };
    disclaimer?: string;
  };
}

type ApplicationFormProps = {
  applicationFormSection: ApplicationFormSection;
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  applicationFormSection,
}) => {
  return (
    applicationFormSection && (
      <div>
        <section
          id="application-form"
          className="py-20 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <Badge className="bg-white text-sky-600">
                    {applicationFormSection?.badge}
                  </Badge>
                  <h2 className="text-4xl font-bold leading-tight">
                    {applicationFormSection?.title}
                  </h2>
                  <p className="description">
                    {applicationFormSection?.form?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {applicationFormSection?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-white text-gray-900">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      {applicationFormSection?.form?.title}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {applicationFormSection?.form?.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {applicationFormSection?.form?.fields.map(
                        (field, index) => {
                          if (field?.grid) {
                            return (
                              <Input
                                key={index}
                                placeholder={field?.placeholder}
                                type={field?.type}
                                className={field?.grid}
                              />
                            );
                          }
                          return null;
                        }
                      )}
                    </div>
                    {applicationFormSection?.form?.fields.map(
                      (field, index) => {
                        if (
                          !field.grid &&
                          field.type !== "select" &&
                          field.type !== "textarea"
                        ) {
                          return (
                            <Input
                              key={index}
                              placeholder={field?.placeholder}
                              type={field?.type}
                            />
                          );
                        }
                        if (field.type === "select") {
                          return (
                            <Select key={index}>
                              <SelectTrigger>
                                <SelectValue placeholder={field?.placeholder} />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options?.map((option, optIndex) => (
                                  <SelectItem
                                    key={optIndex}
                                    value={option?.value}
                                  >
                                    {option?.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          );
                        }
                        if (field.type === "textarea") {
                          return (
                            <Textarea
                              key={index}
                              placeholder={field?.placeholder}
                            />
                          );
                        }
                        return null;
                      }
                    )}
                    <Button
                      className={
                        applicationFormSection?.form?.submitButton?.className
                      }
                    >
                      {applicationFormSection?.form?.submitButton?.text}
                      {applicationFormSection?.form?.submitButton?.icon && (
                        <applicationFormSection.form.submitButton.icon />
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      {applicationFormSection?.form?.disclaimer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default ApplicationForm;
