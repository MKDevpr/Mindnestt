
'use client';

interface MoodSelectorProps {
  selectedMood: string;
  onMoodSelect: (mood: string) => void;
}

export default function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  const moods = [
    { id: 'very-happy', emoji: '😊', label: 'Very Happy', color: 'bg-green-100 border-green-200' },
    { id: 'happy', emoji: '🙂', label: 'Happy', color: 'bg-green-50 border-green-100' },
    { id: 'neutral', emoji: '😐', label: 'Neutral', color: 'bg-gray-100 border-gray-200' },
    { id: 'sad', emoji: '😔', label: 'Sad', color: 'bg-blue-100 border-blue-200' },
    { id: 'very-sad', emoji: '😢', label: 'Very Sad', color: 'bg-blue-200 border-blue-300' },
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-yellow-100 border-yellow-200' },
    { id: 'calm', emoji: '😌', label: 'Calm', color: 'bg-purple-100 border-purple-200' },
    { id: 'stressed', emoji: '😫', label: 'Stressed', color: 'bg-red-100 border-red-200' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">How are you feeling?</h3>
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            className={`p-3 rounded-lg border-2 transition-all text-center cursor-pointer whitespace-nowrap ${
              selectedMood === mood.id
                ? 'border-blue-500 bg-blue-50'
                : `${mood.color} hover:border-blue-300`
            }`}
          >
            <div className="text-2xl mb-1">{mood.emoji}</div>
            <div className="text-sm font-medium text-gray-700">{mood.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
