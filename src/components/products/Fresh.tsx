import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../../Css/Products.css";
type Items = {
  id: number;
  Products: any;
  img: any;
  name: string;
  price: number;
  Description: string;
};

const Fresh: React.FC = (props: RouteComponentProps<{ key: string }>) => {
  const [items, setItems] = useState<Items[]>([
    {
      id: 1,
      Products: ["Fresh", "Frozen", "Dried", "All products"],
      img: ["Frozen/basil1.jpeg", "Frozen/basil2.jpeg", "Frozen/basil3.jpeg"],
      name: "Basil",
      price: 2.29,
      Description:
        "Basil is a well-known name for the culinary herb. Would like to make your pizza or salad smell and taste differently and intriguing, basil will manage this task. This is a king of herbs by many cookery authors, so don't pass by and join the credible community. Basil is most commonly used fresh in cooked recipes. In general, it is added at the last moment, as cooking quickly destroys the flavor.",
    },
    {
      id: 2,
      Products: ["Fresh", "Frozen", "Dried", "All products"],
      img: [
        "Frozen/Parsley1.jpeg",
        "Frozen/Parsley2.jpeg",
        "Frozen/Parsley3.jpeg",
      ],
      name: "Parsley",
      price: 1.75,
      Description:
        "Use curly leaf parsley as a garnish on your main dishes. We recommend this fresh herbal as a garnish on potato dishes (boiled or mashed potatoes), on rice dishes (risotto or pilaf), on fish, fried chicken, lamb, goose, and steaks, as well in meat or vegetable stews (including shrimp creole, beef bourguignon, goulash, or chicken paprikash).",
    },
    {
      id: 3,
      Products: ["Frozen", "Fresh", "All products"],
      img: [
        "Frozen/raspberries1.jpeg",
        "Frozen/raspberries2.jpeg",
        "Frozen/raspberries3.jpeg",
      ],
      name: "Raspberries",
      price: 10.98,
      Description:
        "We started growing raspberries in 90’s on our family farm near Cupar. Our cultivar has exeptional sweet taste with astringent flavor. These individually gathered berries are a wonderful taste of summer in your everyday meal. Raspberries are perfect in smoothies, baking, on pancakes or just plain old snacking out of the bag!  Enjoy!",
    },
    {
      id: 4,
      Products: ["Frozen", "Dried", "Sale", "All products"],
      img: [
        "Frozen/Spinach1.jpeg",
        "Frozen/Spinach2.jpeg",
        "Frozen/Spinach3.jpeg",
      ],
      name: "Spinach",
      price: 4.25,
      Description:
        "Calorie for calorie, leafy green vegetables like spinach with its delicate texture and jade green color provide more nutrients than any other food. Although spinach is available throughout the year, its season runs from March through May and from September through October when it is the freshest, has the best flavor, and is most readily available. Spinach has the bitterness of beet greens and the slightly salty flavor of Swiss chard that makes them delicious as a soup basis or filing to a pie.",
    },
    {
      id: 5,
      Products: ["Frozen", "Dried", "Liquid", "All products"],
      img: [
        "Frozen/Pumpkins1.jpeg",
        "Frozen/Pumpkins2.jpeg",
        "Frozen/Pumpkins3.jpeg",
      ],
      name: "Winter Pumpkin",
      price: 3.29,
      Description:
        "Winter pumpkins are a delicious addition to your cold season meal. Choose red or green compact versions of this special cultivar to cook Heaven-and-Earth Tempura Cakes or Pumpkin Puree with Ginger. Its distinctive bottom with a circular ridge, though, gives it away. On some, the ridge may surround a more pronounced bump, or turban. A freshly cut buttercup may smell like a clean, fragrant cucumber, but once cooked, its orange flesh becomes dense, a bit dry, and very mild. ",
    },
    {
      id: 6,
      Products: ["Dried", "All products", "All products"],
      img: [
        "Dried/Green-Mixed-Spice1.webp",
        "Dried/Green-Mixed-Spice2.webp",
        "Dried/Green-Mixed-Spice3.webp",
      ],
      name: "Green Mixed Spice",
      price: 9.98,
      Description:
        "This mixture works best for soups, stews and salads. We also highly recommend to try it as a basis of your parsley pesto season. This spice would make it extremely delightful. It will add a delicious aroma to your cooking so no one can ignore it. Our pepper mixed spice is created based on a special proportion of each ingredient that makes it a perfect addition to your everyday meal. This mix consists of dried and powered basil, parsley, oregano, rosemary and thyme.",
    },
    {
      id: 7,
      Products: ["Dried", "All products"],
      img: [
        "Dried/Pepper-Mixed-Spice1.webp",
        "Dried/Pepper-Mixed-Spice2.webp",
        "Dried/Spoons-Collection3.webp",
      ],
      name: "Paprika & Cayenne Pepper",
      price: 15.5,
      Description:
        "A perfect combination of spicy flavor to enrich the taste of your dishes. We recommend to use it as a key ingredient in a variety of hot sauces, particularly those employing vinegar as a preservative. Our pepper mixed spice is created based on a special proportion of each ingredient that makes it perfect to be spread on sandwiches or similar items to add a spicy flavor. This mix consists of paprika and cayenne pepper, clove, mustard, zest and oregano. ",
    },
    {
      id: 8,
      Products: ["Dried", "Fresh", "All products"],
      img: [
        "Dried/Radishes1.webp",
        "Dried/Radishes2.webp",
        "Dried/Radishes3.webp",
      ],
      name: "Radishes",
      price: 2.49,
      Description:
        "Our radishes are crisp enough and feels refreshening pungent that makes them perfect for salads, but they also may appear in many other dishes. Radish leaves are sometimes used in spicy recipes, like potato soup or as a sauteed side dish. You can also find them as a blended constituent with fruit juices in some piquant recipes.",
    },
    {
      id: 9,
      Products: ["Dried", "All products"],
      img: [
        "Dried/Red-Mixed-Spice1.webp",
        "Dried/Red-Mixed-Spice2.webp",
        "Dried/Four-Spices3.webp",
      ],
      name: "Red Mixed Spice",
      price: 7.99,
      Description:
        "Constituents of this mixture prove the name of it. Red Mixed Spice is full of flavored ingredients such as dried tomatoes and pepper, paprika, carrot, onion, garlic, mustard, ginger, and sea salt. We designed it specially for dishes of rice paella or risotto. It works great with a Spanish soup gazpacho or any other tomato dish.",
    },
    {
      id: 10,
      Products: ["Dried", "Fresh", "All products"],
      img: [
        "Dried/Red-onions1.webp",
        "Dried/Red-onions2.webp",
        "Dried/Red-onions3.webp",
      ],
      name: "Red Onions",
      price: 1.55,
      Description:
        "Red onions are probably the best option to use in your salads or to be eaten raw because of its light sweeter taste and particular aroma. This particular onion cultivar is very high in flavonoids which are very useful for the health. We recommend Red onions to be used as a constituent of salad, sandwich and especially burger to enrich its succulence.",
    },
    {
      id: 11,
      Products: ["Liquid", "All products"],
      img: [
        "Liquid/Vinegar1.webp",
        "Liquid/Vinegar2.webp",
        "Liquid/Vinegar3.webp",
      ],
      name: "Balsamic Vinegar",
      price: 3.48,
      Description:
        "Local Balsamiq Vinegar tastes like real vinegar imported from Italy, but less expensive and taste with native flavour. It works well in a salad mixed with extra virgin olive oil. Put it on lettuce or a tomato slice and give it a try with crisp toast! ",
    },
    {
      id: 12,
      Products: ["Liquid", "Fresh", "Sale", "All products"],
      img: [
        "Liquid/Red-Bell-Pepper-1.webp",
        "Liquid/Red-Bell-Pepper-2.webp",
        "Liquid/Red-Bell-Pepper-3.webp",
      ],
      name: "Bell pepper",
      price: 6.99,
      Description:
        "All red, yellow, and orange peppers start out green. The color changes and their sweetness increases depending on how long they're allowed to ripen on the vine. In Season: Bell peppers are available year-round, but they're at their best from July through November.",
    },
    {
      id: 13,
      Products: ["Liquid", "Fresh", "All products"],
      img: ["Liquid/cherry-tomatoes1.webp"],
      name: "Cherry Tomatoes",
      price: 6.9,
      Description:
        "These Cherry tomatoes just might be the sweetest little tomatoes we’ve ever offered. It is all thanks to perfect weather conditions this season. Very small, firm and juicy, it’s a great choice when you’re looking for a fresh and nutritious option for snacking. And when you’re making salads, just wash and toss in – no slicing required.",
    },
    {
      id: 14,
      Products: ["Liquid", "Fresh", "All products"],
      img: ["Liquid/cucumber1.jpg"],
      name: "Cucumber",
      price: 6.9,
      Description:
        "The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer.",
    },
    {
      id: 15,
      Products: ["Liquid", "Fresh", "All products"],
      img: ["Liquid/green-beans1.webp"],
      name: "Green Beans",
      price: 2.9,
      Description:
        "Green beans are eaten around the world, and are marketed canned, frozen, and fresh. Green beans are often steamed, boiled, stir-fried, or baked in casseroles. A dish with green beans popular throughout the United States, particularly at Thanksgiving, is green bean casserole, which consists of green beans, cream of mushroom soup, and French fried onions.",
    },
    {
      id: 16,
      Products: ["Liquid", "Fresh", "All products"],
      img: ["Liquid/leek1.webp"],
      name: "Leek",
      price: 13.0,
      Description:
        "Leeks have a mild, onion-like taste. In its raw state, the vegetable is crunchy and firm. The edible portions of the leek are the white base of the leaves (above the roots and stem base), the light green parts, and to a lesser extent the dark green parts of the leaves. One of the most popular uses is for adding flavor to stock.",
    },
    {
      id: 17,
      Products: ["Liquid", "All products"],
      img: [
        "Liquid/Single-oil1.webp",
        "Liquid/Corn-Oil-perspective2.webp",
        "Liquid/Oil-and-vineguard3.webp",
      ],
      name: "Organic Corn Oil",
      price: 8.98,
      Description:
        "Our Organic Corn Oil is a cholesterol-free food product with zero grams of trans fat per individual serving. Corn oil is often used for popping popcorn and frying French fries and can be used for regular cooking in place of other oils. This 100 percent pure, cholesterol-free oil gives you a heart-healthy way to cook your favorite meals.",
    },
    {
      id: 18,
      Products: ["Liquid", "Fresh", "Sale", "All products"],
      img: [
        "Liquid/Peaches1.webp",
        "Liquid/Peaches2.webp",
        "Liquid/Peaches3.webp",
      ],
      name: "Peaches",
      price: 5.99,
      Description:
        "Our peaches are extremely sweet to the taste with soft and thin skin. This particular cultivar is low-acid and white-fleshed that makes it a perfect candidate for the fresh desserts due to the juicy taste and entrancing aroma.",
    },
    {
      id: 19,
      Products: ["Liquid", "Fresh", "All products"],
      img: [
        "Liquid/Red-plums1.webp",
        "Liquid/Red-plum2.webp",
        "Liquid/Red-plums3.webp",
      ],
      name: "Red European Plums",
      price: 1.32,
      Description:
        "European plum is an ancient domesticated species, known only in cultivation, now cultivated in temperate areas worldwide and our farm is not an exception. This particular plum cultivar differs from others with globose and large enough form. They are very juicy and especially suitable for salads or other quick desserts. European plum has a firm and succulent flesh full of antioxidants.",
    },
    {
      id: 20,
      Products: ["Liquid", "Fresh", "All products"],
      img: [
        "Liquid/Thompson-Seedless-Grape1.webp",
        "Liquid/Thompson-Seedless-Grape2.webp",
      ],
      name: "Thompson Seedless Grapes",
      price: 6.05,
      Description:
        "Thompson seedless grapes are one of the world's most popular eating grapes. It has a perfect refreshing sweet taste. What's the best of it that they can be a dessert itself or used in some sort of fruit salad seasoned with any condiment or juice.  ",
    },
    {
      id: 21,
      Products: ["Fresh", "Sale", "All products"],
      img: [
        "Fresh/Brandywine-tomatoes-front.webp",
        "Fresh/Brandywine-Tomatoes2.webp",
      ],
      name: "Brandywine Tomatoes",
      price: 8.05,
      Description:
        "Brandywine tomatoes popularly is considered among the best tasting available, probably is caused its origin. Brandywine tomato plant is an heirloom cultivar of the species. if you want to taste the best tomatoey flavor this tomato is exactly what you need. This particular cultivar is extremely succulent and tasty. It is a beautifully sweet tomato that is offset by a wonderful acidity that is a perfect combination for delicious dishes.",
    },
    {
      id: 22,
      Products: ["Fresh", "All products"],
      img: [
        "Fresh/Campari-Tomatoes-closer2.webp",
        "Fresh/Campari-Tomatoes-closer1.webp",
      ],
      name: "Campari Tomatoes",
      price: 11.0,
      Description:
        "Campari is a type of tomato, noted for its juiciness, high sugar level, low acidity, and lack of mealiness. Camparis are deep red and larger than a cherry tomato, but smaller and rounder than a plum tomato. This tomatoes variety is a handy ingredient in your kitchen as it can be nourished raw, salads, snacks and other cooking.",
    },
    {
      id: 23,
      Products: ["Fresh", "All products"],
      img: ["Fresh/Capia-Pepper-above1.webp", "Fresh/Capia-Pepper2.webp"],
      name: "Capia Pepper",
      price: 6.95,
      Description:
        "Capia peppers are rich in ascorbic acid and carotene. Grill it or just eat it raw. The Capia pepper is a delicatecy of different southern cousines, now organic at your kitchen. Just give it a try and see how it taste in your paella.",
    },
    {
      id: 24,
      Products: ["Fresh", "All products"],
      img: ["Fresh/Damson1.webp", "Fresh/Damson2.webp"],
      name: "Damson Plums",
      price: 1.99,
      Description:
        "Damson plums are very popular and widespread cultivar. Probably it is the first one that comes in mind when you hear the word plum. The main characteristic of these plums is its distinctive rich flavour; unlike other plums, it is both high in sugars and highly astringent. The fruit of the damson has a distinctive, somewhat astringent taste, and are widely used for culinary purposes, particularly in fruit preserves or jam.",
    },
    {
      id: 25,
      Products: ["Fresh", "All products"],
      img: [
        "Fresh/Empire-Apple1.webp",
        "Fresh/Apple2.webp",
        "Fresh/Apples3.webp",
      ],
      name: "Empire Apples",
      price: 2.89,
      Description:
        "Empire apples are red, juicy, firm, crunchy and sweet. We have already been gathering them during September and October for fourteen years. This delicious apple cultivar will be in good usable conditions until January. Empire apples are excellent for eating and salads, and good for sauce, baking, pies and freezing. We root for these apples as an ideal lunch-box apple, not least because it does not bruise easily.",
    },
    {
      id: 26,
      Products: ["Fresh", "All products"],
      img: [
        "Fresh/Golden-Delicious-Apples1.webp",
        "Fresh/Golden-Delicious-Apples2.webp",
        "Fresh/Golden-Delicious-Apples3.webp",
      ],
      name: "Golden Delicious Apples",
      price: 2.3,
      Description:
        "It's already has been a well-known cultivar and beloved deeply by customers by its very sweet taste. Golden Delicious is a favorite fruit for salads, apple sauce, and apple butter. We recommend this cultivar to try as a filling of the pie. We find its delicious sweet taste a worth constituent to this dessert. Golden Delicious apples keep their shape well after baking, so you'll get beautiful slices that would make your pie looks perfect.",
    },
    {
      id: 27,
      Products: ["Fresh", "All products"],
      img: ["Fresh/strawberries1.webp"],
      name: "Strawberries",
      price: 2.85,
      Description:
        "The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer.",
    },
    {
      id: 28,
      Products: ["Specials", "All products"],
      img: [
        "Special/pack-image_grande_3837a501-1d78-48f6-8030-3f50a78faa16_1024x1024.png",
      ],
      name: "Veggie Balls",
      price: 29.99,
      Description:
        "Pack includes beetroot, spinach, eggplant, walnut and recipe for this delicious vegetarian meal (4 persons) that will impress even the most pernickety guest",
    },
    {
      id: 29,
      Products: ["Cooked", "All products"],
      img: ["Cooked/bowl_1024x1024.jpg"],
      name: "Wooden Bowls",
      price: 103.99,
      Description:
        "Richly grained acacia wood turns out in smooth, sculptural serving essentials, naturally suited to everyday use, entertaining or artful display. Bowls round in organic curves to hold salads, snacks, fruit or collectibles. Each piece is given a clear lacquer finish to bring out the wood's warm color and individual markings. Harvested from well-managed forests in the Philippines under close supervision of the local government's reforestation program.",
    },
    {
      id: 30,
      Products: ["Cooked", "All products"],
      img: ["Cooked/spoon_1024x1024.jpg"],
      name: "Wooden Spoon",
      price: 49.99,
      Description:
        "Richly grained acacia wood turns out in smooth, sculptural serving essentials, naturally suited to everyday use, entertaining or artful display. Spoon rounds in organic curves to hold salads, snacks, fruit or collectibles. Each piece is given a clear lacquer finish to bring out the wood's warm color and individual markings. Harvested from well-managed forests in the Philippines under close supervision of the local government's reforestation program.",
    },
  ]);
  const daaa = items.filter((list) => {
    return list.Products.indexOf(props.match.params.key) > -1;
  });
  return (
    <div className="Products">
      <h2>{props.match.params.key}</h2>
      <span>{daaa.length} products in collection</span>
      <ul>
        {daaa.map((list) => {
          return (
            <li style={{ marginBottom: "60px" }}>
              <a href="#">
                <div>
                  <img
                    className="imgss"
                    style={{
                      backgroundImage: `url(${require(`../../asset/Products/${list.img[0]}`)})`,
                      width: "100%",
                      height: "100%",
                      right: "0",
                      left: "0",
                      top: "0",
                    }}
                  ></img>
                </div>
                <span style={{ height: "30px" }}>{list.name}</span>
                <em style={{ color: "gray" }}>
                  Harvest 2015 | In stock | Bunch
                </em>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Fresh;
