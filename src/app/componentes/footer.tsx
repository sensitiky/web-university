import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#722F37] text-white py-6 md:py-8 lg:py-5">
      <div className="container px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span></span>
          <Image src="/Fundas.png" alt="Logo IESA" width={200} height={200} />
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="https://www.privacypolicyonline.com/live.php?token=aOqyqx1o7Pjje5M3uHdXirDINKHxfLpQ"
            className="text-white hover:text-white transition-colors"
            prefetch={false}
          >
            Política de Privacidad
          </Link>
          <Link
            href="/contacto"
            className="text-white hover:text-white transition-colors"
            prefetch={false}
          >
            Contáctanos
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;