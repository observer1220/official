import React from "react";

interface ServiceData {
  title: string;
  descriptions: string[];
}

interface ServiceListProps {
  services: ServiceData[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <section>
      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.title}</h3>
          <ul>
            {service.descriptions.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ServiceList;
