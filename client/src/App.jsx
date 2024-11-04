import { useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import Menu from "./components/Menu";
import WebsiteURL from "./components/WebsiteURL";
import logo from "./assets/logo.svg";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Function to add a post to the list of posts and save to local storage
  const addPost = (post) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, post];
      localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to local storage
      return updatedPosts;
    });
  };

  return (
    <>
      <main className="max-w-[1000px] mx-auto p-12 h-screen flex flex-col gap-4 justify-between">
        <div>
          <div className="w-full flex flex-col sm:flex-row justify-between items-end gap-4">
            <WebsiteURL />
            <Menu />
          </div>
          {posts.length === 0 && (
            <div className="w-full flex flex-col items-center mt-20 gap-4">
              <img
                src={logo}
                alt="Skrape logo"
                loading="lazy"
                className="w-12 h-12"
              />
              <h1 className="text-3xl text-center text-text2 font-medium tracking-tight">
                Ask <span className="text-text">Skrape</span> <br /> about your
                website
              </h1>
            </div>
          )}
        </div>
        <div className="overflow-y-scroll mt-auto">
          <Posts posts={posts} />
        </div>
        <ChatInput addPost={addPost} />
      </main>
      <div className="z-[-1] blur-[1000px] w-[800px] h-[600px] bg-text rounded-full absolute top-[-500px] right-[-200px] opacity-60" />
    </>
  );
}

export default App;
