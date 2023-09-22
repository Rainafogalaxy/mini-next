// 进一步拆分
import Link from "next/link";

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
    <li>
      <img src={"/" + image} alt={title} />
      {/* 下边是Div */}
      <div>
        <div>
          <h2>{title}</h2>

          <div>
            <time>{humanReadabledDate}</time>
          </div>

          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        {/* Link */}
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
