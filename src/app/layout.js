// Fuentes
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Zilla_Slab_Highlight } from 'next/font/google';

import Footer from "./components/footer";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'], // Subconjunto recomendado
  weight: ['400', '500', '600', '700'], // Selecciona los pesos que necesitas
  variable: '--font-poppins', // Variable CSS opcional
});

const zillaSlabHighlight = Zilla_Slab_Highlight({
  subsets: ['latin'], // Ajusta según el idioma necesario
  weight: ['400', '700'], // Opcional: define los pesos que necesitas
});

export const metadata = {
  title: "JYO Eventos deportivos",
  description: "Generado por Cecilia y Noelia Perdomo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
