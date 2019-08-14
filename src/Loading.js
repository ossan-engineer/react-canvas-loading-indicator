import React, { useEffect } from "react";
import "./Loading";

const Loading = () => {
  useEffect(() => {
    const stage = document.getElementById("stage");
    const WIDTH = stage.width; // 300
    const HEIGHT = stage.height; // 260
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

      // ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      // ctx.beginPath();
      // ctx.moveTo(-1000, 0);
      // ctx.lineTo(1000, 0);
      // ctx.stroke();
      // ctx.beginPath();
      // ctx.moveTo(0, -1000);
      // ctx.lineTo(0, 1000);
      // ctx.stroke();

      ctx.strokeStyle = "orange";
      ctx.lineWidth = 6;

      ctx.beginPath();
      ctx.moveTo(0, -INNER_RADIUS);
      ctx.lineTo(0, -OUTER_REDIUS);
      ctx.stroke();

      ctx.restore();
    };

    const update = () => {
      // ctx.clearRect(0, 0, WIDTH, HEIGHT);
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

  return <canvas width="300" height="260" id="stage" />;
};

export default Loading;
