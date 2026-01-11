"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Globe,
  Award,
  Code,
  Building,
  Server,
  Smartphone,
  Luggage,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Slide = {
  title: string;
  subtitle: string;
  icon: LucideIcon | null;
  content: React.ReactNode;
};

const InterviewPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Grüezi, Sydney!",
      subtitle: "Thanks for the opportunity",
      icon: null,
      content: (
        <div className="space-y-5">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
              Tiago Salles
            </div>
            <p className="text-sm sm:text-lg text-gray-600 max-w-xl mx-auto">
              Software Engineer • Brazilian
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-8">
            <div className="bg-orange-50 p-3 sm:p-6 rounded-lg text-center">
              <Luggage className="w-7 h-7 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-orange-600" />
              <div className="text-xl sm:text-3xl font-bold text-orange-600">
                5+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Years of Experience
              </div>
            </div>
            <div className="bg-blue-50 p-3 sm:p-6 rounded-lg text-center">
              <Code className="w-7 h-7 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
              <div className="text-xl sm:text-3xl font-bold text-blue-600">
                Multi-Stack
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Python C# Dart JS
              </div>
            </div>
            <div className="bg-purple-50 p-3 sm:p-6 rounded-lg text-center">
              <Users className="w-7 h-7 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-purple-600" />
              <div className="text-xl sm:text-3xl font-bold text-purple-600">
                1.5M+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Users monthly impacted
              </div>
            </div>
            <div className="bg-green-50 p-3 sm:p-6 rounded-lg text-center">
              <Globe className="w-7 h-7 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-green-600" />
              <div className="text-xl sm:text-3xl font-bold text-green-600">
                Open source
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                open-source collaboration
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-4 sm:px-6 sm:py-6 rounded-xl text-center mt-4 sm:mt-8">
            <p className="text-sm sm:text-xl font-semibold">
              Startups to National Platforms | Mobile to Backend | Solo Developer
              to Technical Lead
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Transdata",
      subtitle: "Mobile Engineer Sep 2021 - Dec 2021",
      icon: Smartphone,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-4 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              Public Transport Solutions
            </h3>
            <p className="text-xs sm:text-lg opacity-90">
              Mobile ticketing Architecture transformation
            </p>
          </div>

          <div className="bg-white border-2 border-indigo-200 p-4 sm:p-5 rounded-lg">
            <h4 className="font-bold text-base sm:text-xl mb-2 sm:mb-3 text-indigo-700">
              Atlas Mob Public Transport Ticketing
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-indigo-600 mb-2 text-xs sm:text-sm">
                  Company Context
                </h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>Medium company with public transport hardware</li>
                  <li>Major software architecture transformation</li>
                  <li>Challenge Mobile app plus hardware integration</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-indigo-600 mb-2 text-xs sm:text-sm">
                  My Contributions
                </h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>Biometric authentication Mobile security features</li>
                  <li>Forms and UI enhancements</li>
                  <li>Bug fixes and stability improvements</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 p-3 rounded-lg">
              <div className="flex flex-wrap gap-1">
                {["Flutter", "Dart", "Biometric Auth", "Mobile Forms"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg border border-indigo-200">
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-blue-800">
              <div>
                <div className="text-xl mb-1">📱</div>
                <strong>Mobile Development</strong>
              </div>
              <div>
                <div className="text-xl mb-1">1️⃣</div>
                <strong>First Mobile Experience</strong>
              </div>
              <div>
                <div className="text-xl mb-1">📈</div>
                <strong>During Change</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Houseasy",
      subtitle: "Mobile Engineer Mar 2022 - Dec 2022",
      icon: Smartphone,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              Home Automation Startup
            </h3>
            <p className="text-xs sm:text-lg opacity-90">
              High-pressure Hardware integration Fast decisions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-green-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-green-700">
                Houseasy App
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Maintained production plus built V2 from scratch</li>
                <li>Hardware Wi-Fi and Bluetooth integration</li>
                <li>Combined mobile best practices with UI UX</li>
                <li>Real-world connectivity constraints</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Flutter", "Dart", "Firebase", "Wi-Fi", "Bluetooth"].map(
                  (t) => (
                    <span
                      key={t}
                      className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white border-2 border-blue-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-blue-700">
                Houseasy ERP
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>B2C to B2B Business logic transformation</li>
                <li>Installation management workflows</li>
                <li>Customer onboarding and tracking</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Flutter Web", "Firebase", "Azure DevOps"].map((t) => (
                  <span
                    key={t}
                    className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-purple-200 p-3 rounded-lg sm:col-span-2">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-purple-700">
                Houseasy Technician App
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>Architecture Key contributor to foundations</li>
                  <li>Field usage focus real operational needs</li>
                </ul>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>Production-ready delivery</li>
                  <li>Technician device installation support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg border border-green-200">
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-green-800">
              <div>
                <div className="text-xl mb-1">⚡</div>
                <strong>Fast Decisions</strong>
              </div>
              <div>
                <div className="text-xl mb-1">📱</div>
                <strong>Mobile Architecture</strong>
              </div>
              <div>
                <div className="text-xl mb-1">🔌</div>
                <strong>Hardware and Software</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Quantico Solutions",
      subtitle: "Software Engineer Consulting Dec 2022 - Apr 2024",
      icon: Server,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              Consulting Across Multiple Domains
            </h3>
            <p className="text-xs sm:text-lg opacity-90">
              4 projects Rapid adaptation Client-facing ownership
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-blue-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-blue-700">
                Monitur University of Algarve
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Sole backend developer Built from scratch</li>
                <li>Analytics platform Questionnaires Excel APIs</li>
                <li>Direct stakeholder requirements definition</li>
                <li>On-site delivery and presentations</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Python", "Django", "C# ASP.NET", "MySQL"].map((t) => (
                  <span
                    key={t}
                    className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-green-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-green-700">
                NAU Financial Manager
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Complex logic Multi-org revenue splitting</li>
                <li>Strong collaboration trust building</li>
                <li>Direct hire offer after company instability</li>
                <li>Enabled relocation to Portugal</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Python", "Django", "MySQL", "REST APIs"].map((t) => (
                  <span
                    key={t}
                    className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-purple-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-purple-700">
                ASF Statistics
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Regulated Insurance authority ASF</li>
                <li>Non-open-source high expectations</li>
                <li>Extended features with constraints</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Vue.js", "C# .NET", "PostgreSQL", "MySQL", "SQLServer"].map((t) => (
                  <span
                    key={t}
                    className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-orange-700">
                Episteme
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Double challenge C# .NET plus Spanish</li>
                <li>Spanish-speaking team collaboration</li>
                <li>Extended 4-month freelance continuation</li>
                <li>First opportunity to work with Angular</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {["C# .NET", "PostgreSQL", "Angular", "Spanish"].map((t) => (
                  <span
                    key={t}
                    className="bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-purple-800">
              <div>
                <div className="text-xl mb-1">🎯</div>
                <strong>Rapid Adaptation</strong>
              </div>
              <div>
                <div className="text-xl mb-1">🤝</div>
                <strong>Trust Building</strong>
              </div>
              <div>
                <div className="text-xl mb-1">💼</div>
                <strong>Client-Facing</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "FCT - FCCN",
      subtitle: "Software Engineer Sep 2024 - Present",
      icon: Building,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              Portugal National Learning Platform
            </h3>
            <p className="text-xs sm:text-lg opacity-90">
              Foundation for Science and Technology - Ministry of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-blue-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-blue-700">
                Richie Open Source MOOC
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Major architectural refactor Multilingual site generation</li>
                <li>Multi-database support MySQL PostgreSQL dynamic switching</li>
                <li>Django monolith React components in templates</li>
                <li>
                  Production{" "}
                  <a href="https://nau.edu.pt" className="underline">
                    nau.edu.pt
                  </a>{" "}
                  <a href="https://ap.nau.edu.pt" className="underline">
                    ap.nau.edu.pt
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-purple-700">
                NAU Webservice
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Custom Open edX module Certificates enrollments APIs</li>
                <li>SSO Secure partner platform integration</li>
                <li>Technical lead Requirements stakeholders</li>
                <li>Scale 500K certs year 1.5M enrollments year</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-green-700">
                AP Platform Public Administration
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Led production release nationwide platform</li>
                <li>Career impact Certificates influence progression</li>
                <li>Partner INA Instituto Nacional Administracao</li>
                <li>Primary engineer for maintenance and evolution</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 p-3 rounded-lg">
              <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-orange-700">
                NAU Analytics
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Technical coordinator FCT service provider</li>
                <li>GitOps Argo CD deployment workflows</li>
                <li>Infrastructure VMs storage access controls</li>
                <li>Managed permissions secure collaboration</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex flex-wrap gap-1">
              {[
                "Python",
                "Django",
                "Flask",
                "React",
                "MySQL",
                "PostgreSQL",
                "Open edX",
                "Redis",
                "AWS S3",
                "Docker",
                "Kubernetes",
                "GitHub Actions",
                "Argo CD",
                "Ansible",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Core Competencies",
      subtitle: "What Drives Results",
      icon: Award,
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
              Patterns Across All Roles
            </h3>
            <p className="text-xs sm:text-base text-gray-600">
              Ownership Scale Adaptability Trust
            </p>
          </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-bold mb-2">
                Rapid Adaptation
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>Mastered C# while delivering production code</li>
                <li>Learned Spanish for team collaboration</li>
                <li>Consulting 4 projects 4 different stacks</li>
                <li>Startup to Consulting to Government</li>
                <li>Backend to Mobile to Platform Engineering</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-bold mb-2">
                Leadership Ownership
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>Technical owner of national platform AP</li>
                <li>Led partner integrations stakeholders</li>
                <li>Sole backend developer on projects</li>
                <li>Defined architectures processes</li>
                <li>Managed expectations deadlines</li>
              </ul>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-bold mb-2">
                Relevant Technical Challenges
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>Platform engineering at national scale</li>
                <li>High-volume systems 1.5M records per year</li>
                <li>Complex integrations and SSO</li>
                <li>Multi-stack Python C# Dart JavaScript</li>
                <li>Infrastructure Kubernetes Argo CD Docker</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-bold mb-2">
                Good Relationships
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>Built trust leading to direct hiring offers</li>
                <li>Extended contracts</li>
                <li>Regulatory compliance public sector</li>
                <li>On-site deliveries stakeholder management</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 sm:p-6 rounded-xl text-center">
            <p className="text-sm sm:text-xl font-bold mb-1 sm:mb-2">
              Taking high responsibility
            </p>
            <p className="text-xs sm:text-base opacity-90">
              accepting challenges and communicating effectively to deliver results
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Thank You, Sydney!",
      subtitle: "I hope to reach your expectations",
      icon: null,
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-5 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
              Tiago Salles
            </h2>
            <p className="text-base sm:text-2xl text-gray-600 mb-4 sm:mb-8">
              Software Engineer
            </p>

            <div className="space-y-1 sm:space-y-3 text-sm sm:text-lg text-gray-700">
              <div>tiagosalles20@gmail.com</div>
              <div>+351 917 005 635</div>
              <div><a href="https://linkedin.com/in/tiagosalles-tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/tiagosalles-tech</a></div>
              <div><a href="https://github.com/Tiago-Salles" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/Tiago-Salles</a></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 mt-4 sm:mt-10 w-full max-w-3xl">
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-lg">
              <Luggage className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-orange-600" />
              <div className="font-bold text-orange-600 text-sm sm:text-base">
                5+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Years of Experience
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
              <Code className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-blue-600" />
              <div className="font-bold text-blue-600 text-sm sm:text-base">
                Multi-Stack
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Python C# Dart JavaScript
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-lg">
              <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-purple-600" />
              <div className="font-bold text-purple-600 text-sm sm:text-base">
                High Scale
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                1.5M users served
              </div>
            </div>
          </div>

          <div className="text-center mt-2 sm:mt-8 px-4">
            <p className="text-sm sm:text-xl text-gray-600">
              Ready to be your next <a href="https://www.jahnelgroup.com/apply.html?gh_jid=5001012007" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><b>Senior Software Engineer (Python/Django)</b></a>!
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-4 sm:px-6 sm:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl px-3 py-4 sm:px-6 sm:py-8 md:px-12 md:py-12 min-h-0 sm:min-h-[520px] md:min-h-[600px] flex flex-col">
          <div className="mb-2 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-2 sm:pb-4">
            <div className="flex items-center gap-3">
              {CurrentIcon && (
                <CurrentIcon className="w-7 h-7 sm:w-10 sm:h-10 text-blue-600" />
              )}
              <div>
                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xs sm:text-base md:text-lg text-gray-500">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium self-end sm:self-auto">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="mt-4 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700 text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Previous
          </button>

          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-600 w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-all text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPresentation;
