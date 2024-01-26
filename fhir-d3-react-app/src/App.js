// // src/App.js
// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch FHIR-encoded data from the backend
//     fetch('/api/data')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>FHIR-D3 React App</h1>
//       {/* Use D3.js to visualize the data */}
//       {/* Add your D3.js visualization code here */}
//     </div>
//   );
// }

// export default App;



// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import * as d3 from 'd3';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch FHIR-encoded data from the backend
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        // Call the function to create D3 visualization
        createD3Visualization(data);
      });
  }, []);

  const createD3Visualization = (data) => {
    // Select the container div
    const container = d3.select('.App');

    // Create an SVG element
    const svg = container.append('svg')
      .attr('width', 800)
      .attr('height', 600);

    // Set up scales for x and y axes (adjust as needed based on your data)
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.age)])
      .range([0, 800]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.heartRate)])
      .range([600, 0]);

    // Create circles for each data point
    svg.selectAll('circle')
      .data(data)
      .enter().append('circle')
      .attr('cx', d => xScale(d.age))
      .attr('cy', d => yScale(d.heartRate))
      .attr('r', 5) // Adjust the radius as needed
      .attr('fill', 'blue');

    // Add axes
    svg.append('g')
      .attr('transform', 'translate(0, 600)')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  };

  return (
    <div className="App">
      <h1>FHIR-D3 React App</h1>
      <div id="visualization"></div>
    </div>
  );
}

export default App;
