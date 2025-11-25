import { useReducer } from "react";

const initialState = { date: new Date(), inputValue: "0" };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { ...state, date: new Date() };
    case "updateInput":
      return { ...state, inputValue: action.payload };
    case "updateDate":
      const days = parseInt(state.inputValue, 10) || 0;
      if (isNaN(days)) return state;

      const updatedDate = new Date(state.date);
      updatedDate.setDate(updatedDate.getDate() + days);
      return { ...state, date: updatedDate, inputValue: "" };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <p className="date-next"> {state.date.toString()}</p>

      <button className="btn" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <div className="input-group">
        <input
          className="input"
          type="number"
          value={state.inputValue}
          onChange={(e) =>
            dispatch({ type: "updateInput", payload: e.target.value })
          }
        />
        <button
          className="btn"
          onClick={() => dispatch({ type: "updateDate" })}
        >
          Show Result
        </button>
      </div>
    </div>
  );
}

export default App;
