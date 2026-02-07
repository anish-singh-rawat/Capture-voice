import { useState, useEffect, useCallback } from 'react';

export const useTaskManager = () => {
  const [inputText, setInputText] = useState('');
  const [feedback, setFeedback] = useState('');
  const [tasks, setTasks] = useState([]);
  return {
    inputText,
    setInputText,
    feedback,
    setFeedback,
    tasks,
    setTasks
  };
};
