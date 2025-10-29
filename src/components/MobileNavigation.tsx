import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

interface MobileNavigationProps {
  onLinkClick?: () => void;
}

export const MobileNavigation = ({ onLinkClick }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    onLinkClick?.();
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menü öffnen</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <SheetHeader className="text-left">
            <SheetTitle className="text-lg font-display">
              Navigation
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            <button
              onClick={() => handleLinkClick('#services')}
              className="text-left py-3 px-2 text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              Leistungen
            </button>
            <button
              onClick={() => handleLinkClick('#about')}
              className="text-left py-3 px-2 text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              Über mich
            </button>
            <button
              onClick={() => handleLinkClick('#reviews')}
              className="text-left py-3 px-2 text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              Klientenreviews
            </button>
            <button
              onClick={() => handleLinkClick('#faq')}
              className="text-left py-3 px-2 text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              FAQ
            </button>
            <button
              onClick={() => handleLinkClick('#contact')}
              className="text-left py-3 px-2 text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              Kontakt
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};