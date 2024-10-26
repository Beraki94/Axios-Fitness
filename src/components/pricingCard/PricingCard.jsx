const PricingCard = ({ plan }) => {
  return (
    <div className="pricing__card">
      <h3 className="pricing__plan-name">{plan.name}</h3>
      <p className="pricing__plan-price">{plan.price}</p>
      <ul className="pricing__features">
        {plan.features.map((feature, index) => (
          <li className="pricing__feature-item" key={index}>{feature}</li>
        ))}
      </ul>
      <button className="pricing__button">Select Plan</button>
    </div>
  );
};

export default PricingCard;
