import React, { useEffect, useRef } from "react";

const Loading = ({ size = 300, color = "#bebebe" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const width = size;
    const height = size;
    let angle = 0;

    if (typeof canvas.getContext === undefined) {
      return;
    }

    const ctx = canvas.getContext("2d");

    const draw = () => {
      const outerRadius = size / 5;
      const innerRadius = size / 6;

      ctx.save();
      ctx.translate(width / 2, height / 2);

      ctx.strokeStyle = color;
      ctx.lineWidth = size / 50;

      ctx.beginPath();
      ctx.moveTo(
        innerRadius * Math.cos((Math.PI / 180) * angle),
        innerRadius * Math.sin((Math.PI / 180) * angle)
      );
      ctx.lineTo(
        outerRadius * Math.cos((Math.PI / 180) * angle),
        outerRadius * Math.sin((Math.PI / 180) * angle)
      );
      ctx.stroke();

      ctx.restore();
    };

    const update = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(0, 0, width, height);
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
