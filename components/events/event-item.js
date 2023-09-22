// 进一步拆分
import Link from "next/link";
import classes from "./event-item.module.css";
// this classes thing here will be an object

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadabledDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      {/* 下边是Div */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>

          <div className={classes.date}>
            <time>{humanReadabledDate}</time>
          </div>

          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        {/* Link */}
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
