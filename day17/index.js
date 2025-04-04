const [count, setCount] = useState(0);

function increment() {
    setCount(prevCount => prevCount + 1);
}

return (
    <>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
    </>
);