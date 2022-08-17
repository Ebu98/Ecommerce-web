// import firebase from "@firebase/app-compat";
// import 'firebase/firestore';

// const firebase = firebase.firestore();

// //<-- this is two ways you can querry database from firebase <--
// firestore.collection('users').doc('cVHvpaDE4oUmWQ6KQJyn').collection('cartItems').doc('UsFI1csPys502Puof0MQ');
// firestore.doc('/user/cVHvpaDE4oUmWQ6KQJyn/cartItems/UsFI1csPys502Puof0MQ');

Code for Type Application
jobs@cyhermes.com

import React, {useState, useEffect, useRef} from "react"
/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */
/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 */
/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */
/**
 * Challenge:
 * 
 * When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section
 */
/**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */
/**
 * Challenge:
 * 
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 * 
 * You can easily tell which parts the component needs by looking at 
 * the variables being used inside the `return`ed markup below.
 */
/**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts using useRef hook
 */

function App() {
    const STARTING_TIME = 5
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
        
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        inputRef.current.focus()
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
                ref={inputRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
 
The Css for it

html, body {
    background: black;
    color: #00b800;
    margin:0;
    padding: 0;
    padding-top: 10px;
    font-family: 'Press Start 2P', cursive;
    text-align: center;
}

body {
    font-weight: 400;
}

button {
    font-family: 'Press Start 2P', cursive;
    display: block;
    margin: 0 auto;
    border: none;
    background: #a80020;
    background: #00b800;
    padding: 10px 20px;
    text-transform: uppercase;
}

button:disabled {
    cursor: not-allowed;
}

h1 {
    font-size: 20px;
    text-align:center;
}

textarea {
    font-family: 'Press Start 2P', cursive;
    border: 3px solid black;
    width: 90%;
    margin: 0 auto;
    outline: none;
    height: 200px;
    background: #00b800;
    padding: 10px;
}

textarea:disabled {
    background-color: #a5a2a2;
}

// ==>post method<==

import React, { useState, useEffect } from 'react';

function App() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addPost=async (title,body) =>{
        await fetch("https//:dasdrgjkhkljlk", {
            method: "POST",
            body: JSON.stringify({
                body: body,
                title:title,
                userid: Math.random().toString(34).slice(2),
            }),
            headers: {
                "jhgfgKJHLJ;/JABUILFKSDUYGISIU"
            },
        })
        .then(response => (response.json()))
        .then((data)=> {
            setPosts((post) =>[data, ...post])
            setTitle('');
            setBody('');
        })
        .catch((err) => {
            console.log(err);
        })
    },
    const handleSubmit =(event) =>{
        event.preventDefault();
        addPost(body, title)
    }
    return(
        <div className="App">
            <h1>Posts Method</h1>
            <form onSubmit={handleSubmit}>

            <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea
            text="textarea"
            value={body}
            onChange={(e) => setTitle(e(e.target.value))}
            
            />
            </form>
        </div>
    )
    
}
export default App;

// -->Get Method<--

function FetchData() {
    const [posts, setPosts] =useState([])

    useEffect(() => {
        fetch('https//: fxjckvlb;j')
        .then(response => (response.json()))
        .then((data) =>{
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return(
        <div>
        {
            posts.map((post) =>{
                return(
                    <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>{post.description}</p>
                    </div>
                )
            })
        }
        </div>
    )

}
export default FetchData;

import React, { useState, useEffect } from 'react';

const App = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);

   // GET with fetch API
   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };
      fetchPost();
   }, []);

   // Delete with fetchAPI
   const deletePost = async (id) => {
      let response = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${id}`,
         {
            method: 'DELETE',
         }
      );
      if (response.status === 200) {
         setPosts(
            posts.filter((post) => {
               return post.id !== id;
            })
         );
      } else {
         return;
      }
   };

   // Post with fetchAPI
   const addPosts = async (title, body) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      let data = await response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

   return (
      // ...
   );
};

export default App;