import React, { useState } from "react";
import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
function Edit({ setIsEdit }) {
  const avatarUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
  ];
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [color, setColor] = useState(user.color);
  const [img, setImg] = useState(user.avaUrl);
  const [isSelectIMG, setIsSelectIMG] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, age, about, img);
    setIsEdit(false);
    const updateData = {
      name: username,
      age: age,
      about: about,
      color: color,
      avaUrl: img,
    };
    dispatch(update(updateData));
  };

  return (
    <div className="text-white flex justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 px-9 rounded my-5">
        <div className="exit flex justify-end">
          <button className="border rounded-lg px-3 py-2 mt-2 font-bold bg-gray-900 hover:bg-gray-800 transition">
            Save
          </button>
        </div>
        <div className="container w-[400px]">
          <h2 className="text-[28px] text-center my-3">Edit Profile</h2>
          <InputField
            type={"text"}
            labelName={"Username"}
            place_Name={"Lucas Nguyen"}
            setData={setUsername}
            data={username}
          />
          <InputField
            type={"number"}
            labelName={"Age"}
            place_Name={"20"}
            setData={setAge}
            data={age}
          />
          <InputField
            isTextarea={true}
            type={"text"}
            labelName={"About"}
            place_Name={"About your hobbies"}
            data={about}
            setData={setAbout}
          />
          <InputField type={"color"} setData={setColor} />
          <div className="select-img flex flex-wrap justify-between mt-6 "></div>
          {avatarUrl.map((url, i) => {
            return (
              <div
                key={i}
                className="w-[30%] h-[30%] inline-block mx-1 cursor-pointer"
                onClick={() => {
                  setImg(url);
                  setIsSelectIMG(url);
                }}
              >
                <img
                  src={url}
                  alt=""
                  className={`w-[80px] h-[130px] select-none object-cover ${
                    isSelectIMG === url ? "scale-125 bg-white rounded" : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Edit;
