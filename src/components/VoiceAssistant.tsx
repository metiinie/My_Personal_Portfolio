
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

import knowledge from '../data/Portfolio_knowledge.json';

const VoiceAssistant = () => {
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('');
    const [isSupported, setIsSupported] = useState(true);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setIsSupported(false);
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                const text = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    setTranscript(text);
                    handleVoiceCommand(text.toLowerCase());
                } else {
                    interimTranscript += text;
                }
            }
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);
        recognitionRef.current = recognition;
    }, []);

    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setResponse(text);
    };

    const handleVoiceCommand = (command: string) => {
        // Core Identity & Summary
        if (command.includes('who are you') || command.includes('identity')) {
            speak(knowledge.profile.identity);
        } else if (command.includes('philosophy') || command.includes('principles')) {
            speak("My core philosophy is: " + knowledge.philosophy.core_principles.join(", "));
        } else if (command.includes('journey') || command.includes('learning')) {
            speak("My learning journey spanned from Java and SQL foundations to pure Node.js backend, and now into AI and Machine Learning.");
        }
        // Tech & Skills
        else if (command.includes('projects')) {
            speak("I focus on building systems that solve complex problems. For example, my Equb Management System was designed with strict boundaries and MVP discipline. You can see my featured works in the Projects section.");
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('skills') || command.includes('technologies')) {
            speak("I have experience with Java, pure Node.js, Python, and modern web stacks. I prioritize fundamentals and explicit behavior over hidden magic.");
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }
        // Debugging & Values
        else if (command.includes('debugging') || command.includes('bugs')) {
            speak(knowledge.debugging_style.belief + " I approach bugs by tracing execution paths and verifying assumptions at system boundaries.");
        } else if (command.includes('values') || command.includes('priorities')) {
            speak("In engineering, I value correctness over cleverness and predictability over novelty.");
        }
        // Contact
        else if (command.includes('contact')) {
            speak("Feel free to reach out via email at abumahilkerim@gmail.com. I've navigated to the contact form for you.");
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
        // Default
        else {
            speak("I heard you say " + command + ". You can ask about my identity, engineering philosophy, debugging style, or my journey into AI.");
        }
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setTranscript('');
            setResponse('');
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    if (!isSupported) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
            {(isListening || isSpeaking || response) && (
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-primary/10 max-w-sm animate-in fade-in slide-in-from-bottom-8 duration-500 pointer-events-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 h-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-1.5 bg-primary rounded-full transition-all duration-300",
                                        (isListening || isSpeaking) ? "animate-voice-pill" : "h-1"
                                    )}
                                    style={{
                                        height: (isListening || isSpeaking) ? '100%' : '4px',
                                        animationDelay: `${i * 0.15}s`
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                            {isSpeaking ? "Assistant Speaking" : isListening ? "Listening..." : "Response"}
                        </span>
                    </div>

                    <div className="space-y-3">
                        {transcript && (
                            <p className="text-muted-foreground text-sm italic">"{transcript}"</p>
                        )}
                        {response && (
                            <p className="text-foreground font-medium leading-relaxed">{response}</p>
                        )}
                    </div>
                </div>
            )}

            <Button
                onClick={toggleListening}
                size="icon"
                className={cn(
                    "h-20 w-20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 relative group overflow-hidden pointer-events-auto",
                    isListening ? "bg-red-500 hover:bg-red-600 scale-110" :
                        isSpeaking ? "bg-purple-600 scale-105" : "bg-primary hover:scale-105"
                )}
            >
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent transition-opacity",
                    (isListening || isSpeaking) ? "opacity-100" : "opacity-0"
                )} />

                {isListening ? (
                    <MicOff className="h-8 w-8 text-white relative z-10 animate-pulse" />
                ) : isSpeaking ? (
                    <Volume2 className="h-8 w-8 text-white relative z-10 animate-bounce" />
                ) : (
                    <Mic className="h-8 w-8 text-white relative z-10 group-hover:rotate-12 transition-transform" />
                )}

                {(isListening || isSpeaking) && (
                    <>
                        <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-20" />
                        <div className="absolute inset-0 rounded-full bg-current animate-pulse opacity-40 scale-150" />
                    </>
                )}
            </Button>
        </div>
    );
};

export default VoiceAssistant;
