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
              Die Autorin übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. 
              Haftungsansprüche gegen die Autorin wegen Schäden materieller oder immaterieller Art, 
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, 
              durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. 
              Alle Angebote sind unverbindlich. Die Autorin behält es sich ausdrücklich vor, Teile der Seiten 
              oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder 
              die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
            <p className="text-muted-foreground">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. 
              Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung 
              solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Urheberrechte</h2>
            <p className="text-muted-foreground">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf 
              der Website gehören ausschliesslich Michèle Raue. Für die Reproduktion jeglicher Elemente 
              ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
            <p className="text-muted-foreground">
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen 
              Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer 
              Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese 
              Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte 
              verkauft noch weiter gegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen 
              wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder 
              vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles 
              gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen 
              zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, 
              anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote 
              entsprechend verbessern können.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
