import styled from "styled-components";
import MealItem from "./meal-Item/MealItem";

const DUMMU_MILS = [
  {
    id: 1,
    title: "sushi",
    description: "Finest fish and veggies",
    price: 3,
    amout: 1,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 5,
    amout: 1,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 10,
    amout: 1,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
    amout: 1,
  },
];

const Meals = () => {
  // const [meals, setMeals] = useState([]);

  // const getMeals = async () => {
  //   try {
  //     const response = await fetchApi("foods");
  //     setMeals(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getMeals();
  // }, []);

  return (
    <Card>
      {DUMMU_MILS.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            id={meal.id}
          ></MealItem>
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`;
