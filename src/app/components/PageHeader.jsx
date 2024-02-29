const PageHeader = ({ title }) => {
  return (
    <div className="max-w-[2240px] mx-auto">
      <div className="py-16 md:py-28">
        <div className="ps-5 md:ps-10 flex justify-start">
          <div className="text-4xl md:text-5xl font-semibold text-[#d4d09d] text-center">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
