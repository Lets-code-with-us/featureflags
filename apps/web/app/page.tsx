"use client";
import { useState } from "react";
import { Play, Flag, ArrowRight, ToggleLeft, Shield } from "lucide-react";

export default function FeatureFlagHero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: <Flag size={24} />,
      title: "Feature Flags",
      description: "Deploy changes safely with phased rollouts",
    },
    {
      id: 2,
      icon: <ToggleLeft size={24} />,
      title: "A/B Testing",
      description: "Make data-driven decisions with confidence",
    },
    {
      id: 3,
      icon: <Shield size={24} />,
      title: "Kill Switches",
      description: "Instantly disable problematic features",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
              <Flag size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FeatureFlag</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Sign Up Free
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Ship Features <span className="text-blue-600">Confidently</span>{" "}
              Every Time
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Modern feature management that gives you control over the entire
              development process. Deploy safely, test with real users, and turn
              features on or off instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center shadow-md hover:shadow-lg">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-blue-300 bg-white hover:bg-blue-50 transition-colors text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center shadow-sm hover:shadow-md">
                <Play size={18} className="mr-2" /> Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-blue-500">feature-flags.js</div>
              </div>
              <pre className="text-gray-800 text-sm overflow-x-auto">
                {`// Feature Flag Configuration
const flags = {
  newCheckout: {
    enabled: true,
    rolloutPercentage: 25,
    targetUsers: ['beta', 'premium'],
    killSwitch: false
  },
  darkMode: {
    enabled: true,
    rolloutPercentage: 100
  },
  aiRecommendations: {
    enabled: false,
    developmentOnly: true
  }
};

// Check if feature is enabled for user
function isFeatureEnabled(featureName, user) {
  // Feature flag logic
  return true;
}`}
              </pre>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    hoveredCard === feature.id
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                  } transition-colors`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
