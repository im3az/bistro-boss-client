import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  // const parallaxStyles = {
  //   backgroundSize: "cover",
  // };

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundSize: "contain",
  };
  return (
    // <div className="">
    //   <Parallax
    //     blur={{ min: -1, max: 3 }}
    //     bgImage={img}
    //     bgImageAlt="the menu"
    //     strength={-200}

    //   >
    //     <div className="hero h-[500px] ">
    //       <div className="hero-overlay bg-black max-w-4xl max-h-[250px] bg-opacity-50"></div>
    //       <div className="hero-content text-center text-white ">
    //         <div className="max-w-lg">
    //           <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
    //           <p className="mb-5">{subTitle}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </Parallax>
    // </div>

    <div style={styles}>
      <Parallax bgImage={img} blur={{ min: -1, max: 3 }} strength={200}>
        <div className="hero h-[500px]">
          <div className="hero-overlay bg-black max-w-4xl max-h-[250px] bg-opacity-50"></div>
          <div className="hero-content text-center text-white ">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

// style={{
//   backgroundImage: `url("${img}")`,
// }}

export default Cover;
