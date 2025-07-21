'use client';

import { useState } from 'react';

export default function ArticlesList() {
  const [selectedTopic, setSelectedTopic] = useState('all');

  const topics = [
    { id: 'all', label: 'All Articles' },
    { id: 'anxiety', label: 'Anxiety' },
    { id: 'depression', label: 'Depression' },
    { id: 'stress', label: 'Stress' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'workplace', label: 'Workplace' },
    { id: 'self-care', label: 'Self-Care' },
  ];

  const articles = [
    {
      id: 1,
      title: '10 Evidence-Based Techniques for Managing Anxiety',
      author: 'Dr. Sarah Johnson',
      readTime: '12 min',
      topic: 'anxiety',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20woman%20practicing%20deep%20breathing%20exercises%20in%20a%20calm%20natural%20setting%20with%20soft%20lighting%20and%20serene%20atmosphere%2C%20mindfulness%20meditation%20concept%20with%20beautiful%20nature%20background&width=400&height=250&seq=anxiety-article-1&orientation=landscape',
      excerpt: 'Discover proven methods to reduce anxiety and regain control of your thoughts and emotions.',
      publishDate: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Depression: Signs, Symptoms, and Treatment',
      author: 'Dr. Michael Chen',
      readTime: '18 min',
      topic: 'depression',
      image: 'https://readdy.ai/api/search-image?query=hopeful%20sunrise%20breaking%20through%20clouds%20over%20calm%20water%20representing%20recovery%20from%20depression%2C%20warm%20golden%20light%20symbolizing%20healing%20and%20mental%20health%20recovery&width=400&height=250&seq=depression-article-2&orientation=landscape',
      excerpt: 'A comprehensive guide to recognizing depression and finding effective treatment options.',
      publishDate: '2024-01-12',
      featured: true
    },
    {
      id: 3,
      title: 'Stress Management in the Modern Workplace',
      author: 'Lisa Rodriguez, LCSW',
      readTime: '10 min',
      topic: 'workplace',
      image: 'https://readdy.ai/api/search-image?query=organized%20modern%20workspace%20with%20plants%20and%20natural%20light%20creating%20a%20calm%20productive%20environment%2C%20stress-free%20office%20setting%20with%20minimalist%20design%20promoting%20mental%20wellbeing&width=400&height=250&seq=workplace-stress-3&orientation=landscape',
      excerpt: 'Learn practical strategies to manage workplace stress and maintain work-life balance.',
      publishDate: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'Building Healthy Relationships: Communication Skills',
      author: 'Dr. Amanda Foster',
      readTime: '15 min',
      topic: 'relationships',
      image: 'https://readdy.ai/api/search-image?query=two%20people%20having%20a%20positive%20conversation%20in%20a%20comfortable%20setting%20with%20warm%20lighting%2C%20healthy%20communication%20and%20relationship%20building%20concept%20with%20peaceful%20atmosphere&width=400&height=250&seq=relationships-article-4&orientation=landscape',
      excerpt: 'Essential communication techniques for stronger, healthier relationships.',
      publishDate: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'The Science of Self-Care: Why It Matters',
      author: 'Dr. James Thompson',
      readTime: '8 min',
      topic: 'self-care',
      image: 'https://readdy.ai/api/search-image?query=person%20enjoying%20peaceful%20self-care%20activities%20in%20a%20serene%20spa-like%20environment%20with%20candles%20and%20natural%20elements%2C%20wellness%20and%20relaxation%20concept%20with%20soft%20calming%20colors&width=400&height=250&seq=self-care-article-5&orientation=landscape',
      excerpt: 'Explore the research behind self-care and how to make it a sustainable practice.',
      publishDate: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Mindfulness for Beginners: Getting Started',
      author: 'Maria Santos, MFT',
      readTime: '12 min',
      topic: 'stress',
      image: 'https://readdy.ai/api/search-image?query=person%20meditating%20in%20peaceful%20natural%20setting%20with%20soft%20morning%20light%2C%20beginner%20mindfulness%20practice%20in%20beautiful%20serene%20environment%20with%20zen-like%20atmosphere&width=400&height=250&seq=mindfulness-article-6&orientation=landscape',
      excerpt: 'A practical introduction to mindfulness practice and its mental health benefits.',
      publishDate: '2024-01-03',
      featured: false
    },
    {
      id: 7,
      title: 'Coping with Social Anxiety: Real-World Strategies',
      author: 'Dr. Robert Kim',
      readTime: '14 min',
      topic: 'anxiety',
      image: 'https://readdy.ai/api/search-image?query=confident%20person%20in%20social%20setting%20with%20warm%20supportive%20atmosphere%2C%20overcoming%20social%20anxiety%20with%20positive%20social%20interactions%20in%20comfortable%20environment&width=400&height=250&seq=social-anxiety-7&orientation=landscape',
      excerpt: 'Practical techniques to manage social anxiety and build confidence in social situations.',
      publishDate: '2024-01-01',
      featured: false
    },
    {
      id: 8,
      title: 'Sleep and Mental Health: The Connection',
      author: 'Dr. Emily Watson',
      readTime: '11 min',
      topic: 'self-care',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20soft%20lighting%20and%20comfortable%20bedding%20promoting%20healthy%20sleep%2C%20mental%20health%20and%20sleep%20hygiene%20concept%20with%20calming%20nighttime%20atmosphere&width=400&height=250&seq=sleep-mental-health-8&orientation=landscape',
      excerpt: 'Understanding how sleep affects mental health and tips for better sleep hygiene.',
      publishDate: '2023-12-28',
      featured: false
    },
  ];

  const filteredArticles = selectedTopic === 'all' 
    ? articles 
    : articles.filter(article => article.topic === selectedTopic);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Articles & Guides</h2>
        <p className="text-gray-600 mb-6">
          Expert insights and practical advice from mental health professionals
        </p>
        
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedTopic === topic.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {selectedTopic === 'all' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {article.topic}
                    </span>
                    <span className="text-orange-500 text-sm font-medium">Featured</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {selectedTopic === 'all' ? 'All Articles' : `${topics.find(t => t.id === selectedTopic)?.label} Articles`}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-40 object-cover object-top"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                    {article.topic}
                  </span>
                  {article.featured && (
                    <span className="text-orange-500 text-xs font-medium">Featured</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="truncate">{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}