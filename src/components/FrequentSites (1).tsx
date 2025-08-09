import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe } from "lucide-react";

const frequentSites = [
  {
    title: "부동산 공시가격 알리미",
    url: "https://www.realtyprice.kr/notice/main/mainBody.htm",
    description: "부동산 공시가격 조회 및 정보"
  },
  {
    title: "한국지방세연구원",
    url: "https://www.olta.re.kr/main.do",
    description: "지방세 정책연구 및 자료"
  },
  {
    title: "택스넷",
    url: "https://www.taxnet.co.kr/",
    description: "세무 관련 종합 정보"
  },
  {
    title: "렌트홈",
    url: "https://intra.renthome.go.kr/intraportal/login/login.open",
    description: "주택임대차 관련 서비스"
  },
];

export const FrequentSites = () => {
  const handleSiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white/80 backdrop-blur shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-law-primary flex items-center gap-2">
          <Globe className="h-5 w-5" />
          자주가는 사이트
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {frequentSites.map((site, index) => (
            <button
              key={index}
              onClick={() => handleSiteClick(site.url)}
              className="p-4 text-left border rounded-lg hover:bg-law-accent/10 hover:border-law-primary transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground group-hover:text-law-primary">
                  {site.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-law-primary flex-shrink-0 ml-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                {site.description}
              </p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};