import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import { Fragment } from "react";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";
function EventDetailPage(props) {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        {/* 对搜索引擎很重要的标签(会显示在搜索结果的文本) */}
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

// 需要context
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

// 这个函数将会告诉Nextjs哪个eventid应该预渲染这个页面
export async function getStaticPaths() {
  const events = await getFeaturedEvents(); //对于一些页面，则不会预渲染
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
