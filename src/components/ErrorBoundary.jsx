import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return (
    <div>ErrorBoundary</div>
  )
}

export default ErrorBoundary