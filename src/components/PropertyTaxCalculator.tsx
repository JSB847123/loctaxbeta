import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PropertyTaxCalculator = () => {
  const { toast } = useToast();

  const handleHouseCalculatorClick = () => {
    window.open('https://empty-page-seed.lovable.app/', '_blank', 'noopener,noreferrer');
    toast({
      title: "주택분 재산세 계산기",
      description: "계산기 페이지가 새 창에서 열렸습니다.",
    });
  };

  const handleLandCalculatorClick = () => {
    window.open('https://landtaxtestv1.lovable.app/', '_blank', 'noopener,noreferrer');
    toast({
      title: "토지분 재산세 계산기",
      description: "계산기 페이지가 새 창에서 열렸습니다.",
    });
  };

  return (
    <div className="space-y-4">
      <Card className="bg-card/90 backdrop-blur shadow-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-law-primary flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            주택분 재산세 계산기(개발 중)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleHouseCalculatorClick}
            className="w-full bg-law-primary hover:bg-law-primary/90 text-primary-foreground"
          >
            계산기 실행
          </Button>
        </CardContent>
      </Card>
      
      <Card className="bg-card/90 backdrop-blur shadow-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-law-primary flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            토지분 재산세 계산기(개발 중)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleLandCalculatorClick}
            className="w-full bg-law-primary hover:bg-law-primary/90 text-primary-foreground"
          >
            계산기 실행
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};