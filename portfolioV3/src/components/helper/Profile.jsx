export function Profile({
  name = "Bayanda Dlamini",
  position = "Front-end Developer",
  img = "profile.jpg",
}) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={img}
        alt="profile picture"
        className="w-14 h-14 rounded-full object-cover object-top border border-white/10 shadow-md"
      />
      <div className="text-white">
        <div className="text-sm font-roboto">{name}</div>
        <div className="text-xs text-white/70 font-quickSand">{position}</div>
      </div>
    </div>
  );
}
