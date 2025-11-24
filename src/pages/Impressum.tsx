import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäss Art. 8 UWG</h2>
            <p className="text-muted-foreground">
              Michèle Raue<br />
              Blattenstrasse 12<br />
              8603 Schwerzenbach<br />
              Schweiz
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-muted-foreground">
              Telefon: +41 79 605 58 88<br />
              E-Mail: info@hypnose-raue.ch
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
            <p className="text-muted-foreground mb-4">
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, 
              Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p className="text-muted-foreground">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
              die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, 
              durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
