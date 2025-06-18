
import Navigation from "@/components/Navigation";
import { Play, Heart, MessageCircle, Share2, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Lifestyle", "Travel", "Tech", "Daily Vlogs"];
  
  const videos = [
    {
      id: 1,
      title: "My Morning Routine 2024",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      duration: "12:34",
      views: "2.1M",
      timeAgo: "2 days ago",
      category: "Lifestyle"
    },
    {
      id: 2,
      title: "Travel Vlog: Tokyo Adventure",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      duration: "18:42",
      views: "856K",
      timeAgo: "1 week ago",
      category: "Travel"
    },
    {
      id: 3,
      title: "Cozy Home Office Setup",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
      duration: "9:15",
      views: "1.3M",
      timeAgo: "3 days ago",
      category: "Lifestyle"
    },
    {
      id: 4,
      title: "Tech Review: Latest Gadgets",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      duration: "15:28",
      views: "743K",
      timeAgo: "5 days ago",
      category: "Tech"
    },
    {
      id: 5,
      title: "Day in My Life - Weekend Edition",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      duration: "22:15",
      views: "1.8M",
      timeAgo: "1 week ago",
      category: "Daily Vlogs"
    },
    {
      id: 6,
      title: "Paris Travel Guide",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      duration: "16:30",
      views: "920K",
      timeAgo: "2 weeks ago",
      category: "Travel"
    }
  ];

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my complete collection of vlogs, tutorials, and adventures
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
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
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {video.category}
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
    </div>
  );
};

export default Videos;
