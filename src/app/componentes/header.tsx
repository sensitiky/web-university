import Link from 'next/link';
import Image from 'next/image';
import { FC, JSX, SVGProps, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSheetDropdownOpen, setIsSheetDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sheetDropdownRef = useRef<HTMLDivElement>(null);
  const router = usePathname();
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleSheetMouseEnter = () => {
    clearTimeout(timeout);
    setIsSheetDropdownOpen(true);
  };

  const handleSheetMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsSheetDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.addEventListener('mouseenter', handleMouseEnter);
      dropdownRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    if (sheetDropdownRef.current) {
      sheetDropdownRef.current.addEventListener(
        'mouseenter',
        handleSheetMouseEnter
      );
      sheetDropdownRef.current.addEventListener(
        'mouseleave',
        handleSheetMouseLeave
      );
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener('mouseenter', handleMouseEnter);
        dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (sheetDropdownRef.current) {
        sheetDropdownRef.current.removeEventListener(
          'mouseenter',
          handleSheetMouseEnter
        );
        sheetDropdownRef.current.removeEventListener(
          'mouseleave',
          handleSheetMouseLeave
        );
      }
    };
  }, []);
  const headerBgColor = router === '/' ? 'bg-[#573d43]' : 'bg-gray-100';
  const outlineColor = router === '/' ? 'bg-gray-100' : 'bg-gray-900';
  const headerTextColor = router === '/' ? 'text-gray-100' : 'text-gray-900';
  const NavLink: FC<{ href: string; label: string }> = ({ href, label }) => {
    const router = usePathname();
    const isActive = router === href;
    return (
      <Link
        href={href}
        className="relative group transition-colors z-10"
        prefetch={false}
      >
        {label}
        <span
          className={`absolute bottom-[-2px] left-0 w-full h-[2px] ${outlineColor} ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          } transition-transform duration-300 ease-in-out`}
        ></span>
      </Link>
    );
  };
  const DropdownLink: FC<{ href: string; label: string }> = ({
    href,
    label,
  }) => (
    <li>
      <Link
        href={href}
        className="block px-4 py-2 text-black hover:bg-gray-200"
      >
        {label}
      </Link>
    </li>
  );
  return (
    <header
      className={`relative ${headerBgColor} ${headerTextColor}  py-6 px-6 md:px-12 flex items-center justify-between z-40`}
    >
      {router === '/' ? (
        <></>
      ) : (
        <Link
          href="/"
          className="flex items-center gap-2 z-10"
          prefetch={false}
        >
          <div className="p-2 rounded-lg">
            <Image
              src="/logofinal.png"
              alt="Logo IESA"
              className="rounded-lg"
              width={125}
              height={125}
            />
          </div>
        </Link>
      )}

      <nav className="hidden md:flex items-center gap-6 text-lg z-10">
        <NavLink href="/" label="Inicio" />{' '}
        <NavLink href="/media" label="Conócenos" />
        <NavLink href="/instituto" label="Institucional" />
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <NavLink href="" label="Oferta Académica" />
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg z-50">
              <ul className="flex flex-col z-50">
                <DropdownLink
                  href="/carreras/tecnicaturas"
                  label="Tecnicaturas Superiores"
                />
                <DropdownLink
                  href="/carreras/formaciones"
                  label="Formaciones Profesionales"
                />
                <DropdownLink href="/carreras/cursos" label="Cursos" />
              </ul>
            </div>
          )}
        </div>
        <NavLink href="/contacto" label="Contacto" />
      </nav>
      <Button className="relative group bg-[#722F37] hover:bg-[#722F37]/80 rounded-full hidden md:inline-flex z-10 ml-4">
        <Link className="relative group text-white" href="/formulario">
          Pre-Inscribirse
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden z-10 text-gray-100 bg-transparent border-none"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-6">
            <NavLink href="/" label="Inicio" />
            <NavLink href="/instituto" label="Institucional" />
            <div
              className="relative group"
              onMouseEnter={handleSheetMouseEnter}
              onMouseLeave={handleSheetMouseLeave}
              ref={sheetDropdownRef}
            >
              <NavLink href="" label="Oferta Académica" />
              {isSheetDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg z-50">
                  <ul className="flex flex-col">
                    <DropdownLink
                      href="/carreras/tecnicaturas"
                      label="Tecnicaturas Superiores"
                    />
                    <DropdownLink
                      href="/carreras/formaciones"
                      label="Formaciones Profesionales"
                    />
                    <DropdownLink href="/carreras/cursos" label="Cursos" />
                  </ul>
                </div>
              )}
            </div>
            <NavLink href="/contacto" label="Contacto" />
            <Link href="/formulario">
              <Button className="w-full bg-[#722F37] hover:bg-[#722F37]/80 rounded-full">
                Pre-Inscribirse
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
