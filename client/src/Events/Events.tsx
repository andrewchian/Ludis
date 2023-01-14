import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Event from "./events.model";
import "./Events.css";

const Events = () => {
  const [eventList, setEventList] = useState<Event[]>([]);
  useEffect(() => {
    fetch(
      "/api/event/upcoming-events?" +
        new URLSearchParams({
          limit: "50",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.events);
        setEventList(data.events);
      });
  }, []);

  return (
    <>
      <Typography variant="h3">Events page</Typography>
      <div>
        {eventList.map((event) => {
          return <Typography variant="h4">{event.name}</Typography>;
        })}
      </div>
    </>
  );
};

export default Events;
