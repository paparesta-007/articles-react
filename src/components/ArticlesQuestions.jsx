import React, {useEffect, useState} from 'react';

const ArticleQuestions = ({content}) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${encodeURIComponent(api_key)}`;
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (content !== "") {
            setIsLoading(true);

            const promptAI = "Create 5 concise, just few words, focused questions that encourage deeper understanding of the content, including questions about aspects not explicitly mentioned. Each question should be specific, and the generated JSON should have a key called 'questions' which contains an array of strings, each being a question. Avoid overly broad or vague questions, and ensure the questions touch on key details or missing elements within the content: " + content;

            async function fetchData() {
                try {
                    const response = await fetch(ENDPOINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            contents: [{parts: [{text: promptAI.trim()}]}],
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        console.error(`API error: ${response.status}`, errorData);
                        return;
                    }

                    const {candidates} = await response.json();
                    let rawText = candidates?.[0]?.content?.parts?.[0]?.text || "";

                    // Remove markdown code block (```json ... ```)
                    if (rawText.startsWith("```json") && rawText.endsWith("```")) {
                        rawText = rawText.slice(7, -3).trim(); // remove ```json and ```, and trim whitespace
                    } else if (rawText.startsWith("```") && rawText.endsWith("```")) {
                        rawText = rawText.slice(3, -3).trim(); // remove ``` and ```, and trim whitespace
                    }

                    // Check if the string starts with '\\json' and slice it
                    if (rawText.startsWith("\\json")) {
                        rawText = rawText.slice(5); // remove the '\\json' prefix
                    }

                    // Parse the cleaned text as JSON
                    let parsedData = {};
                    try {
                        parsedData = JSON.parse(rawText);
                        setQuestions(parsedData?.questions || []); // Use optional chaining and default to empty array
                    } catch (err) {
                        console.error("Error parsing JSON:", err);
                    }

                    setOutput(parsedData);
                } catch (error) {
                    console.error("API call failed:", error.name, error.message);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }
    }, [content, ENDPOINT]);

    return (
        <div>
            {isLoading ? (
                <></>
            ) : (
                <div className="border fixed bottom-10  w-100 question-card right-10 bg-[#F2EFC7] shadow-xl ">
                    <h2>Questions:</h2>
                    <div className="">
                        {questions.map((question, index) => (
                            <a className="text-lg" key={index} href="http://www.google.com/q">{question}</a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleQuestions;