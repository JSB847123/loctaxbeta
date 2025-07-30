import { useState } from "react";
import { SearchHeader } from "@/components/SearchHeader";
import { QuickLinks } from "@/components/QuickLinks";
import { SearchResults } from "@/components/SearchResults";
import { UserSidebar } from "@/components/UserSidebar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockSearchResults = [
  {
    id: "1",
    title: "지방세법 제11조 (재산세의 납세의무자)",
    description: "재산세는 과세기준일 현재 토지, 건축물, 주택을 소유한 자에게 부과한다. 다만, 지상권, 전세권 그 밖에 사용·수익을 목적으로 하는 권리의 목적이 된 토지의 경우에는 그 권리자에게 부과할 수 있다.",
    type: "law" as const,
  },
  {
    id: "2", 
    title: "대법원 2023도1234 판결",
    description: "재산세 부과처분 취소 사건에서 과세객체의 소유권 인정 범위에 관한 판시",
    court: "대법원",
    date: "2023.05.15",
    caseNumber: "2023도1234",
    type: "precedent" as const,
  }
];

const mockRecentItems = [
  { id: "1", title: "지방세법 시행령", date: "2024.01.20" },
  { id: "2", title: "재산세 관련 판례", date: "2024.01.19" }
];

const mockFavoriteItems = [
  { id: "1", title: "지방세법", description: "지방세 전반에 관한 법률" },
  { id: "2", title: "국세기본법", description: "국세 기본 원칙과 절차" }
];

const mockNotes = [
  "재산세 계산 시 주의사항 확인 필요",
  "지방세법 개정 내용 검토"
];

const mockFrequentSites = [
  { name: "국가법령정보센터", url: "https://www.law.go.kr" },
  { name: "대법원 종합법률정보", url: "https://glaw.scourt.go.kr" }
];

const Index = () => {
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockSearchResults);
      setIsSearching(false);
      toast({
        title: "검색 완료",
        description: `"${query}"에 대한 검색 결과를 찾았습니다.`,
      });
    }, 1000);
  };

  const handleQuickLinkClick = (title: string, isExternal?: boolean) => {
    if (isExternal) {
      toast({
        title: "외부 링크",
        description: "재산세 계산기 페이지로 이동합니다. (베타 버전)",
      });
      // Here you would open external calculator
      return;
    }
    
    toast({
      title: "검색 시작",
      description: `${title} 관련 법령을 검색합니다.`,
    });
    handleSearch(title);
  };

  const handleResultClick = (result: any) => {
    toast({
      title: "상세 내용",
      description: `${result.title}의 상세 내용을 확인합니다.`,
    });
  };

  const handleSidebarItemClick = (item: any) => {
    toast({
      title: "문서 열기",
      description: `${item.title}을 다시 열었습니다.`,
    });
  };

  const handleSiteClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              법령 정보 포털
            </h1>
            <p className="text-xl text-white/90 mb-8">
              법령과 판례를 쉽고 빠르게 검색하세요
            </p>
          </div>
          
          <SearchHeader onSearch={handleSearch} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {!hasSearched ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">빠른 링크</h2>
                  <QuickLinks onLinkClick={handleQuickLinkClick} />
                </div>
                
                <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    법령 정보 포털에 오신 것을 환영합니다
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    이 포털에서는 법령 정보, 판례 검색, 재산세 계산기 등의 기능을 제공합니다. 
                    상단의 검색창을 통해 필요한 법령이나 판례를 찾아보세요.
                  </p>
                </div>
              </>
            ) : (
              <SearchResults 
                results={searchResults}
                totalCount={searchResults.length}
                onResultClick={handleResultClick}
                isLoading={isSearching}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <UserSidebar 
              recentItems={mockRecentItems}
              favoriteItems={mockFavoriteItems}
              notes={mockNotes}
              frequentSites={mockFrequentSites}
              onItemClick={handleSidebarItemClick}
              onSiteClick={handleSiteClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
