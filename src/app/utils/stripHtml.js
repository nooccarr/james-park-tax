const stripHtml = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return `${strippedHtml.slice(0, 250)}...`;
};

const html =
  '<h6>Child Tax Credit(자녀양육 세금공제)</h6> <p>Child Tax Credit(자녀양육 세금공제)는 납부할 세금을 차감해주거나 Refund(환급)을 해주는 세액공제 제도 이며 Taxable Income(과세표준 금액, 1040 Line15)을 줄여주는 Deduction(소득공제)와는 차이가 있다.</p> <p>1. Credit(세금공제) <br/>1) 자녀 1인당 $2,000 <br/>2) 납부할 세금이 적어서 $2,000을 다 받지 못하면 $1,400 지급</p> <p>2. Income(부모의 소득) <br/>Income(부모의 소득) 즉, Modified AGI(1040 L11)가 MFJ(부부합산보고): $400,000, Single(혼자보고): $200,000 의 소득이 넘으면 세금공제 금액이 줄어든다.</p> <p>3. 자녀기준 <br/>- 세금보고년도말 기준 만17세까지 <br/>- 자녀, 수양자녀, 입양자녀, 형제,자매가 해당됨 <br/>- 부모가 연간 생활비의 50%이상을 지원해야하고 함께 거주를 반년이상 해야한다.</p> <h6>Other Dependant Credit(기타양육 세금공제)</h6> <p>1. 기준 : dependant의 나이와 상관없음(18세 이상 부모, 친척및 타인도 가능) <br/>2. 소셜번호 혹은 Tax-ID가 있어야함 <br/>3. 세금공제 금액 : 1인당 $500이며 납부해야할 세금이 있어야 공제 가능하며 납부할 세금이 없으면 환급되지 읺습니다.</p>';
console.log(stripHtml(html));
