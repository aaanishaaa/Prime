const Card=({username,greeting})=>{
    return (
        <div className="card">
            <h3>Hello {username}!</h3>
            <p>{greeting}</p>
        </div>
    );
};
export default Card;