import { useState } from "react";
import { musicListData } from "../musicData.json";

export function useMusicList() {
  const [value, setValue] = useState([...Object.values(musicListData)]);
  return { musicList: value, setMusicList: setValue };
}
