import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { SideBar } from "./components/SideBar";
// import Transactions from "./components/Transactions"; <Transactions/>

function App() {
  return (
    <div className="h-screen flex p-2 gap-2 overflow-hidden">
      <SideBar />

      <div className="flex-1 flex flex-col min-w-0">
        <NavBar />
        <Dashboard />

        <main className="flex-1 overflow-auto">

        </main>
      </div>
    </div>

  );
}

export default App;
