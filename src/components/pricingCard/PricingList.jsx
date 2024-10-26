import PricingCard from '../../components/pricingCard/PricingCard';
import { plans } from '../../data';
import './Pricing.css';

const PricingList = () => {
  return (
    <div className="pricing__section">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default PricingList;
