import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function FilterEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  // 如果url不对
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2022 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter.Please adjust your value!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // 如果过滤后是一个空数组
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilterEventsPage;
