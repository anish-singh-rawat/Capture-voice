import { FaMicrophone } from 'react-icons/fa';
import './App.css'

function TaskForm({
  inputText,
  setInputText,
  toggleListening
}) {

  return (
    <>
      <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              aria-label="Task input"
            />
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 rounded-lg ${
                 'bg-gray-100 text-gray-600'
              } hover:bg-gray-200 transition-colors`}
              title={ 'Use voice input'}
              aria-label={'Start voice input'}
            >
              <FaMicrophone />
            </button>
          </div>
        </div>
    </>
  )
}

export default TaskForm;
