import React from "react";

const Main = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg" // Default image URL
  });

  const [text, setText] = React.useState({
    topText: "",
    bottomText: ""
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setText((prevText) => ({
      ...prevText,
      [name]: value
    }));
  }

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    
    // Update the meme with the new image and the text from the input fields
    setMeme({
      topText: text.topText,
      bottomText: text.bottomText,
      imageUrl: newMemeUrl
    });
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={text.topText} // Use text for the input fields
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={text.bottomText} // Use text for the input fields
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
