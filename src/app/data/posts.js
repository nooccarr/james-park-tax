const Posts = {
  // asdf: {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: 'asdf',
  //   description:
  //     '증여자 수증자 증여재산 증여세 납부 국가 한국 미국 한국거주 부모 미국거주 자녀 한국 재산 자녀 납부 납부 없음 한국거주 부모 미국거주 자녀 미국 재산 자녀 납부(부모 미국 납부세액 공제) 부모 납부 미국거주 부모 한국거주 자녀 한국 재산 자녀 납부 부모 $13.61M 면세 미국거주 부모 한국거주 자녀 미국 재산 자녀 납부(부모 미국 납부세액 공제) 부모 $13.61M 면세 미국거주 부모 미국거주 자녀 한국 재산 ...',
  //   article:
  //     '<h2>Hi there,jklasdjfklasdjflkjasdfhk</h2><p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:</p><pre><code class="language-css">body {display: none;}</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><blockquote><p>Wow, that’s amazing. Good work, boy! 👏 <br>— Mom</p></blockquote><p>asdl;fjasdl;kfwhaeklrthjlawekrhjlewkr</p><table style="minWidth: 100px"><colgroup><col><col><col><col></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="3" rowspan="1"><p>Description</p></th></tr><tr><td colspan="1" rowspan="1"><p>Cyndi Lauper</p></td><td colspan="1" rowspan="1"><p>singer</p></td><td colspan="1" rowspan="1"><p>songwriter</p></td><td colspan="1" rowspan="1"><p>actress</p></td></tr></tbody></table>',
  // },
  // '한국-및-미국간-증여세-납부대상': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '한국 및 미국간 증여세 납부대상',
  //   description:
  //     '증여자 수증자 증여재산 증여세 납부 국가 한국 미국 한국거주 부모 미국거주 자녀 한국 재산 자녀 납부 납부 없음 한국거주 부모 미국거주 자녀 미국 재산 자녀 납부(부모 미국 납부세액 공제) 부모 납부 미국거주 부모 한국거주 자녀 한국 재산 자녀 납부 부모 $13.61M 면세 미국거주 부모 한국거주 자녀 미국 재산 자녀 납부(부모 미국 납부세액 공제) 부모 $13.61M 면세 미국거주 부모 미국거주 자녀 한국 재산 ...',
  //   article:
  //     '<table> <thead> <tr> <th rowspan="2"><strong>증여자</strong></th> <th rowspan="2"><strong>수증자</strong></th> <th rowspan="2"><strong>증여재산</strong></th> <th  colspan="2"><strong>증여세 납부 국가</strong></th> </tr> <tr> <th>한국</th> <th>미국</th> </tr> </thead> <tbody> <tr> <td>한국거주 부모</td> <td>미국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>납부 없음</td> </tr> <tr> <td>한국거주 부모</td> <td>미국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 납부</td> </tr> <tr> <td>미국거주 부모</td> <td>한국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>미국거주 부모</td> <td>한국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>미국거주 부모</td> <td>미국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>한국거주 부모</td> <td>한국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 납부</td> </tr> </tbody> </table>',
  // },
  // '회사-설립-형태': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '회사 설립 형태',
  //   description:
  //     '사업체를 구성하는 회사 설립은 개인 사업체, 법인 사업체, 파트너 사업체, LLC가 있습니다. 개인 사업체 (Sole Proprietorship) 소규모 자영업에 적합하며 회사의 주인이 한명인 경우입니다. Corp에 비해 설럽 비용이 저렴하고 간단하지만 회사의 책임이 개인 오너에게 무한책임이어서 문제 발생 시 Corp에 비해 불리합니다. 파트너 사업체 (Partnership) 2명 이상의 주주가 설립하는 것으로 주주는 개인사업체와 같이 회사에 ...',
  //   article:
  //     '<p>사업체를 구성하는 회사 설립은 개인 사업체, 법인 사업체, 파트너 사업체, LLC가 있습니다.</p> <h6>개인 사업체 (Sole Proprietorship)</h6> <p>소규모 자영업에 적합하며 회사의 주인이 한명인 경우입니다. Corp에 비해 설럽 비용이 저렴하고 간단하지만 회사의 책임이 개인 오너에게 무한책임이어서 문제 발생 시 Corp에 비해 불리합니다.</p> <h6>파트너 사업체 (Partnership)</h6> <p>2명 이상의 주주가 설립하는 것으로 주주는 개인사업체와 같이 회사에 무한책임이 있습니다. 회사에서 발생한 이익은 S Corp처럼 파트너에게 배당되어 개인별 세금보고를 하며 회사 세금은 납부하지 않습니다.</p> <h6>법인 사업체 (Corporation)</h6> <p>1명 이상의 주주로 구성된 사업체로서 C Corp와 S Corp의 두 종류가 있으며 그 차이는 C Corp에서 발생한 이익은 법인 소득세를 납부 후 남은 이익은 주주에게 배당되어 개인소득에 포함되어 이중과세(double taxation)가 발생합니다.<br/>반면 S Corp는 발생한 이익에 대해 법인 소득세를 납부하지 않고 바로 주주에게 이동되어 한번의 개인 세금보고로 끝나게 되어 일반적으로 S Corp를 선호하게 됩니다. 하지만 S Corp의 주주는 100명을 초과할 수 없으므로 대기업은 C Corp로 설립해야 합니다.</p> <h6>LLC (Liability Limited Company)</h6> <p>1명 이상의 주주로 구성되는 LLC는 일종의 파트너 형태 회사로 회사의 소유주들을 member라 칭하며 member들은 유한 책임을 지는 것이 파트너쉽과 다른 점이며 LLC에서 발생한 이익은 맴버에게 배당하여 개인 세금보고를 하며 회사 소득세는 납부하지 않습니다. LLC는 이중과세 회피와 맴버 유한책임의 장점이 있으며 주로 부동산 투자회사 설립에 많이 이용됩니다.</p>',
  // },
  // '세금신고-및-납입세금-지연에-따른-벌금': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '세금신고 및 납입세금 지연에 따른 벌금',
  //   description:
  //     '세금신고 마감일은 보통 4월 15일 이지만 주말이나 공휴일이면 그다음 평일이 신고마감일이 됩니다. 세금신고 지연 및 세금납부 지연에 따른 벌금 및 이자에 대해 알아보겠습니다. 1. Late Filing Penalty (마감일 이후 신고시 발생하는 벌금)- 세금신고 마감일을 지나서 신고하게 되는경우엔 마감일 지나기전에 세금신고기일을 연장해야하며 그렇지 못한경우엔 결정된 세금엑에 대하여 월 5%의 벌금이 부과하게 되는데 최대 5개월간, 25%까지 ...',
  //   article:
  //     '<p>세금신고 마감일은 보통 4월 15일 이지만 주말이나 공휴일이면 그다음 평일이 신고마감일이 됩니다. 세금신고 지연 및 세금납부 지연에 따른 벌금 및 이자에 대해 알아보겠습니다.</h6> <br/> <h6>1. Late Filing Penalty (마감일 이후 신고시 발생하는 벌금)</h6> <p>- 세금신고 마감일을 지나서 신고하게 되는경우엔 마감일 지나기전에 세금신고기일을 연장해야하며 그렇지 못한경우엔 결정된 세금엑에 대하여 월 5%의 벌금이 부과하게 되는데 최대 5개월간, 25%까지 벌금이 부과될수 있습니다.<br/>- Late Filing Penalty를 산정할때에 Late Filing Penalty와 Late Payment Penalty 둘다 발생하는 달에 대해선 Late Payment Penalty 해당액 만큼 Late Filing Penalty에서 차감해 줍니다.<br/>- 세금 만기일이 60일 이상 경과한후 신고하게 되는 경우에는 Minimum Late Filing Penalty가 적용되는데 미납세금액과 $450 중 적은 금액을 납부해야 합니다.</p> <h6>2. Late Payment Penalty (납부세금 지연으로 발생하는 벌금)</h6> <p>- 세금 마감일 까지 세금신고액의 100%가 납부되지 않았다면 비록 세금신고기일을 연장하였다 할지라도 미납세금잔액에 대하여 월 0.5%의 벌금이 부과되며 최대 납부할세액의 25%가 될때까지 매월 0.5%씩 계산되어 누적됩니다.<br/>- 미납세금액에 대하여는 연방정부가 분기별로 책정한 이자율로 계산한 연체이자가 추가로 부가되어 집니다.</p> <h6>3. Under Estimate Tax Penalty (중간예납액 부족에 대한 벌금)</h6> <p>세금 계산액중에서 Withholding Tax (고용주가 급여지급시 원천징수하여 납부한 세금)와 Refundable Credit을 차감한 후 결정된 납부할 세금액이 $1000 이상으로 예상되는 경우엔 년 4회에 결쳐 분기별로 나누어 납부해야하고 이러한 Estimate Tax가 재대로 이루어지지 않은 부분에 대하여 분기별로 연체이자가 부과됩니다.</p> <h6>4. Dishonored Check Fee (세금결제수표의 부도에 따른 벌금)</h6> <p>- 세금납부시 발행한 수표가 잔고부족이나 은행계좌정보 착오입력등으로 부도가 나는 경우 IRS는 다음과 같이 Fee를 부과합니다. 지급한 세금금액이 $1250 이상인 경우 금액의 2%, 그 미만일 경우엔 납부한 세금 금액과 $25 중 더 적은 금액으로 Fee가 부과됩니다.<br/>- 세금납부시 이러한 벌금이나 이자들을 함께 납부하게 되지만 경우에 따라서는 세금신고 및 납부한 후에 일정기간이 지난다음 IRS로부터 벌금통지서를 받는 경우가 있습니다. 이런 경우엔 Late Filing Penalty나 Late Payment Penalty 부과액에 대하여 구제사항에 해당되는지 또는 벌금이 부당한 경우 IRS에 이의를 제기하는 방안들을 검토할수 있습니다.</p>',
  // },
  // 'living-trust': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: 'Living Trust',
  //   description:
  //     '리빙트러스트란 부동산, 현금, 사업체,동산 등 자산 가치가 있는 것을 위탁돤리자(Trustee)에게 맡겨서 위탁 관리를 시킨 후 일정 기간이 지나면 원래 수헤자(Benificiary)에게 증여하는 것을 말합니다. 트러스트를 설정하는 이유는 유언이나 상속과는 달리 Probate Court를 거치지 않는다는 장점 때문인데요, 예를 들면 부모가 사망시, 유언장을 작성하였든 하지 않았던간에 모든 부모의 재산은 Probate Court의 결정에 따라 분...',
  //   article:
  //     '<p>리빙트러스트란 부동산, 현금, 사업체,동산 등 자산 가치가 있는 것을 위탁돤리자(Trustee)에게 맡겨서 위탁 관리를 시킨 후 일정 기간이 지나면 원래 수헤자(Benificiary)에게 증여하는 것을 말합니다.</p> <p>트러스트를 설정하는 이유는 유언이나 상속과는 달리 Probate Court를 거치지 않는다는 장점 때문인데요, 예를 들면 부모가 사망시, 유언장을 작성하였든 하지 않았던간에 모든 부모의 재산은 Probate Court의 결정에 따라 분배되도록 법률로 정해져 있습니다. Probate Court는 사망한 부모의 모든 재산을 관리하며 사망 시 현존하는 모든 부채를 지불하고 유언장의 사실 확인을 거친 후 유언과 상속법에 의거해서 재산을 분배하는 법적 절차입니다. 이는 비용도 많이 들고 시간도 오래 걸리고 Probate court 의 결정이 날때까지 재산를 관리할수없는 단점이 있습니다.</p> <p>그러나 Living Trust를 설정한 경우에는 위의 열거한 Probate Court의 절차를 거치지않고 수혜자(Benificiary)에게 전달되므로 많은 장점이 있게 되며, 또한 세금에 대해서도 혜택를 보게 되므로 트러스트를 설정하는 것이 바랍직한 방법이라고 하겠습니다.</p> <p>예를 들면 홍길동이라는 사람이 ABC Living Trust 를 설립하고, 본인 스스로를 위탁관리자로 지정하고, 자녀인 지혜를 수혜자로 지정한 다음, 본인이 소유하고 있던 부동산의 소유권을 이 ABC Living Trust로 이전하였다면 , 홍길동이 Trustor와 Trustee가 되고, 지혜가 Benificiary가 되는 것입니다.</p> <p>이 위탁부동산의 소유권자는 ‘홍길동, Trustee of ABC Living Trust’로 등기하게 됩니다. 이 트러스트는 법적으로 해체하기 전까지는 영속적으로 존재할 수 있다는 장점이 있고, 여러 가지 세금혜택, 상속이나 증여의 한 벙법으로 사용되기도 합니다. 트러스트 종류에는 다음의 두가지가 있습니다.</p> <p><strong>취소 불가능 트러스트 (Irrevocable Trust)</strong> : 신탁자가 수혜자의 동의없이는 신탁을 취소할 수 없을 뿐만 아니라 신탁자의 채권자로부터 재산을 보호받지만, 취소 가능한 트러스트는 신탁자가 언제라도 신탁을 취소할 수 있기 때문에 채권자로 부터 신탁 재산을 보호받을수 없습니다.</p> <p><strong>취소가능한 트러스트 (Revocable Trust)</strong> : 일반적으로 신탁자가 텍스보고하는 Form 1040에 신탁자의 Social Security Number로 신탁재산에서 발생한 모든 수입을 보고하고, 취소 불가능한 트러스트는 IRS로부터 텍스 넘버를 받아 텍스 Form 1041 신탁재산에서 발생한 수입을 보고해야 합니다.</p>',
  // },
  // 'child-tax-credit-자녀양육-세금공제': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: 'Child Tax Credit(자녀양육 세금공제)',
  //   description:
  //     'Child Tax Credit(자녀양육 세금공제) Child Tax Credit(자녀양육 세금공제)는 납부할 세금을 차감해주거나 Refund(환급)을 해주는 세액공제 제도 이며 Taxable Income(과세표준 금액, 1040 Line15)을 줄여주는 Deduction(소득공제)와는 차이가 있다. 1. Credit(세금공제) 1) 자녀 1인당 $2,000 2) 납부할 세금이 적어서 $2,000을 다 받지 못하면 $1,400 지급 2. Inco...',
  //   article:
  //     '<h6>Child Tax Credit(자녀양육 세금공제)</h6> <p>Child Tax Credit(자녀양육 세금공제)는 납부할 세금을 차감해주거나 Refund(환급)을 해주는 세액공제 제도 이며 Taxable Income(과세표준 금액, 1040 Line15)을 줄여주는 Deduction(소득공제)와는 차이가 있다.</p> <p>1. Credit(세금공제) <br/>1) 자녀 1인당 $2,000 <br/>2) 납부할 세금이 적어서 $2,000을 다 받지 못하면 2023년 보고 $1,800, 2024년 보고 $1900, 2025년 보고 $2,000로 매년 $100씩 상향 지급</p> <p>2. Income(부모의 소득) <br/>Income(부모의 소득) 즉, Modified AGI(1040 L11)가 MFJ(부부합산보고): $400,000 나 Single(개인보고): $200,000 의 소득을 초과하면 세금공제 금액이 줄어든다.</p> <p>3. 자녀기준 <br/>- 세금보고년도말 기준 만 16세까지 <br/>- 자녀, 수양자녀, 입양자녀, 형제,자매가 해당됨 <br/>- 부모가 연간 생활비의 50%이상을 지원해야하고 함께 거주를 반년이상 해야한다.</p> <h6>Other Dependant Credit(기타양육 세금공제)</h6> <p>1. 기준 : dependant의 나이와 상관없음(18세 이상 부모, 친척및 타인도 가능) <br/>2. 소셜번호 혹은 Tax-ID가 있어야함 <br/>3. 세금공제 금액 : 1인당 $500이며 납부해야할 세금이 있어야 공제 가능하며 납부할 세금이 없으면 환급되지 읺습니다.</p>',
  // },
  // '401K-403B-Traditional-IRA-Roth-IRA': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '401K, 403B, Traditional IRA, Roth IRA',
  //   description:
  //     '401K, 403B, Traditional IRA, Roth IRA  1. 401K, 403B Retirement Plan * 401K, 403B(Traditional, 세금공제) -회사에서 가입하는 은퇴연금으로 회사는 가입금액에 %로 Matchup 해줍니다. 본인이 가입한 금액은 Gross Income(총 소득)에서 공제가 되어 세금을 적게 납부합니다. 은퇴후 일정금액씩 찾아 사용할 수 있으며 그 금액만큼 그해 소득에 포함됩니다. * 401K...',
  //   article:
  //     '<h6>401K, 403B, Traditional IRA, Roth IRA</h6> <br/> <h6>1. 401K, 403B Retirement Plan</h6><br/> <h6>* 401K, 403B(Traditional, 세금공제)</h6> <p>-회사에서 가입하는 은퇴연금으로 회사는 가입금액에 %로 Matchup 해줍니다. 본인이 가입한 금액은 Gross Income(총 소득)에서 공제가 되어 세금을 적게 납부합니다. 은퇴후 일정금액씩 찾아 사용할 수 있으며 그 금액만큼 그해 소득에 포함됩니다.</p> <h6>* 401K, 403B(Roth)</h6> <p>-회사에서 가입하는 은퇴연금으로 회사는 가입금액에 %로 Matchup 해줍니다. 본인이 가입한 금액은 Gross Income(총 소득)에서 공제가 되지 않지만 가입 5년후 은퇴후 일정금액씩 찾아 사용할 수 있으며 찾는 금액과 이자는 그해 소득에 포함되지 않습니다.</p> <p>*401K, 403B 연간 가입한도<br/>- Traditional, Roth 합산하여 50세미만은 $23,000, 50세이상은 $30,000까지 가입가능 합니다.<br/>- 401K, 403B는 Stock(주식)에 투자되는 상품으로 원금보장은 없습니다.</p> <h6>2. IRA</h6> <br/> <p><strong>IRA공제(개인연금)</strong> : 세금공제받는 <strong>Traditional</strong>과 공제받지 못하는 <strong>Roth IRA</strong>가 있습니다.</p> <p>&bull; <strong>Traditional IRA</strong>는 납입한 금액만큼 공제하고 은퇴후 연금의 일부를 받을때 소득에 포함되지만 추가소득(받은 소셜연금은 대부분 소득에 불포함)이 없다면 거의 세금낼 것이 없음. $70,000소득을 보고하는 가정이 IRA $10,000을 가입하면 약 <strong>$2,700 을 세금을 적게 냅니다</strong>.</p> <p>매년 $10,000씩 20년을 납입한다면 세금 $54,000절약하고 원금 $200,000에 이자까지 감안하면 <strong>$400,000</strong>이상의 목돈이 모아져서 노후에 소셜연금과 IRA연금을 최소 월 $4,000 ~ $5,000의 연금을 받아서 노후를 편안하게 보낼 수 있습니다. IRA가입은 50세 미만은 인당 $6,500, 50세이상은 $7,500 까지 할 수 있습니다. 가입은 매월 일정액을 나누어 불입할 수도 있습니다. 4월 15일까지 가입하면 2023년 세금보고에서 공제 받을 수 있습니다.</p><h6>* Roth IRA</h6><p>가입 당시는 소득 공제가 없으나 은퇴후 인출시 소득에 포함되지 않습니다.</p>',
  // },
  // '세금을-줄이는-방법': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '세금을 줄이는 방법',
  //   description:
  //     '안녕하세요? 매년 무거운 세금때문에 걱정이 많으시지요? 아래에 세금보고 절약하는 방법을 안내해 드립니다. 회사연금을 가입한다 (SEP IRA) 회사연금을 가입하면 가입한 금액만큼 회사 이익을 줄여줍니다. 가령 회사 이익이 $30,000이면 세금으로 $6,100을 납부해야하나 회사연금 $30,000을 가입하면 세금은 $0 입니다. 뿐만아니라 State 및 City 세금도 줄어들어 최소 세금만 납부합니다. 회사연금은 연간 최고 $66,000까지 가...',
  //   article:
  //     '<p>안녕하세요?</p> <p>매년 무거운 세금때문에 걱정이 많으시지요?</p> <p>아래에 세금보고 절약하는 방법을 안내해 드립니다.</p> <h6>회사연금을 가입한다 (SEP IRA)</h6> <p>회사연금을 가입하면 가입한 금액만큼 회사 이익을 줄여줍니다. 가령 회사 이익이 $30,000이면 세금으로 $6,100을 납부해야하나 회사연금 $30,000을 가입하면 세금은 $0 입니다. 뿐만아니라 State 및 City 세금도 줄어들어 최소 세금만 납부합니다. 회사연금은 연간 최고 $66,000까지 가입이 가능하나 연간 총급여의 25%가 한도입니다.</p> <h6>차량비용 (Car Expense) 공제</h6> <p>차를 구입한 목적이 Business라면 차량 가격 및 Gas, Toll, Repair 비용을 공제할 수 있습니다. 또한 리스한 차량은 Lease Payment를 공제할 수 있습니다. 단 출퇴근용은 공제가 불가합니다.</p> <h6>가게 리모델링 및 장비구입 비용</h6> <p>가게 리모델링 투자비용 및 장비구입 비용을 일정기간에 걸쳐 세금 공제 받을 수 있습니다.<br>비용 결제는 카드나 체크로 하시고 캐쉬로 지불했을 때는 공사한 회사 이름과 주소가 있는 영수증을 받아두세요.</p> <h6>종업원 회식비용</h6> <p>사업목적상 종업원울 위한 회식비용은 50% 까지 공재 가능합니다. 캐쉬로 지불했다면 영수증을 보관하여 회계사에게 제출하세요.</p> <h6>종교기관 헌금</h6> <p>가게에서 종교기관에 헌금을 했다면 연간 순소득의 10% 까지 공제 받을 수 있습니다.</p>',
  // },
  // '해외-금융자산-신고': {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '해외 금융자산 신고',
  //   description:
  //     '안녕하세요? 이 달에는 해외금융자산 에 대해 간단하게 설명드리겠습니다. 해외금융자산 신고에는 아래의 2가지가 있습니다. FBAR (Report of Foreign Bank Financial Account): 해외 금융계좌 보고법 지난 1년동안 해외에 보유한 금융계좌 금액이 한번이라도 $10,000 을 이상을 초과한 적이 있으면 미재무부(Depart of Treasury)에 매년 개인세금보고 할때 함께 보고해야합니다. Penalty : 보고 하지...',
  //   article:
  //     '<p>안녕하세요?</p> <p>이 달에는 <strong>해외금융자산</strong> 에 대해 간단하게 설명드리겠습니다.</p> <p>해외금융자산 신고에는 아래의 2가지가 있습니다.</p> <h6>FBAR (Report of Foreign Bank Financial Account): 해외 금융계좌 보고법</h6> <p>지난 1년동안 해외에 보유한 금융계좌 금액이 한번이라도 $10,000 을 이상을 초과한 적이 있으면 미재무부(Depart of Treasury)에 매년 개인세금보고 할때 함께 보고해야합니다.</p> <p>Penalty : 보고 하지 않은 고의성이 있는 경우 - 잔고의 최고 50%까지 벌금을 내야합니다.</p> <h6>FACTA (Foreign Account Tax Compliance): 해외계좌 납세 지원법</h6> <p>지난 1년동안 해외에 보유한 계좌의 연말 기준잔고 및 연중 기준금액 표</p> <table> <thead> <tr> <th><strong>보고형태</strong></th> <th><strong>미국 거주</strong></th> <th><strong>해외 거주</strong></th> </tr> </thead> <tbody> <tr> <td>부부세금보고</td> <td>$100,000/$150,000</td> <td>$400,000/$600,000</td> </tr> <tr> <td>Single</td> <td>$50,000/$75,000</td> <td>$200,000/$300,000</td> </tr> </tbody> </table> <p>부부세금 보고자 중, 미국 거주자는 연말기준 $100,000 초과, 연중 $150,000 초과 했으면 보고해야합니다. 해외거주 기준은 지난 1년동안 330일을 해외에 거주한 경우이며 부부 중 한 사람이라도 거주하면 해외거주로 판단합니다.</p> <p>Penalty : 보고 하지 않은 고의성이 있는 경우 - 잔고의 최고 40%까지 벌금을 내야합니다.</p> <p>해외금융자산 신고는 보고만 할 뿐이며 세금을 납부하는 것은 아닙니다.</p>',
  // },
  // 양도차익세율: {
  //   category: 'Tax',
  //   path: 'tax-info',
  //   title: '양도차익세율',
  //   description:
  //     '안녕하세요? 이 달에는 비지니스 매매의 양도차익 세금에 대해 간단하게 설명드리겠습니다. 비지니스 매매 양도차익 세금 (Long Term &amp; Short Term Capital) 양도차익 및 손실에는 1년 이상의 장기와 1년 미만의 단기에 따라 세율이 달라집니다. 양도자산 (Capital Asset) 비지니스, 상업용부동산, 주식, 귀금속, 수집품 단기 양도차익 (Capital Gains) 단기는 일반 세율에 적용, 장기는 Long Ter...',
  //   article:
  //     '<p>안녕하세요?</p> <p>이 달에는 <strong>비지니스 매매의 양도차익 세금</strong>에 대해 간단하게 설명드리겠습니다.</p> <h6>비지니스 매매 양도차익 세금 (Long Term &amp; Short Term Capital)</h6> <p>양도차익 및 손실에는 1년 이상의 장기와 1년 미만의 단기에 따라 세율이 달라집니다.</p> <h6>양도자산 (Capital Asset)</h6> <p>비지니스, 상업용부동산, 주식, 귀금속, 수집품</p> <h6>단기 양도차익 (Capital Gains)</h6> <p>단기는 일반 세율에 적용, 장기는 Long Term 세율적용</p> <h6>장기 양도차익 세율 (Long Term Capital Gains , LTCG)</h6> <p>부부공동 세금보고</p> <table> <thead> <tr> <th><strong>소득</strong></th> <th><strong>면세</strong></th> </tr> </thead> <tbody> <tr> <td>$0 ~ $89,250</td> <td>양도세</td> </tr> <tr> <td>$89,251 ~ $553,850</td> <td>양도차익의 15%</td> </tr> <tr> <td>$553,851 ~</td> <td>양도차익의 20%</td> </tr> </tbody> </table> <span>Single 보고</span> <ul> <li>상기 소득의 50%의 소득임</li> </ul> <h6>양도차익 손실</h6> <p>매매차익 손실은 매년 $3,000씩 개인세금 보고할 때 공제할 수 있습니다.</p>',
  // },
  // '올바른-medicare-이해': {
  //   category: 'Insurance',
  //   path: 'insurance-info',
  //   title: '올바른 Medicare 이해',
  //   description:
  //     '이 달에는 앞으로 다가올 혹은 이미 혜택을 받고 있는 메디케어에 대해서 말씀 드리고자합니다. 저는 Life &amp; Health Insurance (생명 및 건강보험) 라이센스가 있어서 주변 분들을 도와드리고 있습니다. 메디케어 (Medicare) 신청 자격 미국에서 지난 10년동안 세금 (40 크레딧, 1분기: 1크레딧)을 내신 분이면 65세 생일 전후 3개월 내에 신청할 수 있습니다. 의료혜택  많은 분들이 65세가 되면 건강보험료 불입없...',
  //   article:
  //     '<p>이 달에는 앞으로 다가올 혹은 이미 혜택을 받고 있는 메디케어에 대해서 말씀 드리고자합니다.</p> <p>저는 <strong>Life &amp; Health Insurance (생명 및 건강보험)</strong> 라이센스가 있어서 주변 분들을 도와드리고 있습니다.</p> <h2>메디케어 (Medicare)</h2> <h6>신청 자격</h6> <p>미국에서 지난 10년동안 세금 (40 크레딧, 1분기: 1크레딧)을 내신 분이면 65세 생일 전후 3개월 내에 신청할 수 있습니다.</p> <h6>의료혜택</h6> <p>많은 분들이 65세가 되면 건강보험료 불입없이 의료혜택을 받는다고 생각합니다.</p> <p>꼭 그렇지가 않습니다. 메디케어는 기본적으로 Part A, B, C, D가 있습니다.</p> <p>Part A, B는 정부보험이며, Part C, D 및 Medigap은 민간보험사 상품입니다.</p> <h6>Part A</h6> <p>병원에 입원한 환자에게 의료혜택을 제공합니다. 일정기간 입원동안은 무료제공 합니다.</p> <h6>Part B</h6> <p>의사 선생님 방문, 각종검사가 여기에 해당되는데 연간 디덕터블과 의사 방문시 코페이 20%가 있으며 매월 보험료 $174.70(2024년기준)을 불입하여야 합니다.</p> <h6>Medicare Advantage (Part C)</h6> <p>위의 A, B는 정부가 제공하지만 Part C는 일반 보험회사에서 판매하는 건강보험 상품입니다. Part B의 디덕터블과 코페이 20% 커버및 약값을 지원합니다. 이외 다양한 의료서비스를 제공합니다 (OTC, 치과, 안경, 보청기, 한의원, 헬스클럽비용 등을 지원) 보험회사에 납입할 보험료가 거의 없습니다.</p> <h6>Medi Gap (Medicare Supplement)</h6> <p>Part B의 코페이 20% 및 Part A의 일정기간 입원을 초과했을 때 커버해주는 보험이며 일반 보험회사가 판매하며 보험료를 내야합니다.  미전역의 모든 의사를 방문할 수 있으나 Part D의 약은 따로 구입해야합니다.</p> <h6>Part D</h6> <p>약 처방 보험입니다. Medicare Advantage를 가입하시면 약값의 상당한 부분을 커버받을 수 있습니다.</p> <span>Original Medicare </span> <ul> <li>65세 처음 정부로부터 받는 메디케어카드(Blue/Red 칼러글씨 종이카드)</li> <li>Part A + B만 커버</li> </ul> <h6>Medicare Advantage</h6> <ul> <li>이 종이카드를 통해서 보험회사 에이젼트가 Medicare Advantage 로 변경해줍니다. 즉 Part A + B + 약을 커버해줍니다.</li> <li><strong>가입기간</strong></li> </ul> <table> <thead> <tr> <th><strong>신규</strong></th> <th><strong>갱신 (Renewal)</strong></th> </tr> </thead> <tbody> <tr> <td>항상 가입가능</td> <td>매년 10/15 ~ 12/07</td> </tr> </tbody> </table> <h2>보험사별 장점 (NY) 2024</h2> <h6>U 회사</h6> <ul> <li>OTC : $40/분기</li> <li>한의원(침) : 12회(연간)</li> <li>헬스클럽 지원</li> </ul> <h6>A 회사</h6> <ul> <li>건강관련 비용 연간 $600 지원</li> <li>운동관련 제품 구입 및 사용료 (Golf fee, 헬스클럽비용, 요가, 볼링, 댄스비용, 운동화, 운동복 구입등)</li> </ul> <h6>W 회사 (giveback)</h6> <ul> <li>Part B 보험료 매월 $77 (연간 $924) 돌려줌</li> <li>헬스클럽 지원</li> </ul> <h6>W 회사 (PPO)</h6> <ul> <li>OTC : $84/분기</li> <li>치과 : 연간 $1,000지원</li> <li>헬스클럽 지원</li> </ul> <p>자세한 문의는 전화 상담 가능</p>',
  // },
  // '하루-$5-저축으로-자녀-재산-$500,000-물려-주기': {
  //   category: 'Insurance',
  //   path: 'insurance-info',
  //   title: '하루 $5 저축으로 자녀 재산 $500,000 물려 주기',
  //   description:
  //     'Index Universal Life (1세, 월보험료: $150, 보험금: $100,000)    적립 기간 납입액 적립액(Cash Value) 보험금(Face Amount)     20년 $36,000 $55,000 $208,000   30년 $54,000 $116,000 $357,000   40년 $72,000 $225,000 $560,000   50년 $90,000 $500,000 $850,000     상기 적립액 및 보험금은 지난 1...',
  //   article:
  //     '<strong>Index Universal Life</strong> <span>(1세, 월보험료: $150, 보험금: $100,000)</span> <table> <thead> <tr> <th><strong>적립 기간</strong></th> <th><strong>납입액</strong></th> <th><strong>적립액(Cash Value)</strong></th> <th><strong>보험금(Face Amount)</strong></th> </tr> </thead> <tbody> <tr> <td>20년</td> <td>$36,000</td> <td><strong>$55,000</strong></td> <td>$208,000</td> </tr> <tr> <td>30년</td> <td>$54,000</td> <td><strong>$116,000</strong></td> <td>$357,000</td> </tr> <tr> <td>40년</td> <td>$72,000</td> <td><strong>$225,000</strong></td> <td>$560,000</td> </tr> <tr> <td>50년</td> <td>$90,000</td> <td><strong>$500,000</strong></td> <td>$850,000</td> </tr> </tbody> </table> <ul> <li>상기 적립액 및 보험금은 지난 10년간 S&amp;P 500 Index 평균으로 산출된 것이며 매년 Index에 따라 달라질 수 있습니다.</li> <li>상기 월보험료는 자녀가 직장에 들어갈 때까지 부모님이 납입하고 그다음부터 자녀가 납입합니다. 자녀가 결혼하면 따로 보험 가입할 필요가 없습니다. 50세 이후에도 계속 납입하면 <strong>70세 → $1,250,000 / 80세 → $2,100,000</strong>으로 증가합니다.</li> <li>매 10년마다 납입 보험료는 $18,000 이지만 적립액은 복리로 두배씩 늘어납니다. <h6>($55,000 → $116,000 → $225,000 → $500,000)</h6></li> </ul>',
  // },
};

export default Posts;
