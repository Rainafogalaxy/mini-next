//tip :
// 像这样，建立一个文件夹后，里面的index.js就相当于直接在外侧建立一个events.js

import { getAllEvents } from "../../dummy-data";

import EventList from "../../components/events/event-list";

// This is the page for a single event

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
