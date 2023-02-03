import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import useSound from "use-sound";
import { useSettingSound } from "../app/shard/SoundContext";

const SoundToggleButton = () => {
  const [sound, setSound] = useSettingSound();
  const [playVolumeUp] = useSound("/sounds/volumeUp2.mp3", { volume: 0.5 });
  const [playMute] = useSound("/sounds/mute2.mp3", { volume: 0.6 });

  const toggleSoundSetting = () => {
    if (sound === true) {
      playMute();
      setSound(false);
    } else {
      playVolumeUp();
      setSound(true);
    }
  };

  return (
    <div
      className="text-orange-400 dark:text-[#FFDC85] md:hover:scale-150 cursor-pointer 
       transition-all ease-in-out md:active:translate-y-3"
      onClick={toggleSoundSetting}
    >
      {sound ? <CiVolumeHigh size={30} /> : <CiVolumeMute size={30} />}
    </div>
  );
};

export default SoundToggleButton;
