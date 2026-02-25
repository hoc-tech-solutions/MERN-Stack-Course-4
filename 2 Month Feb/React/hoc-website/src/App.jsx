import "bootstrap/dist/css/bootstrap.min.css";
import DetailsCard from "./components/DetailsCard"; // Reusable component

function App() {
  // JavaScript
  console.log("pppppppppppppppppppppppppp");

  // variable
  const name = "HOC"; // we can not change const value

  let age = 30; // iwe can change
  console.log(name, "name ===>");

  console.log(age, "-----");

  // string
  const a = "HOCasdasdasddasd";

  // array
  const b = ["apple", "test", "pune", 2252];

  // Object
  const data = {
    name: "test",
    city: "pune",
  };

  // if else - ternari oprator - jar tar
  // functions

  const fullName = "HOC";

  if (fullName == "PPPP") {
    console.log(true);
  } else {
    console.log(false);
  }

  function addNumber() {
    console.log("Click");
  }

  const cardData = [
    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2",
    },

    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2",
    },

    {
      CardTitle: "Test 1",
      cardDescription: "Test Description 1",
    },

    {
      CardTitle: "Test 2",
      cardDescription: "Test Description 2",
    },
  ];

  console.log(cardData, "=========");
  return (
    <>
      <button className="btn btn-primary" onClick={addNumber}>
        Click Me
      </button>
      <div className="container">
        <div className="row my-2">
          {cardData.map((each) => (


            <div className="col-md-3">
              {/* CardTitle - props || cardDescription - props  || we can add more props also */}

              <DetailsCard
                CardTitle={each.CardTitle}
                cardDescription={each.cardDescription}
              />
              
            </div>

          ))}

        </div>
      </div>
    </>
  );
}

export default App;
