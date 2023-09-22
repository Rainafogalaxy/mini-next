// 事件列表组件;负责渲染列表
import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  //这些事件应该由外部传入,所以接受一个props,它不关心这些数据来自于哪里，只关心如何在这里输出
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id} //react要用于diff算法，作为列表的唯一标识
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
