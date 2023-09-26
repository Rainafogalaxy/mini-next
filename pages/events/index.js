//tip :
// 像这样，建立一个文件夹后，里面的index.js就相当于直接在外侧建立一个events.js

import { getAllEvents } from "../../helpers/api-utils";

import EventList from "../../components/events/event-list";

import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import Head from "next/head";

import { useRouter } from "next/router"; //编程式导航控制路由

// This is the page for a single event

function AllEventsPage(props) {
  const { events } = props; //解构赋值
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <Fragment>
      <Head>
        <title>NextJS</title>
        {/* 对搜索引擎很重要的标签(会显示在搜索结果的文本) */}
        <meta name="description" content="Hello,I am leaning." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
