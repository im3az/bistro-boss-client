import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div className="my-10">
      {title && <Cover img={img} title={title} subTitle={subTitle} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16 my-3">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 border-x-2 mt-10">
          ORDER YOUR FAVORITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
