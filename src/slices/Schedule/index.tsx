import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.scss";
import { months } from "@/utils/month";

import { PiDoorOpen } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";

export type ScheduleProps = SliceComponentProps<Content.ScheduleSlice>;

const Schedule = ({ slice }: ScheduleProps): JSX.Element => {

  const date = new Date(String(slice.primary.date));

  function convertToBrasiliaTime(date: Date) {
    const brasiliaOffset = 3 * 60;
    const localOffset = date.getTimezoneOffset();
    const brasiliaTime = new Date(
      date.getTime() + (localOffset - brasiliaOffset) * 60000
    );

    return brasiliaTime;
  }

  function getTime(date: string) {
    const dateTime = convertToBrasiliaTime(new Date(date));
    return `${dateTime.getHours()}:${("00" + dateTime.getMinutes()).slice(-2)}`;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.scheduleContainer}
    >
      <div className={styles.scheduleDate}>
        {date.getDate()} {months[date.getMonth()]}
      </div>
      <div className={styles.scheduleInfoContainer}>
        {slice.items.map((schedule) => (
          <div
            className={styles.scheduleInfoItem}
            key={String(schedule.time) + String(schedule.movieTheater)}
          >
            <p>
              <PiDoorOpen size={16} /> Sala {schedule.movieTheater}
            </p>
            <p>
              <FaRegClock size={16} /> {getTime(String(schedule.time))}
            </p>
            <p>
              <IoLanguageOutline size={16} /> {schedule.language}
            </p>
            <p>
              <IoPricetagOutline size={16} />
              R${String(schedule.price?.toFixed(2)).replace(".", ",")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
