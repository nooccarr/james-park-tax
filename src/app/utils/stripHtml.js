const stripHtml = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return `${strippedHtml.slice(0, 250)}...`;
};

const html =
  '<h6>401K, 403B, Traditional IRA, Roth IRA</h6> <br/> <h6>1. 401K, 403B Retirement Plan</h6><br/> <h6>* 401K, 403B(Traditional, 세금공제)</h6> <p>-회사에서 가입하는 은퇴연금으로 회사는 가입금액에 %로 Matchup 해줍니다. 본인이 가입한 금액은 Gross Income(총 소득)에서 공제가 되어 세금을 적게 납부합니다. 은퇴후 일정금액씩 찾아 사용할 수 있으며 그 금액만큼 그해 소득에 포함됩니다.</p> <h6>* 401K, 403B(Roth)</h6> <p>-회사에서 가입하는 은퇴연금으로 회사는 가입금액에 %로 Matchup 해줍니다. 본인이 가입한 금액은 Gross Income(총 소득)에서 공제가 되지 않지만 가입 5년후 은퇴후 일정금액씩 찾아 사용할 수 있으며 찾는 금액과 이자는 그해 소득에 포함되지 않습니다.</p> <p>*401K, 403B 연간 가입한도<br/>- Traditional, Roth 합산하여 50세미만은 $23,000, 50세이상은 $30,000까지 가입가능 합니다.<br/>- 401K, 403B는 Stock(주식)에 투자되는 상품으로 원금보장은 없습니다.</p> <h6>2. IRA</h6> <br/> <p><strong>IRA공제(개인연금)</strong> : 세금공제받는 <strong>Traditional</strong>과 공제받지 못하는 <strong>Roth IRA</strong>가 있습니다.</p> <p>&bull; <strong>Traditional IRA</strong>는 납입한 금액만큼 공제하고 은퇴후 연금의 일부를 받을때 소득에 포함되지만 추가소득(받은 소셜연금은 대부분 소득에 불포함)이 없다면 거의 세금낼 것이 없음. $70,000소득을 보고하는 가정이 IRA $10,000을 가입하면 약 <strong>$2,700 을 세금을 적게 냅니다</strong>.</p> <p>매년 $10,000씩 20년을 납입한다면 세금 $54,000절약하고 원금 $200,000에 이자까지 감안하면 <strong>$400,000</strong>이상의 목돈이 모아져서 노후에 소셜연금과 IRA연금을 최소 월 $4,000 ~ $5,000의 연금을 받아서 노후를 편안하게 보낼 수 있습니다. IRA가입은 50세 미만은 인당 $6,500, 50세이상은 $7,500 까지 할 수 있습니다. 가입은 매월 일정액을 나누어 불입할 수도 있습니다. 4월 15일까지 가입하면 2023년 세금보고에서 공제 받을 수 있습니다.</p><h6>* Roth IRA</h6><p>가입 당시는 소득 공제가 없으나 은퇴후 인출시 소득에 포함되지 않습니다.</p>';
console.log(stripHtml(html));
