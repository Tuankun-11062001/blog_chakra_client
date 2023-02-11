import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";

// Layout
import LayoutMain from "./components/user/LayoutMain";
import LayoutCategories from "./components/user/LayoutCategories";
import LayoutStore from "./components/user/LayoutStore";

// screen

import Home from "./screens/user/Home";
import Store from "./screens/user/store/Store";
import Categories from "./screens/user/category/Categories";
import DetailCategory from "./screens/user/category/DetailCategory";
import Read from "./screens/user/category/Read";
import Cart from "./screens/user/cart/Cart";
import DetailProduct from "./screens/user/store/DetailProduct";
import Payment from "./screens/user/payment/Payment";
import LayoutBook from "./components/user/LayoutBook";
import Book from "./screens/user/book/Book";
import BookDetail from "./screens/user/book/detail/BookDetail";
import LayoutUser from "./components/user/LayoutUser";
import Profile from "./screens/user/profile/Profile";
import BlogManager from "./screens/user/BlogManager/BlogManager";
import Favourite from "./screens/user/favourite/Favourite";
import AdminLayout from "./components/admin/AdminLayout";
import HomeA from "./screens/admin/HomeA";
import BlogManagerA from "./screens/admin/blogA/BlogManagerA";
import StoreManagerA from "./screens/admin/storeA/StoreManagerA";
import BookManagerA from "./screens/admin/bookA/BookManagerA";
import UserManagerA from "./screens/admin/userA/UserManagerA";
import BookManagerADetail from "./screens/admin/bookA/BookManagerADetail";
import StoreManagerAPreview from "./screens/admin/storeA/StoreManagerAPreview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutMain />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Category */}
        <Route path="categories" element={<LayoutCategories />}>
          <Route index element={<Categories />} />
          <Route path=":category" element={<LayoutCategories />}>
            <Route index element={<DetailCategory />} />
            <Route path=":id" element={<Read />} />
          </Route>
        </Route>

        {/* store */}
        <Route path="store" element={<LayoutStore />}>
          <Route index element={<Store />} />
          <Route path="product" element={<LayoutStore />}>
            <Route path=":id" element={<DetailProduct />} />
          </Route>
        </Route>

        {/* cart */}
        <Route path="cart" element={<Cart />} />

        {/* payment */}

        <Route path="payment" element={<Payment />} />

        {/* book */}

        <Route path="book" element={<LayoutBook />}>
          <Route index element={<Book />} />
          <Route path=":name" element={<LayoutBook />}>
            <Route index element={<BookDetail />} />
          </Route>
        </Route>

        {/* profile */}

        <Route path="my-profile" element={<LayoutUser />}>
          <Route index element={<Profile />} />
          <Route path="blog-manager" element={<BlogManager />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeA />} />

        {/* blog A */}

        <Route path="blog-manager" element={<BlogManagerA />} />

        {/* store A */}

        <Route path="store-manager" element={<Outlet />}>
          <Route index element={<StoreManagerA />} />
          <Route path=":name" element={<StoreManagerAPreview />} />
        </Route>

        {/* Book A */}

        <Route path="book-manager" element={<Outlet />}>
          <Route index element={<BookManagerA />} />
          <Route path=":name" element={<BookManagerADetail />} />
        </Route>

        {/* user A */}

        <Route path="user-manager" element={<UserManagerA />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
