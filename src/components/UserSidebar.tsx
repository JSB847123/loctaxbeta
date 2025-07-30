import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, StickyNote, Globe } from "lucide-react";

interface SidebarItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  url?: string;
}

interface UserSidebarProps {
  recentItems: SidebarItem[];
  favoriteItems: SidebarItem[];
  notes: string[];
  frequentSites: { name: string; url: string }[];
  onItemClick: (item: SidebarItem) => void;
  onSiteClick: (url: string) => void;
}

export function UserSidebar({ 
  recentItems, 
  favoriteItems, 
  notes,
  frequentSites,
  onItemClick,
  onSiteClick 
}: UserSidebarProps) {
  return (
    <div className="space-y-6">
      {/* 최근 본 기사 */}
      <Card className="bg-gradient-card border-law-blue/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4 text-law-blue" />
            최근 본 기사
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {recentItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">최근 본 기사가 없습니다</p>
          ) : (
            recentItems.slice(0, 5).map((item) => (
              <div 
                key={item.id}
                className="p-3 bg-white/50 rounded-lg cursor-pointer hover:bg-white/80 transition-colors"
                onClick={() => onItemClick(item)}
              >
                <p className="text-sm font-medium line-clamp-2 mb-1">{item.title}</p>
                {item.date && (
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* 즐겨찾는 기사 */}
      <Card className="bg-gradient-card border-law-blue/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            즐겨찾는 기사
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {favoriteItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">즐겨찾기가 없습니다</p>
          ) : (
            favoriteItems.slice(0, 5).map((item) => (
              <div 
                key={item.id}
                className="p-3 bg-white/50 rounded-lg cursor-pointer hover:bg-white/80 transition-colors"
                onClick={() => onItemClick(item)}
              >
                <p className="text-sm font-medium line-clamp-2 mb-1">{item.title}</p>
                {item.description && (
                  <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* 자주 방문하는 사이트 */}
      <Card className="bg-gradient-card border-law-blue/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Globe className="h-4 w-4 text-law-blue" />
            자주 방문하는 사이트
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          {frequentSites.length === 0 ? (
            <p className="text-sm text-muted-foreground">등록된 사이트가 없습니다</p>
          ) : (
            frequentSites.map((site, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm h-auto p-2 hover:bg-white/80"
                onClick={() => onSiteClick(site.url)}
              >
                {site.name}
              </Button>
            ))
          )}
        </CardContent>
      </Card>

      {/* 메모 섹션 */}
      <Card className="bg-gradient-card border-law-blue/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <StickyNote className="h-4 w-4 text-law-blue" />
            메모
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          {notes.length === 0 ? (
            <p className="text-sm text-muted-foreground">메모가 없습니다</p>
          ) : (
            notes.slice(0, 3).map((note, index) => (
              <div key={index} className="p-2 bg-white/50 rounded text-xs">
                {note}
              </div>
            ))
          )}
          <Button variant="outline" size="sm" className="w-full mt-2 border-law-blue/30">
            메모 추가
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}