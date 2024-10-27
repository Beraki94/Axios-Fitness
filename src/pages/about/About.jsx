import PageHeader from "../../components/pageHeader/PageHeader"
import "./About.css"
import SectionHeader from "../../components/sectionHeader/SectionHeader"
import ImageGallery from "../../components/imageGallery/ImageGallery"
import GymServices from "../../components/gymServices/GymServices"
import TrainersList from "../../components/trainers/TrainersList"
import AboutHero from "../../components/aboutHero/AboutHero"


const About = () => {
  return (
    <div className="about container"> 
      <PageHeader title={"About Us"} image={"https://media.gettyimages.com/id/1291134201/photo/if-it-burns-youre-getting-closer.jpg?s=612x612&w=0&k=20&c=lbvmx_vsim_U8vakIw6ykHGqh9kHMmdKBJ5wFuytTT4="}>
        "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
      </PageHeader>
     
    <section className="about__hero">
    <SectionHeader 
        title="Our Company Overview" 
        subTitle="Empowering You to Achieve Your Health and Fitness Goals Every Day" 
      />
      <AboutHero />
    </section>

    <section className="about__services">
     <SectionHeader 
          title={"Our Premium Services"}
          subTitle={"Explore a Variety of Fitness Programs Designed for Every Goal"}
          className="secondary" />
     <GymServices />
    </section>
    <section className="about__gallery">
      <SectionHeader title={"TAKE A TOUR"} subTitle={"A Glimpse into Our Vibrant and Motivating Fitness Environment"} />
      <ImageGallery />
    </section>
    <section className="about__trainers">
      <SectionHeader title={"Meet Our Expert Trainers"} subTitle={"Certified Professionals Dedicated to Guiding You Every Step of the Way"}/>
      <TrainersList />
    </section>
</div>
  
             
  )
}

export default About