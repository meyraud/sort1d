import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <bf><strong><ins>Comparing sorting methods:</ins></strong></bf>
      <SortingVisualizer></SortingVisualizer>
    </div>
    <div className="App2">
      <bf><strong><ins>Time & Space complexity:</ins></strong></bf>
      <br></br>
      <br></br>
      <bf><strong>Merge Sort:</strong>  <ins>Time:</ins> O(n*Log n) (worst, average, best), <ins>Space:</ins> O(n) (worst)</bf>
      <br></br>
      <bf><strong>Quick Sort:</strong>  <ins>Time:</ins> O(n*Log n) (average, best) and O(n^2) (worst), <ins>Space:</ins> O(log(n)) (worst)</bf>
      <br></br>
      <bf><strong>Heap Sort:</strong>  <ins>Time:</ins> O(n*Log n) (worst, average, best), <ins>Space:</ins> O(1) (worst)</bf>
      <br></br>
      <bf><strong>Bubble Sort:</strong> <ins>Time:</ins> O(n) (best) and O(n^2) (average, worst), <ins>Space:</ins> O(1) (worst)</bf>
    </div>
    </React.Fragment>
  );
}

export default App;
