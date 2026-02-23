export interface Service {
  slug: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "joint-replacement",
    icon: "Bone",
    titleKey: "jointReplacement",
    descriptionKey: "jointReplacementDesc",
    image: "/images/services/joint-replacement.jpg",
  },
  {
    slug: "sports-medicine",
    icon: "Activity",
    titleKey: "sportsMedicine",
    descriptionKey: "sportsMedicineDesc",
    image: "/images/services/sports-medicine.jpg",
  },
  {
    slug: "spine-surgery",
    icon: "Spline",
    titleKey: "spineSurgery",
    descriptionKey: "spineSurgeryDesc",
    image: "/images/services/spine-surgery.jpg",
  },
  {
    slug: "arthroscopy",
    icon: "Microscope",
    titleKey: "arthroscopy",
    descriptionKey: "arthroscopyDesc",
    image: "/images/services/arthroscopy.jpg",
  },
  {
    slug: "fracture-care",
    icon: "Shield",
    titleKey: "fractureCare",
    descriptionKey: "fractureCareDesc",
    image: "/images/services/fracture-care.jpg",
  },
  {
    slug: "rehabilitation",
    icon: "HeartPulse",
    titleKey: "rehabilitation",
    descriptionKey: "rehabilitationDesc",
    image: "/images/services/rehabilitation.jpg",
  },
];
