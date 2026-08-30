import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { SideBar } from "./components/SideBar";

// import Transactions from "./components/Transactions"; <Transactions/>

function App() {
  return (
    <div className="fixed inset-0 flex gap-2 overflow-hidden p-2 bg-white">
      <SideBar />
      <div className="flex-1 flex flex-col min-w-0 min-h-0 gap-2">
        <NavBar />

        <main className="flex-1 min-h-0 overflow-auto">
          <Dashboard />

        </main>
      </div>
    </div>

  );
}

export default App;
