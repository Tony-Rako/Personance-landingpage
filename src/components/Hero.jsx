import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button.jsx";
import PropTypes from "prop-types";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Take Control of Your{" "}
            <span className="text-blue-600">Personal Finances</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personance helps you track expenses, create budgets, and achieve your financial goals with intelligent insights and easy-to-use tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
              <div className="text-center text-gray-500 mb-4">
                Trusted by over 10,000+ users
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">$2.5M+</div>
                  <div className="text-sm text-gray-600">Money Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">10k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {};

export default Hero;