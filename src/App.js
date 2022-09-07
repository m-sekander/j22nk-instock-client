import './App.scss';
import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <InventoryList/>
      <Routes>
        <Route path="/warehouses" element=""/>
        <Route path="/warehouses/:warehouseId" element=""/>
        <Route path="/warehouses/:warehouseId/edit" element=""/>
        <Route path="/warehouses/add" element=""/>
        <Route path="/inventories" element=""/>
        <Route path="/inventories/:inventoryId" element=""/>
        <Route path="/inventories/:inventoryId/edit" element=""/>
        <Route path="/inventories/add" element=""/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
