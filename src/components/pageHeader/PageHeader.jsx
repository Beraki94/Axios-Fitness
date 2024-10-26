import './PageHeader.css';

const PageHeader = ({ title, subTitle, image, children, textAlign = "center" }) => {
  return (
    <header className="page-header">
      <img className="page-header__image" src={image} alt={`${title} header background`} />
      <div className="page-header__overlay">
        <div className={`page-header__content page-header__content--${textAlign}`}>
          <h2 className="page-header__title">{title}</h2>
          {subTitle && <h3 className="page-header__subtitle">{subTitle}</h3>}
          <p className="page-header__description">{children}</p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
