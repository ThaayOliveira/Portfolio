export function CircularText() {
  const text =
    " JAVA • C#/.NET • KOTLIN • PYTHON • NEXT.JS • TYPESCRIPT • AWS • DEVOPS • "

  return (
    <div className="relative w-64 h-64 hidden md:flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin"
        style={{ animationDuration: "18s" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
            fill="none"
          />
        </defs>

        <text
          fontSize="11"
          fontWeight="600"
          letterSpacing="1.5"
          fill="rgba(255, 255, 255, 0.75)"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}