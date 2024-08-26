function PostInfo(amount,unit){
    return (
        <div className = 'post-style'>
            <h3>{amount}</h3>
            <p>{unit}</p>
        </div>
    )
}

function Username(name,email){
    return (
        <div className = 'user-contact'>
            <div className="userName">{name}</div>
            <div className="userEmail">{email}</div>
        </div>
    )
}

function App(){
    return(
        <div className="main">
            <div className='card'>
                <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
                {Username('Sirawich','kaow.arch@gmail.com')}
                <div className="post-detail">
                    {PostInfo('25','Posts')}
                    {PostInfo('350','Followings')}
                    {PostInfo('1.5k','Followers')}
                </div>
            </div> 
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);