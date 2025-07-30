import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star } from "lucide-react";

interface LawCardProps {
  title: string;
  description: string;
  category: string;
  lastUpdated?: string;
  onClick?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function LawCard({ 
  title, 
  description, 
  category, 
  lastUpdated, 
  onClick,
  isFavorite = false,
  onToggleFavorite 
}: LawCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-elevated transition-all duration-300 bg-gradient-card border-law-blue/10 hover:border-law-blue/30">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-law-blue" />
              <Badge variant="outline" className="text-xs border-law-blue/30 text-law-blue">
                {category}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-law-blue transition-colors">
              {title}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.();
            }}
            className="shrink-0 hover:bg-law-blue/10"
          >
            <Star className={`h-4 w-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </CardDescription>
        <div className="flex items-center justify-between">
          {lastUpdated && (
            <span className="text-xs text-muted-foreground">
              최종 업데이트: {lastUpdated}
            </span>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="text-law-blue hover:text-law-blue-dark hover:bg-law-blue/10"
          >
            자세히 보기
            <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}