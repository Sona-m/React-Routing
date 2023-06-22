import RoutesPage from "./RoutesPage";
import { Provider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App container mx-auto flex flex-row h-screen w-screen ">
      <div className="mr-10 mt-4 w-1/5">
      <Sidebar/>
      </div>
       <div className="bg-blue-200 mt-0 w-4/5">
       <Provider>
         <RoutesPage />
      </Provider>
       </div>
      
    </div>
  );
}

export default App;
