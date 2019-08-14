import React, { useEffect } from "react";
import uuidv4 from "uuid/v4";
import "./Loading";

const Loading = () => {
  const id = uuidv4();

  useEffect(() => {
    const stage = document.getElementById(id);
    const WIDTH = stage.width;
    const HEIGHT = stage.height;
    let angle = 0;

    if (typeof stage.getContext === undefined) {
      return;
    }

    const ctx = stage.getContext("2d");

    const draw = () => {
      const OUTER_REDIUS = 60;
      const INNER_RADIUS = 50;

      ctx.save();
      ctx.translate(WIDTH / 2, HEIGHT / 2);
      ctx.rotate((Math.PI / 180) * angle);

      ctx.strokeStyle = "orange";
      ctx.lineWidth = 6;

      ctx.beginPath();
      ctx.moveTo(0, -INNER_RADIUS);
      ctx.lineTo(0, -OUTER_REDIUS);
      ctx.stroke();

      ctx.restore();
    };

    const update = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      draw();
      angle += 12;
      setTimeout(() => {
        update();
      }, 60);
    };

    update();
  });

  return <canvas width="300" height="260" id={id} />;
};

export default Loading;
