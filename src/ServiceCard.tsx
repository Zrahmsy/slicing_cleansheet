import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, highlight }) => {
  return (
    <div
      style={{
        border: highlight ? "2px solid #2196f3" : undefined,
        background: highlight ? "#fff" : "#1565c0",
        color: highlight ? "#1565c0" : "#fff",
        borderRadius: 24,
        boxShadow: "0 2px 8px #e5e7eb",
        padding: 0,
        width: 320,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {highlight && (
          <div style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            background: "linear-gradient(0deg, #2196f3 60%, transparent 100%)",
            color: "#fff",
            padding: "12px 16px 8px 16px",
            fontWeight: 700,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span>Daily Cleaning</span>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#fff",
              color: "#2196f3",
              fontWeight: 700,
              fontSize: 18,
              boxShadow: "0 1px 4px #e5e7eb"
            }}>&rarr;</span>
          </div>
        )}
      </div>
      {!highlight && (
        <div style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{title}</div>
          <div style={{ fontSize: 15, marginBottom: 24 }}>{description}</div>
          <button style={{ background: "#fff", color: "#1565c0", border: "none", borderRadius: 12, padding: "8px 20px", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
            Lihat Detail
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard; 