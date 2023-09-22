import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
}

export default HomePage;

//在哪里创建小组件都可以，但是不应该创建在pages文件夹下，在pages文件夹下，只应该包含page组件，否则nextjs就会把它们当做页面生成路径
//因此，我们在目录下新建一个components文件夹(可以是任何名字)
