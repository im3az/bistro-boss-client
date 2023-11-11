import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuBg from "../../../assets/menu/menu-bg.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title={"our menu"}
        paragraph={"Would you like to try a dish?"}
      />
      <PopularMenu />
      <Cover
        img={dessertBg}
        title={"DESSERTS"}
        paragraph={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PopularMenu />
      <Cover
        img={pizzaBg}
        title={"PIZZA"}
        paragraph={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PopularMenu />
      <Cover
        img={saladBg}
        title={"Salads"}
        paragraph={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PopularMenu />
      <Cover
        img={soupBg}
        title={"Soups"}
        paragraph={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
