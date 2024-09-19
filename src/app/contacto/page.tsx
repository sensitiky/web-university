"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Footer = dynamic(() => import("@/app/componentes/footer"), {
  ssr: false,
});
const Header = dynamic(() => import("@/app/componentes/header"), {
  ssr: false,
});

const options = [
  {
    value: "Tecnicaturas Superiores",
    label: "Tecnicaturas Superiores",
    subOptions: [
      {
        value: "Tec. Superior Analista de Sistemas",
        label: "Tec. Superior Analista de Sistemas",
      },
      {
        value: "Tec. Superior en Diseño Gráfico digital",
        label: "Tec. Superior en Diseño Gráfico digital",
      },
      {
        value: "Tec. Superior en Gestion Juridica generalista",
        label: "Tec. Superior en Gestion Juridica generalista",
      },
      {
        value: "Tec. Superior en Cosmetologia, cosmiatria y estetica",
        label: "Tec. Superior en Cosmetologia, cosmiatria y estetica",
      },
      {
        value: "Tec. Superior Impositiva, previsional y contable",
        label: "Tec. Superior Impositiva, previsional y contable",
      },
    ],
  },
  {
    value: "Formaciones Profesionales",
    label: "Formaciones Profesionales",
    subOptions: [
      { value: "Operador de Informatica", label: "Operador de Informatica" },
      { value: "Masajista Profesional", label: "Masajista Profesional" },
      { value: "Estilista Profesional", label: "Estilista Profesional" },
      { value: "Administrativo Contable", label: "Administrativo Contable" },
      {
        value: "Armado y Config. de Pc y Notebook",
        label: "Armado y Config. de Pc y Notebook",
      },
      {
        value:
          "Instalación y reparación de sistemas electrónicos y de seguridad",
        label:
          "Instalación y reparación de sistemas electrónicos y de seguridad",
      },
      {
        value: "Configuración, administración e instalación de redes",
        label: "Configuración, administración e instalación de redes",
      },
      { value: "Estética Profesional", label: "Estética Profesional" },
    ],
  },
  {
    value: "Cursos",
    label: "Cursos",
    subOptions: [
      { value: "Diseño gráfico digital", label: "Diseño gráfico digital" },
      { value: "Fotografía básica", label: "Fotografía básica" },
      { value: "Manicura y podología", label: "Manicura y podología" },
      { value: "PHP Programación", label: "PHP Programación" },
      { value: "Java Programación", label: "Java Programación" },
      {
        value: "Barbería y corte masculino",
        label: "Barbería y corte masculino",
      },
      { value: "Drenaje linfático", label: "Drenaje linfático" },
      { value: "Técnicas de spa", label: "Técnicas de spa" },
    ],
  },
];

interface Option {
  label: string;
  value: string;
  subOptions?: Option[];
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [subOptions, setSubOptions] = useState<Option[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<Option | null>(
    null
  );
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !selectedOption || !selectedSubOption) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const formData = {
      name,
      email,
      selectedOption,
      selectedSubOption,
      message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Correo enviado correctamente!");
        setName("");
        setEmail("");
        setSelectedOption(null);
        setSubOptions([]);
        setSelectedSubOption(null);
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("Failed to send email:", errorData.error);
        alert(
          "Hubo un error al enviar el correo. Por favor intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Hubo un error al enviar el correo. Por favor intenta nuevamente.");
    }
  };

  const handleSelect = useCallback((option: Option) => {
    setSelectedOption(option);
    setSubOptions(option.subOptions || []);
    setSelectedSubOption(null);
  }, []);

  const handleSubSelect = useCallback((subOption: Option) => {
    setSelectedSubOption(subOption);
  }, []);

  const memoizedOptions = useMemo(() => options, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div>
        <Image
          src="/email.webp"
          width={1920}
          height={1080}
          alt="Logo instituto"
          className="w-full object-cover aspect-[2/1] lg:h-[350px]"
          priority
        />
      </div>
      <div className="w-full max-w-5xl mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Comunicate con nosotros</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              ¿Tenes una duda sobre alguna oferta académica?
              <br />
              Envíanos un email <br /> Te brindamos toda la información
              necesaria.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingresa tu nombre"
                    className="ios-input"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu Email"
                    className="ios-input"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="dropdown"
                  className="text-sm font-medium leading-none"
                >
                  Interés
                </Label>
                <Select
                  onValueChange={(value: any) => {
                    const option = memoizedOptions.find(
                      (o) => o.value === value
                    );
                    if (option) handleSelect(option);
                  }}
                >
                  <SelectTrigger className="text-gray-500 dark:text-black w-full ios-select">
                    <SelectValue placeholder="Seleccione un área de interés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {memoizedOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-black"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 mt-8">
                <Select
                  onValueChange={(value: any) => {
                    const subOption = subOptions.find((o) => o.value === value);
                    if (subOption) handleSubSelect(subOption);
                  }}
                >
                  <SelectTrigger className="text-gray-500 w-full ios-select">
                    <SelectValue placeholder="Seleccione una subopción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {subOptions.map((subOption) => (
                        <SelectItem
                          key={subOption.value}
                          value={subOption.value}
                          className="text-black"
                        >
                          {subOption.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">
                  Mensaje <span className="text-gray-500">(opcional)</span>
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ingresa tu mensaje"
                  className="min-h-[120px] ios-textarea"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#722F37] hover:bg-[#722F37]/80 rounded-full"
              >
                Enviar
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Dirección</h2>
              <p className="text-gray-500 dark:text-gray-400">
                <a href="https://www.google.com/maps/place/IESA/@-27.3740562,-55.9000486,17z/data=!3m1!4b1!4m6!3m5!1s0x9457be49849dd89d:0x62a7c986ec5c11b6!8m2!3d-27.3740562!4d-55.8974737!16s%2Fg%2F11cm6cqbsm?entry=ttu">
                  Av. Bartolomé Mitre 2070, <br />
                  Posadas. ARG
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Contacto</h2>
              <p className="text-gray-500 dark:text-gray-400">
                <a href="tel:+54(0376)4435252">Tel: (0376) 4435252</a>
                <br />
                <a href="mailto:Iesa-educativo@hotmail.com">
                  Email: Iesa-educativo@hotmail.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Redes Sociales</h2>
              <div className="flex space-x-4">
                <Link
                  href="https://wa.me/+5493764760070"
                  className="text-gray-500 hover:text-customColor-iesa dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
                <Link
                  href="https://www.facebook.com/iesaeducativo"
                  className="text-gray-500 hover:text-customColor-iesa dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/iesaeducativo/"
                  className="text-gray-500 hover:text-customColor-iesa dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="customColor-iesa"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}
