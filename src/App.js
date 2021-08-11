import logo from './logo.svg';
import './App.css';
import Pricecard from './pricecard';

function App() {
  let plans = [
    {
      packagename:"FREE",
      price: 0,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "Single-User",
          isenabled: true
        },
        {
          name: "5GB Storage",
          isenabled: true
        },
        {
          name: "Unlimited Public Projects",
          isenabled: true
        },
        {
          name: "Community Access",
          isenabled: true
        },
        {
          name: "Unlimited Private Projects",
          isenabled: false
        },
        {
          name: "Dedicated Phone Support",
          isenabled: false
        },
        {
          name: "Free Subscription",
          isenabled: false
        },
        {
          name: "Monthly Status Reports",
          isenabled: false
        },
      ]
    },
    {
      packagename:"PLUS",
      price: 9,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "5 Users",
          isenabled: true,
          isbold: true,
        },
        {
          name: "50GB Storage",
          isenabled: true
        },
        {
          name: "Unlimited Public Projects",
          isenabled: true
        },
        {
          name: "Community Access",
          isenabled: true
        },
        {
          name: "Unlimited Private Projects",
          isenabled: true
        },
        {
          name: "Dedicated Phone Support",
          isenabled: true
        },
        {
          name: "Free Subscription",
          isenabled: true
        },
        {
          name: "Monthly Status Reports",
          isenabled: false
        },
      ]
    },
    {
      packagename:"PRO",
      price: 49,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "Unlimited Users",
          isenabled: true
        },
        {
          name: "150GB Storage",
          isenabled: true
        },
        {
          name: "Unlimited Public Projects",
          isenabled: true
        },
        {
          name: "Community Access",
          isenabled: true
        },
        {
          name: "Unlimited Private Projects",
          isenabled: true
        },
        {
          name: "Dedicated Phone Support",
          isenabled: true
        },
        {
          name: "Free Subscription",
          isenabled: true
        },
        {
          name: "Monthly Status Reports",
          isenabled: true
        },
      ]
    }
  ]
  let onselect = (plan) => {
    alert(`${plan} Plan is Selected`)
  }
  return (
    <div class="container-fluid">
    <div class="container p-5">
      <div class="row">
        {
     plans.map((card) => {
      return <Pricecard data={card} handleselect={onselect}></Pricecard>
     })
    }
    </div>
    </div>
    </div>
  );
}

export default App;
