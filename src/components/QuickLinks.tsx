import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Gavel, TrendingUp, Stamp } from "lucide-react";

const quickLinks = [
  {
    title: "취득세 관련법",
    description: "",
    icon: TrendingUp,
    category: ""
  },
  {
    title: "재산세 관련법",
    description: "",
    icon: Gavel,
    category: ""
  },
  {
    title: "등록면허세 관련법",
    description: "",
    icon: Stamp,
    category: ""
  },
  {
    title: "내가 정리한 관련 법",
    description: "",
    icon: FileText,
    category: ""
  }
];

interface QuickLinksProps {
  onLinkClick: (title: string, isExternal?: boolean) => void;
}

export function QuickLinks({ onLinkClick }: QuickLinksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {quickLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Card 
            key={index}
            className="group cursor-pointer hover:shadow-elevated transition-all duration-300 bg-card/80 backdrop-blur border-border hover:border-law-primary/30"
            onClick={() => onLinkClick(link.title, link.isExternal)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent rounded-lg group-hover:bg-accent/80 transition-colors">
                  <Icon className="h-4 w-4 text-law-primary" />
                </div>
                {link.category && (
                  <span className="text-xs text-law-secondary font-medium">
                    {link.category}
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardTitle className="text-base font-semibold mb-2 group-hover:text-law-primary transition-colors">
                {link.title}
              </CardTitle>
              {link.description && (
                <CardDescription className="text-sm text-muted-foreground">
                  {link.description}
                </CardDescription>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}