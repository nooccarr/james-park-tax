import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import TaxInfo from './TaxInfo';
import MedicareInfo from './MedicareInfo';
import LifeInsuranceInfo from './LifeInsuranceInfo';
import Services from './Services';
import ContactUs from './ContactUs';
import Results from './Results';
import PostList from './PostList';
import Post from './Post';
import NoMatch from './NoMatch';
import Footer from './Footer';
import '../styles/app.css';
const Posts = {
  '세금을-줄이는-방법': {
    category: 'Tax',
    path: 'tax-info',
    title: '세금을 줄이는 방법',
    description:
      '안녕하세요? 매년 무거운 세금때문에 걱정이 많으시지요? 아래에 세금보고 절약하는 방법을 안내해 드립니다. 회사연금을 가입한다 (SEP IRA) 회사연금을 가입하면 가입한 금액만큼 회사 이익을 줄여줍니다. 가령 회사 이익이 $30,000이면 세금으로 $6,100을 납부해야하나 회사연금 $30,000을 가입하면 세금은 $0 입니다. 뿐만아니라 State 및 City 세금도 줄어들어 최소 세금만 납부합니다. 회사연금은 연간 최고 $66,000까지 가...',
    article:
      '<p>안녕하세요?</p> <p>매년 무거운 세금때문에 걱정이 많으시지요?</p> <p>아래에 세금보고 절약하는 방법을 안내해 드립니다.</p> <h6>회사연금을 가입한다 (SEP IRA)</h6> <p>회사연금을 가입하면 가입한 금액만큼 회사 이익을 줄여줍니다. 가령 회사 이익이 $30,000이면 세금으로 $6,100을 납부해야하나 회사연금 $30,000을 가입하면 세금은 $0 입니다. 뿐만아니라 State 및 City 세금도 줄어들어 최소 세금만 납부합니다. 회사연금은 연간 최고 $66,000까지 가입이 가능하나 연간 총급여의 25%가 한도입니다.</p> <h6>차량비용 (Car Expense) 공제</h6> <p>차를 구입한 목적이 Business라면 차량 가격 및 Gas, Toll, Repair 비용을 공제할 수 있습니다. 또한 리스한 차량은 Lease Payment를 공제할 수 있습니다. 단 출퇴근용은 공제가 불가합니다.</p> <h6>가게 리모델링 및 장비구입 비용</h6> <p>가게 리모델링 투자비용 및 장비구입 비용을 일정기간에 걸쳐 세금 공제 받을 수 있습니다.<br>비용 결제는 카드나 체크로 하시고 캐쉬로 지불했을 때는 공사한 회사 이름과 주소가 있는 영수증을 받아두세요.</p> <h6>종업원 회식비용</h6> <p>사업목적상 종업원울 위한 회식비용은 50% 까지 공재 가능합니다. 캐쉬로 지불했다면 영수증을 보관하여 회계사에게 제출하세요.</p> <h6>종교기관 헌금</h6> <p>가게에서 종교기관에 헌금을 했다면 연간 순소득의 10% 까지 공제 받을 수 있습니다.</p>',
  },
  '해외-금융자산-신고': {
    category: 'Tax',
    path: 'tax-info',
    title: '해외 금융자산 신고',
    description:
      '안녕하세요? 이 달에는 해외금융자산 에 대해 간단하게 설명드리겠습니다. 해외금융자산 신고에는 아래의 2가지가 있습니다. FBAR (Report of Foreign Bank Financial Account): 해외 금융계좌 보고법 지난 1년동안 해외에 보유한 금융계좌 금액이 한번이라도 $10,000 을 이상을 초과한 적이 있으면 미재무부(Depart of Treasury)에 매년 개인세금보고 할때 함께 보고해야합니다. Penalty : 보고 하지...',
    article:
      '<p>안녕하세요?</p> <p>이 달에는 <strong>해외금융자산</strong> 에 대해 간단하게 설명드리겠습니다.</p> <p>해외금융자산 신고에는 아래의 2가지가 있습니다.</p> <h6>FBAR (Report of Foreign Bank Financial Account): 해외 금융계좌 보고법</h6> <p>지난 1년동안 해외에 보유한 금융계좌 금액이 한번이라도 $10,000 을 이상을 초과한 적이 있으면 미재무부(Depart of Treasury)에 매년 개인세금보고 할때 함께 보고해야합니다.</p> <p>Penalty : 보고 하지 않은 고의성이 있는 경우 - 잔고의 최고 50%까지 벌금을 내야합니다.</p> <h6>FACTA (Foreign Account Tax Compliance): 해외계좌 납세 지원법</h6> <p>지난 1년동안 해외에 보유한 계좌의 연말 기준잔고 및 연중 기준금액 표</p> <table> <thead> <tr> <th><strong>보고형태</strong></th> <th><strong>미국 거주</strong></th> <th><strong>해외 거주</strong></th> </tr> </thead> <tbody> <tr> <td>부부세금보고</td> <td>$100,000/$150,000</td> <td>$400,000/$600,000</td> </tr> <tr> <td>Single</td> <td>$50,000/$75,000</td> <td>$200,000/$300,000</td> </tr> </tbody> </table> <p>부부세금 보고자 중, 미국 거주자는 연말기준 $100,000 초과, 연중 $150,000 초과 했으면 보고해야합니다. 해외거주 기준은 지난 1년동안 330일을 해외에 거주한 경우이며 부부 중 한 사람이라도 거주하면 해외거주로 판단합니다.</p> <p>Penalty : 보고 하지 않은 고의성이 있는 경우 - 잔고의 최고 40%까지 벌금을 내야합니다.</p> <p>해외금융자산 신고는 보고만 할 뿐이며 세금을 납부하는 것은 아닙니다.</p>',
  },
  양도차익세율: {
    category: 'Tax',
    path: 'tax-info',
    title: '양도차익세율',
    description:
      '안녕하세요? 이 달에는 비지니스 매매의 양도차익 세금에 대해 간단하게 설명드리겠습니다. 비지니스 매매 양도차익 세금 (Long Term &amp; Short Term Capital) 양도차익 및 손실에는 1년 이상의 장기와 1년 미만의 단기에 따라 세율이 달라집니다. 양도자산 (Capital Asset) 비지니스, 상업용부동산, 주식, 귀금속, 수집품 단기 양도차익 (Capital Gains) 단기는 일반 세율에 적용, 장기는 Long Ter...',
    article:
      '<p>안녕하세요?</p> <p>이 달에는 <strong>비지니스 매매의 양도차익 세금</strong>에 대해 간단하게 설명드리겠습니다.</p> <h6>비지니스 매매 양도차익 세금 (Long Term &amp; Short Term Capital)</h6> <p>양도차익 및 손실에는 1년 이상의 장기와 1년 미만의 단기에 따라 세율이 달라집니다.</p> <h6>양도자산 (Capital Asset)</h6> <p>비지니스, 상업용부동산, 주식, 귀금속, 수집품</p> <h6>단기 양도차익 (Capital Gains)</h6> <p>단기는 일반 세율에 적용, 장기는 Long Term 세율적용</p> <h6>장기 양도차익 세율 (Long Term Capital Gains , LTCG)</h6> <p>부부공동 세금보고</p> <table> <thead> <tr> <th><strong>소득</strong></th> <th><strong>면세</strong></th> </tr> </thead> <tbody> <tr> <td>$0 ~ $89,250</td> <td>양도세</td> </tr> <tr> <td>$89,251 ~ $553,850</td> <td>양도차익의 15%</td> </tr> <tr> <td>$553,851 ~</td> <td>양도차익의 20%</td> </tr> </tbody> </table> <span>Single 보고</span> <ul> <li>상기 소득의 50%의 소득임</li> </ul> <h6>양도차익 손실</h6> <p>매매차익 손실은 매년 $3,000씩 개인세금 보고할 때 공제할 수 있습니다.</p>',
  },
  '올바른-medicare-이해': {
    category: 'Medicare',
    path: 'medicare-info',
    title: '올바른 Medicare 이해',
    description:
      '이 달에는 앞으로 다가올 혹은 이미 혜택을 받고 있는 메디케어에 대해서 말씀 드리고자합니다. 저는 Life &amp; Health Insurance (생명 및 건강보험) 라이센스가 있어서 주변 분들을 도와드리고 있습니다. 메디케어 (Medicare) 신청 자격 미국에서 지난 10년동안 세금 (40 크레딧, 1분기: 1크레딧)을 내신 분이면 65세 생일 전후 3개월 내에 신청할 수 있습니다. 의료혜택  많은 분들이 65세가 되면 건강보험료 불입없...',
    article:
      '<p>이 달에는 앞으로 다가올 혹은 이미 혜택을 받고 있는 메디케어에 대해서 말씀 드리고자합니다.</p> <p>저는 <strong>Life &amp; Health Insurance (생명 및 건강보험)</strong> 라이센스가 있어서 주변 분들을 도와드리고 있습니다.</p> <h2>메디케어 (Medicare)</h2> <h6>신청 자격</h6> <p>미국에서 지난 10년동안 세금 (40 크레딧, 1분기: 1크레딧)을 내신 분이면 65세 생일 전후 3개월 내에 신청할 수 있습니다.</p> <h6>의료혜택</h6> <p>많은 분들이 65세가 되면 건강보험료 불입없이 의료혜택을 받는다고 생각합니다.</p> <p>꼭 그렇지가 않습니다. 메디케어는 기본적으로 Part A, B, C, D가 있습니다.</p> <p>Part A, B는 정부보험이며, Part C, D 및 Medigap은 민간보험사 상품입니다.</p> <h6>Part A</h6> <p>병원에 입원한 환자에게 의료혜택을 제공합니다. 일정기간 입원동안은 무료제공 합니다.</p> <h6>Part B</h6> <p>의사 선생님 방문, 각종검사가 여기에 해당되는데 연간 디덕터블과 의사 방문시 코페이 20%가 있으며 매월 보험료 $174.70(2024년기준)을 불입하여야 합니다.</p> <h6>Medicare Advantage (Part C)</h6> <p>위의 A, B는 정부가 제공하지만 Part C는 일반 보험회사에서 판매하는 건강보험 상품입니다. Part B의 디덕터블과 코페이 20% 커버및 약값을 지원합니다. 이외 다양한 의료서비스를 제공합니다 (OTC, 치과, 안경, 보청기, 한의원, 헬스클럽비용 등을 지원) 보험회사에 납입할 보험료가 거의 없습니다.</p> <h6>Medi Gap (Medicare Supplement)</h6> <p>Part B의 코페이 20% 및 Part A의 일정기간 입원을 초과했을 때 커버해주는 보험이며 일반 보험회사가 판매하며 보험료를 내야합니다.  미전역의 모든 의사를 방문할 수 있으나 Part D의 약은 따로 구입해야합니다.</p> <h6>Part D</h6> <p>약 처방 보험입니다. Medicare Advantage를 가입하시면 약값의 상당한 부분을 커버받을 수 있습니다.</p> <span>Original Medicare </span> <ul> <li>65세 처음 정부로부터 받는 메디케어카드(Blue/Red 칼러글씨 종이카드)</li> <li>Part A + B만 커버</li> </ul> <h6>Medicare Advantage</h6> <ul> <li>이 종이카드를 통해서 보험회사 에이젼트가 Medicare Advantage 로 변경해줍니다. 즉 Part A + B + 약을 커버해줍니다.</li> <li><strong>가입기간</strong></li> </ul> <table> <thead> <tr> <th><strong>신규</strong></th> <th><strong>갱신 (Renewal)</strong></th> </tr> </thead> <tbody> <tr> <td>항상 가입가능</td> <td>매년 10/15 ~ 12/07</td> </tr> </tbody> </table> <h2>보험사별 장점 (NY) 2024</h2> <h6>U 회사</h6> <ul> <li>OTC : $40/분기</li> <li>한의원(침) : 12회(연간)</li> <li>헬스클럽 지원</li> </ul> <h6>A 회사</h6> <ul> <li>건강관련 비용 연간 $600 지원</li> <li>운동관련 제품 구입 및 사용료 (Golf fee, 헬스클럽비용, 요가, 볼링, 댄스비용, 운동화, 운동복 구입등)</li> </ul> <h6>W 회사 (giveback)</h6> <ul> <li>Part B 보험료 매월 $77 (연간 $924) 돌려줌</li> <li>헬스클럽 지원</li> </ul> <h6>W 회사 (PPO)</h6> <ul> <li>OTC : $84/분기</li> <li>치과 : 연간 $1,000지원</li> <li>헬스클럽 지원</li> </ul> <p>자세한 문의는 전화 상담 가능</p>',
  },
  '하루-$5-저축으로-자녀-재산-$500,000-물려-주기': {
    category: 'Life Insurance',
    path: 'life-insurance-info',
    title: '하루 $5 저축으로 자녀 재산 $500,000 물려 주기',
    description:
      'Index Universal Life (1세, 월보험료: $150, 보험금: $100,000)    적립 기간 납입액 적립액(Cash Value) 보험금(Face Amount)     20년 $36,000 $55,000 $208,000   30년 $54,000 $116,000 $357,000   40년 $72,000 $225,000 $560,000   50년 $90,000 $500,000 $850,000     상기 적립액 및 보험금은 지난 1...',
    article:
      '<strong>Index Universal Life</strong> <span>(1세, 월보험료: $150, 보험금: $100,000)</span> <table> <thead> <tr> <th><strong>적립 기간</strong></th> <th><strong>납입액</strong></th> <th><strong>적립액(Cash Value)</strong></th> <th><strong>보험금(Face Amount)</strong></th> </tr> </thead> <tbody> <tr> <td>20년</td> <td>$36,000</td> <td><strong>$55,000</strong></td> <td>$208,000</td> </tr> <tr> <td>30년</td> <td>$54,000</td> <td><strong>$116,000</strong></td> <td>$357,000</td> </tr> <tr> <td>40년</td> <td>$72,000</td> <td><strong>$225,000</strong></td> <td>$560,000</td> </tr> <tr> <td>50년</td> <td>$90,000</td> <td><strong>$500,000</strong></td> <td>$850,000</td> </tr> </tbody> </table> <ul> <li>상기 적립액 및 보험금은 지난 10년간 S&amp;P 500 Index 평균으로 산출된 것이며 매년 Index에 따라 달라질 수 있습니다.</li> <li>상기 월보험료는 자녀가 직장에 들어갈 때까지 부모님이 납입하고 그다음부터 자녀가 납입합니다. 자녀가 결혼하면 따로 보험 가입할 필요가 없습니다. 50세 이후에도 계속 납입하면 <strong>70세 → $1,250,000 / 80세 → $2,100,000</strong>으로 증가합니다.</li> <li>매 10년마다 납입 보험료는 $18,000 이지만 적립액은 복리로 두배씩 늘어납니다. <h6>($55,000 → $116,000 → $225,000 → $500,000)</h6></li> </ul>',
  },
};

