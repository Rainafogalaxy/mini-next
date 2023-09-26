import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

function FilterEventsPage(props) {
  // const router = useRouter();

  // const filterData = router.query.slug;
  // if (!filterData) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p className="center">Loading...</p>;
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;
  // 如果url不对
  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter.Please adjust your value!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;
  // 如果过滤后是一个空数组
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(props.date.year, props.date.month - 1);
  return (
    <Fragment>
      <Head>
        <title>NextJS</title>
        {/* 对搜索引擎很重要的标签(会显示在搜索结果的文本) */}
        <meta name="description" content="Hello,I am leaning." />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
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
    return {
      props: { hasError: true },

      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilterEventsPage;
