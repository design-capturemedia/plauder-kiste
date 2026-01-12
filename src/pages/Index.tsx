import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Brain, Users, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import { MobileNavigation } from "@/components/MobileNavigation";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-display font-medium text-foreground">
              Hypnosetherapie & Coaching
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Leistungen
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Über mich
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                Klientenreviews
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground leading-tight">
                  Dein Weg zu mehr
                  <span className="text-primary block">Lebensqualität</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Professionelle Hypnosetherapie und Beziehungscoaching im Grossraum Zürich. In vertrauensvoller Atmosphäre finden wir Lösungen für Deine persönlichen Herausforderungen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="shadow-soft h-12 px-6"
                  asChild
                >
                  <a href="#contact-form" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Kontaktformular
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
              <p className="text-center mt-3 text-sm text-muted-foreground italic">
                Michèle Raue - Hypnose- und Paartherapeutin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-4">
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
                <CardTitle className="text-lg font-display font-medium">Hypnosetherapie</CardTitle>
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
                <CardTitle className="text-lg font-display font-medium">Paar- & Beziehungscoaching</CardTitle>
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
                <CardTitle className="text-lg font-display font-medium">Preise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 bg-gradient-soft rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Einzeltherapie</h4>
                    <p className="text-base font-display text-foreground">CHF 140.-</p>
                    <p className="text-sm text-muted-foreground">pro Stunde</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-soft rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Paartherapie</h4>
                    <p className="text-base font-display text-foreground">CHF 220.-</p>
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
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-4">
                Über mich
              </h2>
            </div>
            
            <div className="space-y-8">
              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-6 p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Mein Name ist Michèle Raue. Seit den späten achtziger Jahren habe ich in den Medien, in der Kommunikation, selbständig in der Modebranche und im höheren Management diverser Firmen und Branchen gearbeitet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Neben meinen beruflichen Erfolgen war die Persönlichkeitsentwicklung immer ein zentrales Thema, zu welchem ich viele Seminare besucht und mich stetig weitergebildet habe. Selbstreflexion, Meditation und Selbsthypnose gehören zu meinem täglichen Leben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2016 hat ein einschneidendes Erlebnis dazu geführt, dass ich mein Leben neu gestalten und meiner Passion als Lebenscoach endlich nachgehen konnte. Meine reiche Lebenserfahrung und mein Talent auf andere Menschen einzugehen kann ich seit 2018 als Hypnose- und Paar-Therapeutin einsetzen und vielen Menschen damit helfen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ich bin selbst tief überzeugt von der Wirkung der therapeutischen Hypnose. Als Klientin durfte ich schon viele Hypnosesitzungen erfahren.
                  </p>
                  <h3 className="text-base font-display font-medium text-foreground mt-6 mb-3">
                    Meine Philosophie
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In uns allen steckt ein riesiges Potenzial an Ressourcen. Ich stehe für lösungsorientiertes Arbeiten und Kurzzeit-Therapien. Wir erarbeiten zusammen deinen Weg zu einem ausgeglichenen und besseren Leben. Ich biete dir einen respektvollen Umgang in einem persönlichen und vertrauensvollen Raum, in dem du dich entfalten kannst.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-display font-medium">Qualifikationen und Ausbildungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Diplom OMNI Hypnosetherapie</p>
                    <p>• Diplom HypnoKids Hypnose für Kinder und Jugendliche</p>
                    <p>• Mitglied im Schweizerischen Berufsverband für Hypnosetherapie</p>
                    <p>• NGH National Guild of Hypnotists</p>
                    <p>• Coaching Practitioner</p>
                    <p>• dipl. Beziehungs- und Paar Coach CIS</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-4">
                Das sagen Klient*innen
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Erfahrungen und Rückmeldungen von Menschen, die ihren Weg gefunden haben
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Hätte ich diese Therapieform nur schon früher gewählt. Ich bin mir über so vieles klar geworden und spüre endlich mal eine Veränderung. Ich konnte die wichtigsten Stolpersteine erkennen und endlich wegräumen."
                  </p>
                  <p className="text-sm font-medium text-foreground">Sarah, 45</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Meine Mutter war schon bei Michèle und hat total geschwärmt von der Hypnose bei ihr. Darum habe ich mich auch entschieden etwas zu ändern. Man kann wirklich extrem gut reden mit Michèle. Sie weiss einfach immer einen Rat. Ich glaube wirklich, ich war noch nie so ehrlich zu einer Person."
                  </p>
                  <p className="text-sm font-medium text-foreground">Jasmine, 33</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Ich konnte mich auf nichts mehr konzentrieren, die Noten wurden schlechter und ich konnte einfach nicht mehr einschlafen. Michèle hat mir beigebracht, wie ich mir selber helfen kann. Ich bin mega froh und viel weniger gestresst."
                  </p>
                  <p className="text-sm font-medium text-foreground">Lea, 14</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Da lief einiges schief in meinem Leben. Ich wusste nicht mehr was oben und unten ist. Nach der Hypnosetherapie ist mir so viel klar geworden. Ich konnte einfach nicht hinsehen und war wie bewegungsunfähig. Jetzt läuft es viel besser."
                  </p>
                  <p className="text-sm font-medium text-foreground">Hakan, 59</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Michèle hat mich durch meine Trennung von meiner Frau begleitet. In der Hypnose habe ich so deutlich gespürt, wie unglücklich ich war. Ich hatte überhaupt keine Energie mehr. Ich habe mich wieder gefunden und die Lebensenergie auch."
                  </p>
                  <p className="text-sm font-medium text-foreground">Rolf, 47</p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Wir wussten nicht, wie weiter. Alles war so belastend, anstrengend, verletzend. Ohne dieses Paarcoaching hätten wir wohl aufgegeben. Jetzt haben wir gelernt, wie wir auch in ganz schwierigen Situationen kommunizieren können. Und wir wissen endlich, was jeder für sich – und was wir als Paar wollen. Es ist unglaublich, aber wir haben uns noch einmal neu kennengelernt."
                  </p>
                  <p className="text-sm font-medium text-foreground">Simone & Yves</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-4">
                Häufige Fragen zur Hypnose
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Alles, was du über Hypnosetherapie wissen solltest
              </p>
            </div>
            
            <Card className="shadow-card border-0 bg-card">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Was ist Hypnose?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ein ganz natürlicher Zustand der körperlichen und mentalen Tiefenentspannung. Deine Aufmerksamkeit richtet sich nach innen und der Zugang zu Deinem Unterbewusstsein und dort verankerten Glaubenssätzen wird möglich. So können ungewollte und behindernde Muster erkannt und effizient aufgelöst werden.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Was passiert in der Hypnose-Sitzung?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                      <p>Nach einem klärenden Vorgespräch, das in einer Erstsitzung etwas länger sein kann, klären wir deine Anliegen und alle offenen Fragen.</p>
                      <p>Anschliessend bringen dich meine Entspannungstechniken zur Ruhe und ganz nah zu Dir selbst. Wer schon meditiert hat, kennt den wunderbaren Zustand von innerer Ruhe und Klarheit. In diesem Zustand können Glaubenssätze und emotionale Verstrickungen bearbeitet und aufgelöst werden.</p>
                      <p>Nach der Hypnose fühlst Du Dich leicht und zufrieden. In den kommenden Tagen wirst Du eine Veränderung spüren.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Schlafe ich in der Hypnose?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      In der Hypnose ist man trotz der Entspannung wach, aufmerksam und fokussiert. Man kann sprechen, alles hören und man kann sich auch bewegen, wenn es nötig sein sollte.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Verliere ich in der Hypnose die Kontrolle?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      In keinem Moment. Der Selbstschutz und die Kontrolle über Deine Gedanken sind aktiv. Du könntest den hypnotischen Zustand jederzeit selbst beenden. Ich begleite Dich achtsam durch den Prozess. Die Hypnose ist eine Zusammenarbeit und bringt Dir die Kontrolle über Dein Leben zurück.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Kann Hypnose Krankheiten heilen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                      <p>Die Hypnose verzeichnet grosse Erfolge in der Behandlung von psychosomatischen Krankheiten.</p>
                      <p>Wenn der Körper durch traumatische Erlebnisse, lähmende Gedanken, ungesunden Stress oder unverarbeitete Probleme reagiert, sind wir meist so beschäftigt, dass wir die Zeichen nicht erkennen. So können chronische Krankheiten und Schmerzen entstehen - ausgelöst durch die Psyche, also psychosomatisch.</p>
                      <p>In der Hypnose gehen wir der Ursache auf den Grund. Es werden keine Symptome unterdrückt, sondern wir suchen und finden den Auslöser.</p>
                      <p>Durch die tiefe Entspannung und das stressfreie Spüren des eigenen Körpers können die Selbstheilungskräfte angekurbelt werden und der Körper kann sich regenerieren. Die Hypnosetherapie kann auch bei anderen Krankheitsbildern eine wertvolle Ergänzung zur Schulmedizin sein. Sie ersetzt bei schweren Erkrankungen keinesfalls einen Arzt oder verschriebene Medikamente.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Kann jeder hypnotisiert werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                      <p>Grundsätzlich ist jeder Mensch hypnotisierbar - wenn er es will.</p>
                      <p>Selbstsichere und fantasievolle Menschen haben es vielleicht etwas leichter sich dem angenehmen Zustand der Entspannung und des Loslassens hinzugeben. Die Tiefe der Hypnose ist unterschiedlich und kann von der leichten körperlichen und mentalen Entspannung bis hin zur totalen Tiefenentspannung ohne Schmerzempfinden reichen.</p>
                      <p>Wer sich dagegen wehrt oder nicht will, kann nicht hypnotisiert werden.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Wie viele Sitzungen braucht es, um ein Problem zu lösen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Hypnose ist keine Langzeittherapie. Oft reicht eine einzige Sitzung, um ein Problem zu erkennen und zu lösen. Manchmal braucht es eine zweite oder dritte Sitzung, wenn Deine Geschichte etwas komplexer ist.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      Wird die Hypnosetherapie von der Krankenkasse bezahlt?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Leider ist diese Therapie noch nicht krankenkassenanerkannt.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-4">
                Kontakt & Terminvereinbarung
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Bitte kontaktiere mich unverbindlich telefonisch oder über das Kontaktformular.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <Card className="shadow-card border-0 bg-card">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefon</p>
                      <a 
                        href="tel:+41796055888" 
                        className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                      >
                        +41 79 605 58 88
                      </a>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-Mail</p>
                      <a 
                        href="mailto:info@hypnose-und-paartherapie.ch"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                      >
                        info@hypnose-und-paartherapie.ch
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-muted-foreground">
                        Blattenstrasse 12<br />
                        8603 Schwerzenbach<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-display font-medium">Erstberatung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Gerne biete ich dir ein unverbindliches Erstgespräch an, in dem wir 
                    deine Anliegen besprechen und schauen, wie ich dich bestmöglich unterstützen kann.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-therapy-neutral/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">Telefonische Erstberatung (ca. 20 Minuten)</p>
                      <p className="text-sm text-muted-foreground">Kostenlos & unverbindlich</p>
                    </div>
                    <Button className="w-full shadow-soft h-12" size="lg" asChild>
                      <a href="#contact-form">
                        <Phone className="mr-2 h-4 w-4" />
                        Kontaktformular
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
              <Link to="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link>
              <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;