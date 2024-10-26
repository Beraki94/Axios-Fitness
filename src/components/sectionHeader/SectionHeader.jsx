import './SectionHeader.css';

const SectionHeader = ({ subTitle, title }) => {
  return (
    <div className='section-header'>
      <span className='section-header__subtitle'>{subTitle}</span>
      <h2 className='section-header__title'>{title}</h2>
    </div>
  );
};

export default SectionHeader;
