export function CircularText() {
  const text = " JAVA • TYPESCRIPT • NEXT.JS • C# • PHP • REACT • NODE.JS •"
  const characters = text.split("")

  return (
    <div className="relative w-44 h-44 hidden md:flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin"
        style={{ animationDuration: "10s" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            fill="none"
          />
        </defs>
        <text
          fontSize="12"
          fontWeight="bold"
          letterSpacing="2"
          className="fill-muted-foreground"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
