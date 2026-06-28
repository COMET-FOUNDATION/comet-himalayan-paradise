export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  content: string;
  rating: number;
  trek?: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Delhi",
    role: "Software Engineer",
    content:
      "The Khaliya Top trek with CHP was genuinely life-changing. The sunrise over Panchachuli—five peaks glowing in gold—is something I will carry with me forever. The guides were knowledgeable, patient, and deeply passionate about the mountains. Cannot recommend enough.",
    rating: 5,
    trek: "Khaliya Top Trek",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: "2",
    name: "Rahul Verma",
    location: "Bengaluru",
    role: "Product Designer",
    content:
      "Our family camp (kids aged 8 and 12) was an absolute joy. The team handled every detail—from the campfire evenings to the morning nature walks. My children learnt more about ecology in three days than in a year of school. Magical experience.",
    rating: 5,
    trek: "Holiday Camp",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: "3",
    name: "Sarah Mitchell",
    location: "London, UK",
    role: "Travel Writer",
    content:
      "I have trekked in Nepal, Bhutan, and Ladakh—but CHP's Panchachuli Base Camp exceeded all of them for raw beauty and authentic experience. The Darma Valley culture is unique, and the team's commitment to responsible tourism was deeply impressive.",
    rating: 5,
    trek: "Panchachuli Base Camp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: "4",
    name: "Arjun Nair",
    location: "Mumbai",
    role: "Corporate Consultant",
    content:
      "Our corporate team of 22 people did the Ramganga River Camp. The logistics were flawless, the food was outstanding, and the team-building activities in nature were far more effective than any boardroom exercise. Already planning our next group trip.",
    rating: 5,
    trek: "Ramganga River Camp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: "5",
    name: "Meera Pillai",
    location: "Hyderabad",
    role: "Yoga Instructor",
    content:
      "The morning yoga sessions with the Panchachuli range as a backdrop were transcendental. The team understood that wellness travel is about depth, not just activities. The silence, the air, the food—everything worked in harmony. I'll be back.",
    rating: 5,
    trek: "Wellness Retreat",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
  {
    id: "6",
    name: "James Thompson",
    location: "Sydney, Australia",
    role: "Wildlife Photographer",
    content:
      "The bird discovery walks and night safari delivered beyond my expectations. I photographed the Himalayan Monal and got my first ever shot of a common leopard at night. The naturalists were world-class—encyclopaedic knowledge delivered with genuine love.",
    rating: 5,
    trek: "Bird Discovery & Night Safari",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop&crop=faces",
  },
];
