import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Mariage from "./pages/Mariage";
import Entreprise from "./pages/Entreprise";
import Location from "./pages/Location";
import Photobooth from "./pages/Photobooth";
import Contact from "./pages/Contact";
import Galerie from "./pages/Galerie";
import NotFound from "./pages/NotFound";
// Pages SEO locales
import Nantes from "./pages/local/Nantes";
import SaintNazaire from "./pages/local/SaintNazaire";
import Angers from "./pages/local/Angers";
import LaRocheSurYon from "./pages/local/LaRocheSurYon";
import LeMans from "./pages/local/LeMans";
import Laval from "./pages/local/Laval";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/location" element={<Location />} />
          <Route path="/photobooth" element={<Photobooth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galerie" element={<Galerie />} />
          {/* Pages SEO locales */}
          <Route path="/dj-nantes" element={<Nantes />} />
          <Route path="/dj-saint-nazaire" element={<SaintNazaire />} />
          <Route path="/dj-angers" element={<Angers />} />
          <Route path="/dj-la-roche-sur-yon" element={<LaRocheSurYon />} />
          <Route path="/dj-le-mans" element={<LeMans />} />
          <Route path="/dj-laval" element={<Laval />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
