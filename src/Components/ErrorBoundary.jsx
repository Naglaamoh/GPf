import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Log the error or perform any other necessary actions
      console.error('Error caught:', error);
      console.error('Error info:', info);
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI when an error occurs
        return <div>Something went wrong. Please try again later.</div>;
      }
      return this.props.children;
    }
  }
  