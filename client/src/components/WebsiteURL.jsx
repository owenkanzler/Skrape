import React, { useState } from "react";
import { Send } from "lucide-react";

export default function WebsiteURL() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a URL");
      return;
    }

    const urlRegex = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?" + // port
        "(\\/[-a-z\\d%_.~+]*)*" + // path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    if (!urlRegex.test(url)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      const respone = await fetch("/skrape/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!respone.ok) {
        setError(
          "An error occurred skraping your webstie. Please try again later."
        );
        return;
      }
    } catch (err) {
      setError(
        "An error occurred skraping your webstie. Please try again later."
      );
    }

    console.log("Submitted");
    setError(null);
    setUrl("");
  };

  return (
    <>
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] border-b border-text2 flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="Website URL"
            value={url}
            onChange={handleChange}
            className="bg-transparent w-full placeholder-text2 text-[14px] outline-none"
          />
          <button type="submit">
            <Send
              size={14}
              className="text-text2 hover:text-text transtion-all duaration-100"
            />
          </button>
        </form>
        {error && (
          <p className="text-error text-xs absolute bottom-[-21px]">{error}</p>
        )}
      </div>
    </>
  );
}
