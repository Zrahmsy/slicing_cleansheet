import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const team = [
  { name: "Arto Biantoro", role: "Advisor", image: "/team-person1.svg" },
  { name: "Shahnaz Haque", role: "Brand Ambassador", image: "/team-person2.svg" },
  { name: "Dhiqon Nadaamist", role: "CEO", image: "/team-person3.svg" },
  { name: "Sirojul Abidin", role: "Co-Founder", image: "/team-person4.svg" },
  { name: "Faisal", role: "Co-Founder", image: "/team-person5.svg" },
];

const TeamSection = () => (
  <section style={{ background: 'linear-gradient(180deg, #1565c0 0%, #f8fafc 60%)', padding: '72px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', color: '#fff', fontSize: 16, letterSpacing: 1, marginBottom: 8 }}>TIM KAMI</div>
      <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: '#fff', marginBottom: 32 }}>
        Bertemu dengan tim hebat Kami
      </h2>
      <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
        <div style={{ display: 'flex', gap: 32, minWidth: 600 }}>
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection; 