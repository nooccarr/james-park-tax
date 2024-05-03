import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Logout = ({ username, removeCookie }) => {
  const navigate = useNavigate();
  // console.log({ username, removeCookie });
  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: 'bottom-left',
    });
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
    <div className="flex justify-center py-20">
      <div className="form_container">
        <div className="font-semibold text-center pb-5">
          <h4>Logged in as</h4>
          <span className="text-[#043a49]">{username}</span>
        </div>
        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Logout;
