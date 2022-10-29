import AgentLogin from "./pages/AgentLogin";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Agents from "./pages/Agents";
import Analytics from "./pages/Analytics";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import TicketDetails from "./components/Tickets/TicketDetails";
import AgentForm from "./components/AgentForm";
import Profile from "./pages/Profile";
import Crm from "./pages/Crm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AgentLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/ticketDetails" element={<TicketDetails />} />
          <Route path="/agentForm" element={<AgentForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/crm" element={<Crm />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
