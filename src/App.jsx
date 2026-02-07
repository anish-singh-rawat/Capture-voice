import TaskForm from './TaskForm.jsx'
import './App.css'
import { useTaskManager } from './useTaskManager.js';
import { useSpeechRecognition } from './useSpeechRecognition.js';

function App() {
  const { inputText, setInputText } = useTaskManager();
  const { isListening, toggleListening, transcript } = useSpeechRecognition(setInputText);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Voice to Text (Hindi & English)
        </h1>
        <TaskForm
          inputText={inputText}
          setInputText={setInputText}
          isListening={isListening}
          toggleListening={toggleListening}
          transcript={transcript}
        />
      </div>
    </div>
  )
}

export default App
