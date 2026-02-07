import { useState, useRef, useEffect, useCallback } from 'react';

export const useSpeechRecognition = (setInputText) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
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
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
          alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
          return;
        }

        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        
        // recognitionRef.current.lang = 'hi-IN'; // Hindi (India)
        // recognitionRef.current.lang = 'en-US'; // English (US)
         recognitionRef.current.lang = 'en-IN';

        recognitionRef.current.onresult = (event) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptPiece = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcriptPiece + ' ';
            } else {
              interimTranscript += transcriptPiece;
            }
          }

          const currentText = finalTranscript || interimTranscript;
          setTranscript(currentText.trim());
          setInputText(currentText.trim());
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          if (event.error === 'no-speech') {
            console.log('No speech detected. Please try again.');
          } else if (event.error === 'not-allowed') {
            alert('Microphone access denied. Please allow microphone access in your browser settings.');
          }
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current.start();
        setIsListening(true);
        setTranscript('');
      } catch (error) {
        console.error('Error initializing speech recognition:', error);
        alert('Failed to start speech recognition. Please check your microphone permissions.');
        setIsListening(false);
      }
    }
  }, [isListening, setInputText]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.error('Error cleaning up speech recognition:', error);
        }
      }
    };
  }, []);

  return { isListening, toggleListening, transcript };
};
