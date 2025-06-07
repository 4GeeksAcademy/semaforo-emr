import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

	// Para seleccionar el estado del color actual

	const [color, setColor] = useState("red");

	// Array para crear el botón que cambie de color

	const [colors, setColors] = useState(["red", "yellow", "green"]);

	// Función para cambiar de color

	const nextColor = () => {
		const currentIndex = colors.indexOf(color);
		const nextIndex = (currentIndex + 1) % colors.length;
		setColor (colors[nextIndex]);
	};

	// Función para añadir el morado

	const addPurple = () => {
		if (!colors.includes("purple")){
			setColors([...colors,"purple"]);
		}
	};

	return (
	<div className="traffic-master">
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "shining" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
	   <div className="buttons btn btn-dark">
        <button className="btn btn-light" onClick={nextColor}>Otro color</button>
        <button className="btn btn-light" onClick={addPurple}>¡Quiero morado!</button>
      </div>
    </div>
  );
};


export default Home;