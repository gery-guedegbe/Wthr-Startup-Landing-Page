import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./components/Contact";
import BlogDetails from "./sections/Blog/components/BlogDetails";
import AllPosts from "./sections/Blog/components/AllPosts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="contact" element={<Contact />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="all-posts" element={<AllPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
