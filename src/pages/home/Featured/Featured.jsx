import SectionTitle from "../../../components/setionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="bg-fixed featured-item text-white my-20">
      <div className="bg-black bg-opacity-40 pt-8 ">
      <SectionTitle heading={"Featured Items"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center  py-20 pt-12 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2023</p>
          <p className="uppercase my-2">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima corporis doloribus porro id molestiae quam beatae ullam
            doloremque inventore illum, explicabo totam, enim nulla vel
            repudiandae, minus laudantium! Obcaecati est voluptatibus sint.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-x-2 text-white mt-3" >Order now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
