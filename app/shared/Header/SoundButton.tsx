import useSound from "use-sound";

const BoopButton = () => {
  const [play] = useSound("../../../public/sounds/bulb.mp3");

  return <button onClick={play}>Boop!</button>;
};
