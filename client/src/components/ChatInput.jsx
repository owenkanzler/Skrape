import { Send } from "lucide-react";
import React, { useState } from "react";

export default function ChatInput({ addPost }) {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question) {
      setError("Please ask a question");
      return;
    }

    addPost({ type: "user", content: JSON.stringify(question) });

    try {
      const response = await fetch("/skrape/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the detailed error response
        setError(
          errorData.error ||
            "An error occurred scraping your website. Please try again later."
        );
        return;
      }

      const data = await response.json();
      if (data.answer) {
        // Add AI response as a post
        addPost({ type: "ai", content: data.answer });
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }

    console.log("Submitted");
    setError(null);
    setQuestion("");
  };
  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center bg-bg2 border border-border border-[.5px] p-3 rounded-lg w-full fixed bottom-[3rem] max-w-[904px]"
      >
        <input
          type="text"
          placeholder="Ask Skrape..."
          value={question}
          onChange={handleChange}
          className="bg-transparent w-full placeholder-text2 outline-none"
        />
        <button type="submit">
          <Send size={20} />
        </button>
      </form>
      {error && (
        <p className="text-error text-xs fixed bottom-[1.8rem]">{error}</p>
      )}
    </div>
  );
}
