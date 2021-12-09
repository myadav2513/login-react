
import React, {useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    emal : "admin@admin.com",
    password :"admin@123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => { 
    console.log(details); 
  }

  const Logout = () => { 
    console.log("Logout"); 
  }

  return (
    <div className="App">
     {(user.email !=="") ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button>Logout</button>
       </div>
     ) : (
       
        <LoginForm Login={Login} error={error} />
     )}
    </div>
  );
}

export default App;
