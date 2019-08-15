import React, { useEffect, useRef } from "react";

const Loading = ({ size = 300, color = "#bebebe" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const WIDTH = size;
    const HEIGHT = size;
    let angle = 0;
    const canvas = canvasRef.current;

    if (typeof canvas.getContext === undefined) {
      return;
    }

    const ctx = canvas.getContext("2d");

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
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
};

export default Loading;
