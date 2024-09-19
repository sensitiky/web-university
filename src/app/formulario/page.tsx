"use client";
import { useState, ChangeEvent, FormEvent, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { PDFDocument, rgb } from "pdf-lib";
import Image from "next/image";

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
      { value: "Barbería y corte masculino", label: "Barbería y corte masculino" },
      { value: "Drenaje linfático", label: "Drenaje linfático" },
      { value: "Técnicas de spa", label: "Técnicas de spa" },
    ],
  },
];

export default function Formulario() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    orientation: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (path: keyof typeof formData, value: string) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData[path as keyof typeof formData] = value;
      return newFormData;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Formulario enviado correctamente!");
      } else {
        alert("No se pudo enviar el formulario.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Error al enviar el formulario. Por favor, inténtelo nuevamente más tarde."
      );
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 mb-8">
      <header className="bg-white text-slate-500 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logofinal.png" alt="logo" width={100} height={100} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="relative group text-slate-500 hover:text-black transition-colors"
            prefetch={false}
          >
            Inicio
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-6">
              <Link
                href="/"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Inicio
              </Link>
              <Link
                href="/instituto"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Institucional
              </Link>
              <Link
                href="/carreras"
                className="text-lg font-medium hover:underline"
                prefetch={false}
              >
                Carreras
              </Link>
              <Link
                href="/contacto"
                className="relative group text-lg font-medium hover:underline"
                prefetch={false}
              >
                Contacto
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Inscripción Superior</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Complete el siguiente formulario para iniciar su proceso de
          pre-inscripción.
        </p>
      </div>
      <div className="p-5 space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                placeholder="Ingrese su nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                placeholder="Ingrese su apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="ejemplo@dominio.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(+00) 000-000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="dropdown"
              className="text-sm font-medium leading-none"
            >
              Interés
            </label>
            <Select
              value={formData.program || ""}
              onValueChange={(value) => handleSelectChange("program", value)}
            >
              <SelectTrigger className="text-gray-500 dark:text-black">
                <SelectValue placeholder="Seleccione un área de interés" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
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
            {formData.program && (
              <Select
                value={formData.orientation || ""}
                onValueChange={(value) =>
                  handleSelectChange("orientation", value)
                }
              >
                <SelectTrigger className="text-gray-500">
                  <SelectValue placeholder="Seleccione una subopción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {options
                      .find((option) => option.value === formData.program)
                      ?.subOptions.map((subOption) => (
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
            )}
          </div>

          <Button
            type="submit"
            className="bg-[#722F37] hover:bg-[#722F37]/80 mt-8 w-full"
          >
            Enviar Solicitud
          </Button>
          <p className="ml-5 mr-5 p-5 text-center text-gray-500">
            Este formulario inicia el estado de preinscripcion a la oferta
            academica deseada.{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
