import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agents from "./pages/Agents";
import Analytics from "./pages/Analytics";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import TicketDetails from "./components/Tickets/TicketDetails";
import AgentForm from "./components/AgentForm";
import Profile from "./pages/Profile";
import Crm from "./pages/Crm";
import CustomerFormPage from "./components/CustomerFormPage";
import { SkeletonTheme } from "react-loading-skeleton";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import QaLogin from "./pages/Login";
import AgentLogin from "./pages/Login/AgentLogin";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
          <Router>
            <Routes>
              <Route exact path="/" element={<QaLogin />} />
              <Route exact path="/agentLogin" element={<AgentLogin />} />
              <Route
                path="/home"
                element={
                  <RequireAuth loginPath="/">
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="/agents" element={<Agents />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/chats" element={<Chats />} />
              <Route path={`/ticketDetails/:id`} element={<TicketDetails />} />
              <Route path="/agentForm" element={<AgentForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/crm" element={<Crm />} />
              <Route path="/customerFormPage" element={<CustomerFormPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
