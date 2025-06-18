
import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop" 
              alt="Sarah Johnson"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-red-500">Sarah</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to my world! I'm a lifestyle vlogger, travel enthusiast, and content creator 
            passionate about sharing authentic moments and inspiring adventures with my amazing community.
          </p>
        </div>
      </section>

      {/* Stats & Info */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span>Started vlogging in 2019</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Based in Los Angeles, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Passionate about lifestyle, travel & wellness</span>
                </div>
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                What started as a simple hobby of documenting my daily life has grown into 
                a thriving community of over 2.5 million subscribers. I love connecting with 
                people from all around the world and sharing the ups and downs of life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">2.5M+</div>
                <div className="text-gray-600">Subscribers</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">150M+</div>
                <div className="text-gray-600">Total Views</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                <div className="text-gray-600">Videos</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
