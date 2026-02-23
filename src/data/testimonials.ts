export interface Testimonial {
  id: string;
  nameKey: string;
  roleKey: string;
  contentKey: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    nameKey: "name1",
    roleKey: "role1",
    contentKey: "content1",
    rating: 5,
    image: "/images/testimonials/patient-1.jpg",
  },
  {
    id: "2",
    nameKey: "name2",
    roleKey: "role2",
    contentKey: "content2",
    rating: 5,
    image: "/images/testimonials/patient-2.jpg",
  },
  {
    id: "3",
    nameKey: "name3",
    roleKey: "role3",
    contentKey: "content3",
    rating: 5,
    image: "/images/testimonials/patient-3.jpg",
  },
];
