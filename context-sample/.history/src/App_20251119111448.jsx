import { useReducer } from "react";

const initialState = { date: new Date(), inputValue: "0" };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { ...state, date: new Date() };
    case "updateInput":
      return { ...state, inputValue: action.payload };
    case "updateDate":
      return {
        ...state,
        date: new Date(
          state.date.getTime() + parseInt(state.inputValue) * 60000
        ),
      };
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
