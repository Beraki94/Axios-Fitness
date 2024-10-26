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
        title="EMPOWERING YOU TO BE YOUR BEST" 
        subTitle="Our Company Overview" 
      />
      <AboutHero />
    </section>

    <section className="about__services">
     <SectionHeader title={"WHAT WE DO"} subTitle={"Our range of fitness services"} />
     <GymServices />
    </section>
    <section className="about__gallery">
      <SectionHeader title={"TAKE A TOUR"} subTitle={"Our Outstanding training Facilties"} />
      <ImageGallery />
    </section>
    <section className="about__trainers">
      <SectionHeader title={"TAKE A TOUR"} subTitle={"Our Outstanding training Facilties"}/>
      <TrainersList />
    </section>
</div>
  
             
  )
}

export default About