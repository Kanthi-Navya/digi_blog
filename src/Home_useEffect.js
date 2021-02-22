import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import { data } from 'browserslist';
const Home = () => {
    const [name, setName] = useState('navya');
    // const [age, setAge] = useState('23');
    


    // const handleClick = (e) => {
    //     setName('RANI');
    //     setAge('24');
    //     console.log('hello navya, Home page',e);
    // }

    // const handleClickAgain = (name,e) => {
    //     console.log("click me again",name, e.target)
    // }

    
    const [blogs ,setBlogs] = useState(null);

    const handleDelete = (id) => {
        console.log(" handle delete called");
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            
        })
        // console.log('use effect run');
        // console.log(name);
        // console.log(blogs);
    },[name])
 
    return ( 
        <div className="home">
            {/* <h2> Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick= {handleClick}> Click me</button>
            <button onClick={(e) => handleClickAgain('navya', e)} >Click me again</button>
             */}
             <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
             <BlogList blogs={blogs.filter((blog) => blog.author === 'navya')} title="Navya's blogs" handleDelete={handleDelete}/>
             
             <button onClick={() =>setName('rani') }>
                change name
             </button>
             <p>{ name }</p>
        </div>
     );
}
 
export default Home;