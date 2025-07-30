import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Gavel, TrendingUp } from "lucide-react";

const quickLinks = [
  {
    title: "국세기본법",
    description: "국세 기본 원칙과 절차",
    icon: FileText,
    category: "국세"
  },
  {
    title: "지방세법",
    description: "지방세 부과와 징수",
    icon: TrendingUp,
    category: "지방세"
  },
  {
    title: "부동산 관련법",
    description: "부동산 거래와 세무",
    icon: Gavel,
    category: "부동산"
  },
  {
    title: "재산세 계산기",
    description: "간편한 재산세 계산 (베타)",
    icon: Calculator,
    category: "도구",
    isExternal: true
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
            className="group cursor-pointer hover:shadow-elevated transition-all duration-300 bg-gradient-card border-law-blue/10 hover:border-law-blue/30"
            onClick={() => onLinkClick(link.title, link.isExternal)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-law-blue/10 rounded-lg group-hover:bg-law-blue/20 transition-colors">
                  <Icon className="h-4 w-4 text-law-blue" />
                </div>
                <span className="text-xs text-law-blue font-medium">
                  {link.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardTitle className="text-base font-semibold mb-2 group-hover:text-law-blue transition-colors">
                {link.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {link.description}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}