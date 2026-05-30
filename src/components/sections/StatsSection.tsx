import { Briefcase, Code, Layers } from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/index";
import { stats } from "../../data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Code,
  Layers,
};

export default function StatsSection() {
  return (
    <section className="grid grid-cols-3 mt-12 gap-6">
      {stats.map(({ label, value, icon }) => {
        const Icon = iconMap[icon] ?? Briefcase;
        return (
          <Card key={label} className="p-6 gap-2">
            <CardHeader className="p-0 gap-1">
              <Icon className="size-6 text-[#2b7fff]" />
              <CardTitle className="font-bold text-3xl leading-9">{value}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#71717b] text-sm leading-5">{label}</p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
