import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://img.freepik.com/free-photo/workplace-office-with-laptop-coffee-dark-room-night_169016-47422.jpg?t=st=1732788287~exp=1732791887~hmac=7392526646e3ae3bb283ff82d7b0e59cd43748740f542ba9e1ad5486d75ab58e&w=1380")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
    </>
  );
}
