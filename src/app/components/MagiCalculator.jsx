import { useState } from 'react';
import PageHeader from './PageHeader';
import calculateMagi from '../utils/calculateMagi';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';

const MagiCalculator = () => {
  const navigate = useNavigate();
  const [filingStatus, setFilingStatus] = useState('Single');
  const [socialSecurity, setSocialSecurity] = useState('0');
  const [income, setIncome] = useState('0');

  useScrollToTop();

  const handleFilingStatusChange = (e) => {
    setFilingStatus(e.target.value);
  };

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
    <div className="tax-info-background animate-fadeIn select-none">
      <PageHeader title="MAGI Calculator" image="services" />

      <main className="flex flex-col justify-center items-center pt-20 pb-40 mx-5 md:mx-0">
        <div className="form_container">
          <form onSubmit={handleSubmit}>
            <h4 className="font-semibold text-gray-600 text-lg">
              Filing Status
            </h4>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  id="single"
                  name="filing-status"
                  value="Single"
                  checked={filingStatus === 'Single'}
                  onChange={handleFilingStatusChange}
                  required
                />
                &nbsp;Single
              </label>

              <label>
                <input
                  type="radio"
                  id="married-filing-jointly"
                  name="filing-status"
                  value="MFS"
                  checked={filingStatus === 'MFS'}
                  onChange={handleFilingStatusChange}
                  required
                />
                &nbsp;Married Filing Jointly
              </label>
            </div>

            <h4 className="font-semibold text-gray-600 text-lg">
              MAGI Calculator
            </h4>
            <div>
              <label htmlFor="socialSecurity">Social Security benefits</label>
              <span className="text-[#6a6a6a] absolute pt-[38px] text-md">
                $
              </span>
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
              <span className="text-[#6a6a6a] absolute pt-[37px] text-md">
                $
              </span>
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
              <div className="text-[24px] text-[#235161] font-semibold">
                $
                <span className="select-text">
                  {calculateMagi(filingStatus, socialSecurity, income)}
                </span>
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
      </main>
    </div>
  );
};

export default MagiCalculator;
