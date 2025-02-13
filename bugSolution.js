```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a functional update or dependency outside the state
    let intervalId;
    const updateCount = () => {
        setCount(prevCount => prevCount + 1);
    };
    intervalId = setInterval(updateCount, 1000); // Update every 1000ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```