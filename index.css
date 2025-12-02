@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 210 15% 20%;

    --card: 0 0% 100%;
    --card-foreground: 210 15% 20%;

    --popover: 0 0% 100%;
    --popover-foreground: 210 15% 20%;

    /* Fresh teal primary - cleanliness & trust */
    --primary: 185 75% 45%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 185 75% 65%;

    /* Warm accent for CTAs */
    --secondary: 30 95% 55%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 20% 96%;
    --muted-foreground: 210 15% 50%;

    --accent: 185 75% 95%;
    --accent-foreground: 185 75% 25%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 210 20% 88%;
    --input: 210 20% 88%;
    --ring: 185 75% 45%;

    --radius: 0.75rem;
    
    /* Custom gradients */
    --gradient-primary: linear-gradient(135deg, hsl(185 75% 45%), hsl(185 75% 60%));
    --gradient-hero: linear-gradient(135deg, hsl(185 75% 45%), hsl(185 75% 35%));
    --gradient-accent: linear-gradient(135deg, hsl(30 95% 55%), hsl(30 95% 65%));
    
    /* Shadows */
    --shadow-sm: 0 2px 8px hsl(210 15% 20% / 0.08);
    --shadow-md: 0 4px 16px hsl(210 15% 20% / 0.12);
    --shadow-lg: 0 8px 32px hsl(210 15% 20% / 0.16);
    --shadow-glow: 0 0 40px hsl(185 75% 65% / 0.3);
    
    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 210 25% 8%;
    --foreground: 210 10% 95%;

    --card: 210 20% 12%;
    --card-foreground: 210 10% 95%;

    --popover: 210 20% 12%;
    --popover-foreground: 210 10% 95%;

    --primary: 185 75% 55%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 185 75% 70%;

    --secondary: 30 95% 60%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 20% 18%;
    --muted-foreground: 210 10% 65%;

    --accent: 185 75% 20%;
    --accent-foreground: 185 75% 85%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 210 20% 20%;
    --input: 210 20% 20%;
    --ring: 185 75% 55%;
    
    --shadow-sm: 0 2px 8px hsl(0 0% 0% / 0.3);
    --shadow-md: 0 4px 16px hsl(0 0% 0% / 0.4);
    --shadow-lg: 0 8px 32px hsl(0 0% 0% / 0.5);
    --shadow-glow: 0 0 40px hsl(185 75% 55% / 0.4);
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "kern" 1, "liga" 1;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight;
  }
  
  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }
  
  h2 {
    @apply text-3xl md:text-4xl lg:text-5xl;
  }
  
  h3 {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
