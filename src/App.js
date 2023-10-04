import Header from "./components/Header";

function App () {
    return (
        <>
            <Header />
        <div className="container">
            <h2>My app</h2>
        </div>
        </>    
    )
};

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