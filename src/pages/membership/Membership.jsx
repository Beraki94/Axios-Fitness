import PageHeader from "../../components/pageHeader/PageHeader"
import PricingList from "../../components/pricingCard/PricingList"
import SectionHeader from "../../components/sectionHeader/SectionHeader"
import Testimonials from "../../components/testimonials/Testimonials"
import "./Membership.css"

const Membership = () => {
  return (
    <div className="membership container">
      <PageHeader title={"Membership plan"}image={"https://t4.ftcdn.net/jpg/02/07/90/87/240_F_207908753_IgTqqhNJMOnWOgSNLXayj6MYaj91gdjp.jpg"}>
      "Fitness is not about being better than someone else. It’s about being better than you used to be."
      </PageHeader >
      <section className="membership__zone" >
        <div className="zone__card">
          <SectionHeader title={"Flexible Membership Plans"} subTitle={"Choose the Perfect Plan That Fits Your Lifestyle and Schedule"} />
          <PricingList />
        </div>
        <SectionHeader title={"What Our Members Say"} subTitle={"Real Stories of Transformation and Success from Our Community"} />
        <Testimonials />
      </section>
    </div>
  )
}

export default Membership