import "./App.css";
import React from "react";

function App() {
  const [subscribersCount, setSubscribersCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Savings Group Web Application</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: "20px",
          }}
        >
          <div
            style={{
              color: "#000",
              padding: "10px",
              borderRadius: "15px",
              backgroundColor: "purple",
            }}
          >
            <h2>Tier 1</h2>
            <h4>Amount: #10,000</h4>
            <h4>Interest: 7%</h4>
            <h4>Term: 1 Week</h4>
            <h4>{`Subscribers Count: ${subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${total}`}</h4>
          </div>
          <div
            style={{
              color: "#000",
              padding: "10px",
              borderRadius: "15px",
              backgroundColor: "green",
            }}
          >
            <h2>Tier 2</h2>
            <h4>Amount: #20,000</h4>
            <h4>Interest: 12%</h4>
            <h4>Term: 1 Week</h4>
            <h4>{`Subscribers Count: ${subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${total}`}</h4>
          </div>
          <div
            style={{
              color: "#000",
              padding: "10px",
              borderRadius: "15px",
              backgroundColor: "yellow",
            }}
          >
            <h2>Tier 3</h2>
            <h4>Amount: #30,000</h4>
            <h4>Interest: 25%</h4>
            <h4>Term: 1 Week</h4>
            <h4>{`Subscribers Count: ${subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${total}`}</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
