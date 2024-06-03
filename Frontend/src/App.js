// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import PostList from './components/PostList';
import BackgroundVideo from './components/BackgroundVideo';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundVideo />
        <div className="relative z-10">
          <Routes>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;