import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    if (newFeedback.rating === +"") {
      alert("Chhose rating");
    } else {
      setFeedback([newFeedback, ...feedback]);
    }
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/:name" element={<Post />} />


        </Routes>
        <Card>
            <NavLink className='navlink' to='/' activeClassName='active'>
              Home  
            </NavLink >
            <span></span>
            <NavLink  className='navlink' to='/about' activeClassName='active'>
              About  
            </NavLink>
        </Card>
      </div>
    </Router>
  );
}

export default App;

// play with components_________________________________
// function App () {
//     const title = 'Blog Post'
//     const body = 'This is my post'
//     const comments = [
//         {id: 1, text: "Comment one"},
//         {id:2, text: "Comment two"},
//         {id:3, text: "Comment three"}
//     ]

//     const loading = false
//     const showComments = true
//     if (loading) return <h1>Loading..</h1>
//     const commentBlock = (
//         <div className="comments">
//             <h3>Comments ({comments.length}) </h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
//     )

//     return (
//         <>
//             <h2>{title.toUpperCase()}</h2>
//             <div>{body}</div>
//             {showComments && commentBlock}
//         </>

//     )
// };

// export default App;
