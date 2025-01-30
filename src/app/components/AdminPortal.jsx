import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from './PageHeader';
import useScrollToTop from '../hooks/useScrollToTop';

const AdminPortal = ({ username, removeCookie, handleUserLogout }) => {
  const navigate = useNavigate();
  // console.log({ username, removeCookie });
  useScrollToTop();

  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: 'bottom-left',
    });
    handleUserLogout();
  };

  const handleLogout = () => {
    try {
      removeCookie('token');
      handleSuccess('Logged out successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
  };

  return (
    <div className="tax-info-background animate-fadeIn">
      <PageHeader title="Admin Portal" image="services" />

      <div className="flex justify-center pt-20 pb-40 mx-5 md:mx-0">
        <div className="admin_container">
          <div className="font-semibold text-center pb-5">
            <h4>Logged in as</h4>
            <span className="text-[#043a49]">&nbsp;{username}&nbsp;</span>
          </div>
          <div>
            <div className="mb-2">
              <button
                className="admin_container_button hidden md:block"
                onClick={() => {
                  navigate('/new-post');
                }}
              >
                Create a New Post
              </button>
            </div>
            <div className="mb-2">
              <button
                className="admin_container_button"
                onClick={() => {
                  navigate('/magi-calculator');
                }}
              >
                MAGI Calculator
              </button>
            </div>
            <hr />
            <div className="mt-2">
              <button className="admin_container_logout" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
