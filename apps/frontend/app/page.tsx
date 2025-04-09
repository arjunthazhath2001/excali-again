'use client';

import { 
  Pencil, 
  Share2, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Github,
  Cloud,
  Lock,
  Palette
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight sm:text-7xl md:text-8xl">
              <span className="block">Excalidraw</span>
              <span className="block text-indigo-600 mt-2">Reimagined</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Create beautiful hand-drawn diagrams, wireframes, and architectural designs. 
              Collaborate in real-time with your team, all in your browser.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link 
                href="/signin" 
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                SignIn 
              </Link>
              <Link 
                href="/signup" 
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium border-2 border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to create</h2>
          <p className="text-xl text-gray-600">Powerful features that make drawing a breeze</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Pencil}
            title="Intuitive Drawing"
            description="Natural hand-drawn feel with smooth curves and perfect shapes"
          />
          <FeatureCard 
            icon={Share2}
            title="Real-time Collaboration"
            description="Work together with your team in real-time, see changes instantly"
          />
          <FeatureCard 
            icon={Cloud}
            title="Cloud Storage"
            description="Your drawings are automatically saved and synced across devices"
          />
          <FeatureCard 
            icon={Users}
            title="Team Workspace"
            description="Organize projects and collaborate with your team efficiently"
          />
          <FeatureCard 
            icon={Lock}
            title="Enterprise Security"
            description="Bank-grade encryption and security for your sensitive diagrams"
          />
          <FeatureCard 
            icon={Palette}
            title="Custom Themes"
            description="Personalize your workspace with custom colors and styles"
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="relative lg:flex lg:items-center">
                <div className="relative lg:ml-10">
                  <blockquote className="text-white">
                    <p className="text-xl font-medium sm:text-2xl">
                      "Excalidraw has revolutionized how our team creates and shares technical diagrams. 
                      The intuitive interface and real-time collaboration features have made our design process 10x faster."
                    </p>
                    <footer className="mt-6">
                      <p className="flex items-center">
                        <Image
                          className="rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="User testimonial"
                          width={48}
                          height={48}
                        />
                        <span className="ml-4">
                          <span className="text-white font-semibold">John Doe</span>
                          <span className="text-indigo-100 block">CTO at TechCorp</span>
                        </span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to start drawing?</span>
              <span className="block text-indigo-200">Join thousands of creators today.</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <Link 
                href="/signup" 
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-white font-semibold text-xl">Excalidraw</span>
            </div>
            <div className="flex space-x-6">
              <Link href="https://twitter.com/excalidraw" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://github.com/excalidraw/excalidraw" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-400">&copy; 2025 Excalidraw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}