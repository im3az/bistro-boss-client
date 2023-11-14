import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuBg from "../../../assets/menu/menu-bg.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/setionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      />
      {/* offered menu */}
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      {/* dessert menu */}
      <MenuCategory
        img={dessertBg}
        title={"dessert"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={dessert}
      />
      {/* pizza category */}
      <MenuCategory
        img={pizzaBg}
        title={"pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={pizza}
      />
      {/* salad category */}
      <MenuCategory
        img={saladBg}
        title={"salad"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={salad}
      />
      {/* soups category */}
      <MenuCategory
        img={soupBg}
        title={"soup"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={soup}
      />
    </div>
  );
};

export default Menu;
