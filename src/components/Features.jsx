import React from "react";
import { 
  DollarSign, 
  PieChart, 
  Target, 
  Shield, 
  Smartphone, 
  TrendingUp 
} from "lucide-react";
import PropTypes from "prop-types";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Expense Tracking",
      description: "Automatically categorize and track all your expenses with smart AI-powered recognition."
    },
    {
      icon: PieChart,
      title: "Budget Planning",
      description: "Create custom budgets and get real-time insights into your spending patterns."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set financial goals and track your progress with visual dashboards and milestones."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with 256-bit encryption and multi-factor authentication."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access your finances anywhere with our responsive design and mobile app."
    },
    {
      icon: TrendingUp,
      title: "Investment Insights",
      description: "Get personalized investment recommendations based on your financial profile."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Your Finances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you take control of every aspect of your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of users who have already taken control of their finances with Personance.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {};

export default Features;