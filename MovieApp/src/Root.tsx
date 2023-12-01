import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/sign-up';
import { SelectedPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { Blog } from '#features/all-posts/all-posts';

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={ <Blog />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up-confirmation" element={<div>confirmation</div>} />
          <Route path="/posts" element ={<Blog />} />
          <Route path="/posts/:postId" element={<SelectedPost />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
