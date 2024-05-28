const calculateMagi = (
  filingStatus,
  socialSecurity = 0,
  ordinaryIncome = 0
) => {
  const upperAmount = filingStatus === 'Single' ? 34000 : 44000;
  const lowerAmount = filingStatus === 'Single' ? 25000 : 32000;
  socialSecurity = Number(socialSecurity);
  ordinaryIncome = Number(ordinaryIncome);
  const socialSecurityIncome = socialSecurity / 2;
  const MAGI = socialSecurityIncome + ordinaryIncome;
  const lessSocialSecurityMath = Math.min(socialSecurityIncome, 6000);
  if (MAGI > upperAmount) {
    const magiMath = (MAGI - upperAmount) * 0.85;
    const optionA = lessSocialSecurityMath + magiMath;
    const optionB = socialSecurity * 0.85;
    const lessOptionIncomeMath = Math.min(optionA, optionB);
    return (ordinaryIncome + lessOptionIncomeMath).toFixed(2);
  } else if (MAGI > lowerAmount) {
    return (ordinaryIncome + lessSocialSecurityMath).toFixed(2);
  } else {
    return ordinaryIncome.toFixed(2);
  }
};

export default calculateMagi;
