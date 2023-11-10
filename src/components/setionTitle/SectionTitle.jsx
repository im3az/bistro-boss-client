const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 my-5 mx-auto text-center ">
      <p className="text-yellow-600 text-lg mb-2">--- {subHeading} ---</p>

      <h3 className="text-4xl uppercase border-y-4 py-3">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
