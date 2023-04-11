import React from "react";
import "./videoFooter.css";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFootermusic__text">
                <p>{music}</p>
          </div>
          <img 
            className="videoFooter__music"
            alt="Imagem de melodia.png"
            src="https://cdn.pixabay.com/photo/2016/03/23/17/26/music-note-1275177_960_720.png"
          />
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
