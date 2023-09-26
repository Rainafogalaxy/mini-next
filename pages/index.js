import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

// 在首页使用预渲染

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
    // 每半小时重新生成这个页面
  };
}

export default HomePage;

//在哪里创建小组件都可以，但是不应该创建在pages文件夹下，在pages文件夹下，只应该包含page组件，否则nextjs就会把它们当做页面生成路径
//因此，我们在目录下新建一个components文件夹(可以是任何名字)
