import './App.scss';
import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import PageMain from "./components/PageMain/PageMain";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditInventory from './components/EditInventory/EditInventory';
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import ItemDetail from './components/ItemDetail/ItemDetail';
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ="/" element={<Navigate  to="/warehouses" />} />
        <Route path="/warehouses" element={<PageMain content={<WarehouseList />}/>}/>
        <Route path="/warehouses/:warehouseId/edit" element={<PageMain content={<EditWarehouse />}/>}/>
        <Route path="/warehouses/:warehouseId" element={<PageMain content={<WarehouseDetails />}/>}/>
        <Route path="/warehouses/add" element={<PageMain content={<AddWarehouse />}/>}/>
        <Route path="/inventories" element={<PageMain content={<InventoryList />}/>}/>
        <Route path="/inventories/:inventoryId" element={<PageMain content={<ItemDetail />}/>}/>
        <Route path="/inventories/:inventoryId/edit" element={<PageMain content={<EditInventory />}/>}/>
        <Route path="/inventories/add" element={<PageMain content={<AddInventoryItem/>}/>}/>
        <Route path="*" element={<PageMain content={<NotFound />}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
