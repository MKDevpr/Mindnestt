'use client';

interface Exercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  inhale: number;
  hold: number;
  exhale: number;
  cycles: number;
}

interface ExerciseSelectorProps {
  exercises: Exercise[];
  selectedExercise: Exercise;
  onSelect: (exercise: Exercise) => void;
  isActive: boolean;
}

export default function ExerciseSelector({ exercises, selectedExercise, onSelect, isActive }: ExerciseSelectorProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Exercise</h3>
      
      <div className="space-y-3">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => !isActive && onSelect(exercise)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedExercise.id === exercise.id
                ? 'border-blue-300 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
            } ${isActive ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-800 text-sm">{exercise.name}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{exercise.description}</p>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{exercise.duration}</span>
              <span>{exercise.cycles} cycles</span>
            </div>
            
            <div className="flex items-center space-x-1 mt-2 text-xs text-gray-400">
              <span>In: {exercise.inhale}s</span>
              <span>•</span>
              <span>Hold: {exercise.hold}s</span>
              <span>•</span>
              <span>Out: {exercise.exhale}s</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <h4 className="font-medium text-blue-800 mb-2 text-sm">Tips for Success</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Find a comfortable seated position</li>
          <li>• Keep your shoulders relaxed</li>
          <li>• Focus on the rhythm, not perfection</li>
          <li>• Stop if you feel dizzy</li>
        </ul>
      </div>
    </div>
  );
}