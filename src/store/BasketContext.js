import React, { createContext, useState } from "react";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setTtems] = useState([]);

  // const updateBasketItem = async ({ id, amout }) => {
  //   try {
  //     const { data } = await fetchApi(`basketItem/${id}/update`, {
  //       method: "PUT",
  //       body: { amout: amout },
  //     });

  //     setTtems(data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getBasket = async () => {
  //   try {
  //     const { data } = await fetchApi("basket");

  //     setTtems(data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getBasket();
  // }, []);

  const addToBasket = async (newItem) => {
    // try {
    //   console.log(newItem);
    //   const response = await fetchApi(`foods/${newItem.id}/addToBasket`, {
    //     method: "POST",
    //     body: { amout: newItem.amout },
    //   });
    //   setTtems(response.data.items);
    // } catch (error) {
    //   console.log(error);
    // }

    setTtems((prevState) => {
      if (!prevState.length) {
        return [newItem];
      }
      const daosItem = prevState.find((oldItem) => {
        return oldItem.id === newItem.id;
      });
      if (!daosItem) {
        return [...prevState, newItem];
      }
      const ubdateItems = prevState.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          oldItem.amout = oldItem.amout + newItem.amout;
        }
        return oldItem;
      });
      return ubdateItems;
    });
  };

  const state = {
    items,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
