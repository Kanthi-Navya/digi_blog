const Home = () => {

    const handleClick = () => {
        console.log('hello navya');
    }

    const handleClickAgain= (name) => {
        console.log('hello' + name);
    }

    return ( 
        <div className="home">
            <h2> Home Page</h2>
            <button onClick= {handleClick}> Click me</button>
            <button onClick={() => {handleClickAgain('rani')}} >Click me again</button>
        </div>
     );
}
 
export default Home;