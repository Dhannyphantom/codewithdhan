import { nanoid } from "nanoid";
import "./Profile.css";
import me from "../../assets/me.png";
import Experience from "../Experience/Experience";

const leftExperienceArr = [
  {
    id: nanoid(),
    title: "biography",
    list: false,
    content:
      "A self taught software developer who is very passionate about programming and tech in general",
  },
  {
    id: nanoid(),
    title: "contact",
    list: false,
    content: `Kogi, Nigeria. olojodhanny@gmail.com. +234 708 171 3909`,
  },
  {
    id: nanoid(),
    title: "services",
    list: true,
    content:
      "Mobile App Development. Backend development. Web Development. Blockchain development. UI/UX Designer",
  },
];
const rightExperienceArr = [
  {
    id: nanoid(),
    title: "years of experience",
    content: "3",
  },
  {
    id: nanoid(),
    title: "clients satisfaction",
    content: "99.9%",
  },
  {
    id: nanoid(),
    title: "languages & tech",
    content: "+15",
  },
  {
    id: nanoid(),
    title: "projects done",
    content: "5",
  },
];

export default function Profile() {
  const leftExperienceElements = leftExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "left" }} />
  ));
  const rightExperienceElements = rightExperienceArr.map((obj) => (
    <Experience key={obj.id} item={{ ...obj, direction: "right" }} />
  ));
  return (
    <section className="profile-section">
      <div className="experiences">{leftExperienceElements}</div>
      <div className="border">
        <div className="pic-container">
          <img src={me} alt="" className="pic" />
        </div>
      </div>
      <div className="experiences">{rightExperienceElements}</div>
    </section>
  );
}
