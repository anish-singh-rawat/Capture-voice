import { useState, useRef, useEffect, useCallback } from 'react';

export const useSpeechRecognition = (
  setInputText,
  handleVoiceCommand,
  addTask,
) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const toggleListening = useCallback(() => {
    if (isListening) {
      try {
        recognitionRef.current?.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
      } finally {
        setIsListening(false);
      }
    } else {
      try {
        recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join('')
            .trim();
          
          setInputText(transcript);
          
          if (event.results[0].isFinal && transcript) {
            if (!handleVoiceCommand(transcript)) {
              const taskText = transcript.replace(/^\s*(add|create|new)\s+/i, '').trim();
              if (taskText) {
                addTask(taskText);
              }
            }
            setInputText('');
          }
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          if (isListening) {
            try {
              recognitionRef.current?.start();
            } catch (error) {
              console.error('Error restarting speech recognition:', error);
              setIsListening(false);
            }
          }
        };

        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error initializing speech recognition:', error);
        setIsListening(false);
      }
    }
  }, [isListening, setInputText, handleVoiceCommand, addTask]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return { isListening, toggleListening };
};
