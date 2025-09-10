import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Users, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-display font-semibold text-foreground">
              Hypnosetherapie & Coaching
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Leistungen
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Über mich
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                  Ihr Weg zu mehr
                  <span className="text-primary block">Lebensqualität</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professionelle Hypnosetherapie und Paarcoaching in vertrauensvoller Atmosphäre. 
                  Gemeinsam finden wir Lösungen für Ihre persönlichen Herausforderungen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="shadow-soft">
                  <Phone className="mr-2 h-4 w-4" />
                  Termin vereinbaren
                </Button>
                <Button variant="outline" size="lg">
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="Therapeutische Atmosphäre - Entspannte Praxisräume für Hypnosetherapie und Paarcoaching"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Meine Leistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Individuelle Begleitung auf Ihrem Weg zu persönlichem Wachstum und erfüllten Beziehungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Hypnosetherapie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground">
                  Lösen Sie unbewusste Blockaden und erreichen Sie Ihre Ziele durch professionelle Hypnosetherapie.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stressabbau und Entspannung</li>
                  <li>• Ängste und Phobien überwinden</li>
                  <li>• Gewichtsreduktion und gesunde Gewohnheiten</li>
                  <li>• Raucherentwöhnung</li>
                  <li>• Selbstvertrauen stärken</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Paar- & Beziehungscoaching</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground">
                  Stärken Sie Ihre Partnerschaft und finden Sie gemeinsam zu mehr Verständnis und Nähe.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Kommunikation verbessern</li>
                  <li>• Konflikte konstruktiv lösen</li>
                  <li>• Vertrauen wieder aufbauen</li>
                  <li>• Intimität und Nähe stärken</li>
                  <li>• Gemeinsame Zukunft gestalten</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Über mich
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-card border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-display flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      Meine Philosophie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Jeder Mensch trägt die Ressourcen für positive Veränderungen bereits in sich. 
                      Als Ihre Hypnosetherapeutin und Paarcoach begleite ich Sie dabei, diese Potentiale 
                      zu entdecken und zu entfalten.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In meiner Praxis schaffe ich einen sicheren Raum, in dem Sie sich öffnen und 
                      wachsen können. Durch einfühlsame Begleitung und bewährte Methoden unterstütze 
                      ich Sie auf Ihrem Weg zu mehr Wohlbefinden und erfüllten Beziehungen.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="shadow-card border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-display">Qualifikationen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Zertifizierte Hypnosetherapeutin</p>
                      <p>• Systemische Paar- & Familientherapie</p>
                      <p>• NLP Master Practitioner</p>
                      <p>• Traumatherapie (EMDR)</p>
                      <p>• Fortlaufende Weiterbildungen</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-display">Arbeitsweise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Vertraulich, respektvoll und lösungsorientiert. 
                      Jede Sitzung wird individuell auf Ihre Bedürfnisse abgestimmt.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Kontakt & Terminvereinbarung
              </h2>
              <p className="text-lg text-muted-foreground">
                Nehmen Sie gerne Kontakt mit mir auf. Ich freue mich auf unser Gespräch.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Praxis Informationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-Mail</p>
                      <p className="text-muted-foreground">praxis@hypnose-coaching.de</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Praxisadresse</p>
                      <p className="text-muted-foreground">
                        Musterstraße 123<br />
                        12345 Musterstadt
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Erstberatung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Gerne biete ich Ihnen ein unverbindliches Erstgespräch an, in dem wir 
                    Ihre Anliegen besprechen und schauen, wie ich Sie bestmöglich unterstützen kann.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-therapy-neutral/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">Erstberatung (30 Min.)</p>
                      <p className="text-sm text-muted-foreground">Kostenlos & unverbindlich</p>
                    </div>
                    <Button className="w-full shadow-soft" size="lg">
                      <Phone className="mr-2 h-4 w-4" />
                      Jetzt Termin vereinbaren
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="font-display font-semibold">Hypnosetherapie & Paarcoaching</p>
            <p className="text-sm opacity-90">
              Professionelle Begleitung für mehr Lebensqualität und erfüllte Beziehungen
            </p>
            <div className="flex justify-center space-x-6 text-sm opacity-75">
              <a href="#" className="hover:opacity-100 transition-opacity">Impressum</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;