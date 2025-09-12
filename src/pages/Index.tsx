import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Users, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import { MobileNavigation } from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-display font-semibold text-foreground">
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
            <MobileNavigation />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                  Dein Weg zu mehr
                  <span className="text-primary block">Lebensqualität</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Professionelle Hypnosetherapie und Paarcoaching in vertrauensvoller Atmosphäre. 
                  Gemeinsam finden wir Lösungen für deine persönlichen Herausforderungen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="shadow-soft h-12 px-6"
                  asChild
                >
                  <a href="tel:+41795701816" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Termin vereinbaren
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-6" asChild>
                  <a href="#services">
                    Mehr erfahren
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="/lovable-uploads/2055aba2-395e-4ec2-bb27-5fa4b32e1798.png" 
                  alt="Professionelle Hypnosetherapeutin und Coach - Vertrauensvolle Beratung für Ihr Wohlbefinden"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Meine Leistungen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Individuelle Begleitung auf deinem Weg zu persönlichem Wachstum und erfüllten Beziehungen
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Hypnosetherapie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground">
                  Löse unbewusste Blockaden und erreiche deine Ziele durch professionelle Hypnosetherapie.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stressabbau und Burnoutprävention</li>
                  <li>• Ängste und Phobien überwinden</li>
                  <li>• Selbstvertrauen und Selbstwertgefühl stärken</li>
                  <li>• Umgang mit psychosomatischen Krankheiten lernen</li>
                  <li>• Suchtverhalten verstehen und überwinden</li>
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
                  Stärke deine Partnerschaft und findet gemeinsam zu mehr Verständnis und Nähe.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ihr dreht Euch als Paar im Kreis, Streit, Unverständnis, Frust</li>
                  <li>• Alte Verhaltensmuster entdecken und auflösen</li>
                  <li>• Den eigenen Boykott in einer Beziehung erkennen</li>
                  <li>• Finde einen respektvollen Umgang mit dir selbst und deiner*m Partner*in</li>
                  <li>• Gemeinsame Zukunft gestalten</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Pricing Information */}
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="shadow-card border-0 bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-display">Preise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 bg-gradient-soft rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Einzeltherapie</h4>
                    <p className="text-lg font-display text-foreground">CHF 140.-</p>
                    <p className="text-sm text-muted-foreground">pro Stunde</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-soft rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Paartherapie</h4>
                    <p className="text-lg font-display text-foreground">CHF 220.-</p>
                    <p className="text-sm text-muted-foreground">pro Stunde</p>
                  </div>
                </div>
                <div className="text-center mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>Eine Erstsitzung in der Hypnosetherapie dauert ca. 2 bis 2.5 Stunden</p>
                  <p>Ein Paarcoaching dauert ca. 90 Minuten</p>
                </div>
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
            
            <div className="space-y-8">
              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-6 p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Seit den späten achtziger Jahren habe ich in den Medien, in der Kommunikation, selbständig in der Modebranche und im höheren Management diverser Firmen und Branchen gearbeitet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Neben meinen beruflichen Erfolgen war die Persönlichkeitsentwicklung immer ein zentrales Thema, zu welchem ich viele Seminare besucht und mich stetig weitergebildet habe. Selbstreflexion, Meditation und Selbsthypnose gehören zu meinem täglichen Leben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2016 hat ein einschneidendes Erlebnis dazu geführt, dass ich mein Leben neu gestalten und meiner Passion als Lebenscoach endlich nachgehen konnte. Meine reiche Lebenserfahrung und mein Talent auf andere Menschen einzugehen kann ich als Hypnose- und Paar-Therapeutin einsetzen und vielen Menschen damit helfen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ich bin selbst tief überzeugt von der Wirkung der therapeutischen Hypnose. Als Klientin durfte ich schon viele Hypnosesitzungen erfahren.
                  </p>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-3">
                    Meine Philosophie
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In uns steckt ein riesiges Potenzial an Ressourcen. Ich arbeite lösungsorientiert. Wir erarbeiten zusammen einen für dich gehbaren Weg zu einem ausgeglichenen und besseren Leben. Ich stehe für einen respektvollen Umgang in einem persönlichen und vertrauensvollen Raum.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Qualifikationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Diplom OMNI Hypnosetherapie</p>
                    <p>• Diplom HypnoKids Hypnose für Kinder und Jugendliche</p>
                    <p>• Mitglied im Schweizerischen Berufsverband für Hypnosetherapie</p>
                    <p>• NGH National Guild of Hypnotists</p>
                    <p>• Coaching Practitioner</p>
                    <p>• Beziehungs- und Paarcoach</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                Kontakt & Terminvereinbarung
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Bitte kontaktiere mich unverbindlich telefonisch oder über das Kontaktformular.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-display">Praxis Informationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <a 
                        href="tel:+41795701816" 
                        className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                      >
                        +41 79 570 18 16
                      </a>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-Mail</p>
                      <a 
                        href="mailto:info@hypnose-therapie-raue.ch"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        info@hypnose-therapie-raue.ch
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Praxisadresse</p>
                      <p className="text-muted-foreground">
                        Burgstrasse 43<br />
                        9000 St. Gallen<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-display">Erstberatung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Gerne biete ich dir ein unverbindliches Erstgespräch an, in dem wir 
                    deine Anliegen besprechen und schauen, wie ich dich bestmöglich unterstützen kann.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-therapy-neutral/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">Erstberatung (30 Min.)</p>
                      <p className="text-sm text-muted-foreground">Kostenlos & unverbindlich</p>
                    </div>
                    <Button className="w-full shadow-soft h-12" size="lg" asChild>
                      <a href="tel:+41795701816">
                        <Phone className="mr-2 h-4 w-4" />
                        Jetzt Termin vereinbaren
                      </a>
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