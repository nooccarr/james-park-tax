const stripHtml = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '').trim();
  if (strippedHtml.length < 250) return strippedHtml;
  return `${strippedHtml.slice(0, 250)}...`;
};

// const html =
//   '<table> <thead> <tr> <th rowspan="2"><strong>증여자</strong></th> <th rowspan="2"><strong>수증자</strong></th> <th rowspan="2"><strong>증여재산</strong></th> <th  colspan="2"><strong>증여세 납부 국가</strong></th> </tr> <tr> <th>한국</th> <th>미국</th> </tr> </thead> <tbody> <tr> <td>한국거주 부모</td> <td>미국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>납부 없음</td> </tr> <tr> <td>한국거주 부모</td> <td>미국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 납부</td> </tr> <tr> <td>미국거주 부모</td> <td>한국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>미국거주 부모</td> <td>한국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>미국거주 부모</td> <td>미국거주 자녀</td> <td>한국 재산</td> <td>자녀 납부</td> <td>부모 $13.61M 면세</td> </tr> <tr> <td>한국거주 부모</td> <td>한국거주 자녀</td> <td>미국 재산</td> <td>자녀 납부<br/>(부모 미국 납부세액 공제)</td> <td>부모 납부</td> </tr> </tbody> </table>';
// console.log(stripHtml(html));

export default stripHtml;
