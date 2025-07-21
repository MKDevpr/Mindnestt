'use client';

interface Tip {
  id: number;
  title: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
}

interface TipCardProps {
  tip: Tip;
}

export default function TipCard({ tip }: TipCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img 
          src={tip.image} 
          alt={tip.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-600">
            {tip.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{tip.title}</h3>
          <span className="text-xs text-gray-500 whitespace-nowrap">{tip.readTime}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{tip.content}</p>
        
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            <span className="text-sm font-medium">Read More</span>
            <i className="ri-arrow-right-line text-sm"></i>
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors cursor-pointer">
              <i className="ri-heart-line text-gray-400 hover:text-red-500"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors cursor-pointer">
              <i className="ri-share-line text-gray-400 hover:text-blue-500"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}