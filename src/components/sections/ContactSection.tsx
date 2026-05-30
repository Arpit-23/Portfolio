import { Mail, Phone, Send } from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/index";
import { personalInfo } from "../../data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-12">
      <Card className="bg-[#2b7fff] text-blue-50 p-8 gap-4">
        <CardContent className="flex p-0 justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl leading-8">
              Let's build something together
            </h2>
            <p className="text-blue-50/80 text-sm mt-2">
              Open to full-time and freelance opportunities. Reach out anytime.
            </p>
            <div className="text-sm flex mt-4 items-center gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-white/90 transition-colors"
              >
                <Mail className="size-4" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-white/90 transition-colors"
              >
                <Phone className="size-4" />
                {personalInfo.phone}
              </a>
            </div>
          </div>
          <a href={`mailto:${personalInfo.email}`}>
            <Button className="bg-white text-zinc-950 hover:bg-zinc-100">
              <Send className="size-4 mr-2" />
              Contact Me
            </Button>
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
