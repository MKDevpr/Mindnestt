
'use client';

interface PromptCardsProps {
  selectedPrompt: string;
  onPromptSelect: (prompt: string) => void;
}

export default function PromptCards({ selectedPrompt, onPromptSelect }: PromptCardsProps) {
  const prompts = [
    {
      category: 'Gratitude',
      icon: 'ri-heart-line',
      color: 'from-pink-400 to-rose-400',
      questions: [
        'What are three things you\'re grateful for today?',
        'Who made a positive impact on your day?',
        'What small moment brought you joy today?'
      ]
    },
    {
      category: 'Reflection',
      icon: 'ri-lightbulb-line',
      color: 'from-purple-400 to-indigo-400',
      questions: [
        'What did you learn about yourself today?',
        'How did you handle a challenging situation?',
        'What would you do differently if you could repeat today?'
      ]
    },
    {
      category: 'Growth',
      icon: 'ri-plant-line',
      color: 'from-green-400 to-emerald-400',
      questions: [
        'What progress did you make toward your goals?',
        'How did you step outside your comfort zone?',
        'What strength did you discover in yourself today?'
      ]
    },
    {
      category: 'Mindfulness',
      icon: 'ri-leaf-line',
      color: 'from-teal-400 to-cyan-400',
      questions: [
        'What emotions are you experiencing right now?',
        'How is your body feeling at this moment?',
        'What thoughts keep coming to mind today?'
      ]
    }
  ];

  const getRandomPrompt = () => {
    const allQuestions = prompts.flatMap(p => p.questions);
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[randomIndex];
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Writing Prompts</h3>
        <button
          onClick={() => onPromptSelect(getRandomPrompt())}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <i className="ri-refresh-line"></i>
        </button>
      </div>

      <div className="space-y-4">
        {prompts.map((prompt) => (
          <div key={prompt.category} className="space-y-2">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${prompt.color} text-white`}>
              <div className="flex items-center space-x-2 mb-2">
                <i className={`${prompt.icon} text-lg`}></i>
                <span className="font-medium">{prompt.category}</span>
              </div>
            </div>
            <div className="space-y-1">
              {prompt.questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => onPromptSelect(question)}
                  className={`w-full text-left p-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedPrompt === question
                      ? 'bg-blue-100 border border-blue-200 text-blue-700'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
