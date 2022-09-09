import './App.scss';
import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import PageMain from "./components/PageMain/PageMain";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouses" element={<PageMain content={<WarehouseList />}/>}/>
        <Route path="/warehouses/:warehouseId" element=""/>
        <Route path="/warehouses/:warehouseId/edit" element={<PageMain content={<EditWarehouse />}/>}/>
        <Route path="/warehouses/add" element={<PageMain content={<AddWarehouse />}/>}/>
        <Route path="/inventories" element={<PageMain content={<InventoryList />}/>}/>
        <Route path="/inventories/:inventoryId" element=""/>
        <Route path="/inventories/:inventoryId/edit" element=""/>
        <Route path="/inventories/add" element=""/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
