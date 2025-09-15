import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  court?: string;
  date?: string;
  caseNumber?: string;
  type: 'law' | 'precedent';
}

interface SearchResultsProps {
  results: SearchResult[];
  totalCount: number;
  onResultClick: (result: SearchResult) => void;
  isLoading?: boolean;
}

export function SearchResults({ results, totalCount, onResultClick, isLoading = false }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-law-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">검색 중...</p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-law-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <ExternalLink className="h-6 w-6 text-law-primary" />
        </div>
        <p className="text-lg font-medium text-foreground">검색 결과가 없습니다</p>
        <p className="text-muted-foreground mt-2">다른 키워드로 검색해보세요</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          검색 결과 <span className="text-law-primary">({totalCount}개)</span>
        </h3>
      </div>
      
      <div className="space-y-4">
        {results.map((result) => (
          <Card 
            key={result.id}
            className="group cursor-pointer hover:shadow-elevated transition-all duration-300 bg-card/80 backdrop-blur border-border hover:border-law-primary/30"
            onClick={() => onResultClick(result)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        result.type === 'precedent' 
                          ? 'border-green-500/30 text-green-600' 
                          : 'border-law-border text-law-primary'
                      }`}
                    >
                      {result.type === 'precedent' ? '판례' : '법령'}
                    </Badge>
                    {result.caseNumber && (
                      <span className="text-xs text-muted-foreground">
                        {result.caseNumber}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-law-primary transition-colors line-clamp-2">
                    {result.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {result.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {result.court && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {result.court}
                    </div>
                  )}
                  {result.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {result.date}
                    </div>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-law-primary hover:text-law-primary/80 hover:bg-law-accent"
                >
                  자세히 보기
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}