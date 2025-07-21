'use client';

interface TipCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function TipCategories({ selectedCategory, onCategoryChange }: TipCategoriesProps) {
  const categories = [
    { id: 'All', label: 'All Tips', icon: 'ri-apps-line' },
    { id: 'Breathing', label: 'Breathing', icon: 'ri-lungs-line' },
    { id: 'Mindfulness', label: 'Mindfulness', icon: 'ri-heart-line' },
    { id: 'Relaxation', label: 'Relaxation', icon: 'ri-leaf-line' },
    { id: 'Exercise', label: 'Exercise', icon: 'ri-run-line' },
    { id: 'Sleep', label: 'Sleep', icon: 'ri-moon-line' },
    { id: 'Nutrition', label: 'Nutrition', icon: 'ri-apple-line' },
    { id: 'Lifestyle', label: 'Lifestyle', icon: 'ri-sun-line' }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-2 border-transparent shadow-sm'
            }`}
          >
            <i className={`${category.icon} text-sm`}></i>
            <span className="font-medium text-sm">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}