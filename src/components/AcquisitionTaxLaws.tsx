import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Book } from "lucide-react";

interface LawItem {
  title: string;
  url: string;
}

interface LawSection {
  title: string;
  laws: LawItem[];
}

const acquisitionTaxLaws: LawSection[] = [];

interface AcquisitionTaxLawsProps {
  onBack: () => void;
}

export const AcquisitionTaxLaws = ({ onBack }: AcquisitionTaxLawsProps) => {
  const handleLawClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white/80 backdrop-blur shadow-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl font-bold text-law-primary flex items-center gap-2">
            <Book className="h-5 w-5" />
            취득세 관련법
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {acquisitionTaxLaws.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              취득세 관련 법령 정보가 준비 중입니다.
            </p>
          </div>
        ) : (
          acquisitionTaxLaws.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-lg text-law-primary mb-3 border-b border-law-accent/30 pb-2">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {section.laws.map((law, lawIndex) => (
                  <button
                    key={lawIndex}
                    onClick={() => handleLawClick(law.url)}
                    className="p-3 text-left border rounded-lg hover:bg-law-accent/10 hover:border-law-primary transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground group-hover:text-law-primary">
                        {law.title}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-law-primary flex-shrink-0 ml-2" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};