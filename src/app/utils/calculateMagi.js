const calculateMagi = (socialSecurity = 0, ordinaryIncome = 0) => {
  socialSecurity = Number(socialSecurity);
  ordinaryIncome = Number(ordinaryIncome);
  const socialSecurityIncome = socialSecurity / 2;
  const MAGI = socialSecurityIncome + ordinaryIncome;
  const lessSocialSecurityMath = Math.min(socialSecurityIncome, 6000);

  if (MAGI > 44000) {
    const magiMath = (MAGI - 44000) * 0.85;
    const optionA = lessSocialSecurityMath + magiMath;
    const optionB = socialSecurity * 0.85;
    const lessOptionIncomeMath = Math.min(optionA, optionB);
    return ordinaryIncome + lessOptionIncomeMath;
  } else if (MAGI > 34000) {
    return ordinaryIncome + lessSocialSecurityMath;
  } else {
    return ordinaryIncome;
  }
};

export default calculateMagi;
