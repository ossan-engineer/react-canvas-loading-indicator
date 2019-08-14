import React, { useEffect } from "react";
import uuidv4 from "uuid/v4";

const Loading = ({ size = 300, color = "#bebebe" }) => {
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
      const OUTER_REDIUS = size / 5;
      const INNER_RADIUS = size / 6;

      ctx.save();
      ctx.translate(WIDTH / 2, HEIGHT / 2);
      ctx.rotate((Math.PI / 180) * angle);

      ctx.strokeStyle = color;
      ctx.lineWidth = size / 50;

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

  return (
    <canvas width={size} height={size} id={id} style={{ display: "block" }} />
  );
};

export default Loading;
