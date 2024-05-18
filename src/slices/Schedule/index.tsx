import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './styles.module.scss'
import { months } from "@/utils/month";

export type ScheduleProps = SliceComponentProps<Content.ScheduleSlice>;


const Schedule = ({ slice }: ScheduleProps): JSX.Element => {
  console.log("slice", slice);

  const date = new Date(String(slice.primary.date));

  function convertToBrasiliaTime(date: Date) {
    const brasiliaOffset = 3 * 60;
    const localOffset = date.getTimezoneOffset();
    const brasiliaTime = new Date(date.getTime() + (localOffset - brasiliaOffset) * 60000);
  
    return brasiliaTime;
  }

  function getTime(date: string){
    const dateTime = convertToBrasiliaTime(new Date(date));
    return `${dateTime.getHours()}:${("00" + dateTime.getMinutes()).slice(-2)}`
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.scheduleContainer}
    >
      <div>
        {date.getDate()} {months[date.getMonth()]}
      </div>
      <div>
        {slice.items.map(schedule => (
          <div key={String(schedule.time) + String(schedule.movieTheater)}>
            <p>Sala: {schedule.movieTheater}</p>
            <p>Horário: {getTime(String(schedule.time))}</p>
            <p>Idioma: {schedule.language}</p>
            <p>Preço: R${schedule.price?.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
