import { useState } from "react";
import { Button, List, ListItem } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import { JokeAPI } from "../api";

const JokeList = () => {
  const [state, setState] = useState({
    jokes: [],
    totalPages: null,
    page: 1,
    error: false,
    errorMessage: "",
  });

  const getJokes = async (page) => {
    if (!state.jokes.length || state.page !== page) {
      try {
        const results = await JokeAPI.index(page);
        setState({
          jokes: results.data.results,
          totalPages: results.data.total_pages,
          page,
        });
      } catch (error) {
        setState({
          ...state,
          error: true,
          errorMessage:
            "There was an error trying to joke. Please joke again later.",
        });
      }
    } else {
      setState({
        jokes: [],
        totalPages: null,
        page: 1,
        error: false,
        errorMessage: "",
      });
    }
  };

  const handlePageChange = (event, value) => {
    getJokes(value);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => getJokes(state.page)}
      >
        {state.jokes.length ? "Reset Jokes" : "Get Jokes"}
      </Button>
      {state.jokes.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "75%",
            margin: "auto",
          }}
        >
          <List>
            {state.jokes.map((item) => (
              <ListItem key={item.id} style={{ justifyContent: "center" }}>
                {item.joke}
              </ListItem>
            ))}
          </List>
          <div>
            <Pagination
              count={state.totalPages}
              page={state.page}
              color="secondary"
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : null}
      {state.error ? <p>{state.errorMessage}</p> : null}
    </div>
  );
};

export default JokeList;
