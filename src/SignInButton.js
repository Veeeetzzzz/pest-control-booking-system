function SignInButton({ handleLogin }) {
  return (
    <button 
      className="btn w-full h-12 mb-4 rounded-lg overflow-hidden p-0 relative cursor-pointer transition-colors duration-150 ease-in-out hover:bg-blue-600 focus:outline-none"
      onClick={() => handleLogin("popup")}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleLogin("popup") }}
      tabIndex="0"
      role="button"
      aria-pressed="false"
      style={{ lineHeight: "0" }} // Removes the extra space around the image
    >
      <img
        src="/images/ms-symbollockup_signin_light.png"
        alt="Sign in with Microsoft"
        className="w-full h-full"
        style={{ objectFit: "cover" }} // Ensures the image covers the button area without stretching
      />
    </button>
  );
}

export default SignInButton;
