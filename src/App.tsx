import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContextProvider } from "./Context/UserContext"

import Login from "./Pages/Login";
import Home from "./Pages/Home"
import ListFamilies from "./Pages/listFamilies";
import Family from "./Pages/Family";
import ListVoluntary from "./Pages/ListVoluntary";
import NewVoluntary from "./Pages/NewVoluntary"
import Relatory from "./Pages/Relatory";
import MapFamilyLocalization from "./Pages/MapFamilyLocalization";
import RoutesDelivery from "./Pages/Routes";
import Historic from "./Pages/Historic";
import Delivery from "./Pages/Delivery";
import DeliveriesRouter from "./Pages/DeliveriesRouter";

import { GlobalStyle } from "./Style/GlobalStyle"

import PrivateRoute from "./router/privateRoute"

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/newVoluntary" element={<PrivateRoute><NewVoluntary /></PrivateRoute>} />
            <Route path="/familyRegisters" element={<PrivateRoute><ListFamilies /></PrivateRoute>} />
            <Route path="/family/:familyId" element={<PrivateRoute><Family /></PrivateRoute>} />
            <Route path="/voluntaries" element={<PrivateRoute><ListVoluntary /></PrivateRoute>} />
            <Route path="/relatory" element={<PrivateRoute><Relatory /></PrivateRoute>} />
            <Route path="/map" element={<PrivateRoute><MapFamilyLocalization /></PrivateRoute>} />
            <Route path="/routes" element={<PrivateRoute><RoutesDelivery /></PrivateRoute>} />
            <Route path="/historic/:familyId" element={<PrivateRoute><Historic /></PrivateRoute>} />
            <Route path="/delivery/:routerId" element={<PrivateRoute><Delivery /></PrivateRoute>} />
            <Route path="/deliveriesRouter/:routerId" element={<PrivateRoute><DeliveriesRouter /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </LoginContextProvider>
      <GlobalStyle />
    </div>
  )
}

export default App