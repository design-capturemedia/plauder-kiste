import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Mail } from "lucide-react";

// EmailJS Configuration
// To set up: 
// 1. Create account at https://www.emailjs.com/
// 2. Add email service (Gmail, Outlook, etc.)
// 3. Create email template with these variables: {{from_name}}, {{from_email}}, {{from_phone}}, {{message}}
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Update the values below
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Bitte geben Sie Ihren Namen ein" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),
  phone: z.string()
    .trim()
    .min(1, { message: "Bitte geben Sie Ihre Telefonnummer ein" })
    .max(20, { message: "Telefonnummer darf maximal 20 Zeichen lang sein" }),
  email: z.string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  message: z.string()
    .trim()
    .min(1, { message: "Bitte geben Sie eine Nachricht ein" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email via EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
        to_email: "carlo.faessler@cptr.com", // Test email address
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      toast.success("Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.");
      form.reset();
    } catch (error: any) {
      console.error("Email sending error:", error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-card border-0 bg-card max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-lg font-display font-medium">Kontaktieren Sie mich</CardTitle>
        <CardDescription>
          Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Schreiben Sie mir gerne eine Nachricht.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ihr Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefonnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="Ihre Telefonnummer" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="ihre.email@beispiel.ch" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ihre Nachricht an mich..." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
