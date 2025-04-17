import React, { useState } from 'react';

const PromptAI = ({ onSend }) => {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <div className="w-full max-w-xl">
            <label htmlFor="prompt-ai" className="block text-lg font-semibold text-gray-700 mb-2">
                Prompt AI
            </label>
            <div className="flex gap-2">
                <input
                    id="prompt-ai"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Scrivi qui il tuo prompt..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Invia
                </button>
            </div>
        </div>
    );
};

export default PromptAI;
