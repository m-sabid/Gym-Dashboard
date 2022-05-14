const dateFun = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  return (today = dd + " " + mm + " " + yyyy );
};

export const FeedbackData = [
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
  {
    id: 1,
    img: "https://i.ibb.co/dBtyNVZ/feedback-User.png",
    userName: "Daniel",
    userType: "Member",
    date: dateFun(),
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quas saepe sunt! Magni, vero voluptatum quo provident nisi voluptas nesciunt?",
  },
];
