import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import { Button } from './components/ui/button.jsx';
import { Card } from './components/ui/card.jsx';
import { 
  TrendingUp, 
  PiggyBank, 
  Shield, 
  BarChart3, 
  Target,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Financial Dashboard",
    description: "Get a complete overview of your income, expenses, and cash flow in one place."
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-green-600" />,
    title: "Smart Budgeting",
    description: "Create and track budgets with intelligent insights and spending alerts."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: "Wealth Tracking",
    description: "Monitor your assets, investments, and net worth growth over time."
  },
  {
    icon: <Target className="h-8 w-8 text-orange-600" />,
    title: "Financial Goals",
    description: "Set and achieve your financial objectives with progress tracking."
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Secure & Private",
    description: "Your financial data is encrypted and secure with enterprise-grade protection."
  }
];

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Personance</span>
            </div>
            <Button>Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Take Control of Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {" "}Financial Future
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Personance is your comprehensive personal finance management platform. 
          Track expenses, build budgets, monitor investments, and achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to manage your finances
          </h2>
          <p className="text-lg text-gray-600">
            Powerful tools designed to help you make smarter financial decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to transform your finances?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have taken control of their financial future with Personance.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Financial Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-6 w-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="text-lg font-bold">Personance</span>
          </div>
          <p className="text-gray-400">
            © 2025 Personance. Built with React, Vite, and Tailwind CSS.
          </p>
          <p className="text-gray-400 mt-2">
            Made with passion ❤️ and the intention to elevate the personal finance journey.
          </p>
        </div>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);