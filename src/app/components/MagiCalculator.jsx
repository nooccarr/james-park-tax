import { useState } from 'react';
import PageHeader from './PageHeader';
import calculateMagi from '../utils/calculateMagi';
import { useNavigate } from 'react-router-dom';

const MagiCalculator = () => {
  const navigate = useNavigate();
  const [socialSecurity, setSocialSecurity] = useState('0');
  const [income, setIncome] = useState('0');

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (value === '0') value = '';
    if (name === 'socialSecurity') {
      setSocialSecurity(value);
    } else if (name === 'income') {
      setIncome(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tax-info-background">
      <div className="services-header-image">
        <PageHeader title="MAGI Calculator" />
      </div>
      <div className="flex flex-col justify-center items-center pt-20 pb-40 mx-5 md:mx-0">
        <div className="form_container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="socialSecurity">Social Security benefits</label>
              <input
                type="number"
                id="social-security"
                name="socialSecurity"
                value={socialSecurity}
                className="text-[#6a6a6a]"
                onChange={handleOnChange}
                onFocus={handleFocus}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="income">Ordinary Income</label>
              <input
                type="number"
                id="income"
                name="income"
                value={income}
                className="text-[#6a6a6a]"
                onChange={handleOnChange}
                onFocus={handleFocus}
                required
              />
            </div>
            <div>
              <div className="text-[15px] text-[#6a6a6a]">Total Income</div>
              <div className="ps-2 text-[24px] text-[#235161] font-semibold">
                {calculateMagi(socialSecurity, income)}
              </div>
            </div>
          </form>
        </div>
        <div className="pt-10">
          <button
            className="post-link-category"
            onClick={() => navigate('/admin-portal')}
          >
            Back to Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagiCalculator;
