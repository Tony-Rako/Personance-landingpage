import React from "react";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import PropTypes from "prop-types";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Users"
    },
    {
      icon: Award,
      number: "5 Stars",
      label: "App Store Rating"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Customer Support"
    }
  ];

  const benefits = [
    "No hidden fees or subscription traps",
    "Bank-level security and encryption",
    "Intuitive interface designed for everyone",
    "Real-time sync across all devices",
    "Comprehensive financial reporting",
    "Expert financial advice and insights"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Personance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe that everyone deserves access to powerful financial tools. 
              That's why we've built Personance to be simple, secure, and effective 
              for people at every stage of their financial journey.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Learn More About Our Mission
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2023, Personance was born from the simple idea that managing 
              your finances shouldn't be complicated. Our team of financial experts 
              and technology professionals came together to create a platform that 
              makes financial wellness accessible to everyone, regardless of their 
              background or experience level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;