import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';

const MainLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 max-w-11/12 mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;

// //✅ What This Code Does Well
// Modular Structure: It imports Navbar and Footer as reusable components, keeping the layout consistent across routes.

// React Router Integration: Uses <Outlet /> to render nested routes dynamically.

// Semantic HTML: Uses <header>, <main>, and <footer> tags appropriately, which helps with accessibility and SEO.