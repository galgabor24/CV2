import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://img.freepik.com/free-photo/futuristic-view-high-tech-earth-planet_23-2151100407.jpg?t=st=1732785117~exp=1732788717~hmac=ed49bfe4a0d6f90dbe872c43536397f73e8645872f6d0461f1f91f414b930a97&w=1380")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
    </>
  );
}
