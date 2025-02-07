const PageHeader = ({ title, image }) => {
  return (
    <div className={`select-none ${image}-header-image`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="py-16 md:py-28">
          <div className="ps-5 md:ps-10 flex justify-start">
            <div className="text-4xl md:text-5xl font-semibold text-[#fffad1] text-center">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
