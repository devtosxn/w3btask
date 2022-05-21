import "./App.css";
import React from "react";

const tierData = {
  tier1: {
    name: "Tier 1",
    amount: 10000,
    interest: 700,
    subscribersCount: 0,
    subscribersBreakdown: [],
    totalPaid: 0,
    totalEarned: 0,
  },
  tier2: {
    name: "Tier 2",
    amount: 20000,
    interest: 2400,
    subscribersCount: 0,
    subscribersBreakdown: [],
    totalPaid: 0,
    totalEarned: 0,
  },
  tier3: {
    name: "Tier 3",
    amount: 30000,
    interest: 7500,
    subscribersCount: 0,
    subscribersBreakdown: [],
    totalPaid: 0,
    totalEarned: 0,
  },
};

function App() {
  const [tierInfo, setTierInfo] = React.useState(tierData);
  const [userInfo, setUserInfo] = React.useState({ name: "", tier: null });

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const tier = event.target.tier.value;
    setUserInfo({ name, tier });
    console.log("user==>", userInfo);
    alert(`Congratulations, ${name}! 
    You have been added to ${tierInfo[tier].name} Savings Group.
    and expected interest after 1 Week is ${tierInfo[tier].interest}`);
    setTierInfo((prevState) => {
      const newState = { ...prevState };
      newState[tier].subscribersCount += 1;
      newState[tier].totalPaid += tierInfo[tier].amount;
      newState[tier].subscribersBreakdown.push({ name: name });
      return newState;
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

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
            <h4>{`Subscribers Count: ${tierInfo["tier1"].subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${tierInfo["tier1"].totalEarned}`}</h4>
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
            <h4>{`Subscribers Count: ${tierInfo["tier2"].subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${tierInfo["tier2"].totalEarned}`}</h4>
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
            <h4>{`Subscribers Count: ${tierInfo["tier3"].subscribersCount}`}</h4>
            <h4>{`Total Amount Saved: #${tierInfo["tier3"].totalEarned}`}</h4>
          </div>
        </div>

        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" name="name" id="name" onChange={handleChange} />

          <label htmlFor="tier">Choose your tier:</label>
          <select
            name="tier"
            id="tier"
            onChange={handleChange}
            defaultValue="Select Tier"
          >
            <option value="tier1">Tier 1 - #10,000</option>
            <option value="tier2">Tier 2 - #20,000</option>
            <option value="tier3">Tier 3 - #30,000</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
