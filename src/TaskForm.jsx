import { FaMicrophone, FaStop } from 'react-icons/fa';
import './App.css'

function TaskForm({
  inputText,
  setInputText,
  isListening,
  toggleListening,
  transcript
}) {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col space-y-4">
        {/* Voice Input Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={toggleListening}
            className={`p-6 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            title={isListening ? 'Stop listening' : 'Start voice input'}
            aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
          >
            {isListening ? <FaStop size={32} /> : <FaMicrophone size={32} />}
          </button>
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          {isListening ? (
            <p className="text-red-500 font-semibold animate-pulse">
              🎤 Listening... (Speak in Hindi or English)
            </p>
          ) : (
            <p className="text-gray-500">
              Click the microphone to start speaking
            </p>
          )}
        </div>

        {/* Transcribed Text Display */}
        <div className="min-h-[120px] p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
          <p className="text-sm text-gray-500 mb-2 font-semibold">Transcribed Text:</p>
          <p className="text-lg text-gray-800 whitespace-pre-wrap">
            {inputText || transcript || 'Your speech will appear here...'}
          </p>
        </div>

        {/* Manual Text Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Or type here manually..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            aria-label="Text input"
          />
          <button
            type="button"
            onClick={() => setInputText('')}
            className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            title="Clear text"
          >
            Clear
          </button>
        </div>

        {/* Instructions */}
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          <p className="font-semibold mb-1">💡 Tips:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Click the microphone and speak in Hindi or English</li>
            <li>Your speech will be transcribed in real-time</li>
            <li>Click stop when you're done speaking</li>
            <li>You can also type manually in the text box</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TaskForm;
