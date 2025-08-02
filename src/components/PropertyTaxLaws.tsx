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

const propertyTaxLaws: LawSection[] = [
  {
    title: "통칙",
    laws: [
      { title: "지방세법 제104조 (정의)", url: "https://law.go.kr/법령/지방세법/제104조" },
      { title: "지방세법 제105조 (과세대상)", url: "https://law.go.kr/법령/지방세법/제105조" },
      { title: "지방세법 제106조 (과세대상의 구분 등)", url: "https://law.go.kr/법령/지방세법/제106조" },
      { title: "지방세법 제106조의2 (분리과세 대상 토지의 합리화 등)", url: "https://law.go.kr/법령/지방세법/제106조의2" },
      { title: "지방세법 제107조 (납세의무자)", url: "https://law.go.kr/법령/지방세법/제107조" },
      { title: "지방세법 제108조 (납세지)", url: "https://law.go.kr/법령/지방세법/제108조" },
      { title: "지방세법 제109조 (비과세)", url: "https://law.go.kr/법령/지방세법/제109조" },
    ]
  },
  {
    title: "지방세법 시행령 - 통칙",
    laws: [
      { title: "지방세법 시행령 제101조 (별도합산과세 대상 토지의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제101조" },
      { title: "지방세법 시행령 제102조 (분리과세대상 토지의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제102조" },
      { title: "지방세법 시행령 제103조 (건축물의 범위 등)", url: "https://law.go.kr/법령/지방세법 시행령/제103조" },
      { title: "지방세법 시행령 제103조의2 (철거·멸실된 건축물 또는 주택의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제103조의2" },
      { title: "지방세법 시행령 제104조 (도시지역)", url: "https://law.go.kr/법령/지방세법 시행령/제104조" },
      { title: "지방세법 시행령 제105조 (주택 부속토지의 범위 산정)", url: "https://law.go.kr/법령/지방세법 시행령/제105조" },
      { title: "지방세법 시행령 제105조의2 (공부상 등재현황에 따른 부과)", url: "https://law.go.kr/법령/지방세법 시행령/제105조의2" },
      { title: "지방세법 시행령 제105조의3 (분리과세대상 토지 타당성 평가등)", url: "https://law.go.kr/법령/지방세법 시행령/제105조의3" },
      { title: "지방세법 시행령 제106조 (납세의무자의 범위 등)", url: "https://law.go.kr/법령/지방세법 시행령/제106조" },
      { title: "지방세법 시행령 제107조 (수익사업의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제107조" },
      { title: "지방세법 시행령 제108조 (비과세)", url: "https://law.go.kr/법령/지방세법 시행령/제108조" },
    ]
  },
  {
    title: "과세표준과 세율",
    laws: [
      { title: "지방세법 제110조 (과세표준)", url: "https://law.go.kr/법령/지방세법/제110조" },
      { title: "지방세법 제111조 (세율)", url: "https://law.go.kr/법령/지방세법/제111조" },
      { title: "지방세법 제111조의2 (1세대 1주택 세율 특례)", url: "https://law.go.kr/법령/지방세법/제111조의2" },
      { title: "지방세법 제112조 (재산세 도시지역분)", url: "https://law.go.kr/법령/지방세법/제112조" },
      { title: "지방세법 제113조 (세율적용)", url: "https://law.go.kr/법령/지방세법/제113조" },
      { title: "지방세법 시행령 제109조 (공정시장가액비율)", url: "https://law.go.kr/법령/지방세법 시행령/제109조" },
      { title: "지방세법 시행령 제109조의2 (과세표준상한액)", url: "https://law.go.kr/법령/지방세법 시행령/제109조의2" },
      { title: "지방세법 시행령 제110조 (공장용 건축물)", url: "https://law.go.kr/법령/지방세법 시행령/제110조" },
      { title: "지방세법 시행령 제110조의2 (재산세 세율 특례 대상 1세대 1주택의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제110조의2" },
      { title: "지방세법 시행령 제111조 (토지 등의 범위)", url: "https://law.go.kr/법령/지방세법 시행령/제111조" },
      { title: "지방세법 시행령 제112조 (주택의 구분)", url: "https://law.go.kr/법령/지방세법 시행령/제112조" },
    ]
  },
  {
    title: "지역자원시설세",
    laws: [
      { title: "지방세법 제141조 (목적)", url: "https://law.go.kr/법령/지방세법/제141조" },
      { title: "지방세법 제142조 (과세대상)", url: "https://law.go.kr/법령/지방세법/제142조" },
      { title: "지방세법 제143조 (납세의무자)", url: "https://law.go.kr/법령/지방세법/제143조" },
      { title: "지방세법 제144조 (납세지)", url: "https://law.go.kr/법령/지방세법/제144조" },
      { title: "지방세법 제145조 (비과세)", url: "https://law.go.kr/법령/지방세법/제145조" },
      { title: "지방세법 제146조 (과세표준과 세율)", url: "https://law.go.kr/법령/지방세법/제146조" },
      { title: "지방세법 제147조 (부과·징수)", url: "https://law.go.kr/법령/지방세법/제147조" },
      { title: "지방세법 제148조 (소액 징수면제)", url: "https://law.go.kr/법령/지방세법/제148조" },
      { title: "지방세법 시행령 제136조 (과세대상)", url: "https://law.go.kr/법령/지방세법 시행령/제136조" },
      { title: "지방세법 시행령 제137조 (비과세)", url: "https://law.go.kr/법령/지방세법 시행령/제137조" },
      { title: "지방세법 시행령 제138조 (화재위험 건축물 등)", url: "https://law.go.kr/법령/지방세법 시행령/제138조" },
      { title: "지방세법 시행령 제139조 (납세고지)", url: "https://law.go.kr/법령/지방세법 시행령/제139조" },
      { title: "지방세법 시행규칙 제74조 (건축물 시가표준액의 기준)", url: "https://law.go.kr/법령/지방세법 시행규칙/제74조" },
      { title: "지방세법 시행규칙 제75조 (건축물 시가표준액의 기준)", url: "https://law.go.kr/법령/지방세법 시행규칙/제75조" },
    ]
  },
  {
    title: "지방교육세",
    laws: [
      { title: "지방세법 제149조 (목적)", url: "https://law.go.kr/법령/지방세법/제149조" },
      { title: "지방세법 제150조 (납세의무자)", url: "https://law.go.kr/법령/지방세법/제150조" },
      { title: "지방세법 제151조 (과세표준과 세율)", url: "https://law.go.kr/법령/지방세법/제151조" },
      { title: "지방세법 제152조 (신고 및 납부와 부과·징수)", url: "https://law.go.kr/법령/지방세법/제152조" },
      { title: "지방세법 제153조 (부족세액의 추징 및 가산세)", url: "https://law.go.kr/법령/지방세법/제153조" },
      { title: "지방세법 제154조 (환급)", url: "https://law.go.kr/법령/지방세법/제154조" },
      { title: "지방세법 시행령 제140조 (납세고지)", url: "https://law.go.kr/법령/지방세법 시행령/제140조" },
      { title: "지방세법 시행령 제141조 (신고납부와 부과·징수)", url: "https://law.go.kr/법령/지방세법 시행령/제141조" },
    ]
  },
  {
    title: "부과·징수",
    laws: [
      { title: "지방세법 제114조 (과세기준일)", url: "https://law.go.kr/법령/지방세법/제114조" },
      { title: "지방세법 제115조 (납기)", url: "https://law.go.kr/법령/지방세법/제115조" },
      { title: "지방세법 제116조 (징수방법 등)", url: "https://law.go.kr/법령/지방세법/제116조" },
      { title: "지방세법 제117조 (물납)", url: "https://law.go.kr/법령/지방세법/제117조" },
      { title: "지방세법 제118조 (분할납부)", url: "https://law.go.kr/법령/지방세법/제118조" },
      { title: "지방세법 제118조의2 (납부유예)", url: "https://law.go.kr/법령/지방세법/제118조의2" },
      { title: "지방세법 제119조 (소액 징수면제)", url: "https://law.go.kr/법령/지방세법/제119조" },
      { title: "지방세법 제119조의2 (신탁재산 수탁자의 물적납세의무)", url: "https://law.go.kr/법령/지방세법/제119조의2" },
      { title: "지방세법 제119조의3 (향교 및 종교단체에 대한 특례)", url: "https://law.go.kr/법령/지방세법/제119조의3" },
      { title: "지방세법 제120조 (신고의무)", url: "https://law.go.kr/법령/지방세법/제120조" },
      { title: "지방세법 제121조 (재산세과세대장의 비치등)", url: "https://law.go.kr/법령/지방세법/제121조" },
      { title: "지방세법 제122조 (세 부담의 상한)", url: "https://law.go.kr/법령/지방세법/제122조" },
      { title: "지방세법 제123조 (부동산 과세자료분석 전담기구의 설치 등)", url: "https://law.go.kr/법령/지방세법/제123조" },
    ]
  },
  {
    title: "지방세법 시행규칙",
    laws: [
      { title: "지방세법 시행규칙 제49조 (건축물 시가표준액의 기준)", url: "https://law.go.kr/법령/지방세법 시행규칙/제49조" },
      { title: "지방세법 시행규칙 제50조 (공장입지기준면적)", url: "https://law.go.kr/법령/지방세법 시행규칙/제50조" },
      { title: "지방세법 시행규칙 제50조의2 (분리과세대상 토지 적용의 신청)", url: "https://law.go.kr/법령/지방세법 시행규칙/제50조의2" },
      { title: "지방세법 시행규칙 제51조 (지상정착물의 범위)", url: "https://law.go.kr/법령/지방세법 시행규칙/제51조" },
      { title: "지방세법 시행규칙 제52조 (공장용 건축물의 범위)", url: "https://law.go.kr/법령/지방세법 시행규칙/제52조" },
      { title: "지방세법 시행규칙 제53조 (주된 상속자의 기준)", url: "https://law.go.kr/법령/지방세법 시행규칙/제53조" },
      { title: "지방세법 시행규칙 제54조 (납세의무 통지)", url: "https://law.go.kr/법령/지방세법 시행규칙/제54조" },
      { title: "지방세법 시행규칙 제55조 (공장용 건축물의 범위)", url: "https://law.go.kr/법령/지방세법 시행규칙/제55조" },
      { title: "지방세법 시행규칙 제56조 (공장의 범위와 적용기준)", url: "https://law.go.kr/법령/지방세법 시행규칙/제56조" },
      { title: "지방세법 시행규칙 제56조의2 (재산세 세율 특례 적용을 위한 신청)", url: "https://law.go.kr/법령/지방세법 시행규칙/제56조의2" },
      { title: "지방세법 시행규칙 제57조 (재산세 도시지역분 과세대상 토지의 범위)", url: "https://law.go.kr/법령/지방세법 시행규칙/제57조" },
      { title: "지방세법 시행규칙 제58조 (재산세의 합산 및 세액산정 등)", url: "https://law.go.kr/법령/지방세법 시행규칙/제58조" },
      { title: "지방세법 시행규칙 제59조 (재산세의 물납 절차 등)", url: "https://law.go.kr/법령/지방세법 시행규칙/제59조" },
      { title: "지방세법 시행규칙 제60조 (시가로 인정되는 부동산가액)", url: "https://law.go.kr/법령/지방세법 시행규칙/제60조" },
      { title: "지방세법 시행규칙 제61조의2 (신탁재산 물적납세의무 납부통지서)", url: "https://law.go.kr/법령/지방세법 시행규칙/제61조의2" },
      { title: "지방세법 시행규칙 제61조의3 (향교 및 종교단체에 대한 재산세 특례 신청)", url: "https://law.go.kr/법령/지방세법 시행규칙/제61조의3" },
      { title: "지방세법 시행규칙 제61조의4 (주택 재산세액의 납부유예)", url: "https://law.go.kr/법령/지방세법 시행규칙/제61조의4" },
      { title: "지방세법 시행규칙 제62조 (재산세 납세의무자의 신고 등)", url: "https://law.go.kr/법령/지방세법 시행규칙/제62조" },
      { title: "지방세법 시행규칙 제63조 (과세대장 직권등재)", url: "https://law.go.kr/법령/지방세법 시행규칙/제63조" },
      { title: "지방세법 시행규칙 제64조 (과세대장 비치)", url: "https://law.go.kr/법령/지방세법 시행규칙/제64조" },
      { title: "지방세법 시행규칙 제64조의2 (직전 연도의 재산세액 상당액 계산식)", url: "https://law.go.kr/법령/지방세법 시행규칙/제64조의2" },
    ]
  }
];

interface PropertyTaxLawsProps {
  onBack: () => void;
}

export const PropertyTaxLaws = ({ onBack }: PropertyTaxLawsProps) => {
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
            재산세 관련법
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {propertyTaxLaws.map((section, sectionIndex) => (
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
        ))}
      </CardContent>
    </Card>
  );
};