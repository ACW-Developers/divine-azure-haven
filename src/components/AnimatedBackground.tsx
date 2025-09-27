import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-pulse-slow blur-lg" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/10 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/5 rounded-full animate-pulse-slow blur-md" style={{ animationDelay: '2s' }} />
      
      {/* Morphing background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient-morph" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
      <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-accent/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

export default AnimatedBackground;