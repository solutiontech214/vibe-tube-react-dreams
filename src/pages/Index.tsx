
import { Play, Youtube, Users, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const featuredVideos = [
    {
      id: 1,
      title: "My Morning Routine 2024",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      duration: "12:34",
      views: "2.1M",
      timeAgo: "2 days ago"
    },
    {
      id: 2,
      title: "Travel Vlog: Tokyo Adventure",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      duration: "18:42",
      views: "856K",
      timeAgo: "1 week ago"
    },
    {
      id: 3,
      title: "Cozy Home Office Setup",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
      duration: "9:15",
      views: "1.3M",
      timeAgo: "3 days ago"
    },
    {
      id: 4,
      title: "Tech Review: Latest Gadgets",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      duration: "15:28",
      views: "743K",
      timeAgo: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                VlogLife
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-red-500 font-medium">Home</a>
              <a href="/videos" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Videos</a>
              <a href="/about" className="text-gray-700 hover:text-red-500 transition-colors font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Contact</a>
            </nav>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Join 2.5M+ Subscribers
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to My
            <span className="block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Vlog Universe
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join me on incredible adventures, daily routines, and behind-the-scenes moments. 
            Creating content that inspires and entertains millions around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Latest Video
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-4 text-lg">
              <Youtube className="w-5 h-5 mr-2" />
              Visit YouTube Channel
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2.5M+</div>
              <div className="text-gray-600">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">150M+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Check out my most recent vlogs and adventures
            </p>
            <a href="/videos">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                View All Videos
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{video.views} views</div>
                    <div>{video.timeAgo}</div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">12K</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">856</span>
                      </div>
                    </div>
                    <Share2 className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss an Adventure
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Subscribe to my channel and hit the bell icon to get notified about new vlogs!
          </p>
          <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">VlogLife</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Creating amazing content and sharing life's adventures with millions of viewers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/videos" className="hover:text-white transition-colors">Videos</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VlogLife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
