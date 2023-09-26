// 进一步拆分
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icons";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
// this classes thing here will be an object

// 优化图像的大小
import Image from "next/image";

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
      <Image src={"/" + image} alt={title} width={280} height={140} priority />
      {/* 下边是Div */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>

          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadabledDate}</time>
          </div>

          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        {/* Link */}
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
