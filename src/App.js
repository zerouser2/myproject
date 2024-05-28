import { Route, BrowserRouter as Router, Routes, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Posts, { blogLoader, getPosts } from "./components/header/Posts.jsx";
import Login from "./components/header/Login.jsx";
import Register from "./components/header/Register.jsx";
import CreatePost from "./components/header/CreatePost.jsx";
import RequirePath, { pathLoader } from "./components/header/RequirePath.jsx";
import SignOut from "./components/header/SignOut.jsx";
import Test from "./components/header/Test.jsx";
import SearchParams from "./components/header/SearchParams.jsx";
import { RouterProvider } from "react-router-dom";
import SinglePage, { postLoader } from "./components/header/SinglePage.jsx";
import ErrorPage from "./components/header/ErrorPage.jsx";

// const router = createBrowserRouter({
//   basename: '/myproject',
//   routes: createRoutesFromElements(
//     <Route path='/' element={<Header />}  >
//       <Route path='posts' element={<Posts />} loader={blogLoader} />
//       <Route path='posts/:id' element={<SinglePage />} loader={postLoader}/>
//       <Route path='login' element={
//         <Login>
//           <SignOut />
//         </Login> 
//       }/>
//       <Route path='register' element={<Register />}/>
//       <Route path="posts/create" element={
//         <RequirePath>
//           <CreatePost />
//         </RequirePath>
//        } loader={pathLoader}/>
//       <Route path="params" element={<SearchParams />}>
//         <Route path="team" element={<p>dsada</p>} />
//         <Route path="contact" element={<p>Our Contacts</p>} />
//       </Route>
//     </Route>
//   )
// })

function App() {
  return (
    <div className="App">
        {/* <RouterProvider router={router}/> */}
        <Router>
          <Routes>
            <Route path='/' element={<Header />}  >
                <Route path='posts' element={<Posts />} loader={blogLoader} />
                <Route path='posts/:id' element={<SinglePage />} loader={postLoader}/>
                <Route path='login' element={
                  <Login>
                    <SignOut />
                  </Login> 
                }/>
                <Route path='register' element={<Register />}/>
                <Route path="posts/create" element={
                  <RequirePath>
                    <CreatePost />
                  </RequirePath>
                } loader={pathLoader}/>
                <Route path="params" element={<SearchParams />}>
                <Route path="team" element={<p>dsada</p>} />
                <Route path="contact" element={<p>Our Contacts</p>} />
              </Route>
            </Route>
          </Routes> 
        </Router>
    </div>
  );
}

export default App;