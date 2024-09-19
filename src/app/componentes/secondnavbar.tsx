import Link from "next/link"

export default function SecondNav() {
  return (
    <nav className="bg-background border-b shadow-lg z-[990]">
      <div className="container px-8 md:px-6 py-2 flex items-center justify-between gap-6">
        <Link
          href="#tecnicaturas"
          className="text-sm text-customColor-iesa font-bold hover:text-slate-500 transition-colors"
          prefetch={false}
        >
          Tecnicaturas Superiores
        </Link>
        <Link
          href="#formaciones"
          className="text-sm font-bold text-customColor-iesa hover:text-slate-500 transition-colors"
          prefetch={false}
        >
          Formaciones Profesionales
        </Link>
        <Link
          href="#cursos"
          className="text-sm font-bold text-customColor-iesa hover:text-slate-500 transition-colors"
          prefetch={false}
        >
          Cursos
        </Link>
      </div>
    </nav>
  )
}
