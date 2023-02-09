import useSound from "use-sound";
import { SlVolumeOff, SlVolume2 } from "react-icons/sl";
import { useSettingSound } from "../app/shard/SoundContext";

const SoundToggleButton = () => {
  const [sound, setSound] = useSettingSound();
  const [playVolumeUp] = useSound("/sounds/volumeUp.mp3", { volume: 0.4 });
  const [playMute] = useSound("/sounds/mute.mp3", { volume: 0.4 });

  const toggleSoundSetting = () => {
    if (sound === true) {
      setSound(false);
      playMute();
    } else {
      setSound(true);
      playVolumeUp();
    }
  };

  return (
    <div
      className="text-orange-400 dark:text-yellow-400 md:hover:scale-150 cursor-pointer 
       transition-all ease-in-out md:active:translate-y-3 px-1"
      onClick={toggleSoundSetting}
    >
      {sound ? <SlVolume2 size={25} /> : <SlVolumeOff size={25} />}
    </div>
  );
};

export default SoundToggleButton;
