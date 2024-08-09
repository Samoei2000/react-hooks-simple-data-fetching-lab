// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // Step 2: Create state to manage the dog image and loading state
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Step 3: Use `useEffect` to fetch the dog image when the component mounts
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Step 4: Update state with the fetched image and set loading to false
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="App">
      {/* Step 5: Display a loading message or the dog image */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
