const Cover = ({ img, title, paragraph }) => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-black max-w-4xl max-h-[35vh] bg-opacity-60"></div>
      <div className="hero-content text-center text-white ">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
