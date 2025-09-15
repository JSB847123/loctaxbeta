import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const lawLinks = [
  { title: "지방세법", url: "https://law.go.kr/법령/지방세법" },
  { title: "지방세법 시행령", url: "https://law.go.kr/법령/지방세법 시행령" },
  { title: "지방세법 시행규칙", url: "https://law.go.kr/법령/지방세법 시행규칙" },
  { title: "지방세특례제한법", url: "https://law.go.kr/법령/지방세특례제한법" },
  { title: "지방세특례제한법 시행령", url: "https://law.go.kr/법령/지방세특례제한법 시행령" },
  { title: "지방세특례제한법 시행규칙", url: "https://law.go.kr/법령/지방세특례제한법 시행규칙" },
  { title: "지방세기본법", url: "https://law.go.kr/법령/지방세기본법" },
  { title: "지방세기본법 시행령", url: "https://law.go.kr/법령/지방세기본법 시행령" },
  { title: "지방세기본법 시행규칙", url: "https://law.go.kr/법령/지방세기본법 시행규칙" },
  { title: "지방세징수법", url: "https://law.go.kr/법령/지방세징수법" },
  { title: "지방세징수법 시행령", url: "https://law.go.kr/법령/지방세징수법 시행령" },
  { title: "지방세징수법 시행규칙", url: "https://law.go.kr/법령/지방세징수법 시행규칙" },
  { title: "농어촌특별세법", url: "https://law.go.kr/법령/농어촌특별세법" },
];

export const BasicLawLinks = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-card/80 backdrop-blur shadow-card border-law-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-law-primary flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          지방세 기본 법령
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {lawLinks.map((law, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(law.url)}
              className="p-3 text-left border border-border rounded-lg hover:bg-accent hover:border-law-primary transition-colors duration-200 group bg-card/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground group-hover:text-law-primary">
                  {law.title}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-law-primary" />
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};