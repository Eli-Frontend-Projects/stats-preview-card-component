// MetricItem.js
import React from 'react';

function MetricItem({ metric_val, metric }) {
  return (
    <div>
      <h2>{metric_val}</h2>
      <p>{metric}</p>
    </div>
  );
}

export default MetricItem;