# Voice to Text - Hindi & English Speech Recognition

A React application that captures voice input in both Hindi and English languages and displays the transcribed text in real-time.

## Features

- 🎤 **Multilingual Speech Recognition**: Supports both Hindi and English voice input
- 📝 **Real-time Transcription**: See your speech converted to text instantly
- 🔴 **Visual Feedback**: Clear indicators showing when the app is listening
- ✏️ **Manual Input**: Option to type text manually if needed
- 🎨 **Modern UI**: Clean and intuitive interface with Tailwind CSS styling
- 🔊 **Continuous Listening**: Captures speech continuously until stopped

## Browser Compatibility

This application uses the Web Speech API, which is supported in:
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Safari (macOS/iOS)
- ❌ Firefox (limited support)

**Note**: Microphone permissions are required for speech recognition to work.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd voice-to-text
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Click the microphone button** to start voice recognition
2. **Speak in Hindi or English** - the app will transcribe your speech in real-time
3. **Watch the transcription appear** in the display area
4. **Click the stop button** (red pulsing icon) when you're done speaking
5. **Clear or edit** the transcribed text as needed

### Tips for Best Results

- Speak clearly and at a moderate pace
- Ensure you're in a quiet environment
- Allow microphone access when prompted by your browser
- Use Chrome or Edge for the best experience
- The app is configured for Hindi (India) by default but can recognize English as well

## Project Structure

```
src/
├── App.jsx                    # Main application component
├── TaskForm.jsx               # Voice input UI component
├── useSpeechRecognition.js    # Speech recognition hook
├── useTaskManager.ts          # State management hook
├── App.css                    # Styles
└── main.jsx                   # Application entry point
```

## Key Components

### useSpeechRecognition Hook

Handles the Web Speech API integration:
- Manages speech recognition lifecycle
- Supports Hindi (hi-IN) language
- Provides real-time transcription updates
- Handles errors and permissions

### TaskForm Component

User interface for voice input:
- Microphone button with visual states
- Real-time transcription display
- Manual text input option
- Clear instructions and tips

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Web Speech API** - Browser speech recognition
- **React Icons** - Icon components
- **Tailwind CSS** - Utility-first CSS (via inline classes)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Language Configuration

The app is configured for Hindi by default. To change the language, modify the `lang` property in `useSpeechRecognition.js`:

```javascript
// For Hindi (India)
recognitionRef.current.lang = 'hi-IN';

// For English (US)
recognitionRef.current.lang = 'en-US';

// For English (India)
recognitionRef.current.lang = 'en-IN';
```

## Troubleshooting

### Microphone Not Working
- Check browser permissions for microphone access
- Ensure your microphone is properly connected
- Try using HTTPS (required for some browsers)

### Speech Not Recognized
- Speak more clearly and slowly
- Check if your browser supports Web Speech API
- Ensure you're using a supported browser (Chrome/Edge recommended)

### No Transcription Appearing
- Verify microphone permissions are granted
- Check browser console for errors
- Try refreshing the page

## Future Enhancements

- [ ] Language selection dropdown
- [ ] Save transcriptions to local storage
- [ ] Export transcriptions as text files
- [ ] Support for more languages
- [ ] Voice commands for app control
- [ ] Offline speech recognition

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
