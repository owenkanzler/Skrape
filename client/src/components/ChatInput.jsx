import { Send } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ChatInput() {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question) {
      setError("Please ask a question");
      return;
    }

    console.log("Submitted");
    setError(null);
    setQuestion("");
  };
  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center bg-bg2 border border-border border-[.5px] p-3 rounded-lg w-full"
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
        <p className="text-error text-xs absolute bottom-[-21px]">{error}</p>
      )}
    </div>
  );
}
