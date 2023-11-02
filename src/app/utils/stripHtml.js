const stripHtml = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return `${strippedHtml.slice(0, 250)}...`;
}

const html = "<p>이 달에는 앞으로 다가올 혹은 이미 혜택을 받고 있는 메디케어에 대해서 말씀 드리고자합니다.</p> <p>저는 <strong>Life &amp; Health Insurance (생명 및 건강보험)</strong> 라이센스가 있어서 주변 분들을 도와드리고 있습니다.</p> <h2>메디케어 (Medicare)</h2> <p><strong>신청 자격</strong></p> <p>미국에서 지난 10년동안 세금 (40 크레딧, 1분기: 1크레딧)을 내신 분이면 65세 생일 전후 3개월 내에 신청할 수 있습니다.</p> <p><strong>의료혜택</strong> </p> <p>많은 분들이 65세가 되면 건강보험료 불입없이 의료혜택을 받는다고 생각합니다.</p> <p>꼭 그렇지가 않습니다. 메디케어는 기본적으로 Part A, B, C, D가 있습니다.</p> <p>Part A, B는 정부보험이며, Part C, D 및 Medigap은 민간보험사 상품입니다.</p> <ol> <li><strong>Part A</strong> </li> </ol> <p>병원에 입원한 환자에게 의료혜택을 제공합니다. 일정기간 입원동안은 무료제공 합니다.</p> <ol> <li><p><strong>Part B</strong> 의사 선생님 방문, 각종검사가 여기에 해당되는데 연간 디덕터블과 의사 방문시 코페이 20%가 있으며 매월 보험료 $174.70(2024년기준)을 불입하여야 합니다.</p> </li> <li><p><strong>Medicare Advantage (Part C)</strong></p> </li> </ol> <p>위의 A, B는 정부가 제공하지만 Part C는 일반 보험회사에서 판매하는 건강보험 상품입니다. Part B의 디덕터블과 코페이 20% 커버및 약값을 지원합니다. 이외 다양한 의료서비스를 제공합니다 (OTC, 치과, 안경, 보청기, 한의원, 헬스클럽비용 등을 지원) 보험회사에 납입할 보험료가 거의 없습니다.</p> <ol> <li><strong>MediGap(Medicare Supplement)</strong> </li> </ol> <p>Part B의 코페이 20% 및 Part A의 일정기간 입원을 초과했을 때 커버해주는 보험이며 일반 보험회사가 판매하며 보험료를 내야합니다. 미전역의 모든 의사를 방문할 수 있으나 Part D의 약은 따로 구입해야합니다.</p> <ol> <li><strong>Part D</strong> </li> </ol> <p>약 처방 보험입니다. Medicare Advantage를 가입하시면 약값의 상당한 부분을 커버받을 수 있습니다.</p> <p>Original Medicare </p> <ul> <li>65세 처음 정부로부터 받는 메디케어카드(Blue/Red 칼러글씨 종이카드)</li> <li>Part A + B만 커버</li> </ul> <p><strong>Medicare Advantage</strong></p> <ul> <li>이 종이카드를 통해서 보험회사 에이젼트가 Medicare Advantage 로 변경해줍니다. 즉 Part A + B + 약을 커버해줍니다.</li> <li><strong>가입기간</strong></li> </ul> <table> <thead> <tr> <th>신규</th> <th>갱신 (Renewal)</th> </tr> </thead> <tbody> <tr> <td>항상 가입가능</td> <td>매년 10/15 ~ 12/07</td> </tr> </tbody> </table> <h2>보험사별 장점 (NY) 2024</h2> <p><strong>U 회사</strong></p> <ul> <li>OTC : $40/분기</li> <li>한의원(침) : 12회(연간)</li> <li>헬스클럽 지원</li> </ul> <p><strong>A 회사</strong></p> <ul> <li>건강관련 비용 연간 $600 지원</li> <li>운동관련 제품 구입 및 사용료 (Golf fee, 헬스클럽비용, 요가, 볼링, 댄스비용, 운동화, 운동복 구입등)</li> </ul> <p><strong>W 회사 (giveback)</strong></p> <ul> <li>Part B 보험료 매월 $77 (연간 $924) 돌려줌</li> <li>헬스클럽 지원</li> </ul> <p><strong>W 회사 (PPO)</strong></p> <ul> <li>OTC : $84/분기</li> <li>치과 : 연간 $1,000지원</li> <li>헬스클럽 지원</li> </ul> <p>자세한 문의는 전화 상담 가능</p>";

console.log(stripHtml(html));