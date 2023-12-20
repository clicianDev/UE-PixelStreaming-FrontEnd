// @ts-ignore
import BagIcon from './IC_Bag.png';
// @ts-ignore
import ChatIcon from './IC_Chat.PNG';
// @ts-ignore
import EmojiIcon from './IC_Emoji.PNG';
// @ts-ignore
import MapIcon from './IC_Map.PNG';
// @ts-ignore
import MicIcon from './IC_Mic.PNG';
// @ts-ignore
import MuteIcon from './IC_Mute.PNG';
// @ts-ignore
import SpacesIcon from './IC_Spaces.PNG';
// @ts-ignore
import ProfileIcon from './Profile.PNG';

export const  MenuIcons = {
    bag: BagIcon,
    chat: ChatIcon,
    emoji: EmojiIcon,
    map: MapIcon,
    mic: MicIcon,
    mute: MuteIcon,
    spaces: SpacesIcon,
    profile: ProfileIcon
} as const;

// Type definition for the icons object
export type IconKey = keyof typeof MenuIcons;
export type Icons = Record<IconKey, string>;