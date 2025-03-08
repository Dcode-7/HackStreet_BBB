import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircle2,
  Users,
  LineChart,
  Brain,
  Sparkles,
  CheckCircle2,
  Star,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@saksham.com");
  const [password, setPassword] = useState("empowerment2024");
  const [isHovered, setIsHovered] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500/90 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-2 animate-slide-in">
          <CheckCircle2 className="w-5 h-5" />
          <span>Sign in successful!</span>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl animate-gradient"></div>
        <div
          className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      <div className="max-w-3xl w-full bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-500/20 relative animate-glow">
        {/* Decorative elements */}
        <Star className="absolute top-4 left-4 w-6 h-6 text-purple-400/30 animate-shimmer" />
        <Star
          className="absolute bottom-4 right-4 w-6 h-6 text-purple-400/30 animate-shimmer"
          style={{ animationDelay: "-1.5s" }}
        />

        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-3xl opacity-20 -z-10"></div>
          <div className="inline-block relative animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text animate-gradient relative">
              Saksham
              <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-purple-300 animate-shimmer" />
              <Sparkles
                className="absolute -bottom-4 -left-8 w-6 h-6 text-purple-300 animate-shimmer"
                style={{ animationDelay: "-1s" }}
              />
            </h1>
          </div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mb-8 animate-pulse-slow"></div>
          <p className="text-xl md:text-2xl text-purple-200/90 italic font-light transform hover:scale-105 transition-transform duration-300">
            Your journey to empowerment begins with a single step.
          </p>
        </div>

        {/* Quote Section */}
        <div className="mb-16">
          <blockquote className="text-2xl md:text-3xl text-center font-medium text-purple-300 italic mb-8 relative hover:text-purple-200 transition-colors duration-300">
            <span className="absolute -left-4 top-0 text-4xl text-purple-500/50">
              "
            </span>
            The power of finding yourself begins with believing in yourself.
            <span className="absolute -right-4 bottom-0 text-4xl text-purple-500/50">
              "
            </span>
          </blockquote>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Brain, title: "Personalized empowerment plans" },
            { icon: Users, title: "Connect with community" },
            { icon: LineChart, title: "Track your progress" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-xl bg-purple-900/40 hover:bg-purple-800/50 transition-all duration-500 border border-purple-500/20 hover:border-purple-400/30 transform hover:-translate-y-2 hover:scale-105 animate-border-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-16 h-16 text-purple-300 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:text-purple-200" />
              <h3 className="text-xl font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Login Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/5 blur-2xl -z-10"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-purple-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-100 placeholder-purple-400 transition-all duration-300 hover:border-purple-400/50"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-purple-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-100 placeholder-purple-400 transition-all duration-300 hover:border-purple-400/50"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit} 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-500 flex items-center justify-center gap-3 group relative overflow-hidden transform hover:scale-105"
            >
              <UserCircle2 className="w-5 h-5" />
              <span className="font-semibold">Sign In</span>
            </button>
            <div className="text-center mt-6">
              <p className="text-purple-300/70 text-sm space-y-1">
                <span className="block font-medium text-purple-200">
                  Demo Credentials
                </span>
                <span className="block hover:text-purple-200 transition-colors duration-300">
                  Email: demo@saksham.com
                </span>
                <span className="block hover:text-purple-200 transition-colors duration-300">
                  Password: empowerment2024
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
