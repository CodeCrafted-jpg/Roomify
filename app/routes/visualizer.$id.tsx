import React from 'react'
import { useLocation } from 'react-router';

const visualizer = () => {
  const location = useLocation();
  return (
    <div>
      <h1>VISUALIZER</h1>
    </div>
  )
}

export default visualizer
