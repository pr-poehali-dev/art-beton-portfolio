import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Арт Бетон
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                asChild
                className={`px-4 py-2 text-sm font-medium ${isScrolled ? 'text-primary' : 'text-white'} hover:text-concrete-light transition-colors`}
              >
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                asChild
                className={`px-4 py-2 text-sm font-medium ${isScrolled ? 'text-primary' : 'text-white'} hover:text-concrete-light transition-colors`}
              >
                <Link to="/about">О нас</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                asChild
                className={`px-4 py-2 text-sm font-medium ${isScrolled ? 'text-primary' : 'text-white'} hover:text-concrete-light transition-colors`}
              >
                <Link to="/portfolio">Портфолио</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                asChild
                className={`px-4 py-2 text-sm font-medium ${isScrolled ? 'text-primary' : 'text-white'} hover:text-concrete-light transition-colors`}
              >
                <Link to="/contact">Контакты</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md px-4 py-2 animate-fade-in">
            <nav className="flex flex-col space-y-2 py-3">
              <Link 
                to="/" 
                className={`px-4 py-2 text-primary hover:bg-concrete-light rounded ${location.pathname === '/' ? 'font-semibold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 text-primary hover:bg-concrete-light rounded ${location.pathname === '/about' ? 'font-semibold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                to="/portfolio" 
                className={`px-4 py-2 text-primary hover:bg-concrete-light rounded ${location.pathname === '/portfolio' ? 'font-semibold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 text-primary hover:bg-concrete-light rounded ${location.pathname === '/contact' ? 'font-semibold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