const App = () => {
  const [posts, setPosts] = useState({});
  const [searchPosts, setSearchPosts] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  useEffect(() => {
    requestPosts();
  }, []);

  const requestPosts = async () => {
    try {
      setPosts(Posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setSearchPosts({});
      setSearchMessage('');
      setSearchLength(0);
    } else {
      setSearchMessage(`Search results for "${searchQuery}"`);
      const filteredPosts = Object.entries(posts).filter(
        ([_slug, { title, description }]) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchPosts(Object.fromEntries(filteredPosts));
      setSearchLength(filteredPosts.length);
    }
  };

  const handleSearchReset = () => {
    setSearchQuery('');
    setSearchPosts({});
    setSearchMessage('');
  };

  return (
    <>
      <Header
        showOffCanvas={showOffCanvas}
        setShowOffCanvas={setShowOffCanvas}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleSearchReset={handleSearchReset}
              showOffCanvas={showOffCanvas}
              setShowOffCanvas={setShowOffCanvas}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="tax-info" element={<TaxInfo />}>
            <Route index element={<PostList posts={posts} category="Tax" />} />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route path="medicare-info" element={<MedicareInfo />}>
            <Route
              index
              element={<PostList posts={posts} category="Medicare" />}
            />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route path="life-insurance-info" element={<LifeInsuranceInfo />}>
            <Route
              index
              element={<PostList posts={posts} category="Life Insurance" />}
            />
            <Route path=":slug" element={<Post posts={posts} />} />
          </Route>
          <Route
            path="search"
            element={
              <Results
                searchQuery={searchQuery}
                handleSearchQueryChange={handleSearchQueryChange}
                handleSearchSubmit={handleSearchSubmit}
                searchLength={searchLength}
              />
            }
          >
            <Route
              index
              element={
                <PostList
                  posts={searchPosts}
                  searchMessage={searchMessage}
                  handleSearchReset={handleSearchReset}
                />
              }
            />
            <Route path=":slug" element={<Post posts={searchPosts} />} />
          </Route>
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
