import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Direito de Imagem - Estudo Jurídico",
  description: "Estudo sobre Responsabilidade Civil e Direito de Imagem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Direito de Imagem</h1>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-accent">Início</Link></li>
              <li><Link href="#conceituacao" className="hover:text-accent">Conceitos</Link></li>
              <li><Link href="#legislacao" className="hover:text-accent">Legislação</Link></li>
              <li><Link href="#jurisprudencia" className="hover:text-accent">Julgados</Link></li>
              <li><Link href="/quiz" className="hover:text-accent">Quiz</Link></li>
              <li><Link href="/mapa-mental" className="hover:text-accent">Mapa Mental</Link></li>
              <li><Link href="#quem-somos" className="hover:text-accent">Quem Somos</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {children}
        </main>
        <footer className="bg-black text-white p-6 mt-8 text-sm">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Direito de Imagem - Estudo Jurídico</h3>
              <p>&copy; 2025 - Trabalho Acadêmico</p>
              <p>Desenvolvido por Bruno Silveira Guerreiro e colegas.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Navegação</h3>
              <ul className="space-y-1">
                 <li><Link href="/" className="hover:text-accent">Início</Link></li>
                 <li><Link href="#conceituacao" className="hover:text-accent">Conceitos</Link></li>
                 <li><Link href="#legislacao" className="hover:text-accent">Legislação</Link></li>
                 <li><Link href="#jurisprudencia" className="hover:text-accent">Julgados</Link></li>
                 <li><Link href="/quiz" className="hover:text-accent">Quiz</Link></li>
                 <li><Link href="/mapa-mental" className="hover:text-accent">Mapa Mental</Link></li>
                 <li><Link href="#quem-somos" className="hover:text-accent">Quem Somos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contato</h3>
              <p>Bruno Silveira Guerreiro</p>
              <p>WhatsApp: <a href="tel:+17742231183" className="hover:text-accent">+1 774 223-1183</a></p>
              <p>Email: <a href="mailto:brunosilveirassa@gmail.com" className="hover:text-accent">brunosilveirassa@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/bruno-silveiraa/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">bruno-silveiraa</a></p>
            </div>
          </div>

        </footer>
      </body>
    </html>
  );
}

