import PageHeader from "../../components/pageHeader/PageHeader";
import './Schedule.css';
import SectionHeader from "../../components/sectionHeader/SectionHeader";
const Schedule = () => {
  return (
    <div className="schedule container">
        <PageHeader
        title="Daily Schedule"
        image="https://media.gettyimages.com/id/1211977239/photo/portrait-of-man-in-cross-training-gym.jpg?s=612x612&w=0&k=20&c=-GRyr3SEOQAu7uJIDcS2JsYPNj-Mi2NXR1wjz11wj-I="
    >
        "Push yourself because no one else is going to do it for you."
    </PageHeader>

    <section className="schedule__table">
    <SectionHeader title={"BECOME A MEMBER"} subTitle={"Our Affordable Pricing Plan"} />
    <div className="schedule__container">
      <table className="schedule__data">
        <thead>
          <tr>
            <th>Hours</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr className="schedule__row">
            <td>9:00 AM - 10:00 AM</td>
            <td>Morning Energy</td>
            <td>Morning Energy</td>
            <td>Morning Energy</td>
            <td>Morning Energy</td>
            <td>Morning Energy</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr className="schedule__row schedule__row--even">
            <td>10:30 AM - 11:30 AM</td>
            <td>Swimming</td>
            <td>Swimming</td>
            <td>Swimming</td>
            <td>Stretching</td>
            <td>Stretching</td>
            <td>Stretching</td>
            <td>Stretching</td>
          </tr>
          <tr className="schedule__row">
            <td>11:30 AM - 4:00 PM</td>
            <td>Body Building</td>
            <td>Body Building</td>
            <td>Body Building</td>
            <td>Body Building</td>
            <td>Swimming</td>
            <td>Swimming</td>
            <td>Swimming</td>
          </tr>
          <tr className="schedule__row schedule__row--even">
            <td>4:00 PM - 6:30 PM</td>
            <td>Fitness Club</td>
            <td>Fitness Club</td>
            <td>Fitness Club</td>
            <td>Fitness Club</td>
            <td>Fitness Club</td>
            <td>Stretching</td>
            <td>Stretching</td>
          </tr>
          <tr className="schedule__row">
            <td>6:30 PM - 7:30 PM</td>
            <td>Fitness</td>
            <td>Fitness</td>
            <td>Fitness</td>
            <td>Fitness</td>
            <td>Dancing</td>
            <td>Dancing</td>
            <td>Dancing</td>
          </tr>
          <tr className="schedule__row schedule__row--even">
            <td>7:30 PM - 8:30 PM</td>
            <td>Boxing</td>
            <td>Boxing</td>
            <td>Boxing</td>
            <td>Tennis</td>
            <td>Tennis</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section className="schedule__discount">
  <div>
      <h4>ENJOY 50% DISCOUNT</h4>
      <h5>Offer Lasts until 31st December 2024</h5>
    </div>
      <button className="btn__lg">BECOME A MEMBER NOW</button>
  </section>
  </div>
  );
};

export default Schedule;
