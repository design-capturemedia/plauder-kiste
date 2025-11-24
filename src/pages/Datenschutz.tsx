import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Verantwortliche Stelle</h2>
            <p className="text-muted-foreground">
              Michèle Raue<br />
              Blattenstrasse 12<br />
              8603 Schwerzenbach<br />
              Schweiz
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Erhebung und Verarbeitung von Daten</h2>
            <p className="text-muted-foreground mb-4">
              Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. 
              Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, 
              das verwendete Betriebssystem und den Domänennamen Ihres Internet-Service-Providers.
            </p>
            <p className="text-muted-foreground">
              Diese Daten lassen keinerlei Rückschlüsse auf Ihre Person zu und werden ausschliesslich 
              zur Sicherstellung eines störungsfreien Betriebs der Seite verwendet.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
            <p className="text-muted-foreground">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. 
              Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht auf Auskunft über die bezüglich Ihrer Person gespeicherten Daten, 
              deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. 
              Sie haben ausserdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
