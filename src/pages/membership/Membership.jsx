import PageHeader from "../../components/pageHeader/PageHeader"
import PricingList from "../../components/pricingCard/PricingList"
import SectionHeader from "../../components/sectionHeader/SectionHeader"
import Testimonials from "../../components/testimonials/Testimonials"

const Membership = () => {
  return (
    <div className="membership container">
      <PageHeader title={"Pricing Plan"}image={"https://t4.ftcdn.net/jpg/02/07/90/87/240_F_207908753_IgTqqhNJMOnWOgSNLXayj6MYaj91gdjp.jpg"}>
      "Fitness is not about being better than someone else. It’s about being better than you used to be."
      </PageHeader>
      <section>
        <SectionHeader title={"BECOME A MEMBER"} subTitle={"Our Affordable Pricing Plan"} />
        <PricingList />
      </section>
      <section >
        <SectionHeader title={"BECOME A MEMBER"} subTitle={"Our Affordable Pricing Plan"} />
        <Testimonials />
      </section>
    </div>
  )
}

export default Membership