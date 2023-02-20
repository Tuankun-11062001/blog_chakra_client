import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import { lazy } from "react";

// Layout
import LayoutMain from "./components/user/LayoutMain";
import LayoutCategories from "./components/user/LayoutCategories";
import LayoutStore from "./components/user/LayoutStore";
import LayoutBook from "./components/user/LayoutBook";
import AdminLayout from "./components/admin/AdminLayout";
import LayoutUser from "./components/user/LayoutUser";
import { useClientStore } from "./store/client/hook";

// screen

const Home = lazy(() => import("./screens/user/Home"));
const Store = lazy(() => import("./screens/user/store/Store"));
const Categories = lazy(() => import("./screens/user/category/Categories"));
const DetailCategory = lazy(() =>
  import("./screens/user/category/DetailCategory")
);
const Read = lazy(() => import("./screens/user/category/Read"));
const Cart = lazy(() => import("./screens/user/cart/Cart"));
const DetailProduct = lazy(() => import("./screens/user/store/DetailProduct"));
const Payment = lazy(() => import("./screens/user/payment/Payment"));
const Book = lazy(() => import("./screens/user/book/Book"));
const BookDetail = lazy(() => import("./screens/user/book/detail/BookDetail"));
const Profile = lazy(() => import("./screens/user/profile/Profile"));
const BlogManager = lazy(() =>
  import("./screens/user/BlogManager/BlogManager")
);
const Favourite = lazy(() => import("./screens/user/favourite/Favourite"));

// admin
const HomeA = lazy(() => import("./screens/admin/HomeA"));
const BlogManagerA = lazy(() => import("./screens/admin/blogA/BlogManagerA"));
const StoreManagerA = lazy(() =>
  import("./screens/admin/storeA/StoreManagerA")
);
const BookManagerA = lazy(() => import("./screens/admin/bookA/BookManagerA"));
const UserManagerA = lazy(() => import("./screens/admin/userA/UserManagerA"));
const BookManagerADetail = lazy(() =>
  import("./screens/admin/bookA/BookManagerADetail")
);
const StoreManagerAPreview = lazy(() =>
  import("./screens/admin/storeA/StoreManagerAPreview")
);

const routerUser = createHashRouter(
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
    </>
  )
);
const routerAdmin = createHashRouter(
  createRoutesFromElements(
    <>
      {/* Admin */}
      <Route path="/" element={<AdminLayout />}>
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
  const [stateClient, dispatchClient] = useClientStore();
  const { user } = stateClient;
  console.log(user);
  return (
    <>
      {user.role === "admin" ? (
        <RouterProvider router={routerAdmin} />
      ) : (
        <RouterProvider router={routerUser} />
      )}
    </>
  );
}

export default App;
