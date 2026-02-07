import { useCallback, useState } from 'react'
import TaskForm from './TaskForm.jsx'
import './App.css'
import { useTaskManager } from './useTaskManager.js';
import { useSpeechRecognition } from './useSpeechRecognition.js';

function App() {
  const { inputText, setInputText, tasks, setTasks, setFeedback } = useTaskManager();

    const handleVoiceCommand = useCallback((command) => {
    const lowerCommand = command.toLowerCase().trim();
    
    // Add command
    const addMatch = lowerCommand.match(/^(add|create|new)\s+(.+)/i);
    if (addMatch) {
      const taskText = addMatch[2].trim();
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setFeedback(`Added task: ${taskText}`);
      return true;
    }
    
    // Toggle command
    const toggleMatch = lowerCommand.match(/^(complete|toggle|done|finish)\s+(.+)/i);
    if (toggleMatch) {
      const taskText = toggleMatch[2].trim();
      const task = tasks?.find(t => 
        t.text.toLowerCase().includes(taskText.toLowerCase())
      );
      if (task) {
        handleToggleTask(task.id);
        return true;
      }
    }
    
    // Delete command
    const deleteMatch = lowerCommand.match(/^(delete|remove|clear)\s+(.+)/i);
    if (deleteMatch) {
      const taskText = deleteMatch[2].trim();
      const task = tasks?.find(t => 
        t.text.toLowerCase().includes(taskText.toLowerCase())
      );
      if (task) {
        handleDeleteTask(task.id);
        return true;
      }
    }
    
    // Show help
    if (lowerCommand === 'help' || lowerCommand === 'what can i say') {
      setFeedback('Try saying: "add buy groceries", "complete buy milk", or "delete call mom"');
      return true;
    }
    
    return false;
  }, [tasks,  setFeedback]);
    
  const {  toggleListening } = useSpeechRecognition((text) => setInputText?.(text || ''),
    handleVoiceCommand,
    useCallback(() => {
      setFeedback?.('Could not access microphone. Please allow microphone access.');
    }, [setFeedback])
  );
  return (
    <>
      <TaskForm
        inputText={inputText}
        setInputText={setInputText}
        toggleListening={toggleListening}
     />
    </>
  )
}

export default App
