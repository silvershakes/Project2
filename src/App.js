import './App.css';
import Home from './Components/Home';
import{ Route, Routes,BrowserRouter}from"react-router-dom";
import ServiceCampaign from './Components/ServiceCampaign';
import Navigate from './Components/Navigate';
import Community from './Components/Community';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate />}>

      <Route index element={<Home />}/>

      <Route path="ServiceCampaign" element={<ServiceCampaign />}/>

      <Route path="Community" element={<Community />}/>

      <Route path="ContactUs" element={<ContactUs />}/>

      <Route path="Community" element={<ServiceCampaign />}/>

      <Route path="ServiceCampaign" element={<ServiceCampaign />}/>


      
    </Route>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
