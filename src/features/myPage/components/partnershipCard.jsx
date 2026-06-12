import "./partnershipCard.css";

function PartnershipCard({ icon, title, iconType, onClick }) {
  return (
    <button className="partnership-card" onClick={onClick}>
      <div className="partnership-card-content">
        <img
          className={`partnership-card-icon ${iconType}`}
          src={icon}
          alt=""
        />
      </div>

      <span className="partnership-card-title">{title}</span>
    </button>
  );
}

export default PartnershipCard;