
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/Index';
import ContactsPage from './pages/Contacts/Contacts';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/Product/Product';
import EnterPage from './pages/Enter/Enter';



function App() {

  return (

      <Routes>
        <Route path={'/'} element={<DefaultLayout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path={'contacts'} element={<ContactsPage />}></Route>
          <Route path={'enter'} element={<EnterPage />}></Route>
          <Route path={'products'} element={<ProductPage />}>
            <Route path={':userId'} element={<ProductPage />}></Route>
          </Route>
        </Route>
      </Routes>

  );
}

export default App;
